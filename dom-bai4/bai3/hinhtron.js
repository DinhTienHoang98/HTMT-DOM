var submitElement = document.getElementById("form")
submitElement.addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn chặn việc gửi form đi và làm mới trang

    // Lấy giá trị nhập vào từ người dùng
    var banKinh = parseFloat(document.getElementById("bankinh").value);
    var dienTich = parseFloat(document.getElementById("dientich").value);

    // Kiểm tra xem người dùng đã nhập đủ thông tin hay chưa
    if ((!banKinh && !dienTich) || (banKinh && dienTich)) {
        document.getElementById("error").innerHTML = `<p style="color: red; font-style: italic;">Vui lòng nhập 1 trong 2 giá trị</p>`;
        return;
    }

    // Tính giá trị còn lại nếu người dùng đã nhập một trong hai giá trị
    if (banKinh) {
        dienTich = Math.PI * Math.pow(banKinh, 2);
    } else {
        banKinh = Math.sqrt(dienTich / Math.PI);
    }

    // Làm tròn giá trị đến 2 chữ số thập phân
    banKinh = banKinh.toFixed(2);
    dienTich = dienTich.toFixed(2);

    // Hiển thị kết quả trong ô input
    document.getElementById("bankinh").value = banKinh;
    document.getElementById("dientich").value = dienTich;
    document.getElementById("error").textContent = "";
});
