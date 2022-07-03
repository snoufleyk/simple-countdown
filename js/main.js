document.addEventListener("DOMContentLoaded", function(event) { 
    let targetDate = new Date('1 January 2023 00:00').getTime();

    let countDown = setInterval(() =>{
        let now = new Date().getTime();
        let distance = targetDate - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        let minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
        let seconds = Math.floor(distance % (1000 * 60) / 1000);

        let daysHTML = document.querySelector('.countdown__days h4');
        let hoursHTML = document.querySelector('.countdown__hours h4');
        let minutesHTML = document.querySelector('.countdown__minutes h4');
        let secondsHTML = document.querySelector('.countdown__seconds h4');

        daysHTML.innerHTML = days;
        hoursHTML.innerHTML = hours;
        minutesHTML.innerHTML = minutes;
        secondsHTML.innerHTML = seconds;

        if(distance == 0) {
            clearInterval(countDown);
            document.querySelector('.countdown').innerHTML = "<h1 align='center'>HAPPY NEW YEAR!</h1>";
        }

    }, 1000)
});