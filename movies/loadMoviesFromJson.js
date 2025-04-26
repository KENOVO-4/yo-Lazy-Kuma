// js/loadFromJson.js

fetch('js/data/movies/movies.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('movies/movies.json');
    container.innerHTML = '';
    for (const [key, anime] of Object.entries(data)) {
      const card = document.createElement('a');
      card.href = anime.link;
      card.className = "bg-gray-800 hover:bg-gray-700 rounded-lg shadow p-4 block transition";
      card.innerHTML = `
        <img src="${anime.cover}" alt="${anime.title}" class="w-full h-40 object-cover rounded mb-2">
        <h2 class="text-xl font-bold text-center">${anime.title}</h2>
      `;
      container.appendChild(card);
    }
  });
