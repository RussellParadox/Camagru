function handleKeyDownCommentInput(event) {
    const comment_input = event.currentTarget;

    if (event.key == "Enter") {
        const post_comments = comment_input.closest('.post-comment-zone').querySelector('.post-comments');

        const new_comment_content = comment_input.value.trim();
        if (new_comment_content) {
            const new_comment = document.createElement('div');
            const new_comment_p = document.createElement('p');

            new_comment.className = 'post-comment';
            new_comment_p.innerHTML = "<span class='comment-username'>Me</span>: " + new_comment_content;

            new_comment.appendChild(new_comment_p);
            post_comments.prepend(new_comment);
        }

        comment_input.value = "";
    }
}
