//export {}; // I am still not sure what I did with this, but the compiler shuts up about nonsensical errors about duplicates.
var adviceBaseUrl = "https://api.adviceslip.com/advice";
var adviceNumber = document.querySelector('.advice-number');
var adviceText = document.querySelector('.advice-text');
function getAdvice() {
    fetch(adviceBaseUrl, {
        method: 'GET'
    })
        .then(function (response) {
        console.log(response);
        if (response.ok) {
            return response.json();
        }
        else {
            throw 'ERROR!';
        }
    })
        .then(function (array) {
        console.log(array.slip.id);
        console.log(array.slip.advice);
        adviceNumber.textContent = "ADVICE #".concat(array.slip.id);
        adviceText.textContent = " \"".concat(array.slip.advice, "\" ");
        console.log(array);
    })["catch"](function (error) {
        console.log(error);
    });
}
//adviceBoxElement.textContent = .name;
