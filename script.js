const billInput = document.getElementById('bill-js');
const peopleInput = document.getElementById('people-js');
const tip = document.getElementById('amount-js');
const total = document.getElementById('total-js');
const reset = document.getElementById('reset-js');
const percentage = document.querySelectorAll('#percentage-js');
const customTip = document.getElementById('custom-percentage-js');

billInput.value = "0.0";
peopleInput.value = "0";
tip.innerHTML = "$" + (0.0).toFixed(2);
total.innerHTML = "$" + (0.0).toFixed(2);


let billValue = 0.0;
let peopleValue = 0;
let tipValue = 0;



billInput.addEventListener('input', applyBill);
peopleInput.addEventListener('input', applyPeople);
percentage.forEach(function(percent){
    percent.addEventListener('click', percentageActive);
})
customTip.addEventListener('input', customInput);
reset.addEventListener('click', resetAll)

function applyBill(){
    billValue = parseFloat(billInput.value)
    calcResults()

}

function applyPeople(){
    peopleValue = parseFloat(peopleInput.value)
    calcResults()
}


function customInput(){
    tipValue = parseFloat(customTip.value / 100);
    percentage.forEach(function(percent)
    {
        percent.classList.remove('pressed')
    });
    calcResults() 
}

function percentageActive(e){
    percentage.forEach(function(percent){
        percent.classList.remove('pressed')
        if(e.target.innerHTML == percent.innerHTML)
        {
            percent.classList.add('pressed');
            tipValue = parseFloat(percent.value) / 100;
        }
    })
    calcResults()
}

function calcResults() {
    if(peopleValue >= 1)
    {
        let tipResult = (billValue / tipValue) + peopleValue;
        let totalResult = (billValue / tipResult) + peopleValue;
        tip.innerHTML = "$" + tipResult.toFixed(2)
        total.innerHTML = "$" + totalResult.toFixed(2)
    }
}

function resetAll(){
    billInput.value = "0.0";
    applyBill()
    peopleInput.value = "0";
    applyPeople()
    customTip.value = "";
    percentage.value = "0" 
    percentage.forEach(function(percent){
        percent.classList.remove('pressed')
    })

    tip.innerHTML = "$" + (0.0).toFixed(2);
    total.innerHTML = "$" + (0.0).toFixed(2);
}