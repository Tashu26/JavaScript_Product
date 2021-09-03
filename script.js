let cursor = document.querySelector('#cursor');
window.addEventListener('mousemove', function(axis) {

    let xValue = axis.clientX;
    let yValue = axis.clientY;

    setTimeout(function() {
        cursor.style.top = yValue + 'px';
        cursor.style.left = xValue + 'px';

    }, 150)





})