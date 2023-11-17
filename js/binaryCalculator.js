var opr = "";

var screen = document.getElementById("res");
screen.innerHTML = "";

function buttonClicked(e) {
    console.log(e)
    var btn = e.target || e.srcElement;
    
    if (btn.id != "btnClr" && btn.id != "btnEql") {
        screen.innerHTML += btn.innerHTML;
        
        if (btn.id != "btn0" && btn.id != "btn1") {
            opr = btn.innerHTML;
        }
    } else if (btn.id == "btnEql") {
        var str = screen.innerHTML.split(opr);
        var op1 = str[0];
        var op2 = str[1];
        
        screen.innerHTML = (~~eval(parseInt(op1, 2) + opr + parseInt(op2, 2))).toString(2);
        
        opr = "";
    } else if (btn.id == "btnClr") {
        screen.innerHTML = "";
        opr = "";
    }
}
