const example_data = [
    {
        "source": './images/example_picture.jpeg',
        "caption": 'My professional picture jkfdklfaklsfjadslkfjadsklfjdslafkjdslkfjadsklfjlkdsjfkladsjfklajflkdsjflkasdjflkdasjflkadsjfkldasjfkladsjfkladsjflkadsjfklasdjfdsklafjadsklfjadsklfjksldafjaksl',
        "like_quantity": 69,
        "comment_quantity": 45,
        "creation_date": '21/02/2023',
        "comments": [
            {"user": "Someone", "content": "Hey what's up man ? Nice picture. 'word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word word'"},
            {"user": "Angry_man", "content": "You stole my picture, I'll find you and I'll kill you."},
            {"user": "Someone_else", "content": "Can you answer one day ?"},
        ],
    },
    {
        "source": './images/example.jpeg',
        "caption": 'My professional picture',
        "like_quantity": 6997000,
        "comment_quantity": 5000000000,
        "creation_date": '01/02/2025',
        "comments": [
            {"user": "Angry_man", "content": "litteraly the best buddy ever"},
        ],
    },
    {
        "source": './images/example_picture.jpeg',
        "caption": 'My professional picture',
        "like_quantity": 69,
        "comment_quantity": 45,
        "creation_date": '21/02/2023',
        "comments": [],
    },
];

const numeric_shorthands = {
    1000000000: 'B',
    1000000: 'M',
    1000: 'K',
}

function truncate_number(number) {
    if (number < 1000) {
        return number;
    }
    const key = Object.keys(numeric_shorthands).map((n) => parseInt(n)).reverse().find((n) => Math.floor(number / n) > 0);
    const shorthand = numeric_shorthands[String(key)];
    return String(Math.floor(number / key)) + shorthand;
}

export function renderer(template) {
    let home_gallery = template.getElementById("home-gallery");
    let gallery_post_template = template.getElementById("gallery-post-template");
    let post_comment_template = template.getElementById("post-comment-template");

    example_data.forEach(function (item) {
        let gallery_post = template.importNode(gallery_post_template.content, true);

        gallery_post.querySelector('img').src = item.source;
        gallery_post.querySelector('.post-caption').querySelector('p').textContent = item.caption;
        gallery_post.querySelector('.post-caption').querySelector('time').textContent = item.creation_date;

        let post_engagement_quantitys = gallery_post.querySelector('.post-engagement').querySelectorAll('p');
        post_engagement_quantitys[0].textContent = truncate_number(item.like_quantity);
        post_engagement_quantitys[1].textContent = truncate_number(item.comment_quantity);

        let post_comments = gallery_post.querySelector('.post-comments');
        item['comments'].forEach((comment) => {
            let post_comment = template.importNode(post_comment_template.content, true);

            let comment_data = post_comment.querySelector('p');
            comment_data.innerHTML = "<span class='comment-username'>" + comment.user + "</span>" + ': ' + comment.content;

            post_comments.appendChild(post_comment);
        });

        post_engagement_quantitys = gallery_post.querySelector('.post-comment-details').querySelector('.post-engagement').querySelectorAll('p');
        post_engagement_quantitys[0].textContent = truncate_number(item.like_quantity);
        post_engagement_quantitys[1].textContent = truncate_number(item.comment_quantity);

        home_gallery.appendChild(gallery_post);
    });

    return home_gallery.innerHTML;
}
