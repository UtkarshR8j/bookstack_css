// Function to open the popup modal
function openPopup() {
    document.getElementById('popup').style.display = 'flex';
}

// Function to close the popup modal
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Function to reveal timeline items on scroll
document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const revealTimeline = () => {
        timelineItems.forEach(item => {
            if (item.getBoundingClientRect().top < window.innerHeight) {
                item.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', revealTimeline);
    revealTimeline(); // Call initially to show visible items
});
