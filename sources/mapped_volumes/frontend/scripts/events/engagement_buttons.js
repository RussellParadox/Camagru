function handleHeartButton(button, event) {
    event.preventDefault();
    if (button.src.split('/').pop() == "heart_full.png") {
        button.src = "./images/heart_empty.png";
    }
    else {
        button.src = "./images/heart_full.png";
    }
}

function handleCommentButton(button, event) {
    event.preventDefault();
    if (button.src.split('/').pop() == "comment_full.png") {
        button.src = "./images/comment_empty.png";
    }
    else {
        button.src = "./images/comment_full.png";
    }
}
