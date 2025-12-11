export type CharacterType = 'DINO' | 'ROBOT' | 'ALIEN';
export type ItemType = 'COIN' | 'SHIELD';

export interface DinoState {
  y: number;
  vy: number; // Velocity Y
  isJumping: boolean;
  isDucking: boolean; // Future proofing
  frame: number; // For animation
  invincibleUntil: number; // Timestamp for shield effect
}

export interface Obstacle {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
  type: 'CACTUS_SMALL' | 'CACTUS_LARGE' | 'CACTUS_GROUP';
}

export interface Item {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
  type: ItemType;
}

export enum GameStatus {
  IDLE = 'IDLE',
  PLAYING = 'PLAYING',
  GAME_OVER = 'GAME_OVER',
}

export interface GameConfig {
  gravity: number;
  jumpForce: number;
  groundHeight: number;
  baseSpeed: number;
  speedMultiplier: number;
}