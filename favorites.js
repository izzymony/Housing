document.addEventListener('DOMContentLoaded', function() {
    const favoritesContainer = document.getElementById('favorites-container');
    const noFavoritesMessage = document.getElementById('no-favorites');
    
    // Load favorites from localStorage
    const favorites = JSON.parse(localStorage.getItem('propertyFavorites')) || [];
    
    if (favorites.length === 0) {
        noFavoritesMessage.classList.remove('hidden');
        return;
    }
    
    // Render favorite properties
    favorites.forEach(property => {
        const card = document.createElement('div');
        card.className = 'bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow';
        
        card.innerHTML = `
            <div class="relative h-48 overflow-hidden">
                <img src="${property.image}" alt="${property.title}" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <div class="p-4">
                <div class="flex justify-between items-start">
                    <h3 class="text-xl font-bold">${property.title}</h3>
                    <p class="text-lg font-semibold text-blue-600">$${property.price.toLocaleString()}</p>
                </div>
                <p class="text-gray-600 mb-2">${property.location}</p>
                <button onclick="removeFavorite('${property.id}')" class="mt-4 text-red-500 hover:text-red-700">
                    Remove from Favorites
                </button>
            </div>
        `;
        
        favoritesContainer.appendChild(card);
    });
});

// Function to remove favorites (would need to sync back to main page)
window.removeFavorite = function(id) {
    let favorites = JSON.parse(localStorage.getItem('propertyFavorites')) || [];
    favorites = favorites.filter(p => p.id !== id);
    localStorage.setItem('propertyFavorites', JSON.stringify(favorites));
    location.reload(); // Refresh to show updated list
};