import type { Game } from './types';

const localCover = (title: string) =>
  `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="640" height="360"><rect width="100%" height="100%" fill="#111827"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#22c55e" font-family="Arial" font-size="42">${title}</text></svg>`)}`;

export const defaultGames: Game[] = [
  {
    id: 'tetris-local',
    title: 'Tetris',
    description: 'Locally hosted, self-contained HTML5 Tetris source package.',
    category: 'puzzle',
    coverImage: localCover('TETRIS'),
    gameUrl: './games/tetris.html'
  },
  {
    id: 'brick-breaker-local',
    title: 'Brick Breaker',
    description: 'Locally hosted, self-contained HTML5 arcade source package.',
    category: 'arcade',
    coverImage: localCover('BRICK BREAKER'),
    gameUrl: './games/brick-breaker.html'
  },
  {
    id: 'maze-local',
    title: 'Maze',
    description: 'Locally hosted, self-contained HTML5 maze game source package.',
    category: 'puzzle',
    coverImage: localCover('MAZE'),
    gameUrl: './games/maze.html'
  },
  {
    id: 'omok-local',
    title: 'Omok',
    description: 'Locally hosted, self-contained HTML5 board game source package.',
    category: 'other',
    coverImage: localCover('OMOK'),
    gameUrl: './games/omok.html'
  },
  {
    id: 'stack-local',
    title: 'Stack',
    description: 'Locally hosted, self-contained HTML5 timing/arcade source package.',
    category: 'arcade',
    coverImage: localCover('STACK'),
    gameUrl: './games/stack.html'
  },
  {
    id: 'janggi-local',
    title: 'Janggi',
    description: 'Locally hosted, self-contained Korean chess source package.',
    category: 'other',
    coverImage: localCover('JANGGI'),
    gameUrl: './games/janggi.html'
  }
];
