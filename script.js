document.getElementById('forensics-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get file and description
    const evidence = document.getElementById('evidence').files[0];
    const description = document.getElementById('evidence-description').value;

    // Placeholder for actual submission process
    alert(`Evidence: ${evidence.name} \nDescription: ${description}`);

    // Implement form submission to save data, send to a server, etc.
});
