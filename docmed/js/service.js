function _URL()
{ 
    return "http://localhost:8080/";
};


/*<!--Controller--------------------------------------------------------->*/
/*<!--API methods-->*/
//Insert
function saveNewRecord(obj){
    $.ajax({	
        headers: { 
            "Content-Type": "application/json"
        },
        type: 'POST',
        url: _URL()+'healthCareApiProject/webapi/doctors/insert',
        dataType: 'json',
        data : JSON.stringify(obj),
        
        success: function(){
            console.log("Added"); 
            $("#alertSuccess").text("Inserted Successfully!");
            $("#alertSuccess").show();
            $("#formDoctor")[0].reset();
            fetchResult();

        },
        error: function(xhr, status, error) {
            alert(xhr.responseText);
        }
    });
}



//View
function fetchResult(){
    var $details = $('#tbl');
    $("#tbl").empty();
    $.ajax({	
        headers: { 
            "Content-Type": "application/json"
        },
        type: 'GET',
        url: _URL()+'healthCareApiProject/webapi/doctors',
        dataType: 'json',
        success: function(result){
            console.log("fetched");
            
            var data = JSON.parse(JSON.stringify(result));
            $.each(data, function(i, item) {

                $details.append('<tr>'+
							'<td>' + item.docID + '</td>' 
							+ '<td>' + item.docName + '</td>' 
							+ '<td>' + item.specialization + '</td>' 
							+ '<td>' + item.contactNo + '</td>'	
							+ '<td><button type="button" class="btn btn-info" onclick="View('+ item.docID +' )"  data-toggle="modal" data-target="#myModal">Edit</button></td>'
						    + '<td><button type="button" class="btn btn-danger" onclick="myFunction2('+ item.docID +' )" data-toggle="modal" data-target="#exampleModal" >Delete</button></td>'
							+ '</tr>')

                console.log(item);
            });
        },
        error: function(xhr, status, error) {
            alert(xhr.responseText);
        }
    });
}


function View( no) {
	console.log(no);
	$('#editBox1').text(no);
	
	$.ajax({
		type: 'GET',
			url: _URL()+'healthCareApiProject/webapi/doctors/view/'+no,
			 dataType: "json",
			success: function(data){
                
				console.log(data);
				$('#editBox1').val(data.docID);
                $('#editBox2').val(data.docName);
                $('#ddlSpecialization1').val(data.specialization);
                $("#ddlSpecialization1 option").filter(function() {
                    
                    return $(this).text() == data.specialization;
                  }).prop('selected', true);

				$('#editBox3').val(data.contactNo);
				
			}
	});
		
}



//Update
function UpdateResult(){
	var no = $('#editBox1').text();
	console.log(no);
	var obj = {
		
			 	docID: no,
		        docID:  $('#editBox1').val(),
		        docName:  $('#editBox2').val(),
		        specialization:  $("#ddlSpecialization1 option:selected").text(),
		        contactNo:  $('#editBox3').val()
	};
	$.ajax({	
		 headers: { 
		        'Accept': 'application/json',
		        'Content-Type': 'application/json' 
		    },
		type: 'PUT',
			url: _URL()+'healthCareApiProject/webapi/doctors/update',
			dataType: 'json',
			
			data : JSON.stringify(obj),
			
			success: function(){
                $.toast({ 
                    text : "Updated Successfully!", 
                    showHideTransition : 'fade',  
                    bgColor : 'green',              
                    textColor : '#eee',           
                    allowToastClose : false,       
                    hideAfter : 1600,             
                    stack : 5,                   
                    textAlign : 'center',          
                    position : 'top-right'      
                  });
                fetchResult();
				
			},
			error: function(xhr, status, error) {
				  alert(xhr.responseText);
				}
	});
}


//Delete
function DeleteResult() {
	var no = $('#docID').text();
	console.log(no);
	$.ajax({	
		type: 'DELETE',
			url: _URL()+'healthCareApiProject/webapi/doctors/delete/'+no,
			dataType: 'json',			
			success: function(){
                console.log("Deleted");
                fetchResult();
                $.toast({ 
                    text : "Deleted Successfully!", 
                    showHideTransition : 'fade',  
                    bgColor : 'red',              
                    textColor : '#eee',            
                    allowToastClose : false,      
                    hideAfter : 1600,            
                    stack : 5,                    
                    textAlign : 'center',          
                    position : 'top-right'      
                  });
			},
			error: function(xhr, status, error) {
				  alert(xhr.responseText);
				}
	});
}


function myFunction2( no) {
	$('#docID').text(no);
		
}