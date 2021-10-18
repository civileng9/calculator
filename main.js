var display = document.getElementById('display');

function showvalue(e){
	display.value +=e
	}

function calc(){
	if(display.value==""){
		alert('Please Enter Value');
	}
	else
{
	display.value = eval(display.value);
}}
function clearDisplay(){
	display.value="";
}
