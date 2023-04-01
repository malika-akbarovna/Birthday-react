const reviews = [
    {
        id: 1,
        name: 'susan smith',
        job: 'web developer',
        image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
        text:
            "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
    },
    {
        id: 2,
        name: 'anna johnson',
        job: 'web designer',
        image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
        text:
            'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.'
    },
    {
        id: 3,
        name: 'peter jones',
        job: 'intern',
        image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
        text:
            'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.'
    },
    {
        id: 4,
        name: 'bill anderson',
        job: 'the boss',
        image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
        text:
            'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. '
    },
    {
        id: 5,
        name: 'Tom',
        job: 'student',
        image: 'https://profile-images.xing.com/images/3772f741d60f8b16d216ba06a2ca6dd6-9/dmitri-stroutchenkov.128x128.jpg?similarprofile=true',
        text:
            'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. '
    },
    {
        id: 6,
        name: 'bill anderson',
        job: 'the boss',
        image: 'https://faceland.com/wp-content/uploads/2016/08/AndreasHaack-2563-2x3-Poster.jpg',
        text:
            'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. '
    },
    {
        id: 7,
        name: 'bill anderson',
        job: 'the boss',
        image: 'https://image.shutterstock.com/shutterstock/photos/1946920738/display_1500/stock-photo-young-confident-businesswoman-with-arms-crossed-wearing-stylish-eyeglasses-posing-for-pictures-1946920738.jpg',
        text:
            'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. '
    },
    {
        id: 8,
        name: 'bill anderson',
        job: 'the boss',
        image: 'https://s3.envato.com/files/173650464/WY0A8954.jpg',
        text:
            'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. '
    },
    {
        id: 9,
        name: 'bill anderson',
        job: 'the boss',
        image: 'https://avatars.mds.yandex.net/i?id=33438048185be367ff6a5fbb7aecd2d15cc44bfb-7750971-images-thumbs&n=13',
        text:
            'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. '
    },
    {
        id: 10,
        name: 'bill anderson',
        job: 'the boss',
        image: 'https://avatars.mds.yandex.net/i?id=ab87b69855990cbecd611dff15e9392b485891cd-9182192-images-thumbs&n=13',
        text:
            'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. '
    },
    {
        id: 11,
        name: 'bill anderson',
        job: 'the boss',
        image: 'https://avatars.mds.yandex.net/i?id=c651083b8c7a72b1b3feb8c8cc407909413616b8-8497237-images-thumbs&n=13',
        text:
            'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. '
    },
    {
        id: 12,
        name: 'bill anderson',
        job: 'the boss',
        image: 'https://avatars.mds.yandex.net/i?id=45237f78dc5e57a4c76149ca177cec922b7b63ca-9231626-images-thumbs&n=13',
        text:
            'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. '
    },
    {
        id: 13,
        name: 'bill anderson',
        job: 'the boss',
        image: 'https://avatars.mds.yandex.net/i?id=9695763da27d966578f726580be9543186465d99-9123151-images-thumbs&n=13',
        text:
            'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. '
    },
    {
        id: 14,
        name: 'bill anderson',
        job: 'the boss',
        image: 'https://avatars.mds.yandex.net/i?id=15e802cde743f3ace595c3edd60baee34c005d94-8497600-images-thumbs&n=13',
        text:
            'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. '
    },
    {
        id: 15,
        name: 'bill anderson',
        job: 'the boss',
        image: 'https://avatars.mds.yandex.net/i?id=8ce417b94c5f8a3dc0a0e1da35bc5123299b553b-9065868-images-thumbs&n=13',
        text:
            'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. '
    },
];

export default reviews;