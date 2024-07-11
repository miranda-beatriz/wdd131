document.addEventListener('DOMContentLoaded', function () {
    let reviewCounter = parseInt(localStorage.getItem('reviewCounter')) || 0;
    console.log("Initial review counter value:", reviewCounter);

    reviewCounter++;
    console.log("Incremented review counter value:", reviewCounter);

    localStorage.setItem('reviewCounter', reviewCounter);
    console.log("Value stored in localStorage:", localStorage.getItem('reviewCounter'));

    const products = [
        { id: 'fc-1888', name: "Flux Capacitor" },
        { id: 'fc-2050', name: "Power Laces" },
        { id: 'fs-1987', name: "Time Circuits" },
        { id: 'ac-2000', name: "Low Voltage Reactor" },
        { id: 'jj-1969', name: "Warp Equalizer" }
    ];

    const productNameSpan = document.getElementById('product-name');
    const overallRatingSpan = document.getElementById('overall-rating');
    const installationDateSpan = document.getElementById('installation-date');
    const featuresList = document.getElementById('features-list');
    const writtenReviewSpan = document.getElementById('written-review');
    const userNameSpan = document.getElementById('user-name');

    function formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    function captureFormData() {
        const urlParams = new URLSearchParams(window.location.search);
        const selectedProductId = urlParams.get('product-name');
        const selectedProduct = products.find(product => product.id === selectedProductId);

        if (selectedProduct) {
            productNameSpan.textContent = selectedProduct.name;
            overallRatingSpan.textContent = urlParams.get('rating');
            installationDateSpan.textContent = formatDate(new Date(urlParams.get('installation-date')));

            const selectedFeatures = urlParams.getAll('features');
            featuresList.innerHTML = selectedFeatures.map(feature => `<li>${feature}</li>`).join('');

            writtenReviewSpan.textContent = urlParams.get('written-review') || 'N/A';
            userNameSpan.textContent = urlParams.get('user-name') || 'Anonymous';
        }
    }

    captureFormData();

    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    const lastModifiedSpan = document.getElementById('last-modified');
    if (lastModifiedSpan) {
        function formatLastModified(date) {
            return date.toLocaleString();
        }

        function updateLastModified() {
            const now = new Date();
            lastModifiedSpan.textContent = formatLastModified(now);
        }

        updateLastModified();
    }
});
