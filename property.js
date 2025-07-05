document.addEventListener('DOMContentLoaded', function() {
    try {
        // Get property from localStorage or URL
        let property = JSON.parse(localStorage.getItem('currentProperty'));
        
        // Fallback to URL parameter if needed
        if (!property) {
            const urlParams = new URLSearchParams(window.location.search);
            const propertyId = urlParams.get('id');

            if (!propertyId) {
                throw new Error('No property ID found');
            }

            if (window.propertyData) {
                const foundProperty = window.propertyData.find(p => String(p.id) === String(propertyId));
                if (foundProperty) property = foundProperty;
            }
        }

        // Final check before rendering
        if (!property) {
            throw new Error('Property not found');
        }

        // Render property details with enhanced UI
        const detailsContainer = document.getElementById('property-details');
        if (!detailsContainer) {
            throw new Error('Details container not found');
        }

        detailsContainer.innerHTML = `
            <div class="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                <!-- Image Gallery -->
                <div class="relative h-96 w-full">
                    <img src="${property.image}" alt="${property.title}" 
                         class="w-full h-full object-cover transition-opacity duration-300"
                         onerror="this.src='/placeholder-property.jpg'; this.onerror=null;"
                         id="main-property-image">
                    
                    <!-- Image Badges -->
                    <div class="absolute top-4 left-4 flex gap-2">
                        ${property.featured ? 
                            '<span class="bg-red-500 text-white text-xs px-3 py-1 rounded-full font-bold">FEATURED</span>' : ''}
                        ${property.forRent ? 
                            '<span class="bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-bold">FOR RENT</span>' : ''}
                    </div>
                </div>

                <!-- Property Details -->
                <div class="p-6 md:p-8">
                    <div class="flex justify-between items-start mb-4">
                        <div>
                            <h1 class="text-2xl md:text-3xl font-bold text-gray-900 mb-1">${property.title}</h1>
                            <div class="flex items-center text-gray-600">
                                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                                </svg>
                                <span>${property.location}</span>
                            </div>
                        </div>
                        <p class="text-2xl font-bold text-blue-600">$${property.price?.toLocaleString() || '0'}</p>
                    </div>

                    <!-- Key Features -->
                    <div class="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                        <div class="text-center">
                            <span class="block text-sm text-gray-500">Bedrooms</span>
                            <span class="text-lg font-semibold">${property.bedrooms || 'N/A'}</span>
                        </div>
                        <div class="text-center">
                            <span class="block text-sm text-gray-500">Bathrooms</span>
                            <span class="text-lg font-semibold">${property.bathrooms || 'N/A'}</span>
                        </div>
                        <div class="text-center">
                            <span class="block text-sm text-gray-500">Area</span>
                            <span class="text-lg font-semibold">${property.sqft ? `${property.sqft} sqft` : 'N/A'}</span>
                        </div>
                    </div>

                    <!-- Description -->
                    <div class="mb-6">
                        <h2 class="text-xl font-semibold mb-3 text-gray-800">Description</h2>
                        <p class="text-gray-700 leading-relaxed">${property.description || 'No description available.'}</p>
                    </div>

                    <!-- Amenities -->
                    <div class="mb-8">
                        <h2 class="text-xl font-semibold mb-3 text-gray-800">Amenities</h2>
                        <div class="flex flex-wrap gap-2">
                            ${property.amenities?.map(amenity => `
                                <span class="flex items-center bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
                                    <svg class="w-3 h-3 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                                    </svg>
                                    ${amenity}
                                </span>
                            `).join('') || '<p class="text-gray-500">No amenities listed</p>'}
                        </div>
                    </div>

                    <!-- Additional Details -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div>
                            <h3 class="font-semibold text-gray-800 mb-2">Property Details</h3>
                            <ul class="space-y-2 text-gray-600">
                                <li class="flex justify-between">
                                    <span>Type:</span>
                                    <span class="font-medium">${property.type || 'N/A'}</span>
                                </li>
                                <li class="flex justify-between">
                                    <span>Year Built:</span>
                                    <span class="font-medium">${property.yearBuilt || 'N/A'}</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="font-semibold text-gray-800 mb-2">Contact Agent</h3>
                            ${property.agent ? `
                                <div class="flex items-center space-x-3">
                                    <div class="flex-shrink-0">
                                        <div class="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                                            <span class="text-gray-600">${property.agent.name.charAt(0)}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <p class="font-medium">${property.agent.name}</p>
                                        <p class="text-sm text-gray-500">${property.agent.company}</p>
                                        <a href="tel:${property.agent.phone}" class="text-blue-600 text-sm">${property.agent.phone}</a>
                                    </div>
                                </div>
                            ` : '<p class="text-gray-500">No agent information</p>'}
                        </div>
                    </div>

                    <!-- Action Buttons -->
                    <div class="flex flex-col sm:flex-row gap-3">
                        <button onclick="window.history.back()" 
                                class="px-6 py-3 bg-gray-200 hover:bg-gray-300 rounded-lg font-medium transition-colors">
                            ← Back to Listings
                        </button>
                        <button class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                            Contact Agent
                        </button>
                    </div>
                </div>
            </div>
        `;

    } catch (error) {
        console.error('Error loading property:', error);
        window.location.href = 'index.html';
    }
});