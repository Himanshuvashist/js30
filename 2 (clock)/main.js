const domHour = document.querySelector(".hour");
const domMinute = document.querySelector(".minute");
const domSecond = document.querySelector(".second");



setInterval(() => {
    const d = new Date();
    const hour = d.getHours();
    const minute = d.getMinutes();
    const seconds = d.getSeconds();

    const degreeHour = (hour/12)*360-90;
    const degreeMinute = (minute/60)*360-90;
    const degreeSecond = (seconds/60)*360-90;
    console.log(seconds);
    
    domHour.style.transform = `rotate(${degreeHour}deg)`;
    domMinute.style.transform = `rotate(${degreeMinute}deg)`;
    domSecond.style.transform = `rotate(${degreeSecond}deg)`;
    
}, 1000);
