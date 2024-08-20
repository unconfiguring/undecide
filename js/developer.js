document.addEventListener('keydown', function(event) {
    const forbiddenKeys = [
        { ctrlKey: true, shiftKey: true, key: 'I' }, 
        { ctrlKey: true, shiftKey: true, key: 'J' }, 
        { ctrlKey: true, shiftKey: true, key: 'C' }, 
        { ctrlKey: true, key: 'U' },                
        { key: 'F12' },                             
        { metaKey: true, key: 'I' },                
        { metaKey: true, key: 'J' },                
        { metaKey: true, key: 'C' },               
        { metaKey: true, key: 'U' },                
        { metaKey: true, altKey: true, key: 'I' }, 
        { metaKey: true, altKey: true, key: 'J' },  
        { metaKey: true, altKey: true, key: 'C' }   
    ];

    forbiddenKeys.forEach(combo => {
        if (Object.keys(combo).every(k => event[k] === combo[k])) {
            event.preventDefault();
        }
    });
});


document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});


document.addEventListener('touchstart', function(event) {
    if (event.touches.length > 1) { 
        event.preventDefault();
    }
}, { passive: false });

document.addEventListener('touchend', function(event) {
    const now = new Date().getTime();
    if (event.timeStamp - now < 300) { 
        event.preventDefault();
    }
});


document.addEventListener('gesturestart', function(event) {
    event.preventDefault();
});

document.addEventListener('dblclick', function(event) {
    event.preventDefault();
});


window.addEventListener('resize', function(event) {
    if (window.innerWidth < 500) { 
        window.resizeTo(500, window.innerHeight); 
    }
});


document.addEventListener('keydown', function(event) {
    if ((event.ctrlKey || event.metaKey) && (event.key === 's' || event.key === 'S')) {
        event.preventDefault();
    }
});


window.addEventListener('beforeunload', function(event) {
    event.preventDefault();
    event.returnValue = ''; 
});
