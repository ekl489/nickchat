function sayThis() {
    var Message = document.getElementById("messageBox").value.toLowerCase();
    var Response = "";

    var log = document.getElementById("log");

    //Check if message is valid
    if(Message != ""){

        //Add Message to table
        document.getElementById("logTable").innerHTML = document.getElementById("logTable").innerHTML + "<tr><td><b>You:</b></td><td>"+ Message +"</td><tr>";
        document.getElementById("messageBox").value = "";
        log.scrollTop = log.scrollHeight;

        //Analyze Message
        var analysedMessage;

        if(Message.includes("hello") || Message.includes("hi")|| Message.includes("greetings")){
            Response = "Well hey there!";
            analysedMessage = true;
        }

        if(!analysedMessage){
            Response = "I'm sorry, I don't understand.";
            analysedMessage = true;
        }
        //Print Message
        setTimeout(
            function(){
                printMessage("Nick", Response);
            },
            Math.floor((Math.random() * 3000) + 2000)
        );
        log.scrollTop = log.scrollHeight;
    }

function printMessage(author, message){
     document.getElementById("logTable").innerHTML = document.getElementById("logTable").innerHTML + "<tr><td><b>" + author + ":</b></td><td>"+ message +"</td><tr>";
}
//
