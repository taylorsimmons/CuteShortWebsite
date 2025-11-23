// Simple script for Cute Short website
// Add button click animation
document.addEventListener('DOMContentLoaded', function() {
    const followButton = document.querySelector('.follow-button');
    
    if (followButton) {
        followButton.addEventListener('click', function(e) {
            // Add a small animation effect on click
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 100);
        });
    }
});
