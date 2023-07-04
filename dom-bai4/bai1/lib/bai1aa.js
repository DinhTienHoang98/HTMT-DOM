var submitElement = document.querySelector('input[type="submit"]');

var chieuDaiElement = document.querySelector('input[name="chieudai"]');
var chieuRongElement = document.querySelector('input[name="chieurong"]');

/**
 * Hàm để xử lý khi blur vào ô input
 * @param {*} input 
 */

function handleBlurInput(input) {
    var errorElement = input.parentElement.querySelector('.form-message')
    input.onblur = function () {
        if (input.value === '') {
            errorElement.setAttribute('style', 'color: red; font-style: italic')
            errorElement.innerText = 'Vui long nhap'
            input.classList.add('invalid')
        } else {
            errorElement.innerText = ''
            input.classList.remove('invalid')
        }
    }
    input.oninput = function () {
        errorElement.setAttribute('style', 'display: none')
        input.classList.remove('invalid')
    }
}

handleBlurInput(chieuDaiElement);
handleBlurInput(chieuRongElement);

submitElement.onclick = function (e) {
    e.preventDefault();

    var resultElement = document.getElementById('result');
    if (chieuDaiElement.value !== '' && chieuRongElement.value !== '') {
        var chuVi = (Number(chieuDaiElement.value) + Number(chieuRongElement.value)) * 2;
        var dienTich = chieuDaiElement.value * chieuRongElement.value;
        resultElement.innerHTML = `
            <p>Chu vi: ${chuVi}</p>  
            <p>Diện tích: ${dienTich}</p>
        `;
    } else {
        resultElement.innerHTML = `
            <p style="color: red">Vui lòng nhập đầy đủ thông tin vào!</p>
        `;
    }

}