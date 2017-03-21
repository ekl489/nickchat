//script.js

$(document).ready(function(){

});

var Message = "";
var Response = "";
var MessageSplit = [];
var Identifiers = [];
var textAnimationCount = 0;

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
        printMessage("You", Message);
        document.getElementById("messageBox").value = "";
        log.scrollTop = log.scrollHeight;

        //Analyze Message
        var analysedMessage;
        MessageSplit = Message.split(' ');
        console.log("Initial MessageSplit: " + MessageSplit);

        //Identify Words
        for(x = 0; x < MessageSplit.length; x++){ //Loop through each word
            //Clear Identifiers
            Identifiers.push(":");

            //Identify Words
            if(MessageSplit[x].includes('is') || MessageSplit[x].includes('abide') || MessageSplit[x].includes('continue') || MessageSplit[x].includes('do')){
                Identifiers[x] = Identifiers[x] + "|is";
            }
            if(MessageSplit[x].includes('me') || MessageSplit[x].includes('my') || MessageSplit[x].includes('myself') || MessageSplit[x].includes('I') || MessageSplit[x].includes('mine')){
                Identifiers[x] = Identifiers[x] + "|my";
            }
            if(MessageSplit[x].includes('name') || MessageSplit[x].includes('brand') || MessageSplit[x].includes('alias') || MessageSplit[x].includes('label') || MessageSplit[x].includes('brand')){
                Identifiers[x] = Identifiers[x] + "|name";
            }
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
            if(MessageSplit[x].includes('amount') || MessageSplit[x].includes('amount') || MessageSplit[x].includes('extent') || MessageSplit[x].includes('load') || MessageSplit[x].includes('lot') || MessageSplit[x].includes('measure') || MessageSplit[x].includes('number') || MessageSplit[x].includes('score') || MessageSplit[x].includes('supply') || MessageSplit[x].includes('volume') || MessageSplit[x].includes('expanse') || MessageSplit[x].includes('magnitude') || MessageSplit[x].includes('mass') || MessageSplit[x].includes('bundle') || MessageSplit[x].includes('degree')){
                Identifiers[x] = Identifiers[x] + "|amount";
            }
            if(MessageSplit[x].includes('argument') || MessageSplit[x].includes('altercation') || MessageSplit[x].includes('bickering') || MessageSplit[x].includes('brawl') || MessageSplit[x].includes('clash') || MessageSplit[x].includes('controversy') || MessageSplit[x].includes('debate') || MessageSplit[x].includes('disagreement') || MessageSplit[x].includes('dispute') || MessageSplit[x].includes('exchange') || MessageSplit[x].includes('feud') || MessageSplit[x].includes('quarrel') || MessageSplit[x].includes('beef') || MessageSplit[x].includes('squabble')){
                Identifiers[x] = Identifiers[x] + "|argument";
            }
            if(MessageSplit[x].includes('art') || MessageSplit[x].includes('craft') || MessageSplit[x].includes('profession') || MessageSplit[x].includes('artistry') || MessageSplit[x].includes('craftmanship') || MessageSplit[x].includes('dexterity') || MessageSplit[x].includes('expertise') || MessageSplit[x].includes('facility') || MessageSplit[x].includes('knack') || MessageSplit[x].includes('mastery') || MessageSplit[x].includes('virtuosity') || MessageSplit[x].includes('know-how') || MessageSplit[x].includes('inventivness')){
                Identifiers[x] = Identifiers[x] + "|art";
            }
            if(MessageSplit[x].includes('be') || MessageSplit[x].includes('abide') || MessageSplit[x].includes('act') || MessageSplit[x].includes('continue') || MessageSplit[x].includes('do') || MessageSplit[x].includes('endure') || MessageSplit[x].includes('inhabit') || MessageSplit[x].includes('last') || MessageSplit[x].includes('live') || MessageSplit[x].includes('persist') || MessageSplit[x].includes('prevail') || MessageSplit[x].includes('remain') || MessageSplit[x].includes('subsist')){
                Identifiers[x] = Identifiers[x] + "|be";
            }
            if(MessageSplit[x].includes('beautiful') || MessageSplit[x].includes('alluring') || MessageSplit[x].includes('appealing') || MessageSplit[x].includes('charming') || MessageSplit[x].includes('cute') || MessageSplit[x].includes('dazzling') || MessageSplit[x].includes('delicate') || MessageSplit[x].includes('delightful') || MessageSplit[x].includes('elegant') || MessageSplit[x].includes('exquisite') || MessageSplit[x].includes('find') || MessageSplit[x].includes('good-looking') || MessageSplit[x].includes('gorgeous') || MessageSplit[x].includes('graceful') || MessageSplit[x].includes('grand')  || MessageSplit[x].includes('handsome') || MessageSplit[x].includes('lovely') || MessageSplit[x].includes('magnificent') || MessageSplit[x].includes('stunning') || MessageSplit[x].includes('pretty')  || MessageSplit[x].includes('angelic')){
                Identifiers[x] = Identifiers[x] + "|beautiful";
            }
            if(MessageSplit[x].includes('belief') || MessageSplit[x].includes('acceptance') || MessageSplit[x].includes('faith') || MessageSplit[x].includes('feeling') || MessageSplit[x].includes('idea') || MessageSplit[x].includes('opinion') || MessageSplit[x].includes('position') || MessageSplit[x].includes('view') || MessageSplit[x].includes('judgment') || MessageSplit[x].includes('theory') || MessageSplit[x].includes('thinking') || MessageSplit[x].includes('trust') || MessageSplit[x].includes('understanding')){
                Identifiers[x] = Identifiers[x] + "|belief";
            }
            if(MessageSplit[x].includes('cause') || MessageSplit[x].includes('explanation') || MessageSplit[x].includes('element') || MessageSplit[x].includes('matter') || MessageSplit[x].includes('motivation') || MessageSplit[x].includes('motive') || MessageSplit[x].includes('origin') || MessageSplit[x].includes('principle') || MessageSplit[x].includes('purpose') || MessageSplit[x].includes('root') || MessageSplit[x].includes('source') || MessageSplit[x].includes('author') || MessageSplit[x].includes('grounds') || MessageSplit[x].includes('foundation') || MessageSplit[x].includes('maker') || MessageSplit[x].includes('producer') || MessageSplit[x].includes('doer')){
                Identifiers[x] = Identifiers[x] + "|cause";
            }
            if(MessageSplit[x].includes('certain') || MessageSplit[x].includes('convinced') || MessageSplit[x].includes('positive') || MessageSplit[x].includes('sure') || MessageSplit[x].includes('undoubtful') || MessageSplit[x].includes('secure') || MessageSplit[x].includes('questionless')){
                Identifiers[x] = Identifiers[x] + "|certain";
            }
            if(MessageSplit[x].includes('chance') || MessageSplit[x].includes('contigent') || MessageSplit[x].includes('incidental') || MessageSplit[x].includes('lucky') || MessageSplit[x].includes('unplanned') || MessageSplit[x].includes('likelyhood') || MessageSplit[x].includes('fortunate')){
                Identifiers[x] = Identifiers[x] + "|chance";
            }
            if(MessageSplit[x].includes('clear') || MessageSplit[x].includes('fair') || MessageSplit[x].includes('luminous') || MessageSplit[x].includes('unclouded')){
                Identifiers[x] = Identifiers[x] + "|clear";
            }
            if(MessageSplit[x].includes('common') || MessageSplit[x].includes('everyday') || MessageSplit[x].includes('familiar') || MessageSplit[x].includes('frequent') || MessageSplit[x].includes('natural') || MessageSplit[x].includes('prevalent') || MessageSplit[x].includes('routine') || MessageSplit[x].includes('typical')|| MessageSplit[x].includes('regular') || MessageSplit[x].includes('standard') || MessageSplit[x].includes('stock') || MessageSplit[x].includes('mediocre') || MessageSplit[x].includes('unvaried')){
                Identifiers[x] = Identifiers[x] + "|common";
            }
            if(MessageSplit[x].includes('comparison') || MessageSplit[x].includes('analogy') || MessageSplit[x].includes('connection') || MessageSplit[x].includes('contrast') || MessageSplit[x].includes('correlation') || MessageSplit[x].includes('example') || MessageSplit[x].includes('juxtaposition') || MessageSplit[x].includes('observation')|| MessageSplit[x].includes('ratio') || MessageSplit[x].includes('relation') || MessageSplit[x].includes('resemblancle') || MessageSplit[x].includes('similarity') || MessageSplit[x].includes('balancing')){
                Identifiers[x] = Identifiers[x] + "|comparison";
            }
            if(MessageSplit[x].includes('condition') || MessageSplit[x].includes('quality') || MessageSplit[x].includes('situation') || MessageSplit[x].includes('status')){
                Identifiers[x] = Identifiers[x] + "|condition";
            }
            if(MessageSplit[x].includes('connection') || MessageSplit[x].includes('contact') || MessageSplit[x].includes('network') || MessageSplit[x].includes('relation') || MessageSplit[x].includes('associate') || MessageSplit[x].includes('association') || MessageSplit[x].includes('friend') || MessageSplit[x].includes('kin')){
                Identifiers[x] = Identifiers[x] + "|connection";
            }
            if(MessageSplit[x].includes('copy') || MessageSplit[x].includes('photograph') || MessageSplit[x].includes('portrait') || MessageSplit[x].includes('print') || MessageSplit[x].includes('replica') || MessageSplit[x].includes('reproduction') || MessageSplit[x].includes('counterfeit') || MessageSplit[x].includes('forgery')|| MessageSplit[x].includes('reflection')){
                Identifiers[x] = Identifiers[x] + "|copy";
            }
            if(MessageSplit[x].includes('decision') || MessageSplit[x].includes('accord') || MessageSplit[x].includes('agreement') || MessageSplit[x].includes('arrangement') || MessageSplit[x].includes('choice') || MessageSplit[x].includes('compromise') || MessageSplit[x].includes('determindation') || MessageSplit[x].includes('judgment')|| MessageSplit[x].includes('opinion') || MessageSplit[x].includes('ruling') || MessageSplit[x].includes('selection') || MessageSplit[x].includes('verdict') || MessageSplit[x].includes('balancing')){
                Identifiers[x] = Identifiers[x] + "|comparison";
            }
            if(MessageSplit[x].includes('desire') || MessageSplit[x].includes('ambition') || MessageSplit[x].includes('appetite') || MessageSplit[x].includes('aspiration') || MessageSplit[x].includes('craving') || MessageSplit[x].includes('greed') || MessageSplit[x].includes('hunger') || MessageSplit[x].includes('inclination')|| MessageSplit[x].includes('motive') || MessageSplit[x].includes('need') || MessageSplit[x].includes('thirst') || MessageSplit[x].includes('wish') || MessageSplit[x].includes('yearning') || MessageSplit[x].includes('want')){
                Identifiers[x] = Identifiers[x] + "|want";
            }
            if(MessageSplit[x].includes('development') || MessageSplit[x].includes('advancement') || MessageSplit[x].includes('evolution') || MessageSplit[x].includes('expansion') || MessageSplit[x].includes('improvement') || MessageSplit[x].includes('increase') || MessageSplit[x].includes('progress') || MessageSplit[x].includes('addition')|| MessageSplit[x].includes('buildup')){
                Identifiers[x] = Identifiers[x] + "|development";
            }
            if(MessageSplit[x].includes('different') || MessageSplit[x].includes('contrasting') || MessageSplit[x].includes('disparate') || MessageSplit[x].includes('divergent') || MessageSplit[x].includes('diverse') || MessageSplit[x].includes('offbeat') || MessageSplit[x].includes('peculiar') || MessageSplit[x].includes('various')|| MessageSplit[x].includes('particular')){
                Identifiers[x] = Identifiers[x] + "|different";
            }
            if(MessageSplit[x].includes('desire') || MessageSplit[x].includes('ambition') || MessageSplit[x].includes('appetite') || MessageSplit[x].includes('aspiration') || MessageSplit[x].includes('craving') || MessageSplit[x].includes('greed') || MessageSplit[x].includes('hunger') || MessageSplit[x].includes('inclination')|| MessageSplit[x].includes('motive') || MessageSplit[x].includes('need') || MessageSplit[x].includes('thirst') || MessageSplit[x].includes('wish') || MessageSplit[x].includes('yearning') || MessageSplit[x].includes('want')){
                Identifiers[x] = Identifiers[x] + "|want";
            }
            Identifiers[x] = Identifiers[x] + "|?";

            console.log("Identifiers: " + Identifiers[x] + "\n MessageSplit: " + MessageSplit);
        }

        //Check if understandable
        if(!analysedMessage){
            Response = Identifiers;
            analysedMessage = true;
        }

        //Print Message
        setTimeout(function(){
                printMessage("Nick", Response);
                document.getElementById("messageBox").disabled = false;
                document.getElementById("messageBox").select();
            },Math.floor((Math.random() * 1000) + 1000));
        log.scrollTop = log.scrollHeight;
    }
    console.log(Identifiers);
}

function printMessage(author, message){
    textAnimationCount++;
    document.getElementById("logTable").innerHTML = document.getElementById("logTable").innerHTML + "<tr id='logRow" + textAnimationCount.toString() + "'><td><b>" + author + ":</b></td><td>"+ message +"</td><tr>";
    $('#logRow' + textAnimationCount.toString())
    $('#logRow' + textAnimationCount.toString()).hide();
    $('#logRow' + textAnimationCount.toString()).stop().fadeIn(500);
    $('#logRow' + textAnimationCount.toString()).show();
    log.scrollTop = log.scrollHeight;
}

$(document).keypress(function(e) {
    if(e.which == 13) {
        sayThis();
    }
});
