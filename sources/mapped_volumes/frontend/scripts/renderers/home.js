const example_data = [
    {
        "source": './images/example_picture.jpeg',
        "caption": 'My professional picture jkfdklfaklsfjadslkfjadsklfjdslafkjdslkfjadsklfjlkdsjfkladsjfklajflkdsjflkasdjflkdasjflkadsjfkldasjfkladsjfkladsjflkadsjfklasdjfdsklafjadsklfjadsklfjksldafjaksl',
        "like_quantity": '69',
        "comment_quantity": '45',
        "creation_date": '21/02/2023',
        "comments": [
            {"user": "Someone", "comment": "Hey what's up man ? Nice picture."},
            {"user": "Angry_man", "comment": "You stole my picture, I'll find you and I'll kill you."},
            {"user": "Someone_else", "comment": "Can you answer one day ?"},
        ],
    },
    {
        "source": './images/example.jpeg',
        "caption": 'My professional picture',
        "like_quantity": '6997',
        "comment_quantity": '5',
        "creation_date": '01/02/2025',
        "comments": [
            {"user": "Angry_man", "comment": "litteraly the best buddy ever"},
        ],
    },
    {
        "source": './images/example_picture.jpeg',
        "caption": 'My professional picture',
        "like_quantity": '69',
        "comment_quantity": '45',
        "creation_date": '21/02/2023',
        "comments": [],
    },
];

export function renderer(template) {
    let home_gallery = template.getElementById("home-gallery");
    let gallery_post_template = template.getElementById("gallery-post-template");

    example_data.forEach(function (item) {
        let gallery_post = template.importNode(gallery_post_template.content, true);

        gallery_post.querySelector('img').src = item.source;
        gallery_post.querySelector('.post-caption').querySelector('p').textContent = item.caption;
        gallery_post.querySelector('.post-caption').querySelector('time').textContent = item.creation_date;

        let post_engagement_quantitys = gallery_post.querySelector('.post-engagement').querySelectorAll('p');
        post_engagement_quantitys[0].textContent = item.like_quantity;
        post_engagement_quantitys[1].textContent = item.comment_quantity;

        home_gallery.appendChild(gallery_post);
    });

    return home_gallery.innerHTML;
}
