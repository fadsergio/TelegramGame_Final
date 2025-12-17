import React from 'react';

interface WelcomeScreenProps {
    onStart: () => void;
    onHowTo: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart, onHowTo }) => {
    return (
        <div className="welcome-screen" style={{ width: '100%', textAlign: 'center' }}>
            <h1 className="text-gradient" style={{
                fontSize: '32px',
                marginBottom: '16px',
                fontWeight: '900',
                textTransform: 'uppercase',
                letterSpacing: '1px'
            }}>
                Ты ошибся!
            </h1>

            <p style={{
                color: '#ccc',
                fontSize: '16px',
                lineHeight: '1.5',
                marginBottom: '32px'
            }}>
                Привет! Добро пожаловать в игру "Ты ошибся!" 🎭<br />
                Здесь нет правильных ответов — только ловушки, опасные выборы и тонкая игра разума.<br />
                Готов испытать свою внимательность и рассудок?
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
                <button onClick={onStart} style={{
                    padding: '16px 32px',
                    background: 'var(--color-neon-blue)',
                    color: '#000',
                    borderRadius: '12px',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    width: '100%',
                    maxWidth: '300px',
                    boxShadow: '0 0 20px rgba(0, 243, 255, 0.4)'
                }}>
                    Начать игру
                </button>

                <button onClick={onHowTo} style={{
                    padding: '16px 32px',
                    background: 'rgba(255,255,255,0.1)',
                    color: '#fff',
                    borderRadius: '12px',
                    fontSize: '16px',
                    width: '100%',
                    maxWidth: '300px',
                    border: '1px solid rgba(255,255,255,0.2)'
                }}>
                    Как играть?
                </button>
            </div>
        </div>
    );
};
