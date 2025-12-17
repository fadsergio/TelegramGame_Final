import React from 'react';

interface GameLayoutProps {
    children: React.ReactNode;
    levelTitle?: string;
    lives: number;
}

export const GameLayout: React.FC<GameLayoutProps> = ({ children, levelTitle, lives }) => {
    return (
        <div className="game-container" style={{
            width: '100%',
            height: '100vh',
            maxWidth: '600px',
            margin: '0 auto',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        }}>
            <header style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                right: '20px',
                display: 'flex',
                justifyContent: 'space-between',
                color: 'var(--color-text-dim)',
                fontSize: 'var(--font-size-sm)',
                zIndex: 10
            }}>
                <span>{levelTitle || 'Unknown Level'}</span>
                <span>Lives: {lives}</span>
            </header>

            <main className="glass-panel" style={{
                padding: '32px',
                minHeight: '400px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {children}
            </main>

            <footer style={{
                marginTop: '20px',
                textAlign: 'center',
                color: 'rgba(255,255,255,0.2)',
                fontSize: '10px'
            }}>
                Telegram Mini-Game: Mistake
            </footer>
        </div>
    );
};
