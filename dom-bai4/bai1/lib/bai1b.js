
var resultDiv = document.getElementById("result");

// hàm check input
function handleBlurInput(input) {
    var checkElement = document.querySelector('.form-message');
    input.onblur = function () {
        if (input.value.trim() === '') {
            checkElement.setAttribute('style', 'color: red; font-style: italic')
            checkElement.innerText = 'Vui long nhap'
            input.classList.add('invalid')
        } else {
            checkElement.innerText = ''
            input.classList.remove('invalid')
        }
    }
    input.oninput = function () {
        checkElement.setAttribute('style', 'display: none');
        input.classList.remove('invalid')
    }
}
var daysoInput = document.querySelector('input[name="dayso"]'); // Lấy giá trị nhập vào input
handleBlurInput(daysoInput);

var form = document.getElementById("form");
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn chặn form gửi dữ liệu và tải lại trang

    // Kiểm tra xem giá trị dayso có hợp lệ hay không
    var tong = 0;
    var dayso = daysoInput.value
    var daysoArray = dayso.split(',')
    for (var i = 0; i < daysoArray.length; i++) {
        var so = parseInt(daysoArray[i]); // Chuyển chuỗi thành số
        if (isNaN(so)) {

            resultDiv.setAttribute('style', 'color: red; font-style: italic;');
            resultDiv.innerHTML = "Vui lòng nhập đúng định dạng số!";
            return;
        }
        tong += so;
    }

    resultDiv.setAttribute('style', 'color: black; font-style: normal;');
    resultDiv.innerHTML = "Tổng các số là: " + tong;
});
