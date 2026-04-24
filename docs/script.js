function formatTime(date, timeZone) {
    return date.toLocaleTimeString(
        'en-US',
        {
            timeZone,
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit' }
    );
}

function tick() {
    const now = new Date();
    document.getElementById('us-pacific').textContent = formatTime(now, 'America/Los_Angeles');
    document.getElementById('us-eastern').textContent = formatTime(now, 'America/New_York');
    document.getElementById('gmt').textContent = formatTime(now, 'GMT');
    document.getElementById('eu-eastern').textContent = formatTime(now, 'Europe/Bucharest');
}

tick();
setInterval(tick, 1000);
