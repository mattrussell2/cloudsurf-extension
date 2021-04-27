liked = false;
disliked = false;

document.getElementsByClassName("like-button")[0].addEventListener("click", function() {
    if (disliked) {
        document.getElementsByClassName("dislike-button")[0].src = "../images/DislikeUnclicked.svg";
        document.getElementsByClassName("like-button")[0].src = "../images/LikeClicked.svg";
        disliked = false;
        liked = true;
    }
    else if (liked) {
        document.getElementsByClassName("like-button")[0].src = "../images/LikeUnclicked.svg";
        liked = false;
    }
    else {
        document.getElementsByClassName("like-button")[0].src = "../images/LikeClicked.svg";
        liked = true;
    }
});
document.getElementsByClassName("dislike-button")[0].addEventListener("click", function() {
    if (liked) {
        document.getElementsByClassName("like-button")[0].src = "../images/LikeUnclicked.svg";
        document.getElementsByClassName("dislike-button")[0].src = "../images/DislikeClicked.svg";
        disliked = true;
        liked = false;
    }
    else if (disliked) {
        document.getElementsByClassName("dislike-button")[0].src = "../images/DislikeUnclicked.svg";
        disliked = false;
    }
    else {
        document.getElementsByClassName("dislike-button")[0].src = "../images/DislikeClicked.svg";
        disliked = true;
    }
});