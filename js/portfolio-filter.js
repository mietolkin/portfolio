
// Selectors
const portfolioBlock = document.querySelector('.portfolio-page');
const btnBlock = document.querySelector('.category')

//---------------------------- Showing portfolio----------------------------
portfolio.forEach(function (portfolios) {
    // console.log(portfolios);


    const createDiv = document.createElement('div');
    createDiv.classList.add('portfolio-block', portfolios.categorie);

    const createPicture = document.createElement('img');
    createPicture.src = portfolios.img;
    createPicture.classList.add('videoId')
    // console.log(createPicture);
    createDiv.appendChild(createPicture);

    const createHeading = document.createElement('h3');
    createHeading.innerText = portfolios.name;
    createDiv.appendChild(createHeading);

    portfolioBlock.appendChild(createDiv);
})


// -------------------------Creating categories----------------------------------

let categoriesSet = new Set();
let categoriesUnic = ['All'];

portfolio.forEach(element => {
    categoriesSet.add(element.categorie);
});

categoriesSet.forEach(e => {
    categoriesUnic.push(e);
});

function createCategories(elem) {


    console.log(categoriesUnic);

    categoriesUnic.forEach(elem => {



        const createBtn = document.createElement('button');
        createBtn.classList.add(elem.toLowerCase());
        createBtn.innerText = elem;

        btnBlock.append(createBtn);

    });
}

createCategories();

function filterCategories(event) {


    categoriesUnic.forEach(function (categorie) {
        if (categorie === event.target.innerText) {


            let allSelectors = document.querySelectorAll(`.${event.target.innerText}`); // getiing categorie class
            let allPortfolio = document.querySelectorAll(`.portfolio-block`);
            let selectorName = event.target.innerText;



            if (selectorName === 'All') {
                console.log('all');

                for (let selector of allPortfolio) {
                    selector.style.display = 'block';
                }
            } else {
                for (let pb of allPortfolio) {
                    pb.style.display = 'none';
                }
                for (let selector of allSelectors) {
                    selector.style.display = 'block';
                }
            }
        }
    })
}


btnBlock.addEventListener('click', filterCategories)

//-------------------------------------------------Show video on top------------------------------------------

let headerDiv = document.querySelector('.header');
// let headerCover = document.querySelector('.header-cover');
let btnPlay = document.querySelector('.far');
// headerCover.style.backgroundImage = `url('${portfolio[0].img}')`;
// let imge = document.getElementsByTagName('img');
let videoAdress = portfolio[0].adress;


let videoBlock = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${videoAdress}" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>`;

headerDiv.insertAdjacentHTML('afterBegin', videoBlock);


function showVideo(e) {

    const imgs = e.target;

    if (imgs.classList.value.toString() === "videoId") {
        const imgsPath = e.target.src.toString().split('img/')[1];
        const imgFullPath = '/img/' + imgsPath;
        // const imagePathSplit = imgsPath;

        portfolio.forEach(obj => {
            if (obj.img === imgFullPath) {
                console.log('got it---------------------', imgFullPath, obj.img, `url('${obj.img}')`);
                // console.log();
                let videoBlockChanged = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${obj.adress}" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>`;
                console.log(`https://www.youtube.com/embed/${obj.adress}`);

                console.log(videoBlock);




                // headerCover.style.backgroundImage = `url('${obj.img}')`;
                // headerCover.style.display = 'block';
                // headerCover.style.backgroundImage = ''
                headerDiv.innerHTML = ``;
                headerDiv.insertAdjacentHTML('afterBegin', videoBlockChanged);
            } else {
                console.log('got fuck');
                // console.log(obj.img);

            }
        })
    } else {
        console.log('fuck off');
    }
}


portfolioBlock.addEventListener('click', showVideo);