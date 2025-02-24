document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.testimonial-track');
    const testimonialGroups = document.querySelectorAll('.testimonial-group');
    
    // Set initial position
    let currentPosition = 0;
    let animationFrameId = null;
    
    function animate() {
        currentPosition -= 2; // Increased speed from 0.5 to 2
        
        // Reset position when first group is fully scrolled
        if (-currentPosition >= testimonialGroups[0].offsetWidth) {
            currentPosition = 0;
        }
        
        track.style.transform = `translateX(${currentPosition}px)`;
        animationFrameId = requestAnimationFrame(animate);
    }
    
    // Start animation
    animate();
    
    // Pause animation on hover
    track.addEventListener('mouseenter', () => {
        cancelAnimationFrame(animationFrameId);
    });
    
    // Resume animation when mouse leaves
    track.addEventListener('mouseleave', () => {
        animate();
    });
});
