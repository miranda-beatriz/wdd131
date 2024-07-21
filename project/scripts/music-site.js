document.addEventListener('DOMContentLoaded', () => {
    // Example function to change background color on click
    const changeColorButton = document.querySelector('#changeColorButton');
    if (changeColorButton) {
        changeColorButton.addEventListener('click', () => {
            document.body.style.backgroundColor = '#e0e0e0';
        });
    }

    // Example of using localStorage
    const storedValue = localStorage.getItem('key');
    if (storedValue) {
        console.log(`Stored value: ${storedValue}`);
    } else {
        localStorage.setItem('key', 'value');
        console.log('Value stored in localStorage');
    }

    // DOM Interaction example
    const header = document.querySelector('.site-header');
    if (header) {
        header.innerHTML += '<p>Welcome to the Life with Music website!</p>';
    }
});
document.addEventListener('DOMContentLoaded', function () {
    let yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    let lastModifiedSpan = document.getElementById('last-modified');
    if (lastModifiedSpan) {
        function formatLastModified(date) {
            return date.toLocaleString();
        }

        function updateLastModified() {
            let now = new Date();
            lastModifiedSpan.textContent = formatLastModified(now);
        }
        updateLastModified();
    }
});
