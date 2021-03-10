var rolly = ()=> {
    var rand_var1 = Math.floor(Math.random() * 6 + 1);
    var rand_var2 = Math.floor(Math.random() * 6 + 1);
    
    console.log(document.getElementById("reslt1").innerHTML = "Score = " + rand_var1);
    console.log(document.getElementById("reslt2").innerHTML = "Score = " + rand_var2);
    
    document.getElementById("img1").src = "dicy/images/dice" + rand_var1 + ".png";
    document.getElementById("img2").src = "dicy/images/dice" + rand_var2 + ".png";

    if(rand_var1>rand_var2){
        document.getElementById("winr1").style.visibility = "visible";
        document.getElementById("winr2").style.visibility = "hidden";

    }else if(rand_var2>rand_var1){
        document.getElementById("winr2").style.visibility = "visible";
        document.getElementById("winr1").style.visibility = "hidden";
    }
    else if(rand_var1 === rand_var2){
        document.getElementById("winr2").style.visibility = "hidden";
        document.getElementById("reslt2").innerHTML = "Score = " + rand_var2 + " Draw!!!";
        document.getElementById("winr1").style.visibility = "hidden";
        document.getElementById("reslt1").innerHTML = "Score = " + rand_var1 + " Draw!!!";
    }

}
