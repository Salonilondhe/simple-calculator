function one(){
    val= document.getElementById('one').value;
   document.getElementById('result').value+=val;
}
function two(){
    val= document.getElementById('two').value;
   document.getElementById('result').value+=val;
}
function three(){
    val= document.getElementById('three').value;
   document.getElementById('result').value+=val;
}
function four(){
    val= document.getElementById('four').value;
   document.getElementById('result').value+=val;
}
function five(){
    val= document.getElementById('five').value;
   document.getElementById('result').value+=val;
}
function six(){
    val= document.getElementById('six').value;
   document.getElementById('result').value+=val;
}
function seven(){
    val= document.getElementById('seven').value;
   document.getElementById('result').value+=val;
}
function eight(){
    val= document.getElementById('eight').value;
   document.getElementById('result').value+=val;
}
function nine(){
    val= document.getElementById('nine').value;
   document.getElementById('result').value+=val;
}
function zero(){
    val= document.getElementById('zero').value;
   document.getElementById('result').value+=val;
}
function dot(){
    val= document.getElementById('dot').value;
   document.getElementById('result').value+=val;
}
//opreator function:-

function divide(){
    val= document.getElementById('divide').value;
   document.getElementById('result').value+=val;
}
function multiply(){
    val= document.getElementById('multiply').value;
   document.getElementById('result').value+=val;
}
function adds(){
    val= document.getElementById('adds').value;
   document.getElementById('result').value+=val;
}

function subs(){
    val= document.getElementById('subs').value;
   document.getElementById('result').value+=val;
}
function power(){
    val= document.getElementById('percent').value;
   document.getElementById('result').value+=val;
  
  


}

//evalute the equation using eval() function:-

function equal(){
   let x=document.getElementById('result').value;
   let y=eval(x);
   document.getElementById('result').value=y;
   // console.log(x);
   // jso=JSON.stringify(x);
   // console.log(jso);
   // const str=jso;
   // const result=str.split(/[+]/);
   // console.log(result);
   // console.log(result.(index-1)+result.(index+1));
   
   

}

//clear  function:-
function clr(){
   document.getElementById('result').value=null;
}

//delete function:-
function del(){
 let x= document.getElementById('result').value;
   let y=x.slice(0,-1);
   document.getElementById('result').value=y;

  }
  
