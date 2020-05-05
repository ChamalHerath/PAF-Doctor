/*<!--Client-Model--------------------------------------------------------->*/

var $details = $('#tbl');

var docID1 =  $('#docID');
var docName1 =  $('#docName');
var ddlSpecialization1 =  $('#ddlSpecialization');
var docContactNo1 =  $('#docContactNo');
var docPassword1 = 	 $('#docPassword');


function validateForm()
{
    if($("#docID").val().trim() == "")
    {
        return "Enter Doctor ID !";
    }

    if($("#docName").val().trim() == "")
    {
        return "Enter Doctor Name !";
    }

    if($("#ddlSpecialization").val() == "0")
    {
        return "- Select Specialization -";
    }

    if($("#docContactNo").val().trim() == "")
    {
        return "Enter Contact Number !";
    }

    var contactNo = $("#docContactNo").val().trim();
    if(!$.isNumeric(contactNo))
    {
        return "Please Enter valid Phone Number !";
    }

    if($("#docPassword").val().trim() == "")
    {
        return "Enter Password !";
    }

    

    return true;
}


function Validation(specialization)
{
    var specializationNo = "";

    switch(specialization)
    {
        case "1":
            specializationNo = "CARDILOGIST";
            break;
        case "2":
            specializationNo = "NEUROLOGY";
            break;
        case "3":
            specializationNo = "DERMATOLOGIST";
            break;
        case "4":
            specializationNo = "SURGEON";
            break;
        case "5":
            specializationNo = "OPHTHALMOLOGIST";
            break;
    }

    var doctor = "";


    return doctor;
}