var form = document.getElementById("form")
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn chặn form gửi dữ liệu và tải lại trang

    var chieuDaiInput = document.querySelector('input[name="chieudai"]');
    var chieuRongInput = document.querySelector('input[name="chieurong"]');
    var resultDiv = document.getElementById("result");

    // Kiểm tra xem đã nhập giá trị chieuDai và chieuRong chưa
    var checkElement = document.querySelectorAll('.form-message');
    checkElement.forEach(el => {
        if (chieuDaiInput.value === "" && chieuRongInput.value === "") {
            el.setAttribute('style', 'color: red; font-style: italic;');
            el.innerText = 'Vui lòng nhập';
            return;
        }
    })

    var chieuDai = parseFloat(chieuDaiInput.value);
    var chieuRong = parseFloat(chieuRongInput.value);

    // Kiểm tra xem giá trị chieuDai và chieuRong có hợp lệ hay không
    if (isNaN(chieuDai) || isNaN(chieuRong)) {
        resultDiv.setAttribute('style', 'color: red; font-style: italic;');
        resultDiv.innerHTML = "Vui lòng nhập đầy đủ thông tin !";
        return;
    }

    var chuVi = 2 * (chieuDai + chieuRong);
    var dienTich = chieuDai * chieuRong;

    resultDiv.innerHTML = "Chu vi: " + chuVi + "<br />Diện tích: " + dienTich;
});
