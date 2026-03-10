'use client';
import { useEffect, useState } from 'react';

type Theme = 'blue' | 'pink' | 'gold' | 'green';

const themes: { value: Theme; color: string; label: string }[] = [
  { value: 'blue',  color: 'oklch(0.45 0.2 240)',  label: 'Blue'  },
  { value: 'pink',  color: 'oklch(0.45 0.2 306)',  label: 'Pink'  },
  { value: 'gold',  color: 'oklch(0.55 0.18 60)',   label: 'Gold'  },
  { value: 'green', color: 'oklch(0.45 0.2 140)',   label: 'Green' },
];

function applyTheme(t: Theme) {
  if (t === 'blue') {
    document.documentElement.removeAttribute('data-theme');
  } else {
    document.documentElement.setAttribute('data-theme', t);
  }
}

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>('blue');

  useEffect(() => {
    const saved = (localStorage.getItem('theme') as Theme) || 'blue';
    setTheme(saved);
    applyTheme(saved);
  }, []);

  function handleTheme(t: Theme) {
    setTheme(t);
    localStorage.setItem('theme', t);
    applyTheme(t);
  }

  return (
    <div className="flex gap-2 items-center">
      {themes.map((t) => (
        <button
          key={t.value}
          onClick={() => handleTheme(t.value)}
          title={t.label}
          style={{ background: t.color }}
          className={`w-5 h-5 rounded-full border-2 transition-transform hover:scale-125 cursor-pointer ${
            theme === t.value
              ? 'border-text scale-125'
              : 'border-border-muted'
          }`}
        />
      ))}
    </div>
  );
}
