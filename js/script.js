document.addEventListener('DOMContentLoaded', function() {
    const lectureItems = document.querySelectorAll('.lecture-item');
    const videoElement = document.querySelector('iframe');
    
    lectureItems.forEach(item => {
        item.addEventListener('click', function() {
            const videoSrc = this.getAttribute('data-video');
            if (videoSrc) {
                videoElement.src = videoSrc;
                videoElement.play();
            }
            // Hide all completed buttons
            lectureItems.forEach(i => {
                const completedBtn = i.querySelector('.completed-btn');
                completedBtn.style.display = 'none';
            });
            // Show the completed button for the clicked lecture
            const completedBtn = this.querySelector('.completed-btn');
            completedBtn.style.display = 'block';
        });
    });
});

// Assuming you have an array of video URLs
const videoUrls = [
    "https://www.youtube.com/embed/MfMVgOvo4Fc?list=PL_RcVnBPGmSLAGyNa6wiAf8bbVwxYYzCi", // Lecture 1
    "https://www.youtube.com/embed/path/to/video2", // Lecture 2
    "https://www.youtube.com/embed/SFjyuI-WKkI?list=PL_RcVnBPGmSLAGyNa6wiAf8bbVwxYYzCi", // Lecture 3
    "https://www.youtube.com/embed/JTSl1skdOQM?list=PL_RcVnBPGmSLAGyNa6wiAf8bbVwxYYzCi", // Lecture 4
    "https://www.youtube.com/embed/u-48gHh5yjU?list=PL_RcVnBPGmSLAGyNa6wiAf8bbVwxYYzCi", // Lecture 5
    "https://www.youtube.com/embed/WW88cujOQYI?list=PL_RcVnBPGmSLAGyNa6wiAf8bbVwxYYzCi", // Lecture 6
    "https://www.youtube.com/embed/_2msvMAlbvM?list=PL_RcVnBPGmSLAGyNa6wiAf8bbVwxYYzCi", // Lecture 7
    "https://www.youtube.com/embed/UZeWKVB2ETo?list=PL_RcVnBPGmSLAGyNa6wiAf8bbVwxYYzCi"  // Lecture 8
];

let currentVideoIndex = 0; // Start with the first video

// Function to load the current video
function loadVideo(index) {
    const videoFrame = document.querySelector('.video-container iframe');
    videoFrame.src = videoUrls[index];
}

// Event listeners for navigation buttons
document.querySelector('.next-chapter-btn').addEventListener('click', () => {
    if (currentVideoIndex < videoUrls.length - 1) {
        currentVideoIndex++;
        loadVideo(currentVideoIndex);
    } else {
        alert("You are already at the last video.");
    }
});

document.querySelector('.prev-chapter-btn').addEventListener('click', () => {
    if (currentVideoIndex > 0) {
        currentVideoIndex--;
        loadVideo(currentVideoIndex);
    } else {
        alert("You are already at the first video.");
    }
});

// Load the initial video
loadVideo(currentVideoIndex);
