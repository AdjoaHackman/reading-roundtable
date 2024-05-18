document.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', (e) => {
        const button = e.target;
        const bookData = button.dataset.book;

        console.log(bookData);

        fetch('/api/library', {
            method: "POST",
            headers: {
                'Content-Type': 'text/javascript'
            },

            body: bookData
        });

        
    });
});