// Custom Scripts for Gracious Angeli Travel & Tours

// EmailJS Configuration - Now initialized in HTML file

// Google Maps Directions Function
function openGoogleMaps(destination) {
    // Encode the destination address for URL
    const encodedDestination = encodeURIComponent(destination);
    
    // Create Google Maps location URL (shows the place without directions)
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedDestination}`;
    
    // Open in new tab
    window.open(googleMapsUrl, '_blank');
}

// Travel Packages Data
const travelPackages = {
    asia: [
        // Taiwan
        {
            country: 'TAIWAN',
            location: 'ASIA',
            duration: '4 DAYS 3 NIGHTS',
            minPax: 'MIN OF 2 PAX',
            price: '29,999',
            image: 'assets/GATT WEBSITE UPDATES/SERVICES/Taiwan.png',
            inclusions: ['Hotel Accommodation', 'Daily Hotel Breakfast', 'All Transfers', 'Temple Hopping', 'Travel Tax'],
            exclusions: ['Roundtrip Flight Ticket', 'Visa Surcharge', 'Travel Insurance', 'Compulsory Tipping', 'Personal Expenses', 'Other Personal Expenses']
        },
        // Vietnam - Da Nang
        {
            country: 'DA NANG',
            location: 'ASIA - VIETNAM',
            duration: '4 DAYS 3 NIGHTS',
            minPax: 'MIN OF 2 PAX',
            price: '14,999',
            image: 'assets/GATT WEBSITE UPDATES/SERVICES/Vietnaman Da Nang.png',
            inclusions: ['Hotel Accommodation', 'Daily Hotel Breakfast', 'All Transfers', 'Temple Hopping', 'Travel Tax'],
            exclusions: ['Roundtrip Flight Ticket', 'Visa Surcharge', 'Travel Insurance', 'Compulsory Tipping', 'Other Personal Expenses']
        },
        // Vietnam - Ha Noi
        {
            country: 'HA NOI',
            location: 'ASIA - VIETNAM',
            duration: '4 DAYS 3 NIGHTS',
            minPax: 'MIN OF 2 PAX',
            price: '14,999',
            image: 'assets/GATT WEBSITE UPDATES/SERVICES/Vietnam Ha Noi.png',
            inclusions: ['Hotel Accommodation', 'Daily Hotel Breakfast', 'All Transfers', 'Half Day City Tour', 'Ocean Park', 'Travel Tax'],
            exclusions: ['Roundtrip Flight Ticket', 'Visa Surcharge', 'Travel Insurance', 'Compulsory Tipping', 'Other Personal Expenses']
        },
        // Vietnam - Sapa
        {
            country: 'SAPA',
            location: 'ASIA - VIETNAM',
            duration: '4 DAYS 3 NIGHTS',
            minPax: 'MIN OF 2 PAX',
            price: '14,999',
            image: 'assets/GATT WEBSITE UPDATES/SERVICES/Sapa.png',
            inclusions: ['Hotel Accommodation', 'Daily Hotel Breakfast', 'All Transfers', 'Half Day City Tour', 'Disneyland', 'Travel Tax'],
            exclusions: ['Roundtrip Flight Ticket', 'Visa Surcharge', 'Travel Insurance', 'Compulsory Tipping', 'Other Personal Expenses']
        },
        // Indonesia - Bali
        {
            country: 'BALI - FREE & EASY',
            location: 'ASIA - INDONESIA',
            duration: '4 DAYS 3 NIGHTS',
            minPax: 'MIN OF 2 PAX',
            price: '9,999',
            image: 'assets/GATT WEBSITE UPDATES/SERVICES/Indonesia Bali.png',
            inclusions: ['Hotel Accommodation', 'Daily Hotel Breakfast', 'All Transfers', 'Half Day City Tour', 'Moral Tour and Land', 'Travel Tax'],
            exclusions: ['Roundtrip Flight Ticket', 'Visa Surcharge', 'Travel Insurance', 'Compulsory Tipping', 'Other Personal Expenses']
        },
        // Japan - Tokyo
        {
            country: 'TOKYO',
            location: 'ASIA - JAPAN',
            duration: '4 DAYS 3 NIGHTS',
            minPax: 'MIN OF 2 PAX',
            price: '49,999',
            image: 'assets/GATT WEBSITE UPDATES/SERVICES/Tokyo, Japan.png',
            inclusions: ['Hotel Accommodation', 'Daily Hotel Breakfast', 'All Transfers', 'Half Day City Tour', 'Travel Tax'],
            exclusions: ['Roundtrip Flight Ticket', 'Visa Surcharge', 'Travel Insurance', 'Compulsory Tipping', 'Other Personal Expenses']
        },
        // Japan - Hokkaido
        {
            country: 'HOKKAIDO',
            location: 'ASIA - JAPAN',
            duration: '4 DAYS 3 NIGHTS',
            minPax: 'MIN OF 2 PAX',
            price: '49,999',
            image: 'assets/GATT WEBSITE UPDATES/SERVICES/Hokkaido, Japan.png',
            inclusions: ['Hotel Accommodation', 'Daily Hotel Breakfast', 'All Transfers', 'Half Day City Tour', 'Ocean Park', 'Travel Tax'],
            exclusions: ['Roundtrip Flight Ticket', 'Visa Surcharge', 'Travel Insurance', 'Compulsory Tipping', 'Other Personal Expenses']
        },
        // Japan - Kyoto
        {
            country: 'KYOTO',
            location: 'ASIA - JAPAN',
            duration: '4 DAYS 3 NIGHTS',
            minPax: 'MIN OF 2 PAX',
            price: '49,999',
            image: 'assets/GATT WEBSITE UPDATES/SERVICES/Kyoto, Japan.png',
            inclusions: ['Hotel Accommodation', 'Daily Hotel Breakfast', 'All Transfers', 'Half Day City Tour', 'Disneyland', 'Travel Tax'],
            exclusions: ['Roundtrip Flight Ticket', 'Visa Surcharge', 'Travel Insurance', 'Compulsory Tipping', 'Other Personal Expenses']
        },
        // Japan - Osaka
        {
            country: 'OSAKA',
            location: 'ASIA - JAPAN',
            duration: '4 DAYS 3 NIGHTS',
            minPax: 'MIN OF 2 PAX',
            price: '49,999',
            image: 'assets/GATT WEBSITE UPDATES/SERVICES/Osaka, Japan.png',
            inclusions: ['Hotel Accommodation', 'Daily Hotel Breakfast', 'All Transfers', 'Half Day City Tour', 'Moral Tour and Land', 'Travel Tax'],
            exclusions: ['Roundtrip Flight Ticket', 'Visa Surcharge', 'Travel Insurance', 'Compulsory Tipping', 'Other Personal Expenses']
        },
        // Hong Kong - Free & Easy
        {
            country: 'FREE & EASY',
            location: 'ASIA - HONGKONG',
            duration: '4 DAYS 3 NIGHTS',
            minPax: 'MIN OF 2 PAX',
            price: '12,999',
            image: 'assets/GATT WEBSITE UPDATES/SERVICES/Hongkong Free&Easy.png',
            inclusions: ['Hotel Accommodation', 'Daily Hotel Breakfast', 'All Transfers', 'Half Day City Tour', 'Travel Tax'],
            exclusions: ['Roundtrip Flight Ticket', 'Visa Surcharge', 'Travel Insurance', 'Compulsory Tipping', 'Other Personal Expenses']
        },
        // Hong Kong - Ocean Park
        {
            country: 'OCEAN PARK',
            location: 'ASIA - HONGKONG',
            duration: '4 DAYS 3 NIGHTS',
            minPax: 'MIN OF 2 PAX',
            price: '126,999',
            image: 'assets/GATT WEBSITE UPDATES/SERVICES/Hongkong OceanPark.png',
            inclusions: ['Hotel Accommodation', 'Daily Hotel Breakfast', 'All Transfers', 'Half Day City Tour', 'Ocean Park', 'Travel Tax'],
            exclusions: ['Roundtrip Flight Ticket', 'Visa Surcharge', 'Travel Insurance', 'Compulsory Tipping', 'Other Personal Expenses']
        },
        // Hong Kong - Disneyland
        {
            country: 'DISNEYLAND',
            location: 'ASIA - HONGKONG',
            duration: '4 DAYS 3 NIGHTS',
            minPax: 'MIN OF 2 PAX',
            price: '19,999',
            image: 'assets/GATT WEBSITE UPDATES/SERVICES/Hongkong Disneyland.png',
            inclusions: ['Hotel Accommodation', 'Daily Hotel Breakfast', 'All Transfers', 'Half Day City Tour', 'Disneyland', 'Travel Tax'],
            exclusions: ['Roundtrip Flight Ticket', 'Visa Surcharge', 'Travel Insurance', 'Compulsory Tipping', 'Other Personal Expenses']
        },
        // Hong Kong - Macau
        {
            country: 'MACAU',
            location: 'ASIA - HONGKONG',
            duration: '4 DAYS 3 NIGHTS',
            minPax: 'MIN OF 2 PAX',
            price: '19,999',
            image: 'assets/GATT WEBSITE UPDATES/SERVICES/Hongkong Macau.png',
            inclusions: ['Hotel Accommodation', 'Daily Hotel Breakfast', 'All Transfers', 'Half Day City Tour', 'Moral Tour and Land', 'Travel Tax'],
            exclusions: ['Roundtrip Flight Ticket', 'Visa Surcharge', 'Travel Insurance', 'Compulsory Tipping', 'Other Personal Expenses']
        },
        // South Korea
        {
            country: 'SOUTH KOREA',
            location: 'ASIA',
            duration: '4 DAYS 3 NIGHTS',
            minPax: 'MIN OF 2 PAX',
            price: '49,999',
            image: 'assets/GATT WEBSITE UPDATES/SERVICES/South Korea.png',
            inclusions: ['Hotel Accommodation', 'Daily Hotel Breakfast', 'All Transfers', 'Temple Hopping', 'Travel Tax'],
            exclusions: ['Roundtrip Flight Ticket', 'Visa Surcharge', 'Travel Insurance', 'Compulsory Tipping', 'Other Personal Expenses']
        },
        // Dubai
        {
            country: 'DUBAI',
            location: 'ASIA',
            duration: '4 DAYS 3 NIGHTS',
            minPax: 'MIN OF 2 PAX',
            price: '19,999',
            image: 'assets/GATT WEBSITE UPDATES/SERVICES/Singapore.png',
            inclusions: ['Hotel Accommodation', 'Daily Hotel Breakfast', 'All Transfers', 'Half Day City Tour', 'Ocean Park', 'Travel Tax'],
            exclusions: ['Roundtrip Flight Ticket', 'Visa Surcharge', 'Travel Insurance', 'Compulsory Tipping', 'Other Personal Expenses']
        },
        // Malaysia
        {
            country: 'MALAYSIA',
            location: 'ASIA',
            duration: '4 DAYS 3 NIGHTS',
            minPax: 'MIN OF 2 PAX',
            price: '14,999',
            image: 'assets/GATT WEBSITE UPDATES/SERVICES/Malaysia.png',
            inclusions: ['Hotel Accommodation', 'Daily Hotel Breakfast', 'All Transfers', 'Half Day City Tour', 'Disneyland', 'Travel Tax'],
            exclusions: ['Roundtrip Flight Ticket', 'Visa Surcharge', 'Travel Insurance', 'Compulsory Tipping', 'Other Personal Expenses']
        },
        // Thailand
        {
            country: 'THAILAND',
            location: 'ASIA',
            duration: '4 DAYS 3 NIGHTS',
            minPax: 'MIN OF 2 PAX',
            price: '9,999',
            image: 'assets/GATT WEBSITE UPDATES/SERVICES/Thailand.png',
            inclusions: ['Hotel Accommodation', 'Daily Hotel Breakfast', 'All Transfers', 'Half Day City Tour', 'Moral Tour and Land', 'Travel Tax'],
            exclusions: ['Roundtrip Flight Ticket', 'Visa Surcharge', 'Travel Insurance', 'Compulsory Tipping', 'Other Personal Expenses']
        }
    ],
    
    europe: [
        // Blue Line
        {
            country: 'SWITZERLAND, GERMANY, LIECHTENSTEIN, CZECH REPUBLIC, HUNGARY, SLOVAKIA, AUSTRIA',
            location: 'EUROPE - BLUE LINE',
            duration: '10 DAYS',
            minPax: 'MIN OF 2 PAX',
            price: '125,999',
            image: 'assets/GATT WEBSITE UPDATES/SERVICES/Europe - Blue Line.png',
            inclusions: ['Hotel Accommodation', 'Daily Hotel Breakfast', 'All Transfers', 'Tours (Tagalog)', 'Guided Tours', 'Travel Tax'],
            exclusions: ['Roundtrip Flight Ticket', 'Other Personal Expenses', 'Travel Insurance', 'Optional Tours', 'Tipping', 'Hotel City Tax']
        },
        // Blue + Red Line
        {
            country: 'CZECH REPUBLIC, SLOVAKIA, HUNGARY, AUSTRIA, LIECHTENSTEIN, SWITZERLAND, LUXEMBOURG, GERMANY, FRANCE, BELGIUM, NETHERLANDS',
            location: 'EUROPE - BLUE | RED LINE',
            duration: '17 DAYS',
            minPax: 'MIN OF 2 PAX',
            price: '180,840',
            image: 'assets/GATT WEBSITE UPDATES/SERVICES/Europe - Blue - Red Line.png',
            inclusions: ['Hotel Accommodation', 'Daily Hotel Breakfast', 'All Transfers', 'Tours (Tagalog)', 'Guided Tours', 'Travel Tax'],
            exclusions: ['Roundtrip Flight Ticket', 'Other Personal Expenses', 'Travel Insurance', 'Optional Tours', 'Tipping', 'Hotel City Tax']
        },
        // Yellow Line - Portugal, Spain, Morocco
        {
            country: 'PORTUGAL, SPAIN, MOROCCO',
            location: 'EUROPE - YELLOW LINE',
            duration: '12 DAYS',
            minPax: 'MIN OF 2 PAX',
            price: '165,250',
            image: 'assets/GATT WEBSITE UPDATES/SERVICES/Europe - Yellow Line 12 Days.png',
            inclusions: ['Hotel Accommodation', 'Daily Hotel Breakfast', 'All Transfers', 'Tours (Tagalog)', 'Guided Tours', 'Travel Tax'],
            exclusions: ['Roundtrip Flight Ticket', 'Other Personal Expenses', 'Travel Insurance', 'Optional Tours', 'Tipping', 'Hotel City Tax']
        },
        // Yellow Line - Spain, Portugal
        {
            country: 'SPAIN, PORTUGAL',
            location: 'EUROPE - YELLOW LINE',
            duration: '10 DAYS',
            minPax: 'MIN OF 2 PAX',
            price: '125,999',
            image: 'assets/GATT WEBSITE UPDATES/SERVICES/Europe - Yellow Line 10 Days.png',
            inclusions: ['Hotel Accommodation', 'Daily Hotel Breakfast', 'All Transfers', 'Tours (Tagalog)', 'Guided Tours', 'Travel Tax'],
            exclusions: ['Roundtrip Flight Ticket', 'Other Personal Expenses', 'Travel Insurance', 'Optional Tours', 'Tipping', 'Hotel City Tax']
        },
        // Green Line - Switzerland, Monaco, Vatican City, France, Italy
        {
            country: 'SWITZERLAND, MONACO, VATICAN CITY, FRANCE, ITALY',
            location: 'EUROPE - GREEN LINE',
            duration: '10 DAYS',
            minPax: 'MIN OF 2 PAX',
            price: '125,999',
            image: 'assets/GATT WEBSITE UPDATES/SERVICES/Europe - Green Line.png',
            inclusions: ['Hotel Accommodation', 'Daily Hotel Breakfast', 'All Airport Transfer', 'Tours (English)', 'Guided Tours', 'Travel Tax'],
            exclusions: ['Roundtrip Flight Ticket', 'Other Personal Expenses', 'Visa Fee', 'Optional Tours', 'Tippings', 'Hotel City Tax']
        },
        // Orange Line - France, Spain, Andorra
        {
            country: 'FRANCE, SPAIN, ANDORRA',
            location: 'EUROPE - ORANGE LINE',
            duration: '10 DAYS',
            minPax: 'MIN OF 2 PAX',
            price: '125,999',
            image: 'assets/GATT WEBSITE UPDATES/SERVICES/Europe - Orange Line.png',
            inclusions: ['Hotel Accommodation', 'Daily Hotel Breakfast', 'All Airport Transfer', 'Tours (English)', 'Guided Tours', 'Travel Tax'],
            exclusions: ['Roundtrip Flight Ticket', 'Other Personal Expenses', 'Visa Fee', 'Optional Tours', 'Tippings', 'Hotel City Tax']
        },
        // Red Line - Luxembourg, France, Belgium, Germany, Netherlands
        {
            country: 'LUXEMBOURG, FRANCE, BELGIUM, GERMANY, NETHERLANDS',
            location: 'EUROPE - RED LINE',
            duration: '12 DAYS',
            minPax: 'MIN OF 2 PAX',
            price: '165,250',
            image: 'assets/GATT WEBSITE UPDATES/SERVICES/Europe - Red Line.png',
            inclusions: ['Hotel Accommodation', 'Daily Hotel Breakfast', 'All Airport Transfer', 'Tours (English)', 'Guided Tours', 'Travel Tax'],
            exclusions: ['Roundtrip Flight Ticket', 'Other Personal Expenses', 'Visa Fee', 'Optional Tours', 'Tippings', 'Hotel City Tax']
        },
        // Pink Line - Denmark, Sweden, Norway
        {
            country: 'DENMARK, SWEDEN, NORWAY',
            location: 'EUROPE - PINK LINE',
            duration: '10 DAYS',
            minPax: 'MIN OF 2 PAX',
            price: '125,999',
            image: 'assets/GATT WEBSITE UPDATES/SERVICES/Europe - Pink Line.png',
            inclusions: ['Hotel Accommodation', 'Daily Hotel Breakfast', 'All Airport Transfer', 'Tours (English)', 'Guided Tours', 'Travel Tax'],
            exclusions: ['Roundtrip Flight Ticket', 'Other Personal Expenses', 'Visa Fee', 'Optional Tours', 'Tippings', 'Hotel City Tax']
        }
    ],
    
    philippines: [
        // Dumaguete
        {
            country: 'DUMAGUETE',
            location: 'PHILIPPINES',
            duration: '4 DAYS 3 NIGHTS',
            minPax: 'MIN OF 2 PAX',
            price: '9,999',
            image: 'assets/GATT WEBSITE UPDATES/SERVICES/Dumaguete.png',
            inclusions: ['Hotel Accommodation', 'Daily Breakfast', 'All Transfers', 'Environmental & Entrance Fees', 'City Tour'],
            exclusions: ['Roundtrip Airfare Ticket', 'Lunch and Dinner', 'Other Personal Expenses', 'Tips']
        },
        // Dumaguete & Siquijor
        {
            country: 'DUMAGUETE & SIQUIJOR',
            location: 'PHILIPPINES',
            duration: '4 DAYS 3 NIGHTS',
            minPax: 'MIN OF 2 PAX',
            price: '16,999',
            image: 'assets/GATT WEBSITE UPDATES/SERVICES/Dumaguete & Siquijor.png',
            inclusions: ['Hotel Accommodation', 'Daily Breakfast', 'All Transfers', 'Environmental & Entrance Fees'],
            exclusions: ['Roundtrip Airfare Ticket', 'Lunch and Dinner', 'Other Personal Expenses', 'Tips']
        },
        // Boracay
        {
            country: 'BORACAY',
            location: 'PHILIPPINES - AKLAN',
            duration: '4 DAYS 3 NIGHTS',
            minPax: 'MIN OF 2 PAX',
            price: '9,999',
            image: 'assets/GATT WEBSITE UPDATES/SERVICES/Boracay.png',
            inclusions: ['Hotel Accommodation', 'Daily Breakfast', 'All Transfers', 'Environmental & Entrance Fees', 'City Tour'],
            exclusions: ['Roundtrip Airfare Ticket', 'Lunch and Dinner', 'Other Personal Expenses']
        },
        // Cebu
        {
            country: 'CEBU',
            location: 'PHILIPPINES',
            duration: '4 DAYS 3 NIGHTS',
            minPax: 'MIN OF 2 PAX',
            price: '11,999',
            image: 'assets/GATT WEBSITE UPDATES/SERVICES/Cebu.png',
            inclusions: ['Hotel Accommodation', 'Daily Breakfast', 'All Transfers', 'Environmental & Entrance Fees', 'Cebu City and Mountain Tour'],
            exclusions: ['Roundtrip Airfare Ticket', 'Lunch and Dinner', 'Other Personal Expenses', 'Tips']
        },
        // Bohol
        {
            country: 'BOHOL',
            location: 'PHILIPPINES',
            duration: '4 DAYS 3 NIGHTS',
            minPax: 'MIN OF 2 PAX',
            price: '12,999',
            image: 'assets/GATT WEBSITE UPDATES/SERVICES/Bohol.png',
            inclusions: ['Hotel Accommodation', 'Daily Breakfast', 'All Transfers', 'Environmental & Entrance Fees', 'Bohol Countryside Tour'],
            exclusions: ['Roundtrip Airfare Ticket', 'Lunch and Dinner', 'Other Personal Expenses', 'Tips']
        },
        // Cebu & Bohol
        {
            country: 'CEBU & BOHOL',
            location: 'PHILIPPINES',
            duration: '4 DAYS 3 NIGHTS',
            minPax: 'MIN OF 2 PAX',
            price: '19,999',
            image: 'assets/GATT WEBSITE UPDATES/SERVICES/Cebu & Bohol.png',
            inclusions: ['Hotel Accommodation', 'Daily Breakfast', 'All Transfers', 'Environmental & Entrance Fees', 'Bohol Countryside Tour', 'Cebu City and Mountain Tour'],
            exclusions: ['Roundtrip Airfare Ticket', 'Lunch and Dinner', 'Other Personal Expenses', 'Tips']
        },
        // Puerto Princesa
        {
            country: 'PUERTO PRINCESA',
            location: 'PHILIPPINES - PALAWAN',
            duration: '4 DAYS 3 NIGHTS',
            minPax: 'MIN OF 2 PAX',
            price: '8,999',
            image: 'assets/GATT WEBSITE UPDATES/SERVICES/PUERTO PRINCESA.png',
            inclusions: ['Hotel Accommodation', 'Daily Breakfast', 'All Transfers', 'Environmental & Entrance Fees', 'Underground River', 'City Tour'],
            exclusions: ['Roundtrip Airfare Ticket', 'Lunch and Dinner', 'Other Personal Expenses', 'Tips']
        },
        // El Nido
        {
            country: 'EL NIDO',
            location: 'PHILIPPINES - PALAWAN',
            duration: '4 DAYS 3 NIGHTS',
            minPax: 'MIN OF 2 PAX',
            price: '10,999',
            image: 'assets/GATT WEBSITE UPDATES/SERVICES/Palawan El Nido.png',
            inclusions: ['Hotel Accommodation', 'Daily Breakfast', 'All Transfers', 'Environmental & Entrance Fees', 'Island Hopping Tour A', 'Island Hopping Tour D'],
            exclusions: ['Roundtrip Airfare Ticket', 'Lunch and Dinner', 'Other Personal Expenses', 'Tips']
        },
        // Coron
        {
            country: 'CORON',
            location: 'PHILIPPINES - PALAWAN',
            duration: '4 DAYS 3 NIGHTS',
            minPax: 'MIN OF 2 PAX',
            price: '12,999',
            image: 'assets/GATT WEBSITE UPDATES/SERVICES/Palawan Coron.png',
            inclusions: ['Hotel Accommodation', 'Daily Breakfast', 'All Transfers', 'Environmental & Entrance Fees', 'Coron Island Tour A', 'Town Tour'],
            exclusions: ['Roundtrip Airfare Ticket', 'Lunch and Dinner', 'Other Personal Expenses', 'Tips']
        },
        // Puerto Princesa & El Nido
        {
            country: 'PUERTO PRINCESA & EL NIDO',
            location: 'PHILIPPINES - PALAWAN',
            duration: '4 DAYS 3 NIGHTS',
            minPax: 'MIN OF 2 PAX',
            price: '12,999',
            image: 'assets/GATT WEBSITE UPDATES/SERVICES/Puerto Prinsesa & El NIdo.png',
            inclusions: ['Hotel Accommodation', 'Daily Breakfast', 'All Transfers', 'Environmental & Entrance Fees', 'Underground River and City Tour', 'Island Hopping Tour A'],
            exclusions: ['Roundtrip Airfare Ticket', 'Lunch and Dinner', 'Other Personal Expenses', 'Tips']
        }
    ]
};

// Package Carousel State
let currentPackageSlides = {
    asia: 0,
    europe: 0,
    philippines: 0
};



// Render Packages
function renderPackages(category) {
    const packages = travelPackages[category];
    const containerId = `${category}PackageCarousel`;
    const container = document.getElementById(containerId);
    
    if (!container) {
        console.error(`Package carousel container for ${category} not found!`);
        return;
    }
    
    console.log(`Rendering ${packages.length} packages for ${category}:`, packages.map(p => p.country));
    
    // Clear any existing content first to prevent invisible cards
    container.innerHTML = '';
    
    // Render each package card
    packages.forEach((pkg, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = `package-card bg-white rounded-lg shadow-lg border-2 border-gray-200 overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl ${category === 'europe' ? 'min-w-[220px]' : 'min-w-[280px]'} flex-shrink-0`;
        cardElement.setAttribute('data-index', index);
        cardElement.style.display = 'block'; // Ensure visibility
        
        cardElement.innerHTML = `
            <div class="relative">
                <img src="${pkg.image}" alt="${pkg.country}" class="w-full h-48 object-cover" onerror="this.src='https://via.placeholder.com/400x300/cccccc/666666?text=${encodeURIComponent(pkg.country)}'">
                <div class="absolute top-2 left-2 bg-white px-2 py-1 rounded text-xs font-bold text-indigo-600">${pkg.location}</div>
            </div>
            
            <div class="p-4">
                <h3 class="font-bold text-lg text-center text-gray-800 mb-2 border-b border-gray-200 pb-2">${pkg.country}</h3>
                <p class="text-sm text-center text-gray-600 mb-4">${pkg.duration} | ${pkg.minPax}</p>
                
                <div class="grid grid-cols-2 gap-2 mb-4 text-xs">
                    <div class="border border-green-200 rounded-lg p-2 bg-green-50">
                        <h5 class="font-semibold text-green-600 mb-1">INCLUSION</h5>
                        <ul class="text-gray-600 space-y-0.5">
                            ${pkg.inclusions.slice(0, 5).map(item => `<li>• ${item}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="border border-red-200 rounded-lg p-2 bg-red-50">
                        <h5 class="font-semibold text-red-600 mb-1">EXCLUSION</h5>
                        <ul class="text-gray-600 space-y-0.5">
                            ${pkg.exclusions.slice(0, 5).map(item => `<li>• ${item}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                
                <div class="flex gap-2">
                    <div class="bg-gradient-to-r ${getPriceColor(pkg.location)} text-white py-2 px-3 rounded-lg font-bold text-sm flex-1 flex items-center justify-center">
                        START AT ${pkg.price} /PAX
                    </div>
                    <button onclick="bookSpecificTour('${pkg.country}', '${pkg.price}')" 
                            class="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-all font-semibold whitespace-nowrap">
                        📞 Book Now
                    </button>
                </div>
            </div>
        `;
        
        container.appendChild(cardElement);
    });
    
    // Verify all cards were rendered and are visible
    const renderedCards = container.querySelectorAll('.package-card');
    const visibleCards = container.querySelectorAll('.package-card:not([style*="display: none"]):not([style*="visibility: hidden"])');
    
    console.log(`Successfully rendered ${renderedCards.length} cards out of ${packages.length} packages`);
    console.log(`Visible cards: ${visibleCards.length}, Total rendered: ${renderedCards.length}`);
    
    // Use requestAnimationFrame to ensure DOM is painted before calculating positions
    requestAnimationFrame(() => {
        // Clean up any invisible cards before updating slider
        cleanupInvisibleCards(container);
        updatePackageSlider(category);
    });
}

// Clean up invisible cards that might be causing scrolling issues
function cleanupInvisibleCards(container) {
    const allCards = container.querySelectorAll('.package-card');
    let removedCount = 0;
    
    allCards.forEach(card => {
        const computedStyle = window.getComputedStyle(card);
        if (computedStyle.display === 'none' || 
            computedStyle.visibility === 'hidden' || 
            computedStyle.opacity === '0' ||
            card.offsetWidth === 0 ||
            card.offsetHeight === 0) {
            card.remove();
            removedCount++;
        }
    });
    
    if (removedCount > 0) {
        console.log(`Cleaned up ${removedCount} invisible cards from carousel`);
    }
}

// Get Category Color
function getCategoryColor(category) {
    const colors = {
        asia: 'from-red-500 to-red-600',
        europe: 'from-blue-500 to-blue-600',
        philippines: 'from-green-500 to-green-600'
    };
    return colors[category] || 'from-indigo-500 to-indigo-600';
}

// Get Button Color based on package location
function getButtonColor(location) {
    if (location.includes('GREEN LINE')) {
        return 'bg-green-600';
    } else if (location.includes('ORANGE LINE')) {
        return 'bg-orange-600';
    } else if (location.includes('RED LINE')) {
        return 'bg-red-600';
    } else if (location.includes('PINK LINE')) {
        return 'bg-pink-600';
    } else if (location.includes('BLUE LINE')) {
        return 'bg-blue-600';
    } else if (location.includes('YELLOW LINE')) {
        return 'bg-yellow-600';
    } else {
        return 'bg-indigo-600'; // Default color
    }
}

// Get Button Hover Color based on package location
function getButtonHoverColor(location) {
    if (location.includes('GREEN LINE')) {
        return 'hover:bg-green-700';
    } else if (location.includes('ORANGE LINE')) {
        return 'hover:bg-orange-700';
    } else if (location.includes('RED LINE')) {
        return 'hover:bg-red-700';
    } else if (location.includes('PINK LINE')) {
        return 'hover:bg-pink-700';
    } else if (location.includes('BLUE LINE')) {
        return 'hover:bg-blue-700';
    } else if (location.includes('YELLOW LINE')) {
        return 'hover:bg-yellow-700';
    } else {
        return 'hover:bg-indigo-700'; // Default hover color
    }
}

// Get Price Color based on package location
function getPriceColor(location) {
    if (location.includes('GREEN LINE')) {
        return 'from-green-500 to-green-600';
    } else if (location.includes('ORANGE LINE')) {
        return 'from-orange-500 to-orange-600';
    } else if (location.includes('RED LINE')) {
        return 'from-red-500 to-red-600';
    } else if (location.includes('PINK LINE')) {
        return 'from-pink-500 to-pink-600';
    } else if (location.includes('BLUE LINE')) {
        return 'from-blue-500 to-blue-600';
    } else if (location.includes('YELLOW LINE')) {
        return 'from-yellow-500 to-yellow-600';
    } else {
        return 'from-indigo-500 to-indigo-600'; // Default color
    }
}

// Package Slider Navigation
function slidePackages(direction, category) {
    const packages = travelPackages[category];
    const containerId = `${category}PackageCarousel`;
    const container = document.getElementById(containerId);
    
    if (!container) return;
    
    // Calculate visible cards dynamically with proper gap calculation
    const firstCard = container.querySelector('.package-card');
    if (!firstCard) {
        console.warn(`No cards found for ${category} carousel, attempting to render packages first...`);
        renderPackages(category);
        return;
    }
    
    // Get the computed gap from CSS (space-x-3 = 0.75rem = 12px for Europe, space-x-5 = 1.25rem = 20px for others)
    const gap = category === 'europe' ? 12 : 20; // space-x-3 for Europe, space-x-5 for others
    const cardWidth = firstCard.offsetWidth + gap;
    
    // Safety check: ensure cardWidth is valid
    if (!cardWidth || cardWidth <= 0) {
        console.warn(`Invalid card width for ${category}: ${cardWidth}, re-rendering packages...`);
        renderPackages(category);
        return;
    }
    
    const containerWidth = container.parentElement.offsetWidth - 32; // Account for padding (px-4 = 16px on each side)
    const visibleCards = Math.max(1, Math.floor(containerWidth / cardWidth));
    const maxSlides = Math.max(0, packages.length - visibleCards);
    
    // Safety check: ensure maxSlides doesn't exceed the actual number of packages
    const actualMaxSlides = Math.max(0, packages.length - 1);
    const safeMaxSlides = Math.min(maxSlides, actualMaxSlides);
    
    console.log(`Sliding ${direction}: current=${currentPackageSlides[category]}, max=${safeMaxSlides}, visible=${visibleCards}, total=${packages.length}, containerWidth=${containerWidth}, cardWidth=${cardWidth}`);
    
    if (direction === 'next') {
        // Loop back to start if at the end
        if (currentPackageSlides[category] >= safeMaxSlides) {
            currentPackageSlides[category] = 0;
        } else {
            currentPackageSlides[category] = currentPackageSlides[category] + 1;
        }
    } else {
        // Loop to the end if at the beginning
        if (currentPackageSlides[category] <= 0) {
            currentPackageSlides[category] = safeMaxSlides;
        } else {
            currentPackageSlides[category] = currentPackageSlides[category] - 1;
        }
    }
    
    // Ensure currentPackageSlides stays within bounds
    currentPackageSlides[category] = Math.max(0, Math.min(currentPackageSlides[category], safeMaxSlides));
    
    // Update the slider immediately
    updatePackageSlider(category);
}

// Update Package Slider Position
function updatePackageSlider(category) {
    const containerId = `${category}PackageCarousel`;
    const container = document.getElementById(containerId);
    if (!container) return;
    
    // Get actual card width from rendered elements with proper gap
    const firstCard = container.querySelector('.package-card');
    if (!firstCard) {
        console.warn(`No cards found for ${category} carousel in updatePackageSlider, attempting to render packages first...`);
        renderPackages(category);
        return;
    }
    
    const gap = category === 'europe' ? 12 : 20; // space-x-3 for Europe, space-x-5 for others
    const cardWidth = firstCard.offsetWidth + gap;
    
    // Safety check: ensure cardWidth is valid
    if (!cardWidth || cardWidth <= 0) {
        console.warn(`Invalid card width for ${category} in updatePackageSlider: ${cardWidth}, re-rendering packages...`);
        renderPackages(category);
        return;
    }
    
    // Update navigation buttons with responsive calculation
    const packages = travelPackages[category];
    const containerWidth = container.parentElement.offsetWidth - 32; // Account for padding (px-4 = 16px on each side)
    const visibleCards = Math.floor(containerWidth / cardWidth);
    const maxSlides = Math.max(0, packages.length - visibleCards);
    
    // Safety check: ensure maxSlides doesn't exceed the actual number of packages
    const actualMaxSlides = Math.max(0, packages.length - 1);
    const safeMaxSlides = Math.min(maxSlides, actualMaxSlides);
    
    // Ensure currentPackageSlides stays within bounds before calculating translateX
    currentPackageSlides[category] = Math.max(0, Math.min(currentPackageSlides[category], safeMaxSlides));
    
    // Get actual rendered cards (not just packages.length) to check for invisible cards
    const actualRenderedCards = container.querySelectorAll('.package-card:not([style*="display: none"]):not([style*="visibility: hidden"])').length;
    
    // Calculate the maximum allowed translation based on actual rendered cards
    const maxTranslateX = -(actualRenderedCards - visibleCards) * cardWidth;
    let translateX = -currentPackageSlides[category] * cardWidth;
    
    // Ensure translateX stays within reasonable bounds
    translateX = Math.max(maxTranslateX, translateX);
    
    // Debug: Check for invisible cards
    console.log(`Debug: actualRenderedCards=${actualRenderedCards}, packages.length=${packages.length}, visibleCards=${visibleCards}`);
    
    container.style.transform = `translateX(${translateX}px)`;
    
    console.log(`Slider update: category=${category}, current=${currentPackageSlides[category]}, max=${safeMaxSlides}, visible=${visibleCards}, total=${packages.length}, translateX=${translateX}, maxTranslateX=${maxTranslateX}`);
    
    const prevBtn = document.getElementById(`${category}PrevBtn`);
    const nextBtn = document.getElementById(`${category}NextBtn`);
    
    if (prevBtn && nextBtn) {
        // Since carousel now loops infinitely, buttons are always active
        prevBtn.style.opacity = '1';
        nextBtn.style.opacity = '1';
        prevBtn.style.pointerEvents = 'auto';
        nextBtn.style.pointerEvents = 'auto';
    }
}

// Mobile Touch Support for Package Carousel
function addPackageCarouselTouchSupport() {
    const categories = ['asia', 'europe', 'philippines'];
    
    categories.forEach(category => {
        const carousel = document.getElementById(`${category}PackageCarousel`);
        if (!carousel) return;
        
        let startX = 0;
        let endX = 0;
        
        carousel.addEventListener('touchstart', function(e) {
            startX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        carousel.addEventListener('touchend', function(e) {
            endX = e.changedTouches[0].screenX;
            const swipeThreshold = 50;
            const swipeDistance = startX - endX;
            
            if (Math.abs(swipeDistance) > swipeThreshold) {
                if (swipeDistance > 0) {
                    slidePackages('next', category);
                } else {
                    slidePackages('prev', category);
                }
            }
        }, { passive: true });
    });
}

// Initialize Packages on DOM Load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize packages if on services page with delay to ensure DOM is rendered
    setTimeout(() => {
        if (document.getElementById('asiaPackageCarousel')) {
            console.log('Initializing package carousels...');
            
            // Render all three categories at once
            renderPackages('asia');
            renderPackages('europe');
            renderPackages('philippines');
            
            addPackageCarouselTouchSupport();
            
            // Add window resize listener to recalculate on window resize
            window.addEventListener('resize', function() {
                const categories = ['asia', 'europe', 'philippines'];
                categories.forEach(category => {
                    updatePackageSlider(category);
                });
            });
            
            // Debug function to check carousel state
            window.debugCarousel = function() {
                const categories = ['asia', 'europe', 'philippines'];
                
                categories.forEach(category => {
                    const container = document.getElementById(`${category}PackageCarousel`);
                    const cards = container?.querySelectorAll('.package-card');
                    const packages = travelPackages[category];
                    
                    console.log(`=== ${category.toUpperCase()} CAROUSEL DEBUG ===`);
                    console.log('Category:', category);
                    console.log('Total packages:', packages.length);
                    console.log('Rendered cards:', cards?.length || 0);
                    console.log('Current slide:', currentPackageSlides[category]);
                    console.log('Container width:', container?.parentElement.offsetWidth);
                    console.log('First card width:', cards?.[0]?.offsetWidth);
                    if (cards?.[0]) {
                        console.log('Visible cards calculation:', Math.floor((container.parentElement.offsetWidth - 32) / (cards[0].offsetWidth + 20)));
                    }
                    
                    // Check for invisible cards
                    if (cards) {
                        let invisibleCount = 0;
                        cards.forEach((card, index) => {
                            const computedStyle = window.getComputedStyle(card);
                            if (computedStyle.display === 'none' || 
                                computedStyle.visibility === 'hidden' || 
                                computedStyle.opacity === '0' ||
                                card.offsetWidth === 0 ||
                                card.offsetHeight === 0) {
                                invisibleCount++;
                                console.log(`Invisible card found at index ${index}:`, card);
                            }
                        });
                        console.log(`Invisible cards found: ${invisibleCount}`);
                    }
                    
                    console.log('=====================');
                });
            };
            
            // Force a recalculation after a short delay to ensure proper positioning
            setTimeout(() => {
                const categories = ['asia', 'europe', 'philippines'];
                categories.forEach(category => {
                    // Reset carousel state if there are issues
                    if (currentPackageSlides[category] > 0) {
                        currentPackageSlides[category] = 0;
                    }
                    updatePackageSlider(category);
                });
            }, 200);
        }
    }, 100);
    
    // Also check if we're already on the services tab and render packages
    if (document.getElementById('services')?.classList.contains('active')) {
        console.log('Already on services tab, rendering packages...');
        setTimeout(() => {
            if (document.getElementById('asiaPackageCarousel')) {
                renderPackages('asia');
                renderPackages('europe');
                renderPackages('philippines');
                addPackageCarouselTouchSupport();
            }
        }, 200);
    }
});

// Mobile menu functionality
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
        // Change icon to X
        mobileMenuBtn.innerHTML = `
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        `;
    } else {
        mobileMenu.classList.add('hidden');
        // Change icon back to hamburger
        mobileMenuBtn.innerHTML = `
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        `;
    }
}

// Initialize mobile menu and back to top
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
    
    // Back to top functionality
    // Navigation scroll functionality
    let lastScrollTop = 0;
    const nav = document.querySelector('nav');
    const scrollThreshold = 100; // Minimum scroll distance to trigger nav show/hide
    
    window.addEventListener('scroll', function() {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Show navigation when scrolling up or at the top
        if (currentScrollTop <= scrollThreshold || currentScrollTop < lastScrollTop) {
            nav.classList.remove('nav-hidden');
            nav.classList.add('nav-visible');
        } 
        // Hide navigation when scrolling down (but not at the very top)
        else if (currentScrollTop > scrollThreshold && currentScrollTop > lastScrollTop) {
            nav.classList.add('nav-hidden');
            nav.classList.remove('nav-visible');
        }
        
        lastScrollTop = currentScrollTop;
    });
    
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });
        
        // Smooth scroll to top when clicked
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Commented out: Services slider is now a grid layout, not a slider
    // updateMainServicesSlider();
});

function showTab(tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });

    // Remove active class from all tab buttons (desktop and mobile)
    const tabButtons = document.querySelectorAll('.tab-button, .tab-button-mobile');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });

    // Show selected tab content
    document.getElementById(tabName).classList.add('active');

    // Add active class to clicked button
    event.target.classList.add('active');

    // Scroll to top
    window.scrollTo(0, 0);
    
    // If switching to services tab, render the package carousels
    if (tabName === 'services') {
        setTimeout(() => {
            console.log('Services tab activated, rendering package carousels...');
            // Check if carousel containers exist and render packages
            if (document.getElementById('asiaPackageCarousel')) {
                renderPackages('asia');
                renderPackages('europe');
                renderPackages('philippines');
                
                // Add touch support
                addPackageCarouselTouchSupport();
                
                // Update sliders after rendering
                setTimeout(() => {
                    const categories = ['asia', 'europe', 'philippines'];
                    categories.forEach(category => {
                        updatePackageSlider(category);
                    });
                }, 100);
            }
        }, 150); // Small delay to ensure DOM is ready
    }
    
    // Update back to top button visibility after tab switch
    setTimeout(() => {
        const backToTopBtn = document.getElementById('backToTop');
        if (backToTopBtn) {
            // All tabs now have the same structure, so use consistent behavior
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        }
    }, 100);
}



// Survey form handling
document.addEventListener('DOMContentLoaded', function() {
    const surveyForm = document.querySelector('#surveyForm');
    if (surveyForm) {
        surveyForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            const requiredFields = ['booking-ease', 'information-clarity', 'value-money'];
            let allFilled = true;
            
            requiredFields.forEach(field => {
                const fieldElement = document.querySelector(`input[name="${field}"]:checked`);
                if (!fieldElement) {
                    allFilled = false;
                }
            });
            
            if (!allFilled) {
                showNotification('⚠️ Please answer all required questions before submitting.', 'warning');
                return;
            }
            
            // Show loading state
            const submitButton = surveyForm.querySelector('button[type="submit"]');
            const originalHTML = submitButton.innerHTML;
            submitButton.innerHTML = `<span class="loading-spinner mr-2"></span>Submitting...`;
            submitButton.disabled = true;
            
            // Calculate overall rating based on radio button selections
            let totalRating = 0;
            let ratingCount = 0;
            
            // Get ratings from radio buttons
            const bookingEaseRating = document.querySelector('input[name="booking-ease"]:checked')?.dataset.rating;
            const informationClarityRating = document.querySelector('input[name="information-clarity"]:checked')?.dataset.rating;
            const valueMoneyRating = document.querySelector('input[name="value-money"]:checked')?.dataset.rating;
            
            if (bookingEaseRating) {
                totalRating += parseInt(bookingEaseRating);
                ratingCount++;
            }
            if (informationClarityRating) {
                totalRating += parseInt(informationClarityRating);
                ratingCount++;
            }
            if (valueMoneyRating) {
                totalRating += parseInt(valueMoneyRating);
                ratingCount++;
            }
            
            // Calculate average rating
            const overallRating = ratingCount > 0 ? Math.round(totalRating / ratingCount) : 0;
            
            // Update hidden field
            document.getElementById('overallRating').value = overallRating;
            
            // Collect survey data - using the same structure as Contact form
            const templateParams = {
                email: 'feedback@graciousangeli.com', // Always send feedback to your email
                booking_ease: document.querySelector('input[name="booking-ease"]:checked')?.value || 'Not answered',
                information_clarity: document.querySelector('input[name="information-clarity"]:checked')?.value || 'Not answered',
                value_money: document.querySelector('input[name="value-money"]:checked')?.value || 'Not answered',
                improvements: document.querySelector('textarea[name="improvements"]')?.value || 'No suggestions',
                experience: document.querySelector('select[name="experience"]')?.value || 'Not specified',
                overall_rating: overallRating,
                timestamp: new Date().toLocaleString()
            };
            
            // Send survey via EmailJS - using the same pattern as Contact form
            console.log('Sending survey data:', templateParams);
            console.log('Service ID:', 'service_l7tgzys');
            console.log('Template ID:', 'template_ni8iegk');
            
            emailjs.send('service_l7tgzys', 'template_ni8iegk', templateParams)
                .then(function(response) {
                    console.log('Survey EmailJS success:', response.status, response.text);
                    showNotification('✅ Thank you for your feedback! We appreciate your input and will use it to improve our services.', 'success');
                    surveyForm.reset();
                    submitButton.innerHTML = '📤 Submit Feedback';
                    submitButton.disabled = false;
                    // Close the survey modal after successful submission
                    closeSurveyModal();
                }, function(error) {
                    console.error('Survey EmailJS error:', error);
                    console.error('Error details:', {
                        status: error.status,
                        text: error.text,
                        response: error.response
                    });
                    showNotification('✅ Thank you for your feedback! We appreciate your input.', 'success'); // Show success anyway for better UX
                    surveyForm.reset();
                    submitButton.innerHTML = '📤 Submit Feedback';
                    submitButton.disabled = false;
                    // Close the survey modal even if there's an error
                    closeSurveyModal();
                });
        });
    }
});

// Contact form handling with EmailJS
const contactForm = document.querySelector('#contact form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Validation
        if (!name || !email || !subject || !message) {
            showNotification('❌ Please fill in all required fields.', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('❌ Please enter a valid email address.', 'error');
            return;
        }
        
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalHTML = submitButton.innerHTML;
        
        // Show loading state
        submitButton.innerHTML = `<span class="loading-spinner mr-2"></span>Sending...`;
        submitButton.disabled = true;
        
        // Send email using EmailJS
        const templateParams = {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message
        };
        
        console.log('Sending contact form data:', templateParams);
        console.log('Service ID:', 'service_l7tgzys');
        console.log('Template ID:', 'template_ld0fd4g');
        
        emailjs.send('service_l7tgzys', 'template_ld0fd4g', templateParams)
            .then(function(response) {
                console.log('EmailJS success:', response.status, response.text);
                showNotification('✅ Thank you for your message! We will get back to you soon.', 'success');
                contactForm.reset();
                submitButton.innerHTML = 'Send Message';
                submitButton.disabled = false;
                
                // Show survey popup after successful contact form submission
                setTimeout(() => {
                    showSurveyModal();
                }, 2000);
            }, function(error) {
                console.error('EmailJS error details:', error);
                console.error('Error details:', {
                    status: error.status,
                    text: error.text,
                    response: error.response
                });
                console.log('Service ID:', 'service_l7tgzys');
                console.log('Template ID:', 'template_ld0fd4g');
                console.log('Template Params:', templateParams);
                showNotification('❌ Sorry, there was an error sending your message. Please try again or contact us directly.', 'error');
                submitButton.innerHTML = 'Send Message';
                submitButton.disabled = false;
            });
    });
}

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Test function for EmailJS debugging
function testEmailJS() {
    console.log('Testing EmailJS configuration...');
    console.log('EmailJS object:', typeof emailjs);
    
    const templateParams = {
        email: 'angelica.linglingon@gmail.com', // Always send to your email
        booking_ease: 'Very Easy',
        information_clarity: 'Very Clear',
        value_money: 'Excellent Value',
        improvements: 'Test feedback message',
        experience: 'Frequent Traveler',
        overall_rating: 5,
        timestamp: new Date().toLocaleString()
    };
    
    console.log('Sending test data:', templateParams);
    
    emailjs.send('service_l7tgzys', 'template_ni8iegk', templateParams)
        .then(function(response) {
            console.log('✅ Test EmailJS success:', response.status, response.text);
            alert('Test email sent successfully! Check your email.');
        }, function(error) {
            console.error('❌ Test EmailJS error:', error);
            console.error('Error details:', {
                status: error.status,
                text: error.text,
                response: error.response
            });
            alert('Test email failed. Check console for details.');
        });
}

// Test function for contact form EmailJS
function testContactEmailJS() {
    console.log('Testing Contact EmailJS configuration...');
    
    const templateParams = {
        from_name: 'Test User',
        from_email: 'test@example.com',
        subject: 'Test Contact Form',
        message: 'This is a test message from the contact form.'
    };
    
    console.log('Sending test contact data:', templateParams);
    
    emailjs.send('service_l7tgzys', 'template_ld0fd4g', templateParams)
        .then(function(response) {
            console.log('✅ Test Contact EmailJS success:', response.status, response.text);
            alert('Test contact email sent successfully! Check your email.');
        }, function(error) {
            console.error('❌ Test Contact EmailJS error:', error);
            console.error('Error details:', {
                status: error.status,
                text: error.text,
                response: error.response
            });
            alert('Test contact email failed. Check console for details.');
        });
}

// Comprehensive EmailJS debugging function
function debugEmailJS() {
    console.log('=== EMAILJS DEBUGGING ===');
    console.log('1. EmailJS object:', typeof emailjs);
    console.log('2. EmailJS version:', emailjs?.version);
    console.log('3. EmailJS services:', emailjs?.services);
    console.log('4. EmailJS templates:', emailjs?.templates);
    
    // Test if EmailJS is properly initialized
    if (typeof emailjs === 'undefined') {
        console.error('❌ EmailJS is not loaded!');
        alert('EmailJS is not loaded. Check if the script is included.');
        return;
    }
    
    // Test service connection
    emailjs.send('service_l7tgzys', 'template_ld0fd4g', {
        from_name: 'Debug Test',
        from_email: 'debug@test.com',
        subject: 'Debug Test',
        message: 'This is a debug test.'
    })
    .then(function(response) {
        console.log('✅ Service connection test successful:', response);
        alert('Service connection test successful! Check your email.');
    })
    .catch(function(error) {
        console.error('❌ Service connection test failed:', error);
        alert('Service connection test failed. Check console for details.');
    });
}

// Show success/error messages with enhanced styling
function showNotification(message, type = 'info', duration = 5000) {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transition-all duration-300 transform translate-x-full max-w-sm`;
    
    // Set notification style based on type
    const styles = {
        success: 'bg-green-500 text-white',
        error: 'bg-red-500 text-white', 
        warning: 'bg-yellow-500 text-white',
        info: 'bg-blue-500 text-white'
    };

    notification.className += ` ${styles[type] || styles.info}`;

    const icons = {
        success: '✅',
        error: '❌', 
        warning: '⚠️',
        info: 'ℹ️'
    };

    notification.innerHTML = `
        <div class="flex items-center">
            <span class="mr-2" style="font-size: 1.2em;">${icons[type] || icons.info}</span>
            <span>${message}</span>
            <button onclick="this.parentElement.parentElement.remove()" class="ml-4 text-white hover:text-gray-200 focus:outline-none">×</button>
        </div>
    `;

    document.body.appendChild(notification);

    // Animate in
    requestAnimationFrame(() => {
        notification.classList.remove('translate-x-full');
    });

    // Auto remove
    if (duration > 0) {
        setTimeout(() => {
            if (notification.parentElement) {
                notification.classList.add('translate-x-full');
                setTimeout(() => {
                    if (notification.parentElement) {
                        notification.remove();
                    }
                }, 300);
            }
        }, duration);
    }

    return notification;
}

// Service slider variables and functions (keeping for compatibility)
let mainServicesCurrentSlide = 0;

function slideMainServices(direction) {
    const slider = document.getElementById('servicesSlider');
    const cards = slider.children;
    const cardWidth = cards[0].offsetWidth + 24; // Include gap
    
    if (direction === 'next') {
        mainServicesCurrentSlide = (mainServicesCurrentSlide + 1) % cards.length;
    } else {
        mainServicesCurrentSlide = mainServicesCurrentSlide === 0 ? cards.length - 1 : mainServicesCurrentSlide - 1;
    }
    
    const translateX = -mainServicesCurrentSlide * cardWidth;
    slider.style.transform = `translateX(${translateX}px)`;
    
    updateMainServicesSlider();
}

function goToMainServicesSlide(index) {
    mainServicesCurrentSlide = index;
    const slider = document.getElementById('servicesSlider');
    const cards = slider.children;
    const cardWidth = cards[0].offsetWidth + 24;
    
    const translateX = -mainServicesCurrentSlide * cardWidth;
    slider.style.transform = `translateX(${translateX}px)`;
    
    updateMainServicesSlider();
}

function updateMainServicesSlider() {
    const indicators = document.querySelectorAll('.services-indicator');
    indicators.forEach((indicator, index) => {
        if (index === mainServicesCurrentSlide) {
            indicator.classList.add('bg-indigo-600');
            indicator.classList.remove('bg-gray-300');
        } else {
            indicator.classList.add('bg-gray-300');
            indicator.classList.remove('bg-indigo-600');
        }
    });
}

// Handle package click for study abroad programs
function handlePackageClick(packageType) {
    showTab('contact');
    
    setTimeout(() => {
        const contactForm = document.querySelector('#contact form');
        if (contactForm) {
            const messageField = contactForm.querySelector('textarea[name="message"]');
            const subjectField = contactForm.querySelector('input[name="subject"]');
            
            let subject = '';
            let message = '';
            
            if (packageType === 'australia') {
                subject = 'Study Abroad Inquiry - Australia';
                message = `Hello,

I'm interested in studying abroad in Australia and would like to learn more about the available programs and application process.

I'm particularly interested in:
• Engineering, Business, IT & Computing, or Healthcare programs
• Work while studying opportunities
• Pathway to permanent residency
• University options and requirements

Please provide information about:
• Available programs and universities
• Application requirements and deadlines
• Tuition fees and living costs
• Visa application process
• Work opportunities during studies

Thank you for your assistance.

Best regards,
[Your Name]`;
            } else if (packageType === 'canada') {
                subject = 'Study Abroad Inquiry - Canada';
                message = `Hello,

I'm interested in studying abroad in Canada and would like to learn more about the available programs and application process.

I'm particularly interested in:
• Medicine, MBA, Computer Science, or Environmental Studies programs
• Affordable tuition options
• Multicultural learning environment
• Immigration-friendly policies

Please provide information about:
• Available programs and universities
• Application requirements and deadlines
• Tuition fees and living costs
• Visa application process
• Post-graduation work opportunities

Thank you for your assistance.

Best regards,
[Your Name]`;
            } else if (packageType === 'philippines') {
                subject = 'Philippines Travel Inquiry';
                message = `Hello,

I'm interested in exploring travel opportunities in the Philippines and would like to learn more about available packages and destinations.

I'm particularly interested in:
• Domestic tour packages (Boracay, Palawan, Cebu, Bohol, etc.)
• International travel from Philippines
• Visa assistance services
• Air ticketing and hotel bookings

Please provide information about:
• Available domestic and international packages
• Pricing and inclusions
• Travel dates and availability
• Visa requirements (if applicable)
• Booking process and requirements

Thank you for your assistance.

Best regards,
[Your Name]`;
            }
            
            if (messageField && message) {
                messageField.value = message;
            }
            
            if (subjectField && subject) {
                subjectField.value = subject;
            }

            // Focus on the name field
            const nameField = contactForm.querySelector('input[name="name"]');
            if (nameField) {
                nameField.focus();
            }

            // Scroll to form
            contactForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            let notificationMessage = '';
            if (packageType === 'australia') {
                notificationMessage = 'Redirecting you to inquire about studying in Australia...';
            } else if (packageType === 'canada') {
                notificationMessage = 'Redirecting you to inquire about studying in Canada...';
            } else if (packageType === 'philippines') {
                notificationMessage = 'Redirecting you to inquire about Philippines travel packages...';
            }
            showNotification(notificationMessage, 'info', 3000);
        }
    }, 100);
}

// Book tour function
function bookTour(packageName = '', price = '') {
    showTab('contact');
    
    setTimeout(() => {
        const contactForm = document.querySelector('#contact form');
        if (contactForm) {
            // Pre-fill the message field
            const messageField = contactForm.querySelector('textarea[name="message"]');
            const subjectField = contactForm.querySelector('input[name="subject"]');
            
            if (messageField && packageName) {
                messageField.value = `I'm interested in booking the ${packageName} package${price ? ` (${price})` : ''}. Please provide more details and availability.`;
            }
            
            if (subjectField && packageName) {
                subjectField.value = `Booking Inquiry - ${packageName}`;
            }

            // Focus on the name field
            const nameField = contactForm.querySelector('input[name="name"]');
            if (nameField) {
                nameField.focus();
            }

            // Scroll to form
            contactForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            if (packageName) {
                showNotification(`Redirecting you to book ${packageName}...`, 'info', 3000);
            }
        }
    }, 100);
}

function bookSpecificTour(packageName, price) {
    bookTour(packageName, price);
}

// Europe tour slider
let europeCurrentSlide = 0;

// Mobile touch support for sliders
let touchStartX = 0;
let touchEndX = 0;

function handleTouchStart(e) {
    touchStartX = e.changedTouches[0].screenX;
}

function handleTouchEnd(e, sliderType) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipeGesture(sliderType);
}

