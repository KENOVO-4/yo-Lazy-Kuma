
fetch('../js/data/movies.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('movieList');
    container.innerHTML = '';
    for (const [key, movie] of Object.entries(data)) {
      const card = document.createElement('a');
      card.href = movie.link;
      card.className = "bg-gray-800 hover:bg-gray-700 rounded-lg shadow p-4 block transition";
      card.innerHTML = `
        <img src="${movie.cover}" alt="${movie.title}" class="w-full h-40 object-cover rounded mb-2">
        <h2 class="text-xl font-bold text-center">${movie.title}</h2>
      `;
      container.appendChild(card);
    }
  });
