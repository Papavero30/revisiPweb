document.addEventListener("DOMContentLoaded", function () {
    fetch('https://api-berita-indonesia.vercel.app/antara/politik/')
        .then(response => response.json())
        .then(data => {
            const cardContainer = document.querySelector('.card-container');

            data.data.posts.forEach(post => {
                const card = document.createElement('div');
                card.classList.add('col-md-4', 'card');

            card.innerHTML = `
                <img src="${post.thumbnail}" alt="${post.title}" class="img-fluid">
                <h3>${post.title}</h3>
                <p>${post.description}</p>
                <button class="card-button" onclick="window.location.href='${post.link}'">Lihat Selengkapnya</button>
                `;

                cardContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
