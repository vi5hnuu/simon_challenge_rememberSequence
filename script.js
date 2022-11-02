
window.addEventListener('load', (evnt) => {
    $('button').css('height', $('button').css('width').slice(0, -2))
})
window.addEventListener('resize', (evnt) => {
    $('button').css('height', $('button').css('width').slice(0, -2))
})