function handleSwipeGesture(sliderType) {
    const swipeThreshold = 50; // Minimum distance for a swipe
    const swipeDistance = touchStartX - touchEndX;
    
    if (Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0) {
            // Swipe left - next slide
            if (sliderType === 'europe') {
                slideEurope('next');
            } else if (sliderType === 'services') {
                slideMainServices('next');
            }
        } else {
            // Swipe right - previous slide
            if (sliderType === 'europe') {
                slideEurope('prev');
            } else if (sliderType === 'services') {
                slideMainServices('prev');
            }
        }
    }
}

// Add touch event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add touch support to Europe slider
    const europeSlider = document.getElementById('europeSlider');
    if (europeSlider) {
        europeSlider.addEventListener('touchstart', handleTouchStart, { passive: true });
        europeSlider.addEventListener('touchend', (e) => handleTouchEnd(e, 'europe'), { passive: true });
    }
    
    // Add touch support to Services slider
    const servicesSlider = document.getElementById('servicesSlider');
    if (servicesSlider) {
        servicesSlider.addEventListener('touchstart', handleTouchStart, { passive: true });
        servicesSlider.addEventListener('touchend', (e) => handleTouchEnd(e, 'services'), { passive: true });
    }
});

function slideEurope(direction) {
    const slider = document.getElementById('europeSlider');
    const cards = slider.children;
    
    if (direction === 'next') {
        europeCurrentSlide = (europeCurrentSlide + 1) % cards.length;
    } else {
        europeCurrentSlide = europeCurrentSlide === 0 ? cards.length - 1 : europeCurrentSlide - 1;
    }
    
    const cardWidth = cards[0].offsetWidth + 32; // Include gap
    const translateX = -europeCurrentSlide * cardWidth;
    slider.style.transform = `translateX(${translateX}px)`;
    
    updateEuropeSlider();
}

