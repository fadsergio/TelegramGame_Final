import { useState, useCallback } from 'react';
import type { Level, ButtonConfig, GameState } from './types';

export const useGameLogic = (level: Level) => {
    const [gameState, setGameState] = useState<GameState>({
        currentLevelIndex: level.id - 1,
        currentStageIndex: 0,
        lives: 1,
        status: 'playing',
        startTime: Date.now(),
        clickHistory: [],
    });

    const currentStage = level.stages[gameState.currentStageIndex];

    const resetStage = useCallback(() => {
        setGameState(prev => ({
            ...prev,
            startTime: Date.now(),
            clickHistory: [],
            status: 'playing',
        }));
    }, []);

    const failStage = useCallback((reason: string) => {
        setGameState(prev => ({ ...prev, status: 'failed' }));
        console.log(`Failed: ${reason}`); // For debug or toast
    }, []);

    const nextStage = useCallback(() => {
        if (gameState.currentStageIndex + 1 < level.stages.length) {
            setGameState(prev => ({
                ...prev,
                currentStageIndex: prev.currentStageIndex + 1,
                startTime: Date.now(),
                clickHistory: [],
            }));
        } else {
            setGameState(prev => ({ ...prev, status: 'level-complete' }));
        }
    }, [gameState.currentStageIndex, level.stages.length]);

    const handleAction = useCallback((button: ButtonConfig) => {
        if (gameState.status !== 'playing') return;

        // Passive buttons do nothing (no fail, no progress, no sequence effect)
        if (button.type === 'passive') return;

        const timeElapsed = Date.now() - gameState.startTime;
        const timeElapsedSec = timeElapsed / 1000;

        // 1. Check TRAP Conditions
        if (button.trapCondition) {
            const { type, value } = button.trapCondition;

            let isTrapTriggered = false;

            if (type === 'time_less_than' && typeof value === 'number') {
                if (timeElapsedSec < value) isTrapTriggered = true;
            } else if (type === 'time_greater_than' && typeof value === 'number') {
                if (timeElapsedSec > value) isTrapTriggered = true;
            }

            // If it's a SEQUENCE button, we don't fail immediately unless it's out of order
            // But if it's a Trap Sequence (e.g. "Don't press this first"), we check history?
            // Simplified: If "trapCondition" is met, it is DANGEROUS.

            if (isTrapTriggered) {
                failStage(`Trap triggered: ${button.text}`);
                return;
            }
        }

        // 2. Base Type Check
        // If button is functionally "Danger" (always trap)
        if (button.type === 'danger') {
            // Unless conditions saved it? (Not in requirements check "trapCondition" is usually "becomes trap if")
            // Let's assume 'danger' is ALWAYS danger unless condition says otherwise? 
            // Re-reading prompt: "Кнопки: опасная... безопасная... пассивная".
            // "Ловушки могут зависеть от времени". 
            // Implementation: If button IS 'danger' OR (trapCondition met), then FAIL.
            // But careful: "Danger (<5s)" means SAFE (>5s).
            // So if type is 'danger' AND it has a condition, it means "Danger IF condition".
            // If type is 'danger' with NO condition, it is ALWAYS danger.

            const hasCondition = !!button.trapCondition;
            if (!hasCondition) {
                failStage(button.failMessage || 'Dangerous action!');
                return;
            }
            // If it has condition, we ALREADY checked if isTrapTriggered.
            // If we are here, isTrapTriggered is FALSE.
            // So if it was "Danger (<5s)" and we are >5s, is it Safe?
            // Usually yes. So we proceed.
        }

        // 3. Sequence Logic
        if (currentStage.requiredSequence) {
            const newHistory = [...gameState.clickHistory, button.id];
            setGameState(prev => ({ ...prev, clickHistory: newHistory }));

            // Check if newHistory matches prefix of required
            const isMatch = newHistory.every((val, index) => val === currentStage.requiredSequence![index]);

            if (!isMatch) {
                failStage('Wrong sequence!');
                return;
            }

            // If full match
            if (newHistory.length === currentStage.requiredSequence.length) {
                nextStage();
                return;
            }
            // If partial match, continue (do nothing, waiting for next click)
            return;
        }

        // 4. Standard Safe/Passive
        if (button.type === 'safe' || (button.type === 'danger' && button.trapCondition)) {
            // If it was "Danger (<5s)" and we survived, it acts as Safe? or just Passive?
            // Prompt: "Danger (<5s), Safe (Wait)". 
            // If I click "Danger (<5s)" at 6s, what happens?
            // Usually it's either "Pass Stage" or "Nothing".
            // Let's assume Safe = Next Stage, Passive = Nothing.
            // The dangerous button, if avoided, doesn't necessarily advance stage.
            // Usually there is a SPECIFIC "Safe" button to advance.

            // However, often "Clicking the wrong thing at the right time" might be the solution.
            // Let's stick to: Type 'safe' -> nextStage. 
            // Type 'danger' (untripped) -> does it advance? Probably not, unless it's the only way.
            // Prompt Level 6: "Too fast is dangerous... Button: Push(Danger <3s)".
            // If I wait and push >3s, is it safe? Prompt doesn't say "Safe", it says "Wait (Safe)".
            // Actually Level 6.1: Push (Danger <3s), Wait (Safe), Skip (Safe).
            // If I push >3s, it's not listed as Safe.

            // Conclusion: Only buttons explicitly marked 'safe' (or base type safe) advance level.
            // 'danger' (untripped) acts as Passive? Or maybe Safe?
            // Let's make it: 'safe' -> Next. 'danger' -> Passive (if untripped). 'passive' -> Passive.

            if (button.type === 'safe') {
                nextStage();
            }
        }

    }, [gameState, currentStage, failStage, nextStage]);

    return {
        gameState,
        currentStage,
        handleAction,
        resetStage
    };
};
