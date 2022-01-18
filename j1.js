$( document ).ready(function() {

});
function submit1(){
    
    //take the given text as input

    var a =  document.getElementById("text1").value;
    var c='';

    for(let i=0;i<a.length;i++)
    {   
        //apply the encryption algorithm and append the value in c
        
        let asc=a.charCodeAt(i);
        let aasc=122;
        c+=String.fromCharCode((122-asc+97));
    }

    // print c on screen
    document.getElementById("screen10").innerHTML= "encrypted text is:";
    document.getElementById("screen1").innerHTML= c;
    
}
function submit2(){

    //take the given text as input
    
    var a =  document.getElementById("number2").value;
    var c='';
    
    for(let i=0;i<a.length;i++)
    {
       //apply the encryption algorithm and append the value in c
        
        let asc=a.charCodeAt(i);
        let aasc=122;
        c+=String.fromCharCode((122-asc+97));
    }
      
       // print c on screen
       
       document.getElementById("screen20").innerHTML= "decrypted text is:";
       document.getElementById("screen2").innerHTML=c;
}