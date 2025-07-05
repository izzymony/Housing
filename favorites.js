document.addEventListener('DOMContentLoaded', function() {
    const favoritesContainer = document.getElementById('favorites-container');
    const noFavoritesMessage = document.getElementById('no-favorites');
    const menuBtn = document.getElementById('menu-btn');
    const menuItems = document.getElementById('menu-items');
    const overlay = document.getElementById('menu-overlay');
    const body = document.body;




    function closeMenu() {
        menuItems.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
        body.classList.remove('overflow-hidden');
    }

    function openMenu() {
        menuItems.classList.remove('-translate-x-full');
        overlay.classList.remove('hidden');
        body.classList.add('overflow-hidden');
    }

    menuBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        if (menuItems.classList.contains('-translate-x-full')) {
            openMenu();
        } else {
            closeMenu();
        }
    });

     overlay.addEventListener('click', closeMenu);
    document.addEventListener('click', function(e) {
        if (!menuItems.contains(e.target) && !menuBtn.contains(e.target)) {
            closeMenu();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !menuItems.classList.contains('-translate-x-full')) {
            closeMenu();
        }
    });


    // Load favorites from localStorage
    const favorites = JSON.parse(localStorage.getItem('propertyFavorites')) || [];
    
    if (favorites.length === 0) {
        noFavoritesMessage.classList.remove('hidden');
        favoritesContainer.classList.add('hidden');
        return;
    }
    
    noFavoritesMessage.classList.add('hidden');
    favoritesContainer.classList.remove('hidden');
    
    // Clear existing content
    favoritesContainer.innerHTML = '';
    
    // Render favorite properties
    favorites.forEach(property => {
        const card = document.createElement('div');
        card.className = 'bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow mb-4';
        
        card.innerHTML = `
            <div class="relative h-48 overflow-hidden">
                <img src="${property.image}" alt="${property.title}" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <div class="p-4">
                <div class="flex justify-between items-start">
                    <h3 class="text-xl font-bold">${property.title}</h3>
                    <p class="text-lg font-semibold text-blue-600">$${property.price?.toLocaleString() || '0'}</p>
                </div>
                <p class="text-gray-600 mb-2 rounded-lg">${property.location || 'Location not specified'}</p>
                <button onclick="removeFavorite('${property.id}')" 
                        class="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
                    Remove from Favorites
                </button>
            </div>
        `;
        
        favoritesContainer.appendChild(card);
    });
});

// Improved removeFavorite function
window.removeFavorite = function(id) {
    try {
        let favorites = JSON.parse(localStorage.getItem('propertyFavorites')) || [];
        
        // Ensure we're comparing strings if IDs might be numbers
        favorites = favorites.filter(p => String(p.id) !== String(id));
        
        localStorage.setItem('propertyFavorites', JSON.stringify(favorites));
        
        // Update UI without full page reload
        const cardToRemove = document.querySelector(`[onclick="removeFavorite('${id}')"]`)?.closest('div.bg-white');
        if (cardToRemove) {
            cardToRemove.remove();
        }
        
        // Show "no favorites" message if empty
        if (favorites.length === 0) {
            document.getElementById('no-favorites').classList.remove('hidden');
            document.getElementById('favorites-container').classList.add('hidden');
        }
        
    } catch (error) {
        console.error('Error removing favorite:', error);
        alert('Failed to remove favorite. Please try again.');
    }
};