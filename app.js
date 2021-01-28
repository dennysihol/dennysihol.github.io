let timeLeft = 30;
let elem = document.getElementById('timer');
let timerId = setInterval(countdown, 1000);
let index = 0
let counterBenar = 0

let obj = [
    {
        nama : "./img/soal/soal 1.jpg",
        hint : "Pemain Sepakbola",
        jawaban : "lionel messi"
    },
    {
        nama : "./img/soal/soal 2.jpg",
        hint : "Aktor Pria",
        jawaban : "chris hemsworth"
    },
    {
        nama : "./img/soal/soal 3.jpg",
        hint : "Aktor Pria",
        jawaban : "tom holland"
    },
    {
        nama : "./img/soal/soal 4.jpg",
        hint : "Aktor Pria",
        jawaban : "bradley cooper"
    }
]

function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
        doSomething();
        location.reload();
    } else {
        elem.innerHTML = timeLeft;
        timeLeft--;
    }
}

function doSomething() {
    console.log("Waktu Habis");
}

function buildImage() {
    let img = document.createElement('img')
    img.src = obj[index].nama
    document.getElementById('gambar').appendChild(img);
    let hint = obj[index].hint
    document.getElementById('hint').innerHTML = hint
}

function changeImage(){
    let img = document.getElementById('gambar').getElementsByTagName('img')[0]
    index++;
    index = index % obj.length; // This is for if this is the last image then goto first image
    img.src = obj[index];
}


function getAnswer() {
    let answer = document.getElementById('jawaban').value
    if (answer === obj[index].jawaban){
        counterBenar++
        alert("Jawaban benar")
        changeImage()
        countdown().reload

    } else {
        alert(`Jawaban Salah, Yang benar adalah ${obj[index].jawaban}`)
        changeImage()
        countdown().reload
    }

}