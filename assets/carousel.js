  // Reviews Carousel
const CarouselSystem = {
    reviews: [],
    currentIndex: 0,
    slidesToShow: window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1,

    init() {
        this.track = document.querySelector('.review-track');
        this.prevButton = document.querySelector('.review-prev');
        this.nextButton = document.querySelector('.review-next');
        this.dotsContainer = document.querySelector('.review-dots');

        if (!this.track) return;

        this.setupEventListeners();
        this.startAutoSlide();
    },

    setupEventListeners() {
        this.prevButton?.addEventListener('click', () => this.prevSlide());
        this.nextButton?.addEventListener('click', () => this.nextSlide());

        // Touch support
        let touchStartX = 0;
        this.track.addEventListener('touchstart', e => {
            touchStartX = e.touches[0].clientX;
        });

        this.track.addEventListener('touchend', e => {
            const touchEndX = e.changedTouches[0].clientX;
            const diff = touchStartX - touchEndX;

            if (Math.abs(diff) > 50) {
                if (diff > 0) this.nextSlide();
                else this.prevSlide();
            }
        });

        // Pause auto-slide on hover
        this.track.addEventListener('mouseenter', () => this.stopAutoSlide());
        this.track.addEventListener('mouseleave', () => this.startAutoSlide());

        // Handle window resize
        window.addEventListener('resize', () => {
            const newSlidesToShow = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
            if (newSlidesToShow !== this.slidesToShow) {
                this.slidesToShow = newSlidesToShow;
                this.updateSlidePositions();
                this.updateDots();
            }
        });
    },

    addReview(review) {
        this.reviews.push(review);
        this.addSlide(review);
        this.updateDots();
    },

    addSlide(review) {
        const slide = document.createElement('div');
        slide.className = 'review-slide min-w-full md:min-w-[50%] lg:min-w-[33.333%] p-3';
        
        const colors = [
            'blue', 'purple', 'pink', 'green', 'indigo', 
            'red', 'teal', 'cyan', 'orange', 'rose'
        ];
        const color = colors[this.reviews.length % colors.length];

        const initials = review.name
            .split(' ')
            .map(n => n[0])
            .join('')
            .toUpperCase()
            .substring(0, 2);

        slide.innerHTML = `
            <div class="bg-white p-6 rounded-xl shadow-lg border-2 border-${color}-200 hover:shadow-xl transition-all duration-300">
                <div class="flex items-center mb-4">
                    <div class="rating-stars text-yellow-400 text-xl">★★★★★</div>
                    <span class="ml-2 text-${color}-600 font-semibold">5.0</span>
                </div>
                <p class="text-gray-700 mb-4 p-4 bg-${color}-50 rounded-lg">"${review.text}"</p>
                <div class="flex items-center mt-4 pt-4 border-t border-gray-200">
                    <div class="w-10 h-10 bg-${color}-500 rounded-full flex items-center justify-center text-white font-bold">${initials}</div>
                    <div class="ml-3">
                        <p class="font-semibold text-gray-800">${review.name}</p>
                    </div>
                </div>
            </div>
        `;

        this.track.appendChild(slide);
    },

    updateDots() {
        if (!this.dotsContainer) return;

        this.dotsContainer.innerHTML = '';
        const totalDots = Math.ceil(this.reviews.length / this.slidesToShow);

        for (let i = 0; i < totalDots; i++) {
            const dot = document.createElement('button');
            dot.className = 'review-dot transition-all duration-300';
            if (i === Math.floor(this.currentIndex / this.slidesToShow)) {
                dot.classList.add('active');
            }
            dot.addEventListener('click', () => this.goToSlide(i * this.slidesToShow));
            this.dotsContainer.appendChild(dot);
        }
    },

    updateSlidePositions() {
        if (!this.track) return;
        const slideWidth = this.track.querySelector('.review-slide')?.offsetWidth || 0;
        this.track.style.transform = `translateX(-${this.currentIndex * slideWidth}px)`;
    },

    nextSlide() {
        const maxIndex = this.reviews.length - this.slidesToShow;
        if (this.currentIndex >= maxIndex) {
            this.goToSlide(0);
        } else {
            this.goToSlide(this.currentIndex + 1);
        }
    },

    prevSlide() {
        if (this.currentIndex <= 0) {
            this.goToSlide(this.reviews.length - this.slidesToShow);
        } else {
            this.goToSlide(this.currentIndex - 1);
        }
    },

    goToSlide(index) {
        this.currentIndex = Math.max(0, Math.min(index, this.reviews.length - this.slidesToShow));
        this.updateSlidePositions();
        this.updateDots();
    },

    startAutoSlide() {
        this.stopAutoSlide();
        this.autoSlideInterval = setInterval(() => this.nextSlide(), 5000);
    },

    stopAutoSlide() {
        if (this.autoSlideInterval) {
            clearInterval(this.autoSlideInterval);
        }
    }
};

