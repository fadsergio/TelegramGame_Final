import React from 'react';

interface TipScreenProps {
    onContinue: () => void;
}

export const TipScreen: React.FC<TipScreenProps> = ({ onContinue }) => {
    return (
        <div className="tip-screen" style={{ width: '100%', textAlign: 'center' }}>
            <div style={{
                fontSize: '48px',
                marginBottom: '20px'
            }}>💡</div>

            <h2 style={{
                fontSize: '24px',
                marginBottom: '20px',
                color: 'var(--color-neon-yellow)'
            }}>
                Совет новичку
            </h2>

            <p style={{
                fontSize: '16px',
                lineHeight: '1.6',
                marginBottom: '40px',
                color: '#ddd'
            }}>
                Читай тексты внимательно — они скрывают подсказки о ловушках.<br />
                Иногда нужно ждать, иногда — нажимать быстро.<br /><br />
                <strong>Не доверяй глазам полностью! 👀</strong>
            </p>

            <button onClick={onContinue} style={{
                padding: '16px 32px',
                background: 'var(--color-neon-yellow)',
                color: '#000',
                borderRadius: '12px',
                fontSize: '18px',
                fontWeight: 'bold',
                width: '100%',
                maxWidth: '300px',
                boxShadow: '0 0 20px rgba(250, 255, 0, 0.4)'
            }}>
                Понятно
            </button>
        </div>
    );
};
