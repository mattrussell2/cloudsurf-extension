// emoteToolScript.js
// 
//  this script should be activated whenever a user visits a site that
//  we think they may want to react to

// ------------------DATA-------------------------
var buttonHTML = '<!-- contains the entire reaction button --> <div class = "overlay-contain"> <!-- contains the svgs for buttons and their corresponding containers --> <div class = "button-contain"> <!-- like button --> <img class = "like-button" src="../images/LikeUnclicked.svg" alt="like button (unclicked)"> <!-- dislike button --> <img class = "dislike-button" src="../images/DislikeUnclicked.svg" alt="dislike button (unclicked)"> <!-- cloud button --> <img class = "cloud-button" src="../images/Cloud.svg" alt="cloud / next page button"> </div> <!-- contains the background svgs for the buttons --> <div class = "background-contain"> <!-- gradient background --> <svg class = "gradient-background" viewBox="0 0 800 250" fill="none" xmlns="http://www.w3.org/2000/svg"> <g filter="url(#filter0_d)"> <rect width="700" height="250" rx="28" fill="#C4C4C4"/> <rect width="700" height="250" rx="28" fill="url(#paint0_linear)"/> </g> <defs> <filter id="filter0_d" x="0" y="0" width="700" height="250" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/> <feOffset dy="4"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/> </filter> <linearGradient id="paint0_linear" x1="301" y1="0" x2="301" y2="241" gradientUnits="userSpaceOnUse"> <stop offset="0.0913884" stop-color="#B7094C"/> <stop offset="0.317708" stop-color="#892B64"/> <stop offset="0.541667" stop-color="#5C4D7D"/> <stop offset="1" stop-color="#2E6F95"/> </linearGradient> </defs> </svg> <!-- white box background --> <svg class = "white-background" viewBox="0 0 800 250" fill="none" xmlns="http://www.w3.org/2000/svg"> <g filter="url(#filter0_d)"> <rect width="650" height="250" rx="28" fill="white"/> <rect width="650" height="250" rx="28" fill="white"/> </g> <defs> <filter id="filter0_d" x="0" y="0" width="650" height="250" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/> <feOffset dy="4"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/> </filter> </defs> </svg> </div> </div>'

// cloudlink, which should get replaced by a request on page load
// for now, the default is a portal milo found that goes to a bunch
// of wacky sites
var cloudLink = 'https://theuselessweb.com/'

//-----------------ADD BUTTON TO PAGE--------------
function appendButton(size) {
    wrap = document.createElement('div');
    wrap.classList.add("cloudsurf-button-wrap");
    wrap.innerHTML = buttonHTML;
    document.body.append(wrap);
}
appendButton();


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
    getUserReact(window.location.href, userid)
});





//-------------------FUNCTIONALITY------------------

// this function gets around a weird technicality where we can't
// just include images, and need to set them programmatically
// (there might be a way around this, we just need to do more
// research)
function setImages() {
    document.getElementsByClassName("dislike-button")[0].src = chrome.extension.getURL('../images/DislikeUnclicked.svg');
    document.getElementsByClassName("like-button")[0].src = chrome.extension.getURL('../images/LikeUnclicked.svg');
    document.getElementsByClassName("cloud-button")[0].src = chrome.extension.getURL('../images/Cloud.svg');
}
setImages()

liked = false;
disliked = false;

// we can put the appropriate requests in here!
function handleClick(id, clicked){
    if (clicked && id == "dislike-button") {
        document.getElementsByClassName("dislike-button")[0].src = chrome.extension.getURL('../images/DislikeUnclicked.svg');
        handleReact(2);
    }
    else if(clicked && id == "like-button") {
        document.getElementsByClassName("like-button")[0].src = chrome.extension.getURL('../images/LikeUnclicked.svg');
        handleReact(2);
    }
    else if(!clicked && id == "dislike-button") {
        document.getElementsByClassName("dislike-button")[0].src = chrome.extension.getURL('../images/DislikeClicked.svg');
        handleReact(1);
    }
    else if (!clicked && id == "like-button") {
        document.getElementsByClassName("like-button")[0].src = chrome.extension.getURL('../images/LikeClicked.svg');
        handleReact(0);
    }
}

