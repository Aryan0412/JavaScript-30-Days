const button = document.querySelector('.btn');
const error = document.querySelector('.error');
const tip = document.querySelector('.tip');
const total = document.querySelector('.total');

const hideError = () => {
    setTimeout(() => {
        error.textContent = "";
        return;
    }, 3000);
}

button.addEventListener('click', () => {

    const bill = Number(document.querySelector('.bill').value);
    const rate = Number(document.querySelector('.rate').value);
    if (bill === 0 && rate === 0) {
        error.textContent = 'Please Enter Bill amount and Tip';
        hideError();
    }
    else if (bill === 0) {
        error.textContent = "Please enter bill";
        hideError();
    }
    else if (rate === 0) {
        error.textContent = "Please enter rate";
        hideError();
    }
    else {
        tip.textContent = `Tip amount : ${bill * rate}$`;
        total.textContent = `Total amount : ${bill + bill * rate}$`;
    }
})