const infoBtn = document.querySelector('.info-btn');
const infoModal = document.getElementById('infoModal');
const closeBtn = document.querySelector('.close');

infoBtn.addEventListener('click', function() {
    infoModal.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
    infoModal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == infoModal) {
        infoModal.style.display = 'none';
    }
});
const infoBtn = document.querySelector('.info-btn');
const infoModal = document.getElementById('infoModal');
const closeBtn = document.querySelector('.close');
const downloadBtn = document.querySelector('.download-btn');

infoBtn.addEventListener('click', function() {
    infoModal.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
    infoModal.style.display = 'none';
});

downloadBtn.addEventListener('click', function() {
    infoModal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == infoModal) {
        infoModal.style.display = 'none';
    }
});