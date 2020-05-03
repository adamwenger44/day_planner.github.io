var todaysDate = document.querySelector('#currentDay')
var now = moment().format('MMMM Do YYYY');
todaysDate.innerHTML = now

var nineAM = document.getElementById('nineAM');
var nineAMbtn = document.getElementById('nineAMbtn');
var tenAM = document.getElementById('tenAM');
var tenAMbtn = document.getElementById('tenAMbtn');
var elevenAM = document.getElementById('elevenAM');
var elevenAMbtn = document.getElementById('elevenAMbtn');
var twelvePM = document.getElementById('twelvePM');
var twelvePMbtn = document.getElementById('twelvePMbtn');
var onePM = document.getElementById('onePM');
var onePMbtn = document.getElementById('onePMbtn');
var twoPM = document.getElementById('twoPM');
var twoPMbtn = document.getElementById('twoPMbtn');
var threePM = document.getElementById('threePM');
var threePMbtn = document.getElementById('threePMbtn');
var fourPM = document.getElementById('fourPM');
var fourPMbtn = document.getElementById('fourPMbtn');
var fivePM = document.getElementById('fivePM');
var fivePMbtn = document.getElementById('fivePMbtn');





nineAMbtn.onclick = function () {
    var nineAMvalue = nineAM.value;

    localStorage.setItem("text9AM", nineAMvalue);
};
var valueNineAm = localStorage.getItem("text9AM");
nineAM.innerHTML = valueNineAm;


tenAMbtn.onclick = function () {
    var tenAMvalue = tenAM.value;

    localStorage.setItem("text10AM", tenAMvalue);
};
var valueTenAm = localStorage.getItem("text10AM");
tenAM.innerHTML = valueTenAm;


elevenAMbtn.onclick = function () {
    var elevenAMvalue = elevenAM.value;

    localStorage.setItem("text11AM", elevenAMvalue);
};
var valueElevenAM = localStorage.getItem("text11AM");
elevenAM.innerHTML = valueElevenAM;


twelvePMbtn.onclick = function () {
    var twelvePMvalue = twelvePM.value;

    localStorage.setItem("text12PM", twelvePMvalue);
};
var valueTwelvePM = localStorage.getItem("text12PM");
twelvePM.innerHTML = valueTwelvePM;


onePMbtn.onclick = function () {
    var onePMvalue = onePM.value;

    localStorage.setItem("text1PM", onePMvalue);
};
var valueOnePM = localStorage.getItem("text1PM");
onePM.innerHTML = valueOnePM;


twoPMbtn.onclick = function () {
    var twoPMvalue = twoPM.value;

    localStorage.setItem("text2PM", twoPMvalue);
};
var valueTwoPM = localStorage.getItem("text2PM");
twoPM.innerHTML = valueTwoPM;


threePMbtn.onclick = function () {
    var threePMvalue = threePM.value;

    localStorage.setItem("text3PM", threePMvalue);
};
var valueThreePM = localStorage.getItem("text3PM");
threePM.innerHTML = valueThreePM;


fourPMbtn.onclick = function () {
    var fourPMvalue = fourPM.value;

    localStorage.setItem("text4PM", fourPMvalue);
};
var valueFourPM = localStorage.getItem("text4PM");
fourPM.innerHTML = valueFourPM;


fivePMbtn.onclick = function () {
    var fivePMvalue = fivePM.value;

    localStorage.setItem("text5PM", fivePMvalue);
};
var valueFivePM = localStorage.getItem("text5PM");
fivePM.innerHTML = valueFivePM;
