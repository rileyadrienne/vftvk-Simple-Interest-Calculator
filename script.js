function compute()
{
    var principle = document.getElementById("principal").value;
    var rate= document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principle * years * rate/100;
    var year= new Date().getFullyear()+parseInt(years);
}
function updaterate()
{
    var rateval = document.getElemendById("rate").value;
    document.getElementById("rate_val").innerText=rateval;}
        