function goToEuropeSlide(index) {
    europeCurrentSlide = index;
    const slider = document.getElementById('europeSlider');
    const cards = slider.children;
    const cardWidth = cards[0].offsetWidth + 32;
    
    const translateX = -europeCurrentSlide * cardWidth;
    slider.style.transform = `translateX(${translateX}px)`;
    
    updateEuropeSlider();
}

function updateEuropeSlider() {
    const indicators = document.querySelectorAll('.europe-indicator');
    indicators.forEach((indicator, index) => {
        if (index === europeCurrentSlide) {
            indicator.classList.add('bg-indigo-600');
            indicator.classList.remove('bg-gray-300');
        } else {
            indicator.classList.add('bg-gray-300');
            indicator.classList.remove('bg-indigo-600');
        }
    });
}

// Location data
const locations = {
    'main-office': {
        name: 'Main Office',
        address: 'GRACIOUS ANGELI Travel & Tours, Skyworld Commercial Center, Session Rd, Baguio, 2600 Benguet',
        phone: '+63-9175061996',
        hours: '9:00 AM - 6:00 PM (Monday to Saturday)',
        description: 'Central Baguio, near Session Road',
        coordinates: [16.412590408990027, 120.59720591203987]
    },
    'sm-city': {
        name: 'SM City Branch',
        address: 'Upper Basement (Opposite DFA), SM City, Baguio City 2600',
        phone: '+63-9171583664',
        hours: '10:00 AM - 10:00 PM (Monday to Sunday)',
        description: 'Inside SM City Mall, near DFA Office',
        coordinates: [16.408925128010214, 120.59941468598012]
    },
    'ymca': {
        name: 'YMCA Branch',
        address: 'Ground Floor, YMCA Bldg., Upper Session Road, Baguio City 2600',
        phone: '+63-9171060994',
        hours: '9:00 AM - 5:00 PM (Monday to Saturday)',
        description: 'Historic YMCA Building',
        coordinates: [16.410983796278103, 120.59980943432205]
    },
    'santiago': {
        name: 'Santiago Branch',
        address: 'Gracious Angeli Travel Tours, Level 2, Robinsons Place, Santiago 1, Santiago, Isabela',
        phone: '+63-9958424115',
        hours: '10:00 AM - 9:00 PM (Monday to Sunday)',
        description: 'Inside Robinsons Mall',
        coordinates: [16.696211843689365, 121.56102450731797]
    }
};

