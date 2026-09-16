export type GameCategory = 'action' | 'arcade' | 'racing' | 'puzzle' | 'sports' | 'other';

export interface Game {
  id: string;
  title: string;
  description: string;
  category: GameCategory;
  coverImage?: string;
  gameUrl: string;
}
