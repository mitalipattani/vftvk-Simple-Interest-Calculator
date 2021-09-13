function compute()
{
  var principal_amount = document.getElementById("principal").value;
    if(principal_amount =="")
    {
          alert("Please enter the prinicpal amount");
          principal.focus();
    }
    else if(principal_amount <=0)
    {
          alert("Enter the positive number");
          principal.focus();          
    }
    else
    {
   var rate = document.getElementById("rate").value;
   var years = document.getElementById("years").value;
   var interest = principal_amount * years * rate /100;
   var year = new Date().getFullYear() + parseInt(years);  
   document.getElementById("result").innerHTML="If you deposit "+ "<span class='highlight'>"+ principal_amount + "</span>" +",\<br\>at an interest rate of "+"<span class='highlight'>"+rate+"</span>"+"%\<br\>You will receive an amount of "+"<span class='highlight'>"+interest+"</span>"+",\<br\>in the year "+"<span class='highlight'>"+year+"</span>"+"\<br\>";
   }
   
}

function updateRate()
{
     var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;

}
        
		