// Initialize the carousel when the document is ready
document.addEventListener('DOMContentLoaded', () => {
    CarouselSystem.init();
    window.addNewReview = (review) => CarouselSystem.addReview(review);
});
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.review-track');
    if (!track) return; // Exit if no carousel found

    const slides = track.querySelectorAll('.review-slide');
    const prevButton = document.querySelector('.review-prev');
    const nextButton = document.querySelector('.review-next');
    const dotsContainer = document.querySelector('.review-dots');

    let currentIndex = 0;
    const slidesToShow = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
    const totalSlides = slides.length;

    // Create dots
    for (let i = 0; i < Math.ceil(totalSlides / slidesToShow); i++) {
        const dot = document.createElement('button');
        dot.classList.add('review-dot');
        if (i === 0) dot.classList.add('active');
        dot.setAttribute('aria-label', `Go to review group ${i + 1}`);
        dotsContainer.appendChild(dot);
    }

    const dots = dotsContainer.querySelectorAll('.review-dot');

    // Update dots
    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === Math.floor(currentIndex / slidesToShow));
        });
    }

    // Slide to index
    function slideTo(index) {
        const slideWidth = slides[0].offsetWidth;
        currentIndex = index;
        track.style.transform = `translateX(-${index * slideWidth}px)`;
        updateDots();
    }

    // Next slide
    function nextSlide() {
        if (currentIndex < totalSlides - slidesToShow) {
            slideTo(currentIndex + 1);
        } else {
            slideTo(0); // Loop back to start
        }
    }

    // Previous slide
    function prevSlide() {
        if (currentIndex > 0) {
            slideTo(currentIndex - 1);
        } else {
            slideTo(totalSlides - slidesToShow); // Go to end
        }
    }

    // Click handlers
    if (prevButton) prevButton.addEventListener('click', prevSlide);
    if (nextButton) nextButton.addEventListener('click', nextSlide);

    // Dot click handlers
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            slideTo(index * slidesToShow);
        });
    });

    // Auto-advance slides
    let autoSlideInterval = setInterval(nextSlide, 5000);

    // Pause on hover
    track.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
    track.addEventListener('mouseleave', () => {
        autoSlideInterval = setInterval(nextSlide, 5000);
    });

    // Handle window resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            const newSlidesToShow = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
            if (newSlidesToShow !== slidesToShow) {
                location.reload(); // Refresh to adjust layout
            }
        }, 250);
    });

    // Touch support
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener('touchstart', e => {
        touchStartX = e.touches[0].clientX;
    });

    track.addEventListener('touchmove', e => {
        touchEndX = e.touches[0].clientX;
    });

    track.addEventListener('touchend', () => {
        const difference = touchStartX - touchEndX;
        if (Math.abs(difference) > 50) { // Minimum swipe distance
            if (difference > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    });
});

// Function to add new reviews dynamically
window.addNewReview = function(reviewData) {
    const track = document.querySelector('.review-track');
    if (!track) return;

    const slide = document.createElement('div');
    slide.className = 'review-slide min-w-full md:min-w-[50%] lg:min-w-[33.333%] p-3';

    // Generate random color from preset options
    const colors = ['blue', 'purple', 'pink', 'green', 'indigo', 'red', 'teal', 'cyan', 'orange'];
    const colorIndex = Math.floor(Math.random() * colors.length);

    // Create initials from name
    const initials = reviewData.name.split(' ')
        .map(word => word[0])
        .join('')
        .substring(0, 2)
        .toUpperCase();

    slide.innerHTML = `
        <div class="bg-white p-6 rounded-xl shadow-lg border-2 border-${colors[colorIndex]}-200 hover:shadow-xl transition-all duration-300">
            <div class="flex items-center mb-4">
                <div class="rating-stars text-yellow-400 text-xl">★★★★★</div>
                <span class="ml-2 text-${colors[colorIndex]}-600 font-semibold">5.0</span>
            </div>
            <p class="text-gray-700 mb-4 p-4 bg-${colors[colorIndex]}-50 rounded-lg">"${reviewData.text}"</p>
            <div class="flex items-center mt-4 pt-4 border-t border-gray-200">
                <div class="w-10 h-10 bg-${colors[colorIndex]}-500 rounded-full flex items-center justify-center text-white font-bold">${initials}</div>
                <div class="ml-3">
                    <p class="font-semibold text-gray-800">${reviewData.name}</p>
                </div>
            </div>
        </div>
    `;

    track.appendChild(slide);

    // Update dots if needed
    const totalSlides = track.querySelectorAll('.review-slide').length;
    const slidesToShow = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
    const dotsContainer = document.querySelector('.review-dots');
    
    if (dotsContainer && Math.ceil(totalSlides / slidesToShow) > dotsContainer.children.length) {
        const dot = document.createElement('button');
        dot.classList.add('review-dot');
        dot.setAttribute('aria-label', `Go to review group ${dotsContainer.children.length + 1}`);
        dotsContainer.appendChild(dot);
    }
};
