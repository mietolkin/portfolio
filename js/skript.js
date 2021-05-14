///DATA

const portfolio = [
    {
        name: 'Code-1',
        adress: 'qW58o0-OFns',
        img: '/img/1.jpg',
        categorie: 'Youtube',

    },

    {
        name: 'Code-1',
        adress: 'xZzDRvZm76M',
        img: '/img/bg2.jpeg',
        categorie: 'Overview',

    },

    {
        name: 'Code-1',
        adress: 'SF7NwZP77Tc',
        img: '/img/2.jpg',
        categorie: 'Comercial',

    },

    {
        name: 'Code-1',
        adress: '#',
        img: '/img/3.jpg',
        categorie: 'Overview',

    },

    {
        name: 'Code-1',
        adress: '#',
        img: '/img/4.jpg',
        categorie: 'Youtube',

    },

    {
        name: 'Code-1',
        adress: '#',
        img: '/img/5.jpg',
        categorie: 'Youtube',

    },

    {
        name: 'Code-1',
        adress: '#',
        img: '/img/bg3.jfif',
        categorie: 'Youtube',

    },

    {
        name: 'Code-1',
        adress: '#',
        img: '/img/6.jpg',
        categorie: 'Youtube',

    },

    // {
    //     name: 'Code-1',
    //     adress: '#',
    //     img: '/img/maxresdefault.jpg',
    //     categorie: 'і',

    // },
];

const someTextData = ['videographer', 'We are Mietolkin', 'web-developer', 'video-editor', 'Junior Front End'];


$("#slideshow > div:gt(0)").hide();

setInterval(function () {
    $('#slideshow > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
}, 4000);