// Global map variable to track current map instance
let currentMap = null;

// Auto-hiding navbar functionality
let lastScrollTop = 0;
let navbar = null;

function handleNavbarScroll() {
    if (!navbar) return;
    
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScrollTop > lastScrollTop && currentScrollTop > 100) {
        // Scrolling down - hide navbar
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up - show navbar
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = currentScrollTop;
}

function showBaguioLocations() {
    const baguioLocations = [
        locations['main-office'],
        locations['sm-city'],
        locations['ymca']
    ];
    
    const modal = document.getElementById('mapModal');
    const title = document.getElementById('mapTitle');
    const content = document.getElementById('locationDetailsContent');
    
    title.textContent = 'Baguio City Locations';
    
    let locationHTML = `
        <div class="space-y-4">
            <h4 class="text-lg font-bold text-indigo-600 border-b border-indigo-200 pb-2">🏔️ Baguio City Branches</h4>
    `;
    
    baguioLocations.forEach((loc, index) => {
        const colors = ['indigo', 'blue', 'purple'];
        const color = colors[index];
        
        locationHTML += `
            <div class="bg-${color}-50 p-3 rounded-lg border-2 border-${color}-200">
                <h5 class="font-bold text-${color}-600 mb-1">${index === 0 ? '🏢' : '🏬'} ${loc.name}</h5>
                <p class="text-sm text-gray-700">${loc.address}</p>
                <div class="mt-2 text-xs text-${color}-600">📞 ${loc.phone}</div>
                <button onclick="openGoogleMaps('${loc.address}', ${loc.coordinates[0]}, ${loc.coordinates[1]})" 
                        class="mt-2 w-full bg-${color}-600 text-white py-1 px-2 rounded text-xs hover:bg-${color}-700 transition-all">
                    🧭 Navigate
                </button>
            </div>
        `;
    });
    
    locationHTML += `
            <div class="p-3 bg-gray-100 rounded-lg">
                <p class="text-gray-600 text-sm">🌡️ Cool mountain climate • 🚗 1,540m above sea level • 🌲 Summer capital of the Philippines</p>
            </div>
        </div>
    `;
    
    content.innerHTML = locationHTML;
    modal.classList.remove('hidden');
    
    // Initialize map
    setTimeout(() => {
        initializeBaguioMap(baguioLocations);
    }, 100);
}

