document.querySelectorAll('.project-card').forEach(card => {
    const details = card.querySelector('.project-details');
    const readMore = card.querySelector('.read-more');
    
    readMore.addEventListener('click', (e) => {
        e.preventDefault();
        const isActive = details.classList.contains('active');
        
        // Close all other open cards
        document.querySelectorAll('.project-details.active').forEach(openDetails => {
            if (openDetails !== details) {
                openDetails.classList.remove('active');
                openDetails.parentElement.querySelector('.read-more').textContent = 'Read more';
            }
        });
        
        // Toggle current card
        details.classList.toggle('active');
        readMore.textContent = isActive ? 'Read more' : 'Read less';
    });
});