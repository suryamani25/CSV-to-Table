document.addEventListener('DOMContentLoaded', () => {
    const table = document.querySelector('.table tbody');

    fetch('http://localhost:3000/data', {
        method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
        console.log(data); // Log the data object to inspect its structure

        // Access the results array - adjust this if the key is different
        const result = data.results;
        
        if (result) {
            result.forEach(item => {
                const row = document.createElement('tr');
                for (const key in item) {
                    const cell = document.createElement('td');
                    cell.textContent = item[key];
                    row.appendChild(cell);
                }
                table.appendChild(row);
            });
        } else {
            console.error('Results array is undefined. Check the data structure.');
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
});
