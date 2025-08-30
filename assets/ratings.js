// Rating and Review System
const ReviewSystem = {
    // Initial reviews data
    initialReviews: [
        { name: "Shain Joy Pigao", rating: 5, review: "Highly recommended travel agency" },
        { name: "Marvie Cariaga Tomas", rating: 5, review: "Highly recommended Travel agency" },
        { name: "Rastine Maddumba", rating: 5, review: "Highly recommended Travel agency ❤️" },
        { name: "Jonathan Ricona", rating: 5, review: "Trusted Agency highly recommended" },
        { name: "Noela De Vera", rating: 5, review: "Highly recommended Travel agency! Love it ✈️ 😊" },
        { name: "KlydeClarence Labitan", rating: 5, review: "Smooth transaction and thank you for kindness talagang pinagkakatiwalaan 🥰" },
        { name: "Escombien Rocky", rating: 5, review: "Highly recommend Travel Agency ❤️ Thank you so much for your trusted services." },
        { name: "Kristen Caroline Labitan", rating: 5, review: "Highly recommend Travel Agency ❤️ Thank you so much for your trusted services." },
        { name: "Novie Regs", rating: 5, review: "Highly recommend Travel Agency ❤️ Thank you so much for your trusted services." },
        { name: "Vicnet Mark Ignacio", rating: 5, review: "Highly recommended Travel Agency ❤️ Thank you so much for your trusted services." },
        { name: "Letty Aguirre Peralta", rating: 5, review: "I highly recommend gracious angeli travel and tours, santiago. They will turn your trip into an unforgettable experience!" },
        { name: "Lorence Traspe", rating: 5, review: "Impeccable agency and meticulous planning for stress-free travel. Highly recommend!" },
        { name: "John Bueno", rating: 5, review: "Highly recommend, so book now! ❤️" },
        { name: "Jennyvieve De Leon", rating: 5, review: "Emphasis on safety and security for worry-free exploration" },
        { name: "Yokul Sunico", rating: 5, review: "Awesome! Smooth transaction, thanks for the kindness and good services." },
        { name: "Norz Vicente", rating: 5, review: "Smooth and fast transaction. Highly recommend" },
        { name: "Raye Lestnaire Vicente", rating: 5, review: "Smooth and fast transaction. Highly recommend. Thank you so much for your kindness and good services 🥰" },
        { name: "Shin Lamuel Sevilla", rating: 5, review: "Highly recommend travel agency. Thank you so much for your trusted services" },
        { name: "Ka Jaymar Andaya", rating: 5, review: "Highly recommended guys. Try niyo sa kanila para hassle free travel niyo" },
        { name: "Gloria Sacatani", rating: 5, review: "Impeccable agency and meticulous planning for stress-free travel. Highly recommend!" },
        { name: "Fernando Sacatani Jr.", rating: 5, review: "Smooth and fast transaction. High recommend!!!" }
    ],

    stats: {
        total: 21, // Initial number of reviews
        average: 5.0, // All reviews are 5-star
        counts: {
            5: 21, // All reviews are 5-star
            4: 0,
            3: 0,
            2: 0,
            1: 0
        }
    },
    recentReviews: [],
    
    init() {
        // Load initial reviews
        this.loadInitialReviews();
        // Setup components
        this.setupStarRating();
        this.setupForm();
        this.displayStats();
        this.displayRecentReviews();
    },

    loadInitialReviews() {
        // Add initial reviews to the carousel if available
        if (typeof window.addNewReview === 'function') {
            this.initialReviews.forEach(review => {
                window.addNewReview({
                    name: review.name,
                    text: review.review,
                    rating: review.rating
                });
            });
        }

        // Set recent reviews to the last 3 reviews
        this.recentReviews = this.initialReviews.slice(0, 3).map(review => ({
            ...review,
            date: new Date()
        }));
    },

    setupStarRating() {
        const starContainer = document.querySelector('.star-rating');
        const stars = starContainer?.querySelectorAll('.star');
        let currentRating = 0;

        if (!stars) return;

        stars.forEach((star, index) => {
            // Hover effect
            star.addEventListener('mouseenter', () => {
                stars.forEach((s, i) => {
                    s.classList.toggle('text-yellow-400', i <= index);
                    s.classList.toggle('text-gray-300', i > index);
                });
            });

            // Click handler
            star.addEventListener('click', (e) => {
                e.preventDefault();
                currentRating = index + 1;
                this.updateStars(stars, currentRating);
            });
        });

        // Reset on mouse leave
        starContainer.addEventListener('mouseleave', () => {
            this.updateStars(stars, currentRating);
        });
    },

    updateStars(stars, rating) {
        stars.forEach((s, i) => {
            s.classList.toggle('text-yellow-400', i < rating);
            s.classList.toggle('text-gray-300', i >= rating);
        });
    },

    setupForm() {
        const form = document.getElementById('reviewForm');
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = {
                name: form.name.value,
                email: form.email.value,
                review: form.review.value,
                rating: this.getCurrentRating(),
                date: new Date()
            };

            if (!formData.rating) {
                alert('Please select a rating');
                return;
            }

            this.addReview(formData);
            form.reset();
            this.updateStars(document.querySelectorAll('.star'), 0);
        });
    },

    getCurrentRating() {
        return document.querySelectorAll('.star.text-yellow-400').length;
    },

    addReview(review) {
        // Update statistics
        this.stats.counts[review.rating]++;
        this.stats.total++;
        this.updateAverageRating();
        
        // Add to recent reviews
        this.recentReviews.unshift(review);
        if (this.recentReviews.length > 3) {
            this.recentReviews.pop();
        }

        // Update UI
        this.displayStats();
        this.displayRecentReviews();

        // Add to carousel if available
        if (typeof window.addNewReview === 'function') {
            window.addNewReview({
                name: review.name,
                text: review.review,
                rating: review.rating
            });
        }
    },

    updateAverageRating() {
        let sum = 0;
        let total = 0;
        for (let i = 1; i <= 5; i++) {
            sum += i * this.stats.counts[i];
            total += this.stats.counts[i];
        }
        this.stats.average = (sum / total).toFixed(1);
    },

    displayStats() {
        // Update average rating
        const avgElement = document.querySelector('.average-rating');
        if (avgElement) {
            avgElement.textContent = this.stats.average;
        }

        // Update rating bars
        for (let i = 1; i <= 5; i++) {
            const bar = document.querySelector(`.rating-${i}-bar`);
            const count = document.querySelector(`.rating-${i}-count`);
            if (bar) {
                const percentage = (this.stats.counts[i] / this.stats.total * 100).toFixed(1);
                bar.style.width = `${percentage}%`;
            }
            if (count) {
                count.textContent = this.stats.counts[i];
            }
        }

        // Update total ratings
        const totalElement = document.querySelector('.total-ratings');
        if (totalElement) {
            totalElement.textContent = `${this.stats.total} Ratings`;
        }
    },

    displayRecentReviews() {
        const container = document.querySelector('.recent-reviews');
        if (!container) return;

        const colors = [
            { bg: 'bg-blue-500', border: 'border-blue-200', hover: 'hover:border-blue-300' },
            { bg: 'bg-purple-500', border: 'border-purple-200', hover: 'hover:border-purple-300' },
            { bg: 'bg-pink-500', border: 'border-pink-200', hover: 'hover:border-pink-300' },
            { bg: 'bg-green-500', border: 'border-green-200', hover: 'hover:border-green-300' },
            { bg: 'bg-indigo-500', border: 'border-indigo-200', hover: 'hover:border-indigo-300' },
            { bg: 'bg-red-500', border: 'border-red-200', hover: 'hover:border-red-300' },
            { bg: 'bg-yellow-500', border: 'border-yellow-200', hover: 'hover:border-yellow-300' },
            { bg: 'bg-teal-500', border: 'border-teal-200', hover: 'hover:border-teal-300' }
        ];

        container.innerHTML = this.recentReviews.map((review, index) => {
            const color = colors[index % colors.length];
            return `
                <div class="review-card bg-white p-6 rounded-lg shadow-lg border-2 ${color.border} ${color.hover} transition-all duration-300 hover:shadow-xl">
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 ${color.bg} rounded-full flex items-center justify-center text-white font-bold">
                            ${review.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                        </div>
                        <div class="ml-4">
                            <h4 class="font-bold text-gray-800">${review.name}</h4>
                            <div class="flex text-yellow-400">
                                ${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}
                            </div>
                        </div>
                    </div>
                    <p class="text-gray-600">${review.review}</p>
                </div>
            `;
        }).join('');
    }
};

