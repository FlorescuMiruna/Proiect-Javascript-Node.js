const enterShopButton = document.querySelector("#enterShop");
const hideImageButton = document.querySelector("#hideImage");
const womenClothesButton = document.querySelector("#women");
const menClothesButton = document.querySelector("#men");
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

//Task de nivel 1: 9.Colectii dinamice versus statice

//Elementele din lista sunt selectate dupa clasa si puse intr-un vector.
//Pentru ca am folosit "querySelector" colectia este statica

let colectieStatica = document.querySelectorAll(".F");
womenClothesButton.addEventListener("click", function(event) {
    //Facem sa dispara elementele de pe pozitii divizibile cu 3
    for (let i = 0; i < colectieStatica.length; i++) {
        if ((i + 1) % 3 == 0)

            colectieStatica[i].style.display = "none";
    }
})

//Elementele din lista sunt selectate dupa clasa si puse intr-un vector.
//Pentru ca am folosit "getElementsByClassName" colectia este dinamica

let colectieDinamica = document.getElementsByClassName("M");
menClothesButton.addEventListener("click", function(event) {

    //Facem sa dispara elementele de pe pozitii divizibile cu 3
    for (let i = 0; i < colectieDinamica.length; i++) {
        if ((i + 1) % 3 == 0)

            colectieDinamica[i].style.display = "none";
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

// Task de nivel 2: Intrebare in timp limita

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
            document.getElementById("textInput").disabled = true;

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

//Task de nivel 1: 5.Inversare lista

//Pentru fiecare din cele doua liste din pagina
//cand se da dublu-click pe o lista inversam elementele din ea, adica "copiii" acesteia
document.getElementById("lista1").addEventListener("dblclick", reverseList1);
document.getElementById("lista2").addEventListener("dblclick", reverseList2);

function reverseList1() {
    let lista = document.getElementById("lista1");
    let l = lista.childNodes.length;
    while (l--)
        lista.appendChild(lista.childNodes[l]);
}

function reverseList2() {
    let lista = document.getElementById("lista2");
    let l = lista.childNodes.length;
    while (l--)
        lista.appendChild(lista.childNodes[l]);
}