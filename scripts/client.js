$(document).ready(onReady);


function onReady(){
   
  $("#addEmployeeButton").on('click', addEmployee)
  $("#table").on('click','.deleteButton', removeEmployee);
  updateTotal()

} 
let allEmployees = [];

function addEmployee (){
    let newEmployee ={
        fName:$('#fName').val(),
        lName:$('#lName').val(),
        id:$('#idNum').val(),
        jobTitle:$('#jobTitle').val(),
        salary:$('#salary').val()
    }

    if (newEmployee.salary === '' ){
        newEmployee.salary = 0;
    }
    
    allEmployees.push(newEmployee);

    
    let el = $('#table').find('#placePeople');
    el.empty();
    for (let i = 0; i < allEmployees.length; i++) {
        
         el.append(`"<tr class = person>"
        <td>${allEmployees[i].fName}</td>
        <td>${allEmployees[i].lName}</td>
        <td>${allEmployees[i].id}</td>
        <td>${allEmployees[i].jobTitle}</td>
        <td class = "employeeSalary">${allEmployees[i].salary}</td>
        <td><button class = "deleteButton">Delete</button></td></tr>`)
            
    }
    
    console.log('addEmployee function');
   
    
    $('#fName').val('');
    $('#lName').val('');
    $('#idNum').val('');
    $('#jobTitle').val('');
    $('#salary').val('');
    updateTotal()

}

function removeEmployee(){
console.log("removeEmployee function");
let tableIndex = $(this).parent().parent().index('tr');
console.log('tableIndex:',tableIndex);

allEmployees.splice(tableIndex-1,1);
    

$(this).parent().parent().remove();
updateTotal()

} 


function updateTotal (){
    let sumSalary = 0
    for (let i = 0; i < allEmployees.length; i++) {
        
       sumSalary += parseInt(allEmployees[i].salary,10);
    }
    let monthlyTotal = parseFloat(sumSalary / 12).toFixed(2);
    $("#monthlySalary").empty();
    $("#monthlySalary").append('Monthly Total = $'+ monthlyTotal)
    $("#totalSalary").empty();
    $("#totalSalary").append('Total Salary = $'+ sumSalary)

    if (monthlyTotal > 20000){
        $('#monthlySalary').addClass('red')
        $('#totalSalary').addClass('red')
    }
    else{
        $('#monthlySalary').removeClass('red')
        $('#totalSalary').removeClass('red')
    }
}