// Initialize the review system
document.addEventListener('DOMContentLoaded', () => {
    ReviewSystem.init();
});
    // Star Rating Functionality
    const starContainer = document.querySelector('.star-rating');
    const stars = starContainer?.querySelectorAll('.star');
    let currentRating = 0;

    if (stars) {
        stars.forEach((star, index) => {
            // Hover effects
            star.addEventListener('mouseenter', () => {
                stars.forEach((s, i) => {
                    s.classList.toggle('text-yellow-400', i <= index);
                });
            });

            // Click handler
            star.addEventListener('click', () => {
                currentRating = index + 1;
                stars.forEach((s, i) => {
                    s.classList.toggle('text-yellow-400', i < currentRating);
                });
            });
        });

        // Reset stars on mouse leave if no rating selected
        starContainer.addEventListener('mouseleave', () => {
            stars.forEach((s, i) => {
                s.classList.toggle('text-yellow-400', i < currentRating);
            });
        });
    }

    // Form Submission
    const reviewForm = document.getElementById('reviewForm');
    if (reviewForm) {
        reviewForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            if (currentRating === 0) {
                alert('Please select a rating');
                return;
            }

            const formData = {
                rating: currentRating,
                name: reviewForm.querySelector('[name="name"]').value,
                email: reviewForm.querySelector('[name="email"]').value,
                review: reviewForm.querySelector('[name="review"]').value,
                date: new Date().toISOString()
            };

            // Add the review to the carousel
            addNewReview({
                name: formData.name,
                text: formData.review,
                rating: formData.rating
            });

            // Reset form
            reviewForm.reset();
            currentRating = 0;
            stars.forEach(s => s.classList.remove('text-yellow-400'));

            // You can add here the code to send the review to your backend
            console.log('Review submitted:', formData);
        });
    }

    // Update statistics when new review is added
    const updateStatistics = (rating) => {
        // Get current counts
        const counts = document.querySelectorAll('.rating-count');
        const total = Array.from(counts).reduce((sum, count) => sum + parseInt(count.textContent), 0);
        
        // Update the specific rating count
        const ratingCount = document.querySelector(`.rating-${rating}-count`);
        if (ratingCount) {
            const newCount = parseInt(ratingCount.textContent) + 1;
            ratingCount.textContent = newCount;
        }

        // Update average rating
        const averageElement = document.querySelector('.average-rating');
        if (averageElement) {
            const newTotal = total + 1;
            const newAverage = ((total * parseFloat(averageElement.textContent) + rating) / newTotal).toFixed(1);
            averageElement.textContent = newAverage;
        }

        // Update rating bars
        const bar = document.querySelector(`.rating-${rating}-bar`);
        if (bar) {
            const percentage = (parseInt(counts[5 - rating].textContent) + 1) / (total + 1) * 100;
            bar.style.width = `${percentage}%`;
        }
    };
});
