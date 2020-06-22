var button =document.getElementsByClassName('button');
var display=document.getElementById('display');

var op1 ='0';
var operator;
var op2;
var check="true";




for(var i=0;i<button.length;i++)
{
	button[i].addEventListener('click',function(){

	var value= this.getAttribute('calc-value');
    
    var input =display.innerText;
    
    	  
   if( input=="" && ( value=="+" || value=="-" || value=="/" || value=="*" || value=="=" || value == "%" || value == "+/-" )  )
       {
              display.innerText="Press AC & enter no first";
       }
         
  else if(value=="ac")
    {
        display.innerText="";
    	op1='0';
    	operator='';
    	op2='';

    }
   else if(value=="+")
    {
        op1=parseFloat(display.innerText);
        operator="+";
        display.innerText="";
    }

    else if(value=="-")
    {
    	 op1=parseFloat(display.innerText);
        operator="-";
        display.innerText="";
    }
    else if(value=="*")
    {
    	 op1=parseFloat(display.innerText);
        operator="*";
        display.innerText="";
    }
    else if(value=="/")
    {
    	 op1=parseFloat(display.innerText);
        operator="/";
        display.innerText="";
    }
     
    else if(value=="+/-")
    {
    	 op1=parseFloat(display.innerText);
    	 op1=-1*op1;
    	 display.innerText=op1;
    }

    else if(value=="%")
    {
    	 op1=parseFloat(display.innerText);
    	 op1=op1/100;
    	 display.innerText=op1;
    }




  

    else if(value=="=")
    {
    	op2=parseFloat(display.innerText);
    	var result=eval(op1 + " "+ operator + " "+op2);
    	display.innerText=result;
    }


    else{

    	display.innerText += value;
    }








  

    
     


});
}
