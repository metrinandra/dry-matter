function calculate(){

var zalesskb = document.getElementById("sausnazale").value;
var kukuruzaskb = document.getElementById("sausnakukuruza").value;
var govis = document.getElementById("cows").value;
var sOne = document.getElementById("sausnaone").value;
var sTwo = document.getElementById("sausnatwo").value;


let paterinszalesskb = Math.round(zalesskb * govis);
let paterinskukuruza = Math.round(kukuruzaskb * govis);
let kopaskb = paterinskukuruza + paterinszalesskb;
let f11 = zalesskb/(sOne/100);
let f13 = kukuruzaskb/(sTwo/100);
let blidzzale = Math.round(f11 * govis);
let blidzkukur = Math.round(f13 * govis);
let blidzkopa = blidzkukur + blidzzale;

//document.getElementById("results").innerHTML = [paterinszalesskb, paterinskukuruza , kopaskb , f11, f13, blidzzale, blidzkukur, blidzkopa];
document.getElementById("zalesskb").innerHTML = paterinszalesskb;
document.getElementById("kukuruzaskb").innerHTML = paterinskukuruza;
document.getElementById("skb").innerHTML = kopaskb;
document.getElementById("blkopa").innerHTML = blidzkopa;
document.getElementById("blzale").innerHTML = blidzzale;
document.getElementById("blkukur").innerHTML = blidzkukur;
}