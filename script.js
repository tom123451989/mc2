// Existing time logic
function showTime() {
    document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
    showTime();
}, 1000);

// New key listener for 'End' and 'ArrowDown'
document.addEventListener('keydown', function(event) {
    if (event.key === 'End' || event.key === 'ArrowDown') {
        event.preventDefault(); // Prevents the page from scrolling down
        showTime();
    }
});
