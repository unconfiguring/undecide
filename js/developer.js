// Block key combinations that open developer tools
document.addEventListener('keydown', function(event) {
    const forbiddenKeys = [
        { ctrlKey: true, shiftKey: true, key: 'I' }, // Ctrl + Shift + I
        { ctrlKey: true, shiftKey: true, key: 'J' }, // Ctrl + Shift + J
        { ctrlKey: true, shiftKey: true, key: 'C' }, // Ctrl + Shift + C
        { ctrlKey: true, key: 'U' },                // Ctrl + U
        { key: 'F12' },                             // F12
        { metaKey: true, key: 'I' },                // Cmd + I (Mac)
        { metaKey: true, key: 'J' },                // Cmd + J (Mac)
        { metaKey: true, key: 'C' },                // Cmd + C (Mac)
        { metaKey: true, key: 'U' },                // Cmd + U (Mac)
        { metaKey: true, altKey: true, key: 'I' },  // Cmd + Option + I (Mac)
        { metaKey: true, altKey: true, key: 'J' },  // Cmd + Option + J (Mac)
        { metaKey: true, altKey: true, key: 'C' }   // Cmd + Option + C (Mac)
    ];

    forbiddenKeys.forEach(combo => {
        if (Object.keys(combo).every(k => event[k] === combo[k])) {
            event.preventDefault();
        }
    });
});

// Prevent right-click (context menu)
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

// Prevent multi-touch and long-press but allow single taps and button clicks
document.addEventListener('touchstart', function(event) {
    if (event.touches.length > 1) { // Prevent multi-touch events
        event.preventDefault();
    }
}, { passive: false });

// Prevent zooming (pinch-to-zoom and double-tap zoom on mobile)
document.addEventListener('gesturestart', function(event) {
    event.preventDefault();
});

document.addEventListener('dblclick', function(event) {
    event.preventDefault();
});

// Block attempts to resize the window to trigger responsive modes
window.addEventListener('resize', function(event) {
    if (window.innerWidth < 500) { // Example: 500px is a threshold for responsive behavior
        window.resizeTo(500, window.innerHeight); // Reset to the minimum width
    }
});

// Prevent saving the webpage (Ctrl + S / Cmd + S)
document.addEventListener('keydown', function(event) {
    if ((event.ctrlKey || event.metaKey) && (event.key === 's' || event.key === 'S')) {
        event.preventDefault();
    }
});
