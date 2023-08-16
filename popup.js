document.getElementById('convertButton').addEventListener('click', function() {
    const inputMatrix = document.getElementById('matrixInput').value;
    const rows = inputMatrix.trim().split('\n');
    const numpyFormat = [];

    for (let i = 0; i < rows.length; i++) {
        // Extract numbers using a regex
        const elements = rows[i].match(/-?\d+/g).map(Number);

        // Only add rows that have valid numbers
        if (elements.length > 0 && !elements.includes(NaN)) {
            numpyFormat.push(elements);
        }
    }

    document.getElementById('numpyOutput').value = JSON.stringify(numpyFormat);
});
