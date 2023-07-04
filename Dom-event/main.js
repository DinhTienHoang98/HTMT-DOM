// 1. Input / Select
// * lay' gia' tri tu` the input
// - Bien' luu value tu` the input
var inputValue;
inputElement = document.querySelector('input[type = "text"]');
inputElement.onchange = function (e) {
    // inputElement.oninput = function (e) {
    inputValue = e.target.value;
}
// * lay' gia' tri tu` the checkbox
boxElement = document.querySelector('input[type = "checkbox"]');
boxElement.onchange = function (e) {
    console.log(e.target.checked);
}
// * lay' gia' tri tu` the select
selectElement = document.querySelector('select');
selectElement.onchange = function (e) {
    console.log(e.target.value);
}

// 2. keyup / dowm
// * The input
inputElement = document.querySelector('input[type = "text"]');
inputElement.onkeyup = function (e) {
    console.log(e.which)
    switch (e.which) {
        case 27:
            console.log('EXIT');
            break;
    }
}
// * listener doi tuong document
// document.onkeypress = function (e) {
document.onkeydown = function (e) {
    console.log(e.which)
    switch (e.which) {
        case 27:
            console.log('EXIT')
            break;
    }
}