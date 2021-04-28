liked = false;
disliked = false;

document.getElementsByClassName("like-button")[0].addEventListener("click", function() {
    if (disliked) {
        document.getElementsByClassName("dislike-button")[0].src = "../images/DislikeUnclicked.svg";
        document.getElementsByClassName("dislike-button")[0].classList.remove('clicked-button');
        document.getElementsByClassName("like-button")[0].src = "../images/LikeClicked.svg";
        document.getElementsByClassName("like-button")[0].classList.add('clicked-button');
        disliked = false;
        liked = true;
    }
    else if (liked) {
        document.getElementsByClassName("like-button")[0].src = "../images/LikeUnclicked.svg";
        document.getElementsByClassName("like-button")[0].classList.remove('clicked-button');
        liked = false;
    }
    else {
        document.getElementsByClassName("like-button")[0].src = "../images/LikeClicked.svg";
        document.getElementsByClassName("like-button")[0].classList.add('clicked-button');
        liked = true;
    }
});
document.getElementsByClassName("dislike-button")[0].addEventListener("click", function() {
    if (liked) {
        document.getElementsByClassName("like-button")[0].src = "../images/LikeUnclicked.svg";
        document.getElementsByClassName("like-button")[0].classList.remove('clicked-button');
        document.getElementsByClassName("dislike-button")[0].src = "../images/DislikeClicked.svg";
        document.getElementsByClassName("dislike-button")[0].classList.add('clicked-button');
        disliked = true;
        liked = false;
    }
    else if (disliked) {
        document.getElementsByClassName("dislike-button")[0].src = "../images/DislikeUnclicked.svg";
        document.getElementsByClassName("dislike-button")[0].classList.remove('clicked-button');
        disliked = false;
    }
    else {
        document.getElementsByClassName("dislike-button")[0].src = "../images/DislikeClicked.svg";
        document.getElementsByClassName("dislike-button")[0].classList.add('clicked-button');
        disliked = true;
    }
});
document.getElementsByClassName("cloud-button")[0].addEventListener("click", function() {
    // request for a page url
    
})