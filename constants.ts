import { GameConfig } from './types';

export const CANVAS_WIDTH = 800;
export const CANVAS_HEIGHT = 300;

export const DINO_WIDTH = 44;
export const DINO_HEIGHT = 47;
export const DINO_X_POS = 50; // Fixed X position

export const GAME_CONFIG: GameConfig = {
  gravity: 0.6,
  jumpForce: -12, // Initial jump velocity
  groundHeight: CANVAS_HEIGHT - 30, // Y position of the ground
  baseSpeed: 6,
  speedMultiplier: 0.001, // Speed increase per frame
};

// Colors
export const COLOR_BG = '#FFFFFF';
export const COLOR_DINO = '#535353';
export const COLOR_ROBOT = '#3B82F6'; // Blue
export const COLOR_ALIEN = '#10B981'; // Green

export const COLOR_OBSTACLE = '#535353';
export const COLOR_GROUND = '#535353';

export const COLOR_COIN = '#F59E0B'; // Amber/Gold
export const COLOR_SHIELD = '#6366F1'; // Indigo

// Obstacle definitions
export const CACTUS_VARIANTS = [
  { width: 20, height: 40, type: 'CACTUS_SMALL' },
  { width: 30, height: 60, type: 'CACTUS_LARGE' },
  { width: 50, height: 40, type: 'CACTUS_GROUP' },
] as const;