const example_data = [
    {
        "source": './images/example.jpeg',
        "caption": 'My professional picture',
        "like_quantity": '69',
        "comment_quantity": '45',
        "creation_date": '21/02/2023',
    },
    {
        "source": './images/example.jpeg',
        "caption": 'My professional picture',
        "like_quantity": '69',
        "comment_quantity": '45',
        "creation_date": '21/02/2023',
    },
    {
        "source": './images/example.jpeg',
        "caption": 'My professional picture',
        "like_quantity": '69',
        "comment_quantity": '45',
        "creation_date": '21/02/2023',
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
