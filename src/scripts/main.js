AOS.init();

const eventDate = new Date('2025-12-12 19:00:00');
const eventTimeStamp = eventDate.getTime();

const countHours = setInterval(function(){
    const now = new Date();
    const nowTimeStamp = now.getTime();

    const distance = eventTimeStamp - nowTimeStamp;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('meter').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(countHours);
        document.getElementById('meter').innerHTML = 'Evento Expirado';
    }

}, 1000);