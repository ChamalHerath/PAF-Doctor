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




/*$("#btnsubmit").on('click' , function(){
	if(dName1.val() == ""){
		$('#box').css('visibility','visible');
		$('#msg').text("Please insert the Doctor Name");
	}
	else if(patName1.val() == ""){
		$('#box').css('visibility','visible');
		$('#msg').text("Please insert the Patient Name");
	}
	else if(date1.val() == ""){
		$('#box').css('visibility','visible');
		$('#msg').text("Please insert the Date");
	}
	else if(time1.val() == ""){
		$('#box').css('visibility','visible');
		$('#msg').text("Please insert the Time");
	}
	else if(location1.val() == ""){
		$('#box').css('visibility','visible');
		$('#msg').text("Please insert the Hospital Name");
	}
	else {
		$('#box').css('visibility','hidden');
		var obj = {
				
				docID : docID1.val(),
				docName :  docName1.val(),
				specialization :  ddlSpecialization1.val(),
				contactNo :  docContactNo1.val(),
				password : 	 docPassword1.val(),
		};
		var json = JSON.stringify(obj);
		console.log(json);
		$.ajax({	
			headers: { 
				'Accept': 'application/json',
				'Content-Type': 'application/json' 
			},
			type: 'POST',
			url: 'http://localhost:8080/healthCareApiProject/webapi/doctors/insert',
			dataType: 'json',
			
			data : JSON.stringify(obj),
			
			success: function(){
				$( "#feeds" ).load( "doctor.html" );
				alert("Appointment Added Successfully!");
				console.log("Added");
			},
			error: function(xhr, status, error) {
				alert(xhr.responseText);
			}
		});
		
	}
});

$( "#feeds" ).load( "doctor.html" );*/



/*<!--API methods-->*/
//CRUD
function ViewAll (){
	console.log("called");
	
	var $details = $('#tbl');
	$.ajax({
		type: 'GET',
			url: 'http://localhost:8080/healthCareApiProject/webapi/doctors',
			 dataType: "json",
			success: function(data){
				$.each(data , function(i , data){
					$details.append('<tr>'+
							'<td>' + data.docID + '</td>' 
							+ '<td>' + data.docName + '</td>' 
							+ '<td>' + data.specialization + '</td>' 
							+ '<td>' + data.contactNo + '</td>'	
							+ '<td><button type="button" class="btn btn-info" onclick="View('+ data.docID +' )"  data-toggle="modal" data-target="#myModal">Edit</button></td>'
						    + '<td><button type="button" class="btn btn-danger" onclick="myFunction2('+ data.docID +' )" data-toggle="modal" data-target="#exampleModal" >Delete</button></td>'
							+ '</tr>')
				});
            },
            error: function(){
                alert('error loading orders');
            }
	});
}


ViewAll ();


	
function View( no) {
	console.log(no);
	$('#editBox1').text(no);
	
	$.ajax({
		type: 'GET',
			url: 'http://localhost:8080/healthCareApiProject/webapi/doctors/view/'+no,
			 dataType: "json",
			success: function(data){
                //$('.modal-backdrop').remove();
				console.log(data);
				$('#editBox1').val(data.docID);
                $('#editBox2').val(data.docName);
                $('#ddlSpecialization').val(data.specialization)
				$('#editBox3').val(data.contactNo);
				
			}
	});
		
}


/*function Update(){
	var no = $('#editBox1').text();
	console.log(no);
	var obj = {
		
			 	docID: no,
		        docID:  $('#editBox1').val(),
		        docName:  $('#editBox2').val(),
		        specialization:  $('#ddlSpecialization').val(),
		        contactNo:  $('#editBox3').val()
	};
	$.ajax({	
		 headers: { 
		        'Accept': 'application/json',
		        'Content-Type': 'application/json' 
		    },
		type: 'PUT',
			url: 'http://localhost:8080/healthCareApiProject/webapi/doctors/update',
			dataType: 'json',
			
			data : JSON.stringify(obj),
			
			success: function(){
				//$( "#feeds" ).load( "feeds.html" );
				alert("Updated Successfully!");
				
			},
			error: function(xhr, status, error) {
				  alert(xhr.responseText);
				}
	});
}*/


function myFunction2( no) {
	$('#docID').text(no);
		
}


/*function Delete() {
	var no = $('#docID').text();
	console.log(no);
	$.ajax({	
		type: 'DELETE',
			url: 'http://localhost:8080/healthCareApiProject/webapi/doctors/delete/'+no,
			dataType: 'json',			
			success: function(){
				//$( "#feeds" ).load( "feeds.html" );
				console.log("Deleted");
			},
			error: function(xhr, status, error) {
				  alert(xhr.responseText);
				}
	});
}*/