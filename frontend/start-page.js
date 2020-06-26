const enterShopButton = document.querySelector("#enterShop");
const hideImageButton = document.querySelector("#hideImage");

const submitButton = document.querySelector("#submit");
let inputText = document.querySelector("#textInput");

let imagesVisibility = true;

enterShopButton.addEventListener("click", function(event) {
    window.location.replace("file:///C:/Users/Miruna/Desktop/Proiect/javascript-project/frontend/welcome-page.html");
})

///Task de nivel 1: 8.Ascunde/Afiseaza imagini
hideImageButton.addEventListener("click", function(event) {

    //Cand se da click pe buton, daca imaginile sunt vizibile
    //se ia fiecare imagine in parte dupa id si se ascunde, iar
    //denumirea butonului se schimba, variabila
    //care ne spune daca imaginile sunt vizibile sau nu
    //se face false
    if (imagesVisibility) {
        document.getElementById("1").style.visibility = "hidden";
        document.getElementById("2").style.visibility = "hidden";
        document.getElementById("3").style.visibility = "hidden";
        document.getElementById("4").style.visibility = "hidden";
        document.getElementById("5").style.visibility = "hidden";
        document.getElementById("6").style.visibility = "hidden";

        document.getElementById("hideImage").innerHTML = "Show my images";

        imagesVisibility = false;

    }
    //Daca imaginile nu sunt vizibile, se ia fiecare in parte dupa id
    //si se face vizibila, iar denumirea butonului se schimba iar
    else {
        document.getElementById("1").style.visibility = "visible";
        document.getElementById("2").style.visibility = "visible";
        document.getElementById("3").style.visibility = "visible";
        document.getElementById("4").style.visibility = "visible";
        document.getElementById("5").style.visibility = "visible";
        document.getElementById("6").style.visibility = "visible";

        document.getElementById("hideImage").innerHTML = "Hide my images ";

        imagesVisibility = true;

    }
})



//Task de nivel 2: 2.Aparitie treptata cuvant.

//Initial ascundem paragrafele
document.getElementById("paragraf1").style.visibility = "hidden";
document.getElementById("paragraf2").style.visibility = "hidden";

//Luam tot continutul textului (pentru ambele texte)
var text1 = document.getElementById("paragraf1").textContent;
var text2 = document.getElementById("paragraf2").textContent;

//Punem cuvintele in vectori.Am split-uit textul dupa spatii

text1 = text1.split(" ");
text2 = text2.split(" ");
console.log(text1);


let i = 0;
let j = 0;
let paragraf1 = "";
let paragraf2 = "";
//La fiecare treime de secunda noului paragraf pe care vrem sa il punem in pagina
//i se adauga un cuvant, iar paragraful devinde vizibil
//Dupa ce am terminat cuvintele din primul text incep sa apara
//cele din al doilea text, iar cand se termina si cele din al doilea text se goleste intervalul.

function showMyWords() {
    document.getElementById("paragraf1").style.visibility = "visible";
    if (i + 1 <= text1.length) {
        paragraf1 += text1[i] + " ";
        document.getElementById("paragraf1").innerHTML = paragraf1;
        i += 1;

    } else if (j + 1 <= text2.length) {
        document.getElementById("paragraf2").style.visibility = "visible";
        paragraf2 += text2[j] + " ";
        document.getElementById("paragraf2").innerHTML = paragraf2;
        j += 1;

    } else clearInterval(timer);
}
var timer = setInterval(showMyWords, 333);

// Task de nivel 2: 8.Intrebare in timp limita

let buttonClicked = false;
submitButton.addEventListener('click', function(event) {
    //Avem o variabila care se face true in momentul in care butonul de submit este apasat
    buttonClicked = true;

})
inputText.addEventListener('click', function(event) {
    function testAnswer() {
        //La 3 secunde dupa ce s-a apasat pe inputul de text, se verifica daca variabila este false, 
        //adica daca nu s-a apasat pe butonul de submit

        if (buttonClicked == false) {
            //Daca nu s-a apasat pe buton, apare alerta, dispare intrebarea, afisam mesajul
            //corespunzator in paragraful de sub el si  se dezactiveaza input-ul
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Time is up!'

            })
            document.getElementById("answer").innerHTML = "You are wrong! ";
            document.getElementById("question1").style.display = "none";
            document.getElementById("question2").style.display = "none";
            submitButton.style.display = "none";
            document.getElementById("textInput").disabled = true; //Dezactivam inputul

        } else {
            //Daca s-a facut click pe buton apare mesajul corespunzator 
            //si dispar butonul de submit si inputul
            document.getElementById("answer").innerHTML = "Congrats! ";
            document.getElementById("answer").style.color = "rgb(51, 204, 51)";
            submitButton.style.display = "none";
            textInput.style.display = "none";

        }
    }

    setTimeout(testAnswer, 3000);

})


