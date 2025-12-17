import React from 'react';

interface FeedbackOverlayProps {
    status: 'failed' | 'level-complete' | 'game-complete';
    message?: string;
    onRetry?: () => void;
    onNext?: () => void;
}

export const FeedbackOverlay: React.FC<FeedbackOverlayProps> = ({ status, message, onRetry, onNext }) => {
    const isFailed = status === 'failed';
    const isComplete = status === 'level-complete';
    const isGameComplete = status === 'game-complete';

    return (
        <div className="feedback-overlay glass-panel" style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 100,
            background: 'rgba(0,0,0,0.8)',
            backdropFilter: 'blur(20px)',
            animation: 'fadeIn 0.3s ease'
        }}>
            <h2 style={{
                fontSize: '32px',
                color: isFailed ? 'var(--color-neon-red)' : 'var(--color-neon-green)',
                marginBottom: '16px',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                textShadow: isFailed ? '0 0 10px rgba(255,0,60,0.5)' : '0 0 10px rgba(0,255,102,0.5)'
            }}>
                {isFailed ? 'ТЫ ОШИБСЯ!' : isGameComplete ? 'ПОБЕДА!' : 'УРОВЕНЬ ПРОЙДЕН'}
            </h2>

            {message && <p style={{ color: '#ccc', marginBottom: '32px', textAlign: 'center', maxWidth: '80%' }}>{message}</p>}

            <div style={{ display: 'flex', gap: '16px' }}>
                {isFailed && onRetry && (
                    <button onClick={onRetry} style={{
                        padding: '12px 24px',
                        background: 'var(--color-neon-red)',
                        color: '#fff',
                        borderRadius: '8px',
                        fontWeight: 'bold',
                        textTransform: 'uppercase'
                    }}>
                        Попробовать снова
                    </button>
                )}

                {(isComplete || isGameComplete) && onNext && (
                    <button onClick={onNext} style={{
                        padding: '12px 24px',
                        background: 'var(--color-neon-green)',
                        color: '#000',
                        borderRadius: '8px',
                        fontWeight: 'bold',
                        textTransform: 'uppercase'
                    }}>
                        {isGameComplete ? 'В начало' : 'Дальше'}
                    </button>
                )}
            </div>
        </div>
    );
};
