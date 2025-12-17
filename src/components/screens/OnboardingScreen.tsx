import React from 'react';

interface OnboardingScreenProps {
    onStart: () => void;
    onBack: () => void;
}

export const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ onStart, onBack }) => {
    return (
        <div className="onboarding-screen" style={{ width: '100%' }}>
            <h2 style={{
                fontSize: '24px',
                marginBottom: '20px',
                color: 'var(--color-neon-blue)',
                textAlign: 'center'
            }}>
                Как играть?
            </h2>

            <div style={{ fontSize: '15px', lineHeight: '1.6', color: '#ddd', marginBottom: '32px' }}>
                <p style={{ marginBottom: '16px' }}>
                    В этой игре каждый выбор может быть опасен.
                    На каждом этапе тебе будут предложены <strong>три варианта действий</strong>:
                </p>
                <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
                    <li style={{ marginBottom: '8px' }}><span style={{ color: 'var(--color-neon-red)' }}>Опасный</span> (ловушка — ошибка!)</li>
                    <li style={{ marginBottom: '8px' }}><span style={{ color: 'var(--color-neon-green)' }}>Безопасный</span> (можно нажимать)</li>
                    <li><span style={{ color: '#aaa' }}>Пассивный</span> (ничего не делает)</li>
                </ul>

                <p style={{ marginBottom: '10px' }}>Ловушки могут зависеть от:</p>
                <ul style={{ paddingLeft: '20px', marginBottom: '16px', color: '#aaa' }}>
                    <li>⏱ Времени нажатия</li>
                    <li>🔢 Порядка действий</li>
                    <li>🎨 Цвета кнопки</li>
                    <li>🤐 Игнорирования действия</li>
                </ul>

                <p>Подсказки на опасный вариант спрятаны в тексте. Внимательность — ключ к успеху! 🍀</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
                <button onClick={onStart} style={{
                    padding: '16px 32px',
                    background: 'var(--color-neon-blue)',
                    color: '#000',
                    borderRadius: '12px',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    width: '100%',
                    maxWidth: '300px'
                }}>
                    Понятно, начать
                </button>

                <button onClick={onBack} style={{
                    padding: '16px 32px',
                    background: 'transparent',
                    color: '#888',
                    borderRadius: '12px',
                    fontSize: '16px',
                    width: '100%',
                    maxWidth: '300px'
                }}>
                    Назад
                </button>
            </div>
        </div>
    );
};