//Task de nivel 3: 17.Posibilitatea utilizatorului de a marca sectiuni din site ca fiind importante

let element1Down = document.getElementById("s1cupon");
let element2Down = document.getElementById("s2cupon");
let element3Down = document.getElementById("s3cupon");
let element4Down = document.getElementById("s4cupon");
let element5Down = document.getElementById("s5cupon");

let element1Up = document.getElementById("s11cupon");
let element2Up = document.getElementById("s21cupon");
let element3Up = document.getElementById("s31cupon");
let element4Up = document.getElementById("s41cupon");
let element5Up = document.getElementById("s51cupon");

console.log(element1Down.style);


function showMarkedSections() {
    //Functia de afisare a cupanelor
    //Cele marcate vor fi afisate in partea de sus a paginii
    //cu chenar rosu, iar cele nemarcate in partea de jos 

    if (localStorage.getItem("ok1cupon") === "true") {

        element1Down.style.visibility = "hidden";
        element1Up.style.visibility = "visible";
    }
    if (localStorage.getItem("ok1cupon") === 'false') {

        element1Down.style.visibility = "visible";
        element1Up.style.visibility = "hidden";
    }

    if (localStorage.getItem("ok2cupon") === 'true') {

        element2Down.style.visibility = "hidden";
        element2Up.style.visibility = "visible";
    }
    if (localStorage.getItem("ok2cupon") === 'false') {

        element2Down.style.visibility = "visible";
        element2Up.style.visibility = "hidden";
    }

    if (localStorage.getItem("ok3cupon") === 'true') {

        element3Down.style.visibility = "hidden";
        element3Up.style.visibility = "visible";
    }
    if (localStorage.getItem("ok3cupon") === 'false') {

        element3Down.style.visibility = "visible";
        element3Up.style.visibility = "hidden";
    }

    if (localStorage.getItem("ok4cupon") === 'true') {

        element4Down.style.visibility = "hidden";
        element4Up.style.visibility = "visible";
    }
    if (localStorage.getItem("ok4cupon") === 'false') {

        element4Down.style.visibility = "visible";
        element4Up.style.visibility = "hidden";
    }

    if (localStorage.getItem("ok5cupon") === 'true') {

        element5Down.style.visibility = "hidden";
        element5Up.style.visibility = "visible";
    }
    if (localStorage.getItem("ok5cupon") === 'false') {

        element5Down.style.visibility = "visible";
        element5Up.style.visibility = "hidden";
    }

    console.log("ok1cupon", localStorage.getItem("ok1cupon"));
    console.log("ok2cupon", localStorage.getItem("ok2cupon"));
    console.log("ok2cupon", localStorage.getItem("ok2cupon"));
    console.log("ok3cupon", localStorage.getItem("ok3cupon"));
    console.log("ok4cupon", localStorage.getItem("ok4cupon"));
    console.log("ok5cupon", localStorage.getItem("ok5cupon"));
}


element1Down.addEventListener("click", function(event) {

    // Pentru fiecare cupon pe care se da click pentru a fi marcat
    //se retine in local storage intr-o variabila daca acesta este marcat sau nu
    localStorage.setItem("ok1cupon", true);
    showMarkedSections();


});



element2Down.addEventListener("click", function(event) {
    localStorage.setItem("ok2cupon", true);
    showMarkedSections();

});



element3Down.addEventListener("click", function(event) {
    localStorage.setItem("ok3cupon", true);
    showMarkedSections();

});

element4Down.addEventListener("click", function(event) {
    localStorage.setItem("ok4cupon", true);
    showMarkedSections();

});

element5Down.addEventListener("click", function(event) {
    localStorage.setItem("ok5cupon", true);
    showMarkedSections();

});

element1Up.addEventListener("click", function(event) {
    localStorage.setItem("ok1cupon", false);
    showMarkedSections();

});

element2Up.addEventListener("click", function(event) {
    localStorage.setItem("ok2cupon", false);
    showMarkedSections();

});

element3Up.addEventListener("click", function(event) {
    localStorage.setItem("ok3cupon", false);
    showMarkedSections();

});
element4Up.addEventListener("click", function(event) {
    localStorage.setItem("ok4cupon", false);
    showMarkedSections();

});
element5Up.addEventListener("click", function(event) {
    localStorage.setItem("ok5cupon", false);
    showMarkedSections();

});
showMarkedSections();