import React from 'react';
import type { Stage, ButtonConfig } from '../engine/types';

interface StageViewProps {
    stage: Stage;
    onAction: (btn: ButtonConfig) => void;
}

export const StageView: React.FC<StageViewProps> = ({ stage, onAction }) => {
    return (
        <div className="stage-view" style={{ width: '100%', textAlign: 'center' }}>
            <h2 className="fade-in" style={{
                marginBottom: '40px',
                fontSize: '24px',
                lineHeight: '1.4',
                minHeight: '60px', // Prevent layout shift
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {stage.text}
            </h2>

            <div className="buttons-grid" style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                width: '100%'
            }}>
                {stage.buttons.map((btn) => (
                    <button
                        key={btn.id}
                        onClick={() => onAction(btn)}
                        className="action-button" // We will define this in index.css
                        style={{
                            padding: '16px',
                            borderRadius: '12px',
                            border: '1px solid rgba(255,255,255,0.1)',
                            // background set dynamically below
                            color: 'var(--color-text)',
                            fontSize: '16px',
                            transition: 'all 0.2s ease',
                            // Dynamic coloring if specified, otherwise default to neon blue (safe/neutral)
                            borderColor: btn.color === 'red' ? 'var(--color-neon-red)' :
                                btn.color === 'blue' ? 'var(--color-neon-blue)' :
                                    btn.color === 'green' ? 'var(--color-neon-green)' : 'var(--color-neon-blue)', // Default color
                            // Also add slight background tint based on color
                            background: btn.color === 'red' ? 'rgba(255, 0, 50, 0.1)' :
                                btn.color === 'green' ? 'rgba(0, 255, 0, 0.1)' :
                                    'rgba(0, 243, 255, 0.1)', // Default blue tint
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                        onMouseDown={(e) => {
                            e.currentTarget.style.transform = 'scale(0.98)';
                        }}
                        onMouseUp={(e) => {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                    >
                        {btn.text}
                    </button>
                ))}
            </div>
        </div>
    );
};
