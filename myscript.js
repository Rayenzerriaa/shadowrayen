function calc() { 
    var v1 = parseInt(document.getElementById("textVal1").value);
    if (v1%2==0)
    document.getElementById("result").value =("le nombre est pair");
    else {
      document.getElementById("result").value =("le nombre est impair");
        
      }
 
}