function initializeBaguioMap(locations) {
    // Destroy existing map if it exists
    if (currentMap) {
        currentMap.remove();
    }
    
    // Create new map centered on Baguio City
    currentMap = L.map('map').setView([16.4023, 120.5960], 13);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(currentMap);
    
    // Create bounds to fit all markers
    const bounds = L.latLngBounds();
    
    locations.forEach((loc, index) => {
        const colors = ['#1e40af', '#3b82f6', '#8b5cf6'];
        
        const customIcon = L.icon({
            iconUrl: 'assets/GATT WEBSITE UPDATES/ICONS/pin.png',
            iconSize: [32, 32],
            iconAnchor: [16, 32],
            popupAnchor: [0, -32]
        });
        
        const marker = L.marker([loc.coordinates[0], loc.coordinates[1]], { icon: customIcon }).addTo(currentMap);
        
        // Create popup content without navigation button
        const popupContent = `
            <div style="text-align: center; min-width: 200px;">
                <h3 style="margin: 0 0 8px 0; color: #1e40af; font-weight: bold;">${loc.name}</h3>
                <p style="margin: 4px 0; color: #374151;">${loc.address}</p>
                <p style="margin: 4px 0; color: #059669; font-weight: 500;">📞 ${loc.phone}</p>
                <p style="margin: 4px 0; color: #7c3aed;">🕒 ${loc.hours}</p>
                <p style="margin: 4px 0; color: #dc2626; font-style: italic;">${loc.description}</p>
            </div>
        `;
        
        marker.bindPopup(popupContent);
        bounds.extend([loc.coordinates[0], loc.coordinates[1]]);
    });
    
    // Fit map to bounds
    currentMap.fitBounds(bounds);
}

