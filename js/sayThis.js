/*
Types of sentences
 - Declarative sentence
 - Imperative sentence
 - Interrogative sentence
 - Exclamatory sentence
*/

function sayThis() {
    var Message = document.getElementById("messageBox").value.toLowerCase();
    var Response = "";

    //Message Identifier
    var Identifiers;
    
    var log = document.getElementById("log");

    //Check if message is valid
    if(Message != ""){

        //Add Message to table
        document.getElementById("logTable").innerHTML = document.getElementById("logTable").innerHTML + "<tr><td><b>You:</b></td><td>"+ Message +"</td><tr>";
        document.getElementById("messageBox").value = "";
        log.scrollTop = log.scrollHeight;

        //Analyze Message
        var MessageSplit = Message.split(' ');
        var analysedMessage;
        
        //idea: "/good/best each segment
        
        for(x = 0; x < MessageSplit.length; x++){ //Loop through each word
            
            Identifiers.add(""); //Add new element
            
            switch(MessageSplit[x]){  
            //Greetings
              case 'hello':
              case 'hi':
              case 'hey':
              case 'bonjour':
              case 'howdy':
              case 'greetings':
              case 'welcome':
              case 'hi-ya':
                  Identifiers[x] = Identifiers[x] + "|greeting"
                  break;
            //Question Words
              case 'who':
              case 'what':
              case 'when':
              case 'why':
              case 'how':
              case 'which':
              case '?':
                  Identifiers[x] = Identifiers[x] + "|question"
                  break;
            //Adjectives
              case 'favorite':
              case 'beloved':  
              case 'favored':   
              case 'cherished':  
              case 'treasured': 
              case 'prized': 
              case 'choice':    
              case 'darling': 
              case 'dearest':  
              case 'dear':   
              case 'adored': 
                  Identifiers[x] = Identifiers[x] + "|favorite"
                  break;
              case 'best':
              case 'acceptable':
              case 'excellent':
              case 'exceptional':
              case 'favorable':
              case 'great':
              case 'marvelous':
              case 'positive':
              case 'satisfactory':
              case 'satisfying':
              case 'superb':
              case 'valuable':
              case 'wonderful':
              case 'ace':
              case 'super':
              case 'superior':
              case 'worthy':
              case 'admirable':
              case 'agreeable':
              case 'commendable':
              case 'congenial':
              case 'deluxe':
              case 'gnarly':
              case 'gratifying':
              case 'honorable':
              case 'neat':
              case 'precious':
              case 'reputable':
              case 'splendid':
              case 'supendous':
              case 'super-eminent':
                  Identifiers[x] = Identifiers[x] + "|good"
                  break;

              case 'atrocious':
              case 'awful':
              case 'crummy':
              case 'dreadful':
              case 'lousy':
              case 'poor':
              case 'rough':
              case 'unacceptable':
              case 'blah':
              case 'bummer':
              case 'downer':
              case 'garbage':
              case 'gross':
              case 'imperfect':
              case 'inferior':
              case 'junky':
              case 'synthetic':
              case 'abominable':
              case 'unworthy':
              case 'incorrect':
                  Identifiers[x] = Identifiers[x] + "|bad"
                  break;

              case 'large': 
              case 'larger':
              case 'largest':
              case 'big': 
              case 'bigger': 
              case 'biggest': 
              case 'bulkiest': 
                  Identifiers[x] = Identifiers[x] + "|big"
                  break;

              case 'small': 
              case 'smaller':
              case 'smallest':
              case 'tiny': 
              case 'tinier': 
              case 'tiniest': 
              case 'slight': 
              case 'teeny': 

                  Identifiers[x] = Identifiers[x] + "|big"
                  break;

            }
        }  
        }
        
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
        //document.getElementById("logTable").innerHTML = document.getElementById("logTable").innerHTML + "<tr><td><b>Rambo:</b></td><td>"+ Response +"</td><tr>";
        log.scrollTop = log.scrollHeight;
    }

function printMessage(author, message){
     document.getElementById("logTable").innerHTML = document.getElementById("logTable").innerHTML + "<tr><td><b>" + author + ":</b></td><td>"+ message +"</td><tr>";
}
//
