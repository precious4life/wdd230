const userName = "Precious Orugiengha";
const userCountry = "Nigeria";
document.querySelector(".name").innerHTML = userName;
document.querySelector(".country").innerHTML =  userCountry;

const currentDate = document.querySelector("#year");
const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
};

currentDate.innerHTML = new Date().toLocaleDateString("en-GB", options);