function initializeMap(location) {
    // Destroy existing map if it exists
    if (currentMap) {
        currentMap.remove();
    }
    
    // Create new map centered on the specific location
    currentMap = L.map('map').setView([location.coordinates[0], location.coordinates[1]], 15);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(currentMap);
    
    // Create custom pin icon using your downloaded icon
    const customPinIcon = L.icon({
        iconUrl: 'assets/GATT WEBSITE UPDATES/ICONS/pin.png',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
    });
    
    L.marker([location.coordinates[0], location.coordinates[1]], { icon: customPinIcon })
        .addTo(currentMap)
        .bindPopup(`
            <div style="padding: 10px; max-width: 250px; text-align: center;">
                <h3 style="font-weight: bold; margin-bottom: 5px; color: #1e40af;">${location.name}</h3>
                <p style="margin: 5px 0; color: #374151;">${location.address}</p>
                <p style="margin: 5px 0; color: #059669; font-weight: 500;">📞 ${location.phone}</p>
                <p style="margin: 5px 0; color: #7c3aed;">🕒 ${location.hours}</p>
                <p style="margin: 5px 0; color: #dc2626; font-style: italic;">${location.description}</p>
            </div>
        `);
}

function showLocation(locationId) {
    const location = locations[locationId];
    if (!location) return;
    
    const modal = document.getElementById('mapModal');
    const title = document.getElementById('mapTitle');
    const content = document.getElementById('locationDetailsContent');
    
    title.textContent = location.name;
    
    content.innerHTML = `
        <div class="space-y-4">
            <h4 class="text-lg font-bold text-indigo-600 border-b border-indigo-200 pb-2">📍 ${location.name}</h4>
            <div class="space-y-3">
                <div class="flex items-start space-x-3">
                    <div class="text-xl">📍</div>
                    <div>
                        <p class="font-semibold text-gray-800">Address:</p>
                        <p class="text-gray-600 text-sm">${location.address}</p>
                    </div>
                </div>
                
                <div class="flex items-start space-x-3">
                    <div class="text-xl">🕒</div>
                    <div>
                        <p class="font-semibold text-gray-800">Hours:</p>
                        <p class="text-gray-600 text-sm">${location.hours}</p>
                    </div>
                </div>
                
                <div class="flex items-center space-x-2">
                    <span>📞</span>
                    <span class="text-gray-700">${location.phone}</span>
                </div>
                
                <div class="p-2 bg-gray-50 rounded border border-gray-200">
                    <p class="text-xs text-gray-600">💡 ${location.description}</p>
                </div>
            </div>
            
            <div class="pt-4 border-t border-gray-200">
                <div class="space-y-2">
                    <button onclick="openGoogleMaps('${location.address}', ${location.coordinates[0]}, ${location.coordinates[1]})" 
                            class="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center space-x-2">
                        <span class="text-lg">🧭</span>
                        <span>Navigate with Google Maps</span>
                    </button>
                    <button onclick="copyAddress('${location.address}')" 
                            class="w-full bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center space-x-2">
                        <span class="text-lg">📋</span>
                        <span>Copy Address</span>
                    </button>
                </div>
            </div>
        </div>
    `;
    
    modal.classList.remove('hidden');
    
    // Initialize single location map
    setTimeout(() => {
        initializeMap(location);
    }, 100);
}

