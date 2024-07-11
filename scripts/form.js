document.addEventListener('DOMContentLoaded', function () {
    const products = [
        { id: 'fc-1888', name: "Flux Capacitor" },
        { id: 'fc-2050', name: "Power Laces" },
        { id: 'fs-1987', name: "Time Circuits" },
        { id: 'ac-2000', name: "Low Voltage Reactor" },
        { id: 'jj-1969', name: "Warp Equalizer" }
    ];

    const productNameSelect = document.getElementById('product-name');
    if (productNameSelect) {
        products.forEach(product => {
            let option = document.createElement('option');
            option.value = product.id;
            option.textContent = product.name;
            productNameSelect.appendChild(option);
        });
    }

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
