window.addEventListener('click', function (event) {
    if (event.target.hasAttribute('data-cart')) {
        const card = event.target.closest('.card');
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.queryselector('.image').getAttribute('src'),
            title: card.queryselector('.h3-01').innerText,
        }
    }
})