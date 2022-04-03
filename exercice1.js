function random(){ 
    do {



    
    var r=(Math.floor)(Math.random()*(10)); 
    console.log(r); 
    for (var i=1;i<4;i++){
var c=prompt("please enter a number between 0 and 10 "+(r));
if (r==c){

    alert("Correct");
    var rep=prompt("do you want to try again"); 
    break ;
} else {

    alert("try again you still have "+(3-i)+" chances"); 
}



    }


}while(rep=1); 
} 