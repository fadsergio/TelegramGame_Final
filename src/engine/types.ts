export type ButtonType = 'safe' | 'danger' | 'passive';

export type ActionCondition = {
  type: 'time_less_than' | 'time_greater_than' | 'sequence_order' | 'color_match' | 'wait_only';
  value?: number | string | number[]; // e.g., 3000 (ms), 'red', [0, 1] (indexes)
};

export interface ButtonConfig {
  id: string;
  text: string;
  type: ButtonType; // The inherent nature of the button
  // If defined, this button's behavior changes based on condition. 
  // e.g. "Safe if time > 5s" means type is 'safe' ONLY if condition met, else 'danger'? 
  // Or "Danger if time < 5s". Let's stick to prompt: "Danger (trap) < 5s".
  // So base type might be 'safe', but becomes 'danger' on condition?
  // Simpler: Define the TRAP condition. If condition met -> DANGER. 
  trapCondition?: ActionCondition; 
  
  // Visuals
  color?: 'red' | 'blue' | 'green' | 'neutral';
  variant?: 'solid' | 'outline' | 'ghost';
  
  // Custom feedback text?
  failMessage?: string;
}

export interface Stage {
  id: string;
  text: string; // The hint
  buttons: ButtonConfig[];
  // Stage specific rules
  requiredSequence?: string[]; // IDs of buttons to press in order
  waitDuration?: number; // If "Waiting" is the answer, how long to wait?
}

export interface Level {
  id: number;
  title: string;
  description: string;
  stages: Stage[];
}

export interface GameState {
  currentLevelIndex: number;
  currentStageIndex: number;
  lives: number; // Maybe 1 mistake = out? Or 3 lives? Prompt implies "Mistake!" = fail level? 
                 // "You were wrong!" implies instant fail per stage usually in these riddles.
  status: 'playing' | 'failed' | 'level-complete' | 'game-complete';
  startTime: number; // Time when stage loaded
  clickHistory: string[]; // IDs of buttons clicked this stage
}