// function setOnclicks
// purpose: ensures that all elements in the button have proper functionality
// note that with 1 or 2 helper functions, this can be significantly modularized

//TODO: LINK FOR CLOUDSURF BUTTON NEEDS TO BE RESET ONCE WE GET FROM SERVER
function setOnclicks(){
    //cloud button
    document.getElementsByClassName("cloud-button")[0].addEventListener("click", function() {
        console.log("clicked cloud button");
        console.log(userid)
        var data = { userid:  userid }    
        
        var req = new XMLHttpRequest();
        req.open("POST","https://cloudsurf.herokuapp.com/getRecommendations", true);
        req.setRequestHeader("Content-type","application/json");
        req.onload = function (e) {
            console.log("loaded req")           
            response = JSON.parse(req.responseText);  
            console.log(response);
            if (response.rows.length == 0) {
                alert("you've surfed the whole cloud")
                return
            }else {
                window.location.href = response.rows[0].url
            }
            if (req.readystate == 4) {
                console.log("ready state is 4");
                if (req.status == 200) {
                    console.log("status 200");                    
                }
                else{
                    console.log("status is not 200:" + req.statusText)
                }
            }
        }
        req.onerror = function (e) {
            console.error(req.statusText)
        };    
        req.send(JSON.stringify(data))
        //window.location.href = cloudLink
    })


    // like/dislike buttons
    document.getElementsByClassName("like-button")[0].addEventListener("click", function() {
        if (disliked) {
            handleClick("dislike-button", true)
            handleClick("like-button", false)
            document.getElementsByClassName("dislike-button")[0].classList.remove('clicked-button');
            document.getElementsByClassName("like-button")[0].classList.add('clicked-button');
            disliked = false;
            liked = true;
        }
        else if (liked) {
            handleClick("like-button", true);
            document.getElementsByClassName("like-button")[0].classList.remove('clicked-button');
            liked = false;
        }
        else {
            handleClick("like-button", false)
            document.getElementsByClassName("like-button")[0].classList.add('clicked-button');
            liked = true;
        }
    });
    document.getElementsByClassName("dislike-button")[0].addEventListener("click", function() {
        if (liked) {
            handleClick("like-button", true)
            handleClick("dislike-button", false)
            document.getElementsByClassName("like-button")[0].classList.remove('clicked-button');
            document.getElementsByClassName("dislike-button")[0].classList.add('clicked-button');
            disliked = true;
            liked = false;
        }
        else if (disliked) {
            handleClick("dislike-button", true)
            document.getElementsByClassName("dislike-button")[0].classList.remove('clicked-button');
            disliked = false;
        }
        else {
            handleClick("dislike-button",false);
            document.getElementsByClassName("dislike-button")[0].classList.add('clicked-button');
            disliked = true;
        }
    });
    document.getElementsByClassName("cloud-button")[0].addEventListener("click", function() {
        // request for a page url
        
    })
}
setOnclicks();



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
            if (response['reaction'] == 0) {
                document.getElementsByClassName("like-button")[0].src = chrome.extension.getURL('../images/LikeClicked.svg');
                document.getElementsByClassName("like-button")[0].classList.add('clicked-button');
            }else if (response['reaction'] == 1) {
                document.getElementsByClassName("dislike-button")[0].src = chrome.extension.getURL('../images/DislikeClicked.svg');
                document.getElementsByClassName("dislike-button")[0].classList.add('clicked-button');
            }
        }
        if (req.readystate === 4) {
            console.log("Ready state is 4.")
            if (req.status === 200) {
                console.log("Request is returned.")
                console.log(req.responseText)
                                      
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


function getCloudLink(){
    // send reaction request to backend
    var data = {
        userid:  userid
    };
    console.log("data: ", data)
    var req = new XMLHttpRequest();
    req.open("POST","https://cloudsurf.herokuapp.com/cloudlink", true);
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