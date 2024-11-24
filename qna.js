document.addEventListener('DOMContentLoaded', () => {
    const qnaItems = document.querySelectorAll('.qna-item');
    qnaItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
});
