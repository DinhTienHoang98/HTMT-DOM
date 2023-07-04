var form = document.getElementById("form");
var input = document.querySelector('input[name="hoten"]');
var greeting = document.getElementById("greeting");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    var ten = input.value; // Lấy giá trị tên từ input

    var checkElement = document.querySelector('.form-message');
    if (input.value === '') {
        checkElement.setAttribute('style', 'color: red; font-style: italic;');
        checkElement.innerHTML = 'Vui lòng nhập';
        greeting.innerHTML = "";
    } else {
        greeting.innerHTML = `Câu chào: <strong>Chào bạn ${ten}</strong>`;
        input.value = ten;
    }
});