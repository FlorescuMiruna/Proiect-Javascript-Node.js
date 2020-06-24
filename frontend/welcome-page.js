const logInButton = document.querySelector("#logIn");
const showAge = document.querySelector("#showAge");

logInButton.addEventListener("click", function(event) {
    window.location.replace("file:///C:/Users/Miruna/Desktop/Proiect/javascript-project/frontend/login-page.html");
})


//Task de nivel 2: 1.Varsta utilizator
//TO DO 

showAge.addEventListener("click", function(event) {


    var today = new Date();
    var inputDate = document.getElementById("myDate").value;
    var birthday = new Date(inputDate);
    console.log("birthday", birthday);
    age = today.getTime() - birthday.getTime();
    console.log(age);
    let years = Math.floor(age / (1000 * 60 * 60 * 24 * 365));
    let months = age % 12;
    // let months = Math.floor(((age / (1000 * 60 * 60 * 24 * 365)) - years) * 12);
    let days = Math.floor((((age / (1000 * 60 * 60 * 24 * 365)) - years) * 12 - months) * 30);
    let hours = Math.floor(((((age / (1000 * 60 * 60 * 24 * 365)) - years) * 12 - months) * 30 - days) * 24);
    age = `You are  ${years} years, ${months} months,${days} days old.`;
    document.getElementById("my_age").innerHTML = age;
})