// Code to set max date for today

/*
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
 if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 

today = yyyy+'-'+mm+'-'+dd;
document.getElementById("doj").setAttribute("max", today);
*/



var modal = document.getElementById("myModal");
function displayForm(){
	modal.style.display = "block";
}

document.getElementsByClassName("close")[0].onclick = function() {
	modal.style.display = "none";
}
function formvalidation(empform){
	var pattern =/^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;
	if (empform["name"].value== "") {
		alert("Name field is empty!!");
		return false;
	}else if (empform["employeeid"].value== "") {
		alert("Employee ID field is empty!!");
		return false;
	}else if (empform["email"].value== "") {
		alert("Email Id field is empty!!");
		return false;
	}else if (empform["doj"].value=="") {
		alert("Date Of Joining field is empty!!");
		return false;
	}
	return true;
}
document.getElementById("addEmployee").onclick=function(){
	var emform=document.getElementById("empform");
	if(formvalidation(empform)){
		var rowCount = document.getElementById("employees").rows.length;
		var row = document.getElementById("employees").insertRow(rowCount);
		row.insertCell(0).innerHTML=document.getElementById("name").value;
		row.insertCell(1).innerHTML= document.getElementById("employeeid").value;
		row.insertCell(2).innerHTML= document.getElementById("department").value;
		row.insertCell(3).innerHTML= document.getElementById("email").value;
		row.insertCell(4).innerHTML= document.getElementById("doj").value;
		row.insertCell(5).innerHTML= '<input type="button" class="removebtn"  value = "&times;" onClick="removeRow(this)">';
		emform.reset();
		modal.style.display = "none";
	}else{

	}


}

function removeRow(obj) {

	var index = obj.parentNode.parentNode.rowIndex;
	document.getElementById("employees").deleteRow(index);

}