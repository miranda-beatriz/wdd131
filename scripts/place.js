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

    const temperature = 25;
    const windSpeed = 15;

    function calculateWindChill(temp, wind) {
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1);
    }


    let windChillFactor;
    if (temperature <= 10 && windSpeed > 4.8) {
        windChillFactor = calculateWindChill(temperature, windSpeed) + '°C';
    } else {
        windChillFactor = 'N/A';
    }

    const windChillElement = document.createElement('p');
    windChillElement.innerHTML = `<strong>Wind Chill:</strong> ${windChillFactor}`;
    document.querySelector('.weather').appendChild(windChillElement);
});
