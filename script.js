const dateofbrith = document.querySelector("#date-of-brith");
const luckynumber = document.querySelector("#lucky-number");
const checknumberButton = document.querySelector("#check-number");

const outputbox = document.querySelector("#output-box");

function comparevalue(sum, luckynumber) {
    if (sum % luckynumber === 0) {
        console.log(sum);
        outputbox.innerText = "your brithday is lucky";
    } else {
        outputbox.innerText = "your brithday is not lucky";
    }
}

function checkbrithdateislucky() {

    const dob = dateofbrith.value;
    const sum = calculateSum(dob);
    if (sum && dob)
        comparevalue(sum, luckynumber.value)
    else
        outputbox.innerText = "Please enter both the field";

}

function calculateSum(dob) {
    dob = dob.replaceAll("-", "");
    let sum = 0;
    for (let index = 0; index < dob.length; index++) {

        sum = sum + Number(dob.charAt(index));
    }
    return sum;
}

checknumberButton.addEventListener('click', checkbrithdateislucky)