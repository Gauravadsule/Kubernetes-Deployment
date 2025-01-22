document.addEventListener('DOMContentLoaded', async () => {
    // Fetch data from the backend API
    const response = await fetch('http://localhost:5000/api/data');
    const data = await response.json();
    document.getElementById('data').innerText = data.message;

    // Submit button event listener
    document.getElementById('submitButton').addEventListener('click', async () => {
        const selectedOption = document.querySelector('input[name="options"]:checked');
        if (!selectedOption) {
            alert("Please select an option!");
            return;
        }

        // Send the selected option to the backend API
        const result = await fetch('http://localhost:5000/api/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ option: selectedOption.value })
        });

        const responseData = await result.json();
        alert(responseData.status + ": " + responseData.selected_option);
    });
});