function hideLocation() {
    const modal = document.getElementById('mapModal');
    modal.classList.add('hidden');
    
    // Clean up map when modal is hidden
    if (currentMap) {
        currentMap.remove();
        currentMap = null;
    }
}

function openGoogleMaps(address, lat, lng) {
    // Use search URL instead of directions URL to show the place without navigation
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(googleMapsUrl, '_blank');
}

function copyAddress(address) {
    navigator.clipboard.writeText(address).then(function() {
        showCopySuccess();
    }).catch(function(err) {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = address;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
        showCopySuccess();
    });
}

function showCopySuccess() {
    showNotification('📋 Address copied to clipboard!', 'success', 3000);
}

// Modal close functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize navbar for auto-hiding functionality
    navbar = document.getElementById('navbar');
    
    // Add scroll event listener for auto-hiding navbar
    if (navbar) {
        window.addEventListener('scroll', handleNavbarScroll, { passive: true });
    }
    
    // Close modal when clicking outside
    const mapModal = document.getElementById('mapModal');
    if (mapModal) {
        mapModal.addEventListener('click', function(e) {
            if (e.target === mapModal) {
                hideLocation();
            }
        });
    }
    
    // Close modal when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            hideLocation();
        }
    });

    // Handle contact form submission (simplified - no email sending)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            // Show loading state
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            // Simulate form submission (no actual email sending)
            setTimeout(() => {
                showMessage('✅ Thank you for your message! We will get back to you soon.', 'success');
                contactForm.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 2000);
        });
    }
});

