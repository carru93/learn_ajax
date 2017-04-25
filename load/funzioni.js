$(document).ready(function(){

    $("#but").click(function(){
        $("#parag").load("testo_esterno.txt ", function(responseTxt, statusTxt, xhr){
            if(statusTxt == "success") {
                console.log("ext file loaded");
            }
        });
    });
});