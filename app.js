let timeLeft = 60;
let elem = document.getElementById('timer');
let timerId = setInterval(countdown, 1000);
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
    },
    {
        nama : "./img/soal/soal 5.jpg",
        hint : "Aktor Pria",
        jawaban : "reza rahardian"
    },
    {
        nama : "./img/soal/soal 6.jpg",
        hint : "Penyanyi Wanita",
        jawaban : "ariana grande"
    },
    {
        nama : "./img/soal/soal 7.jpg",
        hint : "Aktris Wanita",
        jawaban : "nikita willy"
    },
    {
        nama : "./img/soal/soal 8.jpg",
        hint : "Aktris Wanita",
        jawaban : "titi kamal"
    },
    {
        nama : "./img/soal/soal 9.jpg",
        hint : "Penyanyi Pria",
        jawaban : "justin timberlake"
    },
    {
        nama : "./img/soal/soal 10.jpg",
        hint : "Penyanyi Wanita",
        jawaban : "selena gomez"
    },
    {
        nama : "./img/soal/soal 11.jpg",
        hint : "Aktor Pria",
        jawaban : "robert downey jr"
    },
    {
        nama : "./img/soal/soal 12.jpg",
        hint : "Penyanyi Wanita",
        jawaban : "mariah carey"
    },
    {
        nama : "./img/soal/soal 13.jpg",
        hint : "Aktris Wanita",
        jawaban : "putri marino"
    },
    {
        nama : "./img/soal/soal 14.jpg",
        hint : "Aktris Wanita",
        jawaban : "sophia latjuba"
    },
    {
        nama : "./img/soal/soal 15.jpg",
        hint : "Penyanyi Pria",
        jawaban : "bob tutupoly"
    },
]

function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
        result();
    } else {
        elem.innerHTML = timeLeft;
        timeLeft--;
    }
}

function gohome() {

    window.location.href="./index.html"

}

function result () {
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];

    if(counterBenar === 0 ){
        let hasil = document.getElementById("modalHasil").innerHTML = `WAKTU HABIS!!!, JAWABAN KAMU TIDAK ADA YANG BENAR, CUPU!!!`
    }else if (counterBenar <= 5){
        hasil = document.getElementById("modalHasil").innerHTML = `WAKTU HABIS!!!, KAMU CUMA MENJAWAB ${counterBenar} SOAL DENGAN BENAR, PAYAH!!!`
    } else if(counterBenar > 5){
        hasil = document.getElementById("modalHasil").innerHTML = `WAKTU HABIS!!!, KAMU TELAH MENJAWAB ${counterBenar} SOAL DENGAN BENAR, YEAAAAYYYY!!!!`
    }

    modal.style.display = "block";
    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
          gohome().reload
        }
      }
    span.onclick = function() {
      modal.style.display = "none";
      gohome().reload
    }
}

function getRandom() {

    let max = 15;
    let random = [];
        for(let i = 0;i<max ; i++){
            let temp = Math.floor(Math.random()*max);
            if(random.indexOf(temp) == -1){
                random.push(temp);
            } else {
                i--;
            }
        }
    return random
}

let index = getRandom()[0]

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
    img.src = obj[index].nama
    document.getElementById('gambar').appendChild(img);
    let hint = obj[index].hint
    document.getElementById('hint').innerHTML = hint
}

function enterKey() {

    let inputJawaban = document.getElementById('jawaban')

    inputJawaban.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("ambilJawaban").click();        
        }        
    })

}

enterKey()

function getAnswer() {
    let answer = document.getElementById('jawaban').value.toLowerCase()    
    if (answer === obj[index].jawaban){
        counterBenar++
        alert("Jawaban benar")
        document.getElementById('jawaban').value = ''
        changeImage()
    } else {
        alert(`Jawaban Salah, Yang benar adalah "${obj[index].jawaban}"`)
        document.getElementById('jawaban').value = ''
        changeImage()
    }
}