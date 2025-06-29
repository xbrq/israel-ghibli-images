
document.addEventListener('DOMContentLoaded', () => {
    const collageItems = document.querySelectorAll('.collage-item');
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    // Removed modalTimestamp selection
    const closeButton = document.querySelector('.close-button');

    collageItems.forEach(item => {
        const overlayText = item.querySelector('.overlay-text');
        const content = item.dataset.content;
        // Removed timestamp retrieval
        const imageSrc = item.dataset.imageSrc; // Use data-image-src for modal

        // Populate overlay text initially (it will be hidden by CSS)
        overlayText.textContent = content;

        // Click event to open modal
        item.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImage.src = imageSrc;
            modalCaption.textContent = content;
            // Removed timestamp display
        });
    });

    // Close modal when clicking on the close button
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking anywhere outside the image content
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Optional: Close modal with Esc key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
});
