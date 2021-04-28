// emoteToolScript.js
// 
//  this script should be activated whenever a user visits a site that
//  we think they may want to react to

// ------------------DATA-------------------------


//----------------DATA MANAGEMENT-------------------

// getting user identifiers and settings
var email, userid, rows, cols, size;
chrome.storage.sync.get(['email', 'id','rows','cols','size'], function(result) {	
    email  = result.email;
    userid = result.id;
    rows   = result.rows;
    cols   = result.cols;
    size   = result.size;
    //just actually calling drawScreen
    drawScreen("left", size, 1, 1);
    getUserReact(window.location.href, userid)
});





//-------------------FUNCTIONALITY------------------

// function getUserReact
// purpose: check if a user has already reacted to a page,
//          and if they have, reflect it in the DOM
// parameters: url, userid
// returns: nothing (should call the appropriate rendering function)
function getUserReact(url, userid) {

    //send request
    var data = {
        userid: userid,
        url:    url
    };
    //  TODO make the readystates and statuses actually work
    console.log("Sending request with userid "+userid+" and url "+url);
    var req = new XMLHttpRequest();
    req.open("POST","https://cloudsurf.herokuapp.com/getUserReact", true);
    req.setRequestHeader("Content-type","application/json");
    req.onload = function (e) {
        console.log("Request loaded.")
        console.log(req.responseText);
        response = JSON.parse(req.responseText);  
        if(response["reaction"] != "None") {
            setSelectedReact(response["reaction"])
        }
        if (req.readystate === 4) {
            console.log("Ready state is 4.")
            if (req.status === 200) {
                console.log("Request is returned.")
                console.log(req.responseText)
                 
                set              
                if (!Object.keys(response).includes("response")){
                    makeEmojis(JSON.parse(xhr.response), div);                               
                }
            }
            else{
                console.error(req.statusText)
            }
        }
    }
    req.onerror = function (e) {
        console.error(req.statusText)
    };
    req.send(JSON.stringify(data))
}


//handle the reaction made by the user
function handleReact(reactType) 
{
    // send reaction request to backend
    var data = {
        emotion: reactType,
        url:     window.location.href,
        userid:  userid
    };
    console.log("data: ", data)
    var req = new XMLHttpRequest();
    req.open("POST","https://cloudsurf.herokuapp.com/react", true);
    req.setRequestHeader("Content-type","application/json");
    req.onload = function (e) {
        if (req.readystate === 4) {
            if (req.status === 200) {
                console.log(req.responseText)
            }
            else{
                console.error(req.statusText)
            }
        }
    }
    req.onerror = function (e) {
        console.error(req.statusText)
    };
    req.send(JSON.stringify(data))
    //closeReacts(reactType)
}

//----------------CLOSE ON CLICK---------------

// clickCheck
// purpose: handle clicks outside of reaction div when reactions are open
// parameters: 
//          e: the event object, which is passed automatically as this
//             function is attached to an event listener
// returns:
//          nothing, calls the appropriate function if the click turns out
//                      to be from outside
var clickCheck = function(e) {
    // TODO figure out what this line does
    e = e || window.event;
    
    var target = e.target;

    // here, we iterate until we get to the react button, the react container,
    //  or the rest of the document body
    while (target.getAttribute("id") != "reactContainer" &&  
           target.getAttribute("id") != "reactButton"    && 
           target.parentElement != null) {
        console.log(target.getAttribute("id"));
        target = target.parentElement;
    }
    // if, after iterating out, we aren't targeting the containers of interest,
    //      close the reacts
    if(target.getAttribute("id") != "reactContainer" && target.getAttribute("id") != "reactButton"){
        closeReacts("no-select")
    }   
}
// listenForClose
// purpose: 
//      this attaches the clickCheck function to any click events on the body
// parameters:
//      none
// returns:
//      nothing
function listenForClose(){
    document.addEventListener('click', clickCheck, false);
}
// stopListening
// purpose:
//     this removes the clickCheck function from any click events on the 
//      document body
// parameters:
//     none
// returns:
//     nothing
function stopListening(){
    document.removeEventListener('click', clickCheck);
}



//-------------------MISCELLANEOUS

//  this function is not completely implemented TODO
//  it's for sites like YOUTUBE, where clicking links doesn't refresh the
//  content script everytime
//Listener for content script url change message, need to refresh emotion get
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.url)
        //get new emotion information
        console.log(request.url)
        sendResponse({farewell: "goodbye"});
    }
);



// get unicodes ready for display in html
function htmlify(reactType){
    return "&#" + reactType + ";"
}