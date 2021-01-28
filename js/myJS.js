var pin = 1234;
var count = 0;

function checkPin()
{
    var userPin = document.getElementById("pin").value;

    count++;

    for(var z = 0; z <3; z++)
    {
        if(userPin == pin)
        {
            document.getElementById("pin2").value="access granted";
            document.getElementById("attempts").value="";
            openMenu();
            {
                break;
            }
        }
        else if(count <=3)
         
        {
            document.getElementById("pin2").value="incorrect please try again";
            document.getElementById("attempts").value=count;
            document.getElementById("pin").value="";
        }
       else
        {
            document.getElementById("pin2").value = "locked out of the system - contact bank";
            document.getElementById("pin").disabled=true;
            document.getElementById("b1").style.display="none";
            
        }
    }
}

function openMenu()
{
    setTimeout(function(){
        location.replace("menu.html")
    }, 3000);
}

