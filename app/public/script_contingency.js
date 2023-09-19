var button_pressed = false

function contingency() {
    // Array of slides to be shown
    const slides = [
        { content: 'assets/slides/contingency/Slide1.png', duration: 500 },
        { content: 'assets/slides/contingency/Slide2.png', duration: 250 },
        { content: 'assets/slides/contingency/Outcome.png', duration: 500, probability: 0.6 }
    ];

    let currentSlide = 0;
    const slideContainer = document.getElementById('slide');

    function showSlide() {
        button_pressed = false;
        slideContainer.src = slides[currentSlide].content;

        // Check if it's the outcome slide and show the outcome with a certain probability
        if (currentSlide === slides.length - 1) {
            if (button_pressed) {
                const outcomeProbability = slides[currentSlide].probability;
                const outcome = Math.random() < outcomeProbability ? 'Outcome: Success' : 'Outcome: Failure';
                slideContainer.src = outcome;
            }
        }

        currentSlide++;

        // Check if there are more slides to show
        if (currentSlide < slides.length) {
        const slideDuration = slides[currentSlide].duration;
        setTimeout(showSlide, slideDuration);
        }
    }

    document.addEventListener("keydown", function(event) {
        if (currentSlide === 1) {
            console.log('Button Pressed');
            button_pressed = true;
            }
    })

    // Start the task
    for(var i=0; i<20; i++) {
        showSlide();

    }
}