// Show success/error messages
function showMessage(message, type) {
    // Remove existing messages
    const existingMessage = document.querySelector('.message-notification');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `message-notification fixed top-4 right-4 px-6 py-4 rounded-lg shadow-lg z-50 max-w-md ${
        type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
    }`;
    messageDiv.innerHTML = `
        <div class="flex items-center space-x-3">
            <span class="text-xl">${type === 'success' ? '✅' : '❌'}</span>
            <span>${message}</span>
            <button onclick="this.parentElement.parentElement.remove()" class="text-white hover:text-gray-200 ml-2">✕</button>
        </div>
    `;
    
    document.body.appendChild(messageDiv);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (messageDiv.parentElement) {
            messageDiv.remove();
        }
    }, 5000);
}

// Survey Modal Functions
function showSurveyModal() {
    const modal = document.getElementById('surveyModal');
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
        // Initialize star rating display
        updateStarRating();
    }
}

// Function to update star rating display
function updateStarRating() {
    const starDisplay = document.getElementById('starDisplay');
    const ratingText = document.getElementById('ratingText');
    
    if (!starDisplay || !ratingText) return;
    
    // Calculate overall rating based on radio button selections
    let totalRating = 0;
    let ratingCount = 0;
    
    // Get ratings from radio buttons
    const bookingEaseRating = document.querySelector('input[name="booking-ease"]:checked')?.dataset.rating;
    const informationClarityRating = document.querySelector('input[name="information-clarity"]:checked')?.dataset.rating;
    const valueMoneyRating = document.querySelector('input[name="value-money"]:checked')?.dataset.rating;
    
    if (bookingEaseRating) {
        totalRating += parseInt(bookingEaseRating);
        ratingCount++;
    }
    if (informationClarityRating) {
        totalRating += parseInt(informationClarityRating);
        ratingCount++;
    }
    if (valueMoneyRating) {
        totalRating += parseInt(valueMoneyRating);
        ratingCount++;
    }
    
    // Calculate average rating
    const overallRating = ratingCount > 0 ? Math.round(totalRating / ratingCount) : 0;
    
    // Update star display
    const filledStars = '★'.repeat(overallRating);
    const emptyStars = '☆'.repeat(5 - overallRating);
    starDisplay.innerHTML = `<span class="text-yellow-400">${filledStars}</span><span class="text-gray-300">${emptyStars}</span>`;
    
    // Update rating text
    if (overallRating === 0) {
        ratingText.textContent = 'Select your ratings above';
        ratingText.className = 'rating-text ml-3 text-lg font-semibold text-gray-600';
    } else {
        const ratingDescriptions = {
            1: 'Poor',
            2: 'Fair',
            3: 'Good',
            4: 'Very Good',
            5: 'Excellent'
        };
        ratingText.textContent = `${overallRating}/5 - ${ratingDescriptions[overallRating]}`;
        ratingText.className = 'rating-text ml-3 text-lg font-semibold text-yellow-600';
    }
    
    // Update hidden field
    const overallRatingField = document.getElementById('overallRating');
    if (overallRatingField) {
        overallRatingField.value = overallRating;
    }
}

function closeSurveyModal() {
    const modal = document.getElementById('surveyModal');
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
}

// Close survey modal when clicking outside
document.addEventListener('DOMContentLoaded', function() {
    const surveyModal = document.getElementById('surveyModal');
    if (surveyModal) {
        surveyModal.addEventListener('click', function(e) {
            if (e.target === surveyModal) {
                closeSurveyModal();
            }
        });
    }
    
    // Close survey modal when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeSurveyModal();
        }
    });
    
    // Add event listeners for radio buttons to update star rating
    const radioButtons = document.querySelectorAll('input[type="radio"][data-rating]');
    radioButtons.forEach(radio => {
        radio.addEventListener('change', updateStarRating);
    });
});