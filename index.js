const BillAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const availableNotes =[2000, 500, 100, 20, 10, 5,1];

console.log(noOfNotes);
checkButton.addEventListener('click' , function validateBillAmount(){
    hideMessage();
    if(BillAmount.value > 0)
    {   
        if(cashGiven.value >= BillAmount.value)
        {
            const amountToBeReturned = cashGiven.value - BillAmount.value;
            calculateChange(amountToBeReturned);
            console.log("cash given is greater")
        }
        else
        {
            showMessage("Do you want to wash plates! ");
        }
    }
    else
    {   
        showMessage("The Bill amount should be greater than 0");
    }
})

function hideMessage(){
    message.style.display ="none";  
}
function showMessage (msg)
{   

    message.style.display ="block";
    message.innerText = msg;
}

function calculateChange(amountToBeReturned)
{
    for(i=0; i< availableNotes.length; i++)
    {
       
        const numberOfNotes = Math.trunc(amountToBeReturned/availableNotes[i]);
        amountToBeReturned %= availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }   
}