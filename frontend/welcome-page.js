const logInButton = document.querySelector("#logIn");
const backButton = document.querySelector("#back");
const showAge = document.querySelector("#showAge");

logInButton.addEventListener("click", function(event) {
    window.location.replace("file:///C:/Users/Miruna/Desktop/Proiect/javascript-project/frontend/login-page.html");
})
backButton.addEventListener("click", function(event) {
    window.location.replace("file:///C:/Users/Miruna/Desktop/Proiect/javascript-project/frontend/start-page.html");
})


//Task de nivel 2: 1.Varsta utilizator



showAge.addEventListener("click", function(event) {

    var inputDate = document.getElementById("myDate").value;

    //Se actualizeaza la fiecare secunda
    var x = setInterval(function() {


            var birthDate = new Date(inputDate);
            var today = new Date();
            //Transformam inputul intr-o data
            //Functie pentru diferenta in luni dintre doua date 
            function monthDiff(d1, d2) {
                var months;
                months = (d2.getFullYear() - d1.getFullYear()) * 12;
                months -= d1.getMonth();
                months += d2.getMonth();
                return months;
            }
            console.log("today", today);
            console.log("birthday", birthDate);
            var years = Math.floor(monthDiff(birthDate, today) / 12);
            var months = Math.floor(monthDiff(birthDate, today) % 12);

            //Dupa ce am calculat diferenta in ani si in luni, setam anul si luna pentru cele doua 
            //la 1 Ianuarie 1970 (data de la care ia functia getTime() diferenta de timp) pentru
            //a nu mai tine cont de ele in calculul zilelor 

            today.setMonth(0);
            today.setFullYear(1970);
            birthDate = new Date();
            //Nu trebuie precizata ora la care te-ai nascut, asa ca presupunem ca e la miezul noptii
            birthDate.setFullYear(1970);
            birthDate.setUTCMonth(0);
            birthDate.setDate(14);
            birthDate.setHours(0);
            birthDate.setMinutes(0);
            birthDate.setSeconds(0);
            birthDate.setMilliseconds(0);

            today = new Date(today).getTime();
            var age = today - birthDate; //Diferenta in milisecunde dintre cele doua date
            var days = Math.floor(age / (1000 * 60 * 60 * 24));
            var hours = Math.floor((age % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((age % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((age % (1000 * 60)) / 1000);

            document.getElementById("age").innerHTML = `You are  ${years} years,${months} months,${days} days, ${hours} hours,${minutes} minutes, ${seconds} seconds old.`;


        },
        1000);

})

//Task de nivel 3

let element1Down = document.getElementById("s1");
let element2Down = document.getElementById("s2");
let element3Down = document.getElementById("s3");
let element4Down = document.getElementById("s4");
let element5Down = document.getElementById("s5");

let element1Up = document.getElementById("s11");
let element2Up = document.getElementById("s21");
let element3Up = document.getElementById("s31");
let element4Up = document.getElementById("s41");
let element5Up = document.getElementById("s51");

console.log(element1Down.style);





function showMarkedSections() {
    if (localStorage.getItem("ok1") === "true") {

        element1Down.style.visibility = "hidden";
        element1Up.style.visibility = "visible";
    }
    if (localStorage.getItem("ok1") === 'false') {

        element1Down.style.visibility = "visible";
        element1Up.style.visibility = "hidden";
    }

    if (localStorage.getItem("ok2") === 'true') {

        element2Down.style.visibility = "hidden";
        element2Up.style.visibility = "visible";
    }
    if (localStorage.getItem("ok2") === 'false') {

        element2Down.style.visibility = "visible";
        element2Up.style.visibility = "hidden";
    }

    if (localStorage.getItem("ok3") === 'true') {

        element3Down.style.visibility = "hidden";
        element3Up.style.visibility = "visible";
    }
    if (localStorage.getItem("ok3") === 'false') {

        element3Down.style.visibility = "visible";
        element3Up.style.visibility = "hidden";
    }

    if (localStorage.getItem("ok4") === 'true') {

        element4Down.style.visibility = "hidden";
        element4Up.style.visibility = "visible";
    }
    if (localStorage.getItem("ok4") === 'false') {

        element4Down.style.visibility = "visible";
        element4Up.style.visibility = "hidden";
    }

    if (localStorage.getItem("ok5") === 'true') {

        element5Down.style.visibility = "hidden";
        element5Up.style.visibility = "visible";
    }
    if (localStorage.getItem("ok5") === 'false') {

        element5Down.style.visibility = "visible";
        element5Up.style.visibility = "hidden";
    }

    console.log("ok1", localStorage.getItem("ok1"));
    console.log("ok2", localStorage.getItem("ok2"));
    console.log("ok2", localStorage.getItem("ok2"));
    console.log("ok3", localStorage.getItem("ok3"));
    console.log("ok4", localStorage.getItem("ok4"));
    console.log("ok5", localStorage.getItem("ok5"));
}


element1Down.addEventListener("click", function(event) {

    localStorage.setItem("ok1", true);
    showMarkedSections();

});



element2Down.addEventListener("click", function(event) {
    localStorage.setItem("ok2", true);
    showMarkedSections();

});



element3Down.addEventListener("click", function(event) {
    localStorage.setItem("ok3", true);
    showMarkedSections();

});

element4Down.addEventListener("click", function(event) {
    localStorage.setItem("ok4", true);
    showMarkedSections();

});

element5Down.addEventListener("click", function(event) {
    localStorage.setItem("ok5", true);
    showMarkedSections();

});

element1Up.addEventListener("click", function(event) {
    localStorage.setItem("ok1", false);
    showMarkedSections();

});

element2Up.addEventListener("click", function(event) {
    localStorage.setItem("ok2", false);
    showMarkedSections();

});

element3Up.addEventListener("click", function(event) {
    localStorage.setItem("ok3", false);
    showMarkedSections();

});
element4Up.addEventListener("click", function(event) {
    localStorage.setItem("ok4", false);
    showMarkedSections();

});
element5Up.addEventListener("click", function(event) {
    localStorage.setItem("ok5", false);
    showMarkedSections();

});
showMarkedSections();