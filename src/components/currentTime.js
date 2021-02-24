// import React from 'react';
// import moment from 'moment';

// const currentTime = () => {
//     let hours = moment().format("h");
//     let minutes = moment().format("mm");
//     let seconds = moment().format("ss");

// function currentTime() {
//     if (seconds !== moment().format("ss")) {
//         seconds = moment().format("ss");
//         updateHtml("#seconds", seconds);
//     }
//     if (minutes !== moment().format("mm")) {
//         minutes = moment().format("mm");
//         updateHtml("#minutes", minutes);
//     }
//     if (hours !== moment().format("h")) {
//         hours = moment().format("h");
//         updateHtml("#hours", hours);
//     }
//     setTimeout(currentTime, 1000);
// };

// function updateHtml(id, value) {
//     var contElem = document.querySelector(id);
//     var hideElem = document.querySelector(".hide");

//     contElem.querySelector(".show").className="hide";

//     var span = document.createElement("span");
//     span.className = "show";
//     span.innerText = value;
//     contElem.appendChild(span);
// }
// currentTime();
//     return (
//         <div class="clock">
//             <div id="hours">{hours}</div>:
//             <div id="minutes">{minutes}</div>:
//             <div id="seconds">{seconds}</div>
//         </div>
//     )
// }

// export default currentTime
