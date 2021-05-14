// --------------------------TEXT CHANGER!!! ------------------------


let textChanger = document.querySelector('.changer').textContent;
// console.log(textChanger);


const someTextDataLength = someTextData.length - 1;


let i = 0;
let iA = 0;
let emptyString = '';

function textTyper() {

    // console.log(iA);
    const someTextToArr = someTextData[iA].split('');

    const someTextToArrNumb = someTextToArr.length;





    //// TYPING TEXT
    if (i < someTextToArrNumb) {
        document.querySelector('.changer').innerText = emptyString += someTextToArr[i];
        // console.log(i);
        setTimeout(textTyper, 150);
    }
    ////// CHANGING TEXT
    else {
        i = -1;
        emptyString = '';

        if (iA < someTextDataLength) {
            // console.log(iA);
            iA++;

        } else {
            iA = 0;
        }
        // console.log(someTextToArr);
        setTimeout(textTyper, 1050);
    }
    i++;
    // iA++;

}

textTyper();



