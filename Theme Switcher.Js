// js/themeSwitcher.js

const themeMap = {
  default: {
    body: 'bg-gray-900 text-white',
    card: 'bg-gray-800 hover:bg-gray-700'
  },
  neon: {
    body: 'bg-black text-pink-500',
    card: 'bg-fuchsia-900 hover:bg-fuchsia-800'
  },
  flame: {
    body: 'bg-orange-900 text-yellow-100',
    card: 'bg-red-800 hover:bg-red-700'
  }
};

function applyTheme(theme) {
  const { body, card } = themeMap[theme] || themeMap.default;
  document.body.className = body + ' font-sans';

  const cards = document.querySelectorAll('#animeList a');
  cards.forEach(card => {
    card.className = card.className.replace(/bg-\S+ hover:bg-\S+/g, card);
    card.className = card.className.replace(/(bg-[^\s]+\s?)+/, card);
    card.className = card.className.split(' ').filter(c => !c.startsWith('bg-') && !c.startsWith('hover:bg-')).join(' ');
    card.className += ` ${card}`;
  });
}

document.getElementById('themeSelect').addEventListener('change', (e) => {
  applyTheme(e.target.value);
});

// Initial theme on load
applyTheme('default');
