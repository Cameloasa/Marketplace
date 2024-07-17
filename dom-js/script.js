document.addEventListener('DOMContentLoaded', function () {
    const advertisementsData = [
        {
            title: 'Ad 1',
            description: 'This is the first advertisement.',
            image: 'https://via.placeholder.com/150',
            contact: 'contact1@example.com'
        },
        {
            title: 'Ad 2',
            description: 'This is the second advertisement.',
            image: 'https://via.placeholder.com/150',
            contact: 'contact2@example.com'
        },
        {
            title: 'Ad 3',
            description: 'This is the third advertisement.',
            image: 'https://via.placeholder.com/150',
            contact: 'contact3@example.com'
        },
        {
            title: 'Ad 4',
            description: 'This is the fourth advertisement.',
            image: 'https://via.placeholder.com/150',
            contact: 'contact4@example.com'
        },
        {
            title: 'Ad 5',
            description: 'This is the fifth advertisement.',
            image: 'https://via.placeholder.com/150',
            contact: 'contact5@example.com'
        },
        {
            title: 'Ad 6',
            description: 'This is the sixth advertisement.',
            image: 'https://via.placeholder.com/150',
            contact: 'contact6@example.com'
        }
    ];

    const advertisementsContainer = document.getElementById('advertisements');
    const filterInput = document.getElementById('filterTitle');

    function displayAdvertisements(ads) {
        clearAdvertisementsContainer(advertisementsContainer); // Clear existing content
        ads.forEach(ad => {
            const card = document.createElement('div');
            card.className = 'card mb-4 col-md-4';

            const img = document.createElement('img');
            img.className = 'card-img-top';
            img.src = ad.image;
            img.alt = ad.title;

            const cardBody = document.createElement('div');
            cardBody.className = 'card-body';

            const cardTitle = document.createElement('h5');
            cardTitle.className = 'card-title';
            cardTitle.textContent = ad.title;

            const cardText = document.createElement('p');
            cardText.className = 'card-text';
            cardText.textContent = ad.description;

            const contactText = document.createElement('p');
            contactText.className = 'card-text';
            contactText.textContent = 'Contact: ***';
            contactText.style.cursor = 'pointer';
            contactText.onclick = function () {
                if (contactText.textContent === 'Contact: ***') {
                    contactText.textContent = `Contact: ${ad.contact}`;
                } else {
                    contactText.textContent = 'Contact: ***';
                }
            };

            const cardFooter = document.createElement('div');
            cardFooter.className = 'card-footer text-center';

            const detailsButton = document.createElement('button');
            detailsButton.className = 'btn btn-info btn-block';
            detailsButton.textContent = 'Details';
            detailsButton.onclick = function () {
                alert(`Contact: ${ad.contact}`);
            };

            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);
            cardBody.appendChild(contactText);
            cardFooter.appendChild(detailsButton);
            card.appendChild(img);
            card.appendChild(cardBody);
            card.appendChild(cardFooter);

            advertisementsContainer.appendChild(card);
        });
    }

    filterInput.addEventListener('input', function () {
        const filterValue = filterInput.value.toLowerCase();
        const filteredAds = advertisementsData.filter(ad => ad.title.toLowerCase().includes(filterValue));
        displayAdvertisements(filteredAds);
    });

    displayAdvertisements(advertisementsData); // Initial display
});

function clearAdvertisementsContainer(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}
