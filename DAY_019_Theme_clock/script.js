const button_mode = document.querySelector("h2")
const body = document.querySelector("body")
const day_in_the_week = document.querySelector(".day_in_the_week")
const day_in_the_month = document.querySelector(".day_in_the_month")
const month = document.querySelector(".month")
const second_hand = document.querySelector(".second_hand")
const min = document.querySelector(".min")
const minute_hand = document.querySelector(".minute_hand")
const hour = document.querySelector(".hour")
const hour_hand= document.querySelector(".hour_hand")
const meridiem = document.querySelector(".meridiem")

function toggle_dark_mode() {
    body.classList.toggle("dark_mode")
}

setInterval(() => {
    const d = new Date();

    switch (d.getDay()) {
        case 0:
            day_in_the_week.innerHTML = "Sunday"
            break;
        case 1:
            day_in_the_week.innerHTML = "Monday"
            break;
        case 2:
            day_in_the_week.innerHTML = "Tuesday"
            break;
        case 3:
            day_in_the_week.innerHTML = "Wenesday"
            break;
        case 4:
            day_in_the_week.innerHTML = "Thursday"
            break;
        case 5:
            day_in_the_week.innerHTML = "Friday"
            break;
        case 6:
            day_in_the_week.innerHTML = "Saturday"
            break;
        default:
            break;
    }

    day_in_the_month.innerHTML = d.getDate() 
    month.innerHTML = d.getMonth() + 1

    let angle_second = d.getSeconds() 
    angle_second = (angle_second*360/60)-90
    second_hand.style.transform = `rotate(${angle_second}deg)`;
    
    let angle_minute = d.getMinutes()
    min.innerHTML = angle_minute
    angle_minute = (angle_minute*360/60)-90
    minute_hand.style.transform = `rotate(${angle_minute}deg)`;

    let angle_hour = d.getHours()
    hour.innerHTML = angle_hour
    angle_hour = (angle_hour*360/12)-90
    hour_hand.style.transform = `rotate(${angle_hour}deg)`;

    if (d.getHours() >= 12) {
        hour.innerHTML = d.getHours()  - 12
        meridiem.innerHTML= "PM"
    } else {
        hour.innerHTML = d.getHours() 
        meridiem.innerHTML= "AM"
    }
    
}, 1000);