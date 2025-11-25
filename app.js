let count = 0;
let startTime = Date.now();

function updateDisplay() {
    document.getElementById('counter').textContent = count;
    document.getElementById('total').textContent = count;
    updateTime();
}

function addOne() {
    count++;
    updateDisplay();
}

function subtractOne() {
    if (count > 0) {
        count--;
    }
    updateDisplay();
}

function resetCounter() {
    count = 0;
    startTime = Date.now();
    updateDisplay();
}

function updateTime() {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    
    if (minutes > 0) {
        document.getElementById('time').textContent = `${minutes}m ${seconds}s`;
    } else {
        document.getElementById('time').textContent = `${seconds}s`;
    }
}

// Update time every second
setInterval(updateTime, 1000);