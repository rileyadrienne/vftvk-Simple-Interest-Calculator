function compute()
{
    var principle = document.getElementById("principal").value;
    var rate= document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principle * years * rate/100;
    var year= new Date().getFullyear()+parseInt(years);
    var result= document.getElementById("result").value;
   document.getElementById("result").innerHTML="If you deposit";
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
