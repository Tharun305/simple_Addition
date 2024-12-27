// Attach event listener to the form
document.getElementById('predictForm').addEventListener('submit', async function (e) {
    e.preventDefault(); // Prevent default form submission

    // Get input values
    const x1 = document.getElementById('x1').value;
    const x2 = document.getElementById('x2').value;

    try {
        // Send a POST request to the backend
        const response = await fetch('/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ x1: parseFloat(x1), x2: parseFloat(x2) }),
        });

        // Parse the response
        const data = await response.json();

        // Display the prediction
        document.getElementById('result').innerText = `Prediction: ${data.prediction}`;
    } catch (error) {
        document.getElementById('result').innerText = 'Error: Unable to fetch prediction.';
        console.error('Error:', error);
    }
});
