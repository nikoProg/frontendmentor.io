//export {}; // I am still not sure what I did with this, but the compiler shuts up about nonsensical errors about duplicates.

const adviceBaseUrl : string = "https://api.adviceslip.com/advice";
let adviceNumber : any = document.querySelector('.advice-number');
let adviceText : any = document.querySelector('.advice-text');
function getAdvice() : void {
    fetch(adviceBaseUrl, {
        method: 'GET'
    })
    .then(function (response) {
        console.log(response);
        if (response.ok) {
            return response.json();
        } else {
            throw 'ERROR!';
        }
    })
    .then(function (array) {
        console.log(array.slip.id);
        console.log(array.slip.advice);
        
        adviceNumber.textContent = `ADVICE #${array.slip.id}`;
        adviceText.textContent = ` "${array.slip.advice}" `;

        console.log(array);
    })
    .catch(function (error) {
        console.log(error);
    })
}


//adviceBoxElement.textContent = .name;
