
const query = "";

// searchBooks(query)
//     .then(results => {
//         console.log(results);
//     });

function searchBooks(query) {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&key=${process.env.apiKey}`;

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Process the data
            return data.items.map(book => {
                const volumeInfo = book.volumeInfo;
                const authors = volumeInfo.authors ? volumeInfo.authors.join(', ') : 'Unknown';
                const thumbnail = volumeInfo.imageLinks ? volumeInfo.imageLinks.thumbnail : 'https://via.placeholder.com/150'; // Placeholder image if thumbnail not available

                return {
                    title: volumeInfo.title,
                    authors: authors,
                    description: volumeInfo.description,
                    thumbnail: thumbnail,
                    infoLink: volumeInfo.infoLink
                };
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            return []; // Return empty array in case of error
        });
}

// function displayResults(books) {
//     const resultsContainer = document.getElementById('results-container');
//     resultsContainer.innerHTML = ''; // Clear previous results

//     if (books.length === 0) {
//         resultsContainer.innerHTML = '<p>No results found.</p>';
//         return;
//     }

//     books.forEach(book => {
//         const card = document.createElement('div');
//         card.classList.add('book-card');

//         const thumbnail = document.createElement('img');
//         thumbnail.src = book.thumbnail;
//         thumbnail.alt = 'Book Thumbnail';
//         card.appendChild(thumbnail);

//         const title = document.createElement('h2');
//         title.textContent = book.title;
//         card.appendChild(title);

//         const authors = document.createElement('p');
//         authors.textContent = 'Authors: ' + book.authors;
//         card.appendChild(authors);

//         const description = document.createElement('p');
//         description.textContent = book.description || 'No description available.';
//         card.appendChild(description);

//         const link = document.createElement('a');
//         link.href = book.infoLink;
//         link.textContent = 'More info';
//         card.appendChild(link);

//         // Add a button to add the book
//         const addButton = document.createElement('button');
//         addButton.textContent = 'Add to My Library';
//         addButton.addEventListener('click', () => {
//             addBook(book);
//         });
//         card.appendChild(addButton);

//         resultsContainer.appendChild(card);
//     });
// }

// Example usage
// const query = "";
// const apiKey = "AIzaSyDPekw_tDo4W_U1sp3k9A3OZutdnLxlosA";
// searchBooks(query)
//     .then(results => {
//         displayResults(results);
//     });

module.exports = { searchBooks };