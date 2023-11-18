function searchProxy() {
    var url = document.getElementById('url').value;
    var resultDiv = document.getElementById('result');

    if (url.trim() === "") {
        resultDiv.innerHTML = "https://www.google.com";
        return;
    }

    // Redirect the user to the entered URL
    window.location.href = url;
}