import { namesOne, namesTwo } from './name.js';

console.log("dlslkd");
const initApp = () => {

    document.getElementById("submitForm").addEventListener("submit", (event) => {
        console.log("djls");
        event.preventDefault();
        clearSuggestion();
        const nameArray = generateNames();

        console.log(nameArray);
        displayName(nameArray);

    })
}
document.addEventListener('DOMContentLoaded', initApp);

const clearSuggestion = () => {
    const display = document.getElementById("suggestion_section");
    if (!display.classList.contains("hidden")) display.classList.toggle("hiddden");
    const list = document.querySelector(".suggestion_section ol");
    list.innerHTML = "";
}

const generateNames = () => {
    const randomNumArr = [];
    for (let i = 0; i < 4;) {
        const randomNumber = Math.floor(Math.random() * 10);
        if (randomNumArr.includes(randomNumber)) continue;
        randomNumArr.push(randomNumber);
        i++;
    }
    const suggestion1 = namesOne[randomNumArr[0]] + " " + namesTwo[randomNumArr[3]];
    const suggestion2 = namesOne[randomNumArr[1]] + " " + namesTwo[randomNumArr[0]];
    const suggestion3 = namesOne[randomNumArr[2]] + " " + namesTwo[randomNumArr[2]];
    const suggestion4 = namesOne[randomNumArr[3]] + " " + namesTwo[randomNumArr[1]];

    return [suggestion1, suggestion2, suggestion3, suggestion4];
}
const displayName = (nameArray) => {
    const list = document.querySelector(".suggestion_section ol");
    const rawName = document.getElementById("submitInput").value;
    const firstName = SanitizeInput(rawName);
    nameArray.forEach((name) => {
        list.innerHTML += `<li><a href="https://www.youtube.com/${name} target="_blank">${name}</a></li> `;
        list.innerHTML += `<ul>
        <li><a href="https://youtube.com/ ${firstName}s ${name}" target="_blank"> ${firstName}s ${name}</a></li> 
        <li><a href="https://youtube.com/${name} With ${firstName}" target="_blank">${name} With ${firstName}</a></li>
        </ul>`;

    })
    const display = document.getElementById("suggestion_section");
    if (display.classList.contains("hidden")) display.classList.toggle("hiddden");

}

function SanitizeInput(rawName) {
    const div = document.createElement("div");
    div.textContent = rawName;
    return div.innerHTML;
}