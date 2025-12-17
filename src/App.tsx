import { useState, useEffect } from 'react';
import { levels } from './engine/levels';
import { useGameLogic } from './engine/useGameLogic';
import { GameLayout } from './components/GameLayout';
import { StageView } from './components/StageView';
import { FeedbackOverlay } from './components/FeedbackOverlay';
import { WelcomeScreen } from './components/screens/WelcomeScreen';
import { OnboardingScreen } from './components/screens/OnboardingScreen';
import { TipScreen } from './components/screens/TipScreen';
import './index.css';

// Declare Telegram types globally
declare global {
  interface Window {
    Telegram: {
      WebApp: {
        ready: () => void;
        expand: () => void;
        close: () => void;
      };
    };
  }
}

type ScreenState = 'welcome' | 'onboarding' | 'tip' | 'game';

function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenState>('welcome');
  const [currentLevelId, setCurrentLevelId] = useState(1);

  useEffect(() => {
    // Initialize Telegram Web App
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.ready();
      window.Telegram.WebApp.expand();
    }
  }, []);

  // Find current level data
  const levelData = levels.find(l => l.id === currentLevelId) || levels[0];

  // Screen transitions
  const goWelcome = () => setCurrentScreen('welcome');
  const goOnboarding = () => setCurrentScreen('onboarding');
  const goTip = () => setCurrentScreen('tip'); // Tip before level 1
  const goGame = () => setCurrentScreen('game');

  // Logic to handle "Next Level" or "Retry Game"
  const handleGameComplete = () => {
    setCurrentScreen('welcome');
    setCurrentLevelId(1);
  };

  return (
    <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <main className="glass-panel" style={{
        width: '100%',
        maxWidth: '600px',
        minHeight: '100vh', // Mobile feel
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '24px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {currentScreen === 'welcome' && (
          <WelcomeScreen
            onStart={goTip} // "Start Game" -> Tip first
            onHowTo={goOnboarding}
          />
        )}

        {currentScreen === 'onboarding' && (
          <OnboardingScreen
            onStart={goTip} // "Got it, start" -> Tip
            onBack={goWelcome}
          />
        )}

        {currentScreen === 'tip' && (
          <TipScreen
            onContinue={goGame}
          />
        )}

        {currentScreen === 'game' && (
          <GameSession
            level={levelData}
            onNextLevel={() => {
              const nextId = currentLevelId + 1;
              if (levels.find(l => l.id === nextId)) {
                setCurrentLevelId(nextId);
                // If we want a tip between levels, we could do that, but for now just next level
              } else {
                handleGameComplete();
              }
            }}
            onGameEnd={handleGameComplete} // Passed to allow "Back to Start" from complete screen
          />
        )}
      </main>
    </div>
  );
}

// Sub-component to enforce hook recreation on level change
function GameSession({ level, onNextLevel, onGameEnd }: { level: typeof levels[0], onNextLevel: () => void, onGameEnd: () => void }) {
  const { gameState, currentStage, handleAction, resetStage } = useGameLogic(level);
  const isLastLevel = level.id === levels.length;

  return (
    <GameLayout levelTitle={`${level.id}. ${level.title}`} lives={gameState.lives}>
      {/* Game Content */}
      <StageView
        stage={currentStage}
        onAction={handleAction}
      />

      {/* Overlays */}
      {gameState.status === 'failed' && (
        <FeedbackOverlay
          status="failed"
          message="Вы ошиблись!"
          onRetry={resetStage}
        />
      )}

      {gameState.status === 'level-complete' && (
        <FeedbackOverlay
          status={isLastLevel ? 'game-complete' : 'level-complete'}
          message={isLastLevel ? "Вы прошли все уровни!" : "Уровень пройден!"}
          onNext={isLastLevel ? onGameEnd : onNextLevel}
        />
      )}
    </GameLayout>
  );
}

export default App;
