import { useMemo, useState } from 'react';
import { Search, Gamepad2, X } from 'lucide-react';
import { defaultGames } from './defaultGames';
import type { Game, GameCategory } from './types';

const labels: Record<GameCategory, string> = {
  action: 'Action', arcade: 'Arcade', racing: 'Racing', puzzle: 'Puzzle', sports: 'Sports', other: 'Other'
};

export default function App() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<'all' | GameCategory>('all');
  const [active, setActive] = useState<Game | null>(null);

  const categories = useMemo(() => ['all', ...Array.from(new Set(defaultGames.map(g => g.category)))] as const, []);
  const games = useMemo(() => defaultGames.filter(g => {
    const q = query.toLowerCase().trim();
    return (category === 'all' || g.category === category) &&
      (!q || `${g.title} ${g.description}`.toLowerCase().includes(q));
  }), [query, category]);

  return <main>
    <header className="topbar">
      <div className="brand"><Gamepad2 size={28}/><div><strong>GAME HUB</strong><span>YOUR AUTHORIZED GAME LIBRARY</span></div></div>
      <div className="search"><Search size={18}/><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search games..." /></div>
    </header>

    <section className="hero">
      <div><p className="eyebrow">PLAY • DISCOVER • HAVE FUN</p><h1>Your Games,<br/><em>One Place.</em></h1><p className="sub">A custom gaming portal for games you are authorized to publish.</p></div>
      <div className="hero-orb">🎮</div>
    </section>

    <nav className="filters">
      {categories.map(c => <button key={c} className={category === c ? 'active' : ''} onClick={() => setCategory(c)}>{c === 'all' ? 'All Games' : labels[c]}</button>)}
    </nav>

    <section className="catalog">
      {games.map(game => <button className="card" key={game.id} onClick={() => setActive(game)}>
        <div className="cover" style={game.coverImage ? {backgroundImage: `url(${game.coverImage})`} : undefined}><span>{game.title.slice(0,1)}</span></div>
        <div className="card-body"><h2>{game.title}</h2><p>{game.description}</p><small>{labels[game.category]}</small></div>
      </button>)}
      {games.length === 0 && <div className="empty"><Gamepad2 size={44}/><h2>No games loaded yet</h2><p>Add your authorized game files or URLs to <code>src/defaultGames.ts</code>.</p></div>}
    </section>

    {active && <div className="player" role="dialog" aria-modal="true">
      <div className="player-head"><strong>{active.title}</strong><button onClick={() => setActive(null)} aria-label="Close"><X/></button></div>
      <iframe title={active.title} src={active.gameUrl} allow="fullscreen; autoplay; gamepad" />
    </div>}
  </main>;
}
