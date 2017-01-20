//script.js

var Message = "";
var Response = "";
var MessageSplit = [];
var Identifiers = [];

function sayThis() {
    //Disable Text area
    document.getElementById("messageBox").disabled = true;
    
    //Reset Variables
    var Message = "";
    var Response = "";
    var MessageSplit = [];
    var Identifiers = [];
    
    //Get User Message
    Message = document.getElementById("messageBox").value.toLowerCase();

    var log = document.getElementById("log");

    //Check if message is valid
    if(Message != ""){

        //Add Message to table 
        document.getElementById("logTable").innerHTML = document.getElementById("logTable").innerHTML + "<tr><td><b>You:</b></td><td>"+ Message +"</td><tr>";
        document.getElementById("messageBox").value = "";
        log.scrollTop = log.scrollHeight;

        //Analyze Message
        var analysedMessage;
        MessageSplit = Message.split(' ');
        console.log("Initial MessageSplit: " + MessageSplit);
    
        //Identify Words
        for(x = 0; x < MessageSplit.length; x++){ //Loop through each word
            //Clear Junk
            MessageSplit[x].replace(',', '');
            MessageSplit[x].replace('.', '');
            MessageSplit[x].replace('?', '');
            MessageSplit[x].replace(';', '');
            MessageSplit[x].replace('\"', '');
            MessageSplit[x].replace('\'', '');
            MessageSplit[x].replace('!', '');
                                    
            //Clear Identifiers
            Identifiers.push(":");
            
            //Identify Words
            if(MessageSplit[x].includes('hello') || MessageSplit[x].includes('hi') || MessageSplit[x].includes('hey') || MessageSplit[x].includes('bonjour') || MessageSplit[x].includes('howdy') || MessageSplit[x].includes('greetings') || MessageSplit[x].includes('welcome') || MessageSplit[x].includes('hi-ya')){
                Identifiers[x] = Identifiers[x] + "|greeting";
            }
            if(MessageSplit[x].includes('who') || MessageSplit[x].includes('what') || MessageSplit[x].includes('when') || MessageSplit[x].includes('why') || MessageSplit[x].includes('how') || MessageSplit[x].includes('which')){
                Identifiers[x] = Identifiers[x] + "|question";
            }
            if(MessageSplit[x].includes('favorite') || MessageSplit[x].includes('beloved') || MessageSplit[x].includes('favored') || MessageSplit[x].includes('cherished') || MessageSplit[x].includes('treasured') || MessageSplit[x].includes('prized') || MessageSplit[x].includes('choice') || MessageSplit[x].includes('darling') || MessageSplit[x].includes('dearest') || MessageSplit[x].includes('dear') || MessageSplit[x].includes('adored')){
                Identifiers[x] = Identifiers[x] + "|favorite";
            }
            if(MessageSplit[x].includes('best') || MessageSplit[x].includes('acceptable') || MessageSplit[x].includes('excellent') || MessageSplit[x].includes('exceptional') || MessageSplit[x].includes('favorable') || MessageSplit[x].includes('great') || MessageSplit[x].includes('marvelous') || MessageSplit[x].includes('positive') || MessageSplit[x].includes('satisfactory') || MessageSplit[x].includes('satisfying') || MessageSplit[x].includes('superb') || MessageSplit[x].includes('superior') || MessageSplit[x].includes('valuable') || MessageSplit[x].includes('wonderful') || MessageSplit[x].includes('ace') || MessageSplit[x].includes('super') || MessageSplit[x].includes('worthy') || MessageSplit[x].includes('admirable') || MessageSplit[x].includes('agreeable') || MessageSplit[x].includes('commendable') || MessageSplit[x].includes('congenial') || MessageSplit[x].includes('deluxe') || MessageSplit[x].includes('gnarly') || MessageSplit[x].includes('gratifying') || MessageSplit[x].includes('honorable') || MessageSplit[x].includes('neat') || MessageSplit[x].includes('precious') || MessageSplit[x].includes('reputable') || MessageSplit[x].includes('splendid') || MessageSplit[x].includes('supendous') || MessageSplit[x].includes('super-eminent') || MessageSplit[x].includes('correct')){
                Identifiers[x] = Identifiers[x] + "|good";
            }
            if(MessageSplit[x].includes('atrocious') || MessageSplit[x].includes('awful') || MessageSplit[x].includes('crummy') || MessageSplit[x].includes('dreadful') || MessageSplit[x].includes('lousy') || MessageSplit[x].includes('poor') || MessageSplit[x].includes('rough') || MessageSplit[x].includes('unacceptable') || MessageSplit[x].includes('blah') || MessageSplit[x].includes('bummer') || MessageSplit[x].includes('downer') || MessageSplit[x].includes('garbage') || MessageSplit[x].includes('gross') || MessageSplit[x].includes('imperfect') || MessageSplit[x].includes('junky') || MessageSplit[x].includes('synthetic') || MessageSplit[x].includes('abominable') || MessageSplit[x].includes('unworthy') || MessageSplit[x].includes('incorrect')){
                Identifiers[x] = Identifiers[x] + "|bad";
            }
            if(MessageSplit[x].includes('large') || MessageSplit[x].includes('larger') || MessageSplit[x].includes('largest') || MessageSplit[x].includes('big') || MessageSplit[x].includes('bigger') || MessageSplit[x].includes('biggest') || MessageSplit[x].includes('bulkiest')|| MessageSplit[x].includes('bulky')){
                Identifiers[x] = Identifiers[x] + "|big";
            }
            if(MessageSplit[x].includes('small') || MessageSplit[x].includes('smaller') || MessageSplit[x].includes('smallest') || MessageSplit[x].includes('tiny') || MessageSplit[x].includes('tinier') || MessageSplit[x].includes('tiniest') || MessageSplit[x].includes('slight') || MessageSplit[x].includes('teeny')){
                Identifiers[x] = Identifiers[x] + "|small";
            }
            Identifiers[x] = Identifiers[x] + "|?";

            console.log("Identifiers: " + Identifiers[x] + "\n MessageSplit: " + MessageSplit);
        }  
        
        //Check if understandable
        if(!analysedMessage){
            Response = "I'm sorry, I don't understand.";
            analysedMessage = true;
        }
        
        //Print Message
        setTimeout(function(){
                printMessage("Nick", Response);
                document.getElementById("messageBox").disabled = false;
            },Math.floor((Math.random() * 3000) + 2000));
        log.scrollTop = log.scrollHeight;
    }
    console.log(Identifiers);
}

function printMessage(author, message){
     document.getElementById("logTable").innerHTML = document.getElementById("logTable").innerHTML + "<tr><td><b>" + author + ":</b></td><td>"+ message +"</td><tr>";
}
