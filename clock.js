


let isim = prompt("isminiz nedir ?")
let myName = document.querySelector("#myName")
myName.innerHTML = ` ${isim}`



function tarihSaat() {
    var date = new Date().toLocaleString(); 
    document.getElementById("myClock").innerHTML = date; 
}
setInterval(tarihSaat, 1000); 





// let saat = getHours();
// let dakika = getMinutes();
// let saniye = getSeconds();
// myClock.innerHTML = `${saat} ${dakika} ${saniye}`
// document.getElementById("myClock").innerHTML = Date()  ;