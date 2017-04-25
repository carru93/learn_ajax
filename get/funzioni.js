$(document).ready(function(){

    $("#btn").click(function() {
        $.get("file_esterno.txt", function (data, status) {
            if(status=="success"){
                console.log("data loaded successfuly:\n"+data);
            }else{
                console.log(status);
            }
        });
    });

});