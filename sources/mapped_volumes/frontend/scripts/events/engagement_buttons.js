const extend_details = [
    { bottom: '-20%' },
    { bottom: '0%' }
];

const extend_comment_zone = [
    { bottom: '-100%' },
    { bottom: '0%' }
];

function handleHeartButton(event) {
    event.preventDefault();
    const button = event.currentTarget;

    const gallery_post = button.closest('.gallery-post');
    const heart_buttons = gallery_post.querySelectorAll('.heart-button')
    if (button.src.split('/').pop() == "heart_full.png") {
        heart_buttons.forEach((b) => {
            b.src = "./images/heart_empty.png";
        });
    }
    else {
        heart_buttons.forEach((b) => {
            b.src = "./images/heart_full.png";
        });
    }
}

async function handleCommentButton(event) {
    event.preventDefault();
    const button = event.currentTarget;

    const gallery_post = button.closest('.gallery-post');
    const comment_buttons = gallery_post.querySelectorAll('.comment-button')
    const post_details = gallery_post.querySelector('.post-details');
    const post_comment_zone = gallery_post.querySelector('.post-comment-zone');
    console.log(comment_buttons)
    if (button.src.split('/').pop() == "comment_full.png") {
        comment_buttons.forEach((b) => {
            b.src = "./images/comment_empty.png";
        });
        await post_comment_zone.animate(extend_comment_zone, {
            duration: 600,
            fill: 'forwards',
            direction: 'reverse',
        }).finished;
        await post_details.animate(extend_details, {
            duration: 600,
            fill: 'forwards',
        }).finished;
    }
    else {
        comment_buttons.forEach((b) => {
            b.src = "./images/comment_full.png";
        });
        await post_details.animate(extend_details, {
            duration: 600,
            fill: 'forwards',
            direction: 'reverse',
        }).finished;
        await post_comment_zone.animate(extend_comment_zone, {
            duration: 600,
            fill: 'forwards',
        }).finished;
    }
}
