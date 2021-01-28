var balance = 100;

document.getElementById("test").innerHTML=balance;

function addFund()
{
    var add = 0;

    add = parseInt(deposit.value);

    balance = add + balance;

    document.getElementById("test").innerHTML=balance;

    document.getElementById("confirmDeposit").innerHTML="Your funds have been desposited";


    setTimeout(function(){
        document.getElementById("confirmDeposit").innerHTML=""
    },2000);
}





function withdraw()
{

    var sub = 0;

    sub = parseInt(withdrawNum.value);

    balance = balance - sub;

    document.getElementById("test").innerHTML=balance;

    document.getElementById("confirmWithdraw").innerHTML="success";
    

    setTimeout(function(){
        document.getElementById("text").innerHTML=""
    },2000);

}

function index()
{
    location.replace("index.html");
}
