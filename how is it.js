function fn1(){
    var str = document.getElementById("text1").value;
    alert("value is insiad in the text box is: " + str);
}

function fn1()
{
    var rd1 = document.getElementById("rd1");
    var rd2 = document.getElementById("rd2");
    if(rd1.checked==true){
    alert("this channel is selected: " + rd1.value);
    }else if(rd2.checked==true){
        alert("this channel is selected: " + rd2.value);
    }else
        alert("no channel selected")
    }