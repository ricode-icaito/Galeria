document.addEventListener('DOMContentLoaded', () => {
    const imgLightBox = document.querySelectorAll('.materialboxced');
    M.Materialbox.init(imgLightBox, {
        inDuration: 500,
        outDuration: 500
    });
});