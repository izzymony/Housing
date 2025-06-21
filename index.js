document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const menuItems = document.getElementById('menu-items');
    const overlay = document.getElementById('menu-overlay');
    const body = document.body;
    const clickFave = document.getElementById('clickfave');
    const display = document.getElementById('display') 
    const container = document.getElementById('property-cards');


  clickFave.addEventListener('click', function(e){
          e.stopPropagation();

           display.classList.toggle('hidden')
  })

  document.addEventListener('click', function(){
            display.classList.add('hidden');
  })

  display.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    // Menu functions (unchanged)
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

    // Property data (unchanged)
    const realEstateListings = [
  {
    id: 1,
    title: "Modern Downtown Apartment",
    price: 450000,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    type: "Apartment",
    location: "New York, NY",
    yearBuilt: 2018,
    img:'icons8-love-24.png',
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    featured: true,
    amenities: ["Pool", "Gym", "Parking"],
    description: "Luxury apartment in the heart of downtown with stunning city views."
  },
  {
    id: 2,
    title: "Suburban Family Home",
    price: 325000,
    bedrooms: 4,
    bathrooms: 2.5,
    sqft: 2200,
    type: "House",
    location: "Austin, TX",
    yearBuilt: 2012,
   
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    featured: false,
    amenities: ["Backyard", "Garage", "Fireplace", "water fountain"],
    description: "Spacious family home in quiet neighborhood with excellent schools.",
     address: "123 Main St, AngelGroove, USA",
    photoCount: 24,
    forRent: false,
    isFavorite: false,
    listedDate:"3 days ago",
    agent:{
        name: 'Adams lane',
        phone: '(555) 143-4667',
        company: 'Twin properties',
    },
    tags: ["Pet Friendly", "Renovated", "Open House", "conducive space"]
  },
  {
    id: 3,
    title: "Beachfront Villa",
    price: 1200000,
    bedrooms: 5,
    bathrooms: 4,
    sqft: 3800,
    type: "Villa",
    location: "Miami, FL",
    yearBuilt: 2020,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    featured: true,
    amenities: ["Private Beach", "Infinity Pool", "Smart Home"],
    description: "Luxury beachfront property with panoramic ocean views."
  },
  {
    id: 4,
    title: "Cozy Mountain Cabin",
    price: 275000,
    bedrooms: 3,
    bathrooms: 1,
    sqft: 1500,
    type: "Cabin",
    location: "Aspen, CO",
    yearBuilt: 2008,
    image: "https://images.unsplash.com/photo-1475855581690-80accde3ae2b",
    featured: false,
    amenities: ["Fireplace", "Mountain Views", "Hiking Trails"],
    description: "Rustic cabin perfect for nature lovers and outdoor enthusiasts."
  },
  {
    id: 5,
    title: "Urban Loft Studio",
    price: 220000,
    bedrooms: 1,
    bathrooms: 1,
    sqft: 800,
    type: "Studio",
    location: "Chicago, IL",
    yearBuilt: 2015,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    featured: false,
    amenities: ["Open Floor Plan", "Rooftop Deck", "Concierge"],
    description: "Modern industrial-style loft in vibrant arts district.",
    address: "123 Main St, Anytown, USA",
    photosCount: 24,
    forRent: false,
    isFavorite: false,
    listedDate:"2 days ago",
    agent:{
        name: 'Adams lane',
        phone: '(555) 123-4567',
        company: 'Premium properties',
    },
    tags: ["Pet Friendly", "Renovated", "Open House"]
  },
  {
    id: 6,
    title: "Luxury Penthouse",
    price: 2800000,
    bedrooms: 3,
    bathrooms: 3.5,
    sqft: 4200,
    type: "Penthouse",
    location: "Los Angeles, CA",
    yearBuilt: 2022,
    
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf",
    featured: true,
    amenities: ["Private Elevator", "Panoramic Views", "Smart Home"],
    description: "Ultra-luxurious penthouse with top-of-the-line finishes.",
     address: "123 Main St, Anytown, USA",
    photosCount: 24,
    forRent: false,
    isFavorite: false,
    listedDate:"2 days ago",
    agent:{
        name: 'jonathan crox',
        phone: '(555) 133-4563',
        company: 'Premium waters properties',
    },
    tags: ["Pet Friendly", "Renovated", "Open House"]
  },
  {
    id: 7,
    title: "Historic Townhouse",
    price: 675000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2800,
    type: "Townhouse",
    location: "Boston, MA",
    yearBuilt: 1890,
  
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38",
    featured: false,
    amenities: ["Original Details", "Private Garden", "Walkable Location"],
    description: "Beautifully restored historic home with modern amenities.",
     address: "No 24, lake house town beach.",
    photosCount: 24,
    forRent: false,
    isFavorite: false,
    listedDate:"2 days ago",
    agent:{
        name: 'Adams lane',
        phone: '(555) 123-4567',
        company: 'Premium properties',
    },
    tags: ["Pet Friendly", "Renovated", "Open House"]
  }
];

    // Initialize the page
    loadFavorites();
    renderProperties();

    // Global toggle function
    window.toggleFavorite = function(button, propertyId) {
        const property = realEstateListings.find(p => p.id === propertyId);
        if (!property) return;
        
        property.isFavorite = !property.isFavorite;
        
        const outlined = button.querySelector('#outlined-heart');
        const filled = button.querySelector('#filled-heart');
        
        outlined.classList.toggle('hidden', property.isFavorite);
        filled.classList.toggle('hidden', !property.isFavorite);
        
        if (property.isFavorite) {
            filled.classList.add('animate-pulse');
            setTimeout(() => filled.classList.remove('animate-pulse'), 300);
        }
        
        saveFavorites();
    };

    function saveFavorites() {
        const favorites = realEstateListings.filter(p => p.isFavorite).map(p => p.id);
        localStorage.setItem('propertyFavorites', JSON.stringify(favorites));
    }

    function loadFavorites() {
        const favorites = JSON.parse(localStorage.getItem('propertyFavorites')) || [];
        realEstateListings.forEach(p => {
            p.isFavorite = favorites.includes(p.id);
        });
    }

    function renderProperties() {
        container.innerHTML = '';
        
        realEstateListings.forEach(property => {
            const card = document.createElement('div');
            card.className = 'bg-white rounded-lg overflow-y-hidden shadow-md overflow-hidden hover:shadow-lg transition-shadow  ';
            
            card.innerHTML = `
                <div class="relative h-48 overflow-hidden group">
                    <img src="${property.image}" alt="${property.title}" class="w-full h-full -z-10  object-cover transition-transform duration-500 group">
                    <div class="absolute top-3 left-3 flex gap-2 z-10">
                        <span class="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                            ${property.featured ? 'Featured' : 'New'}
                        </span>
                        ${property.forRent ? '<span class="bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-semibold">For Rent</span>' : ''}
                    </div>
                    <button onclick="toggleFavorite(this, ${property.id})" 
                            class="heart-button absolute top-3 right-3 p-2 bg-white/80 rounded-full backdrop-blur-sm z-10 hover:bg-red-100 transition-colors">
                        <svg id="outlined-heart" xmlns="http://www.w3.org/2000/svg" 
                             class="h-5 w-5 text-gray-400 ${property.isFavorite ? 'hidden' : ''}" 
                             viewBox="0 0 24 24" 
                             stroke="currentColor"
                             stroke-width="1.5"
                             fill="none">
                            <path stroke-linecap="round" 
                                  stroke-linejoin="round" 
                                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                        <svg id="filled-heart" xmlns="http://www.w3.org/2000/svg" 
                             class="h-5 w-5 text-red-500 fill-red-500 ${!property.isFavorite ? 'hidden' : ''}" 
                             viewBox="0 0 24 24">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                    </button>
                    <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div class="absolute bottom-3 left-3 text-white">
                        <span class="text-sm font-medium">${property.photosCount}+ Photos</span>
                    </div>
                </div>
                <div class="p-4">
                   <div class="flex justify-between items-start">
          <h3 class="text-xl font-bold">${property.title}</h3>
          <p class="text-lg font-semibold text-blue-600">$${property.price.toLocaleString()}</p>
        </div>
        <p class="text-gray-600 mb-2">${property.location}</p>
        <div class="flex gap-4 text-sm text-gray-500 mb-3">
          <span>${property.bedrooms} beds</span>
          <span>${property.bathrooms} baths</span>
          <span>${property.sqft} sqft</span>
        </div>
        <p class="text-gray-700 mb-4 line-clamp-2">${property.description}</p>
        <div class="flex flex-wrap gap-2">
          ${property.amenities.map(amenity => 
            `<span class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">${amenity}</span>`
          ).join('')}
        </div>
                </div>
            `;
            
            container.appendChild(card);
        });
    }
});