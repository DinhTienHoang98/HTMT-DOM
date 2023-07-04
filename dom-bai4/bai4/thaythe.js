// 3. Replace
// console.log(myString.replace('JS', 'Javascript')) // thay chữ JS thành Javascript
// console.log(myString.replace(/JS/g, 'Javascript')) // Thay tất cả chữ JS có trong biến thành Javascript 

var textInput = document.querySelector('#chuoigoc');
var tugocInput = document.getElementById('tugoc');
var tuthaytheInput = document.getElementById('tuthaythe');
var output = document.getElementById('doanthaythe')

var form = document.getElementById('form')
form.addEventListener('submit', function (event) {
    event.preventDefault();

    var errorElement = document.getElementById('error')
    if (tugocInput.value === '' || tuthaytheInput.value === '') {
        errorElement.setAttribute('style', 'color: red; font-style: italic; text-align: center')
        errorElement.innerText = 'Vui lòng nhập đầy đủ thông tin!';
    } else {
        errorElement.innerHTML = '';
        var chuoi = textInput.value.replace(tugocInput.value, tuthaytheInput.value)
        output.innerHTML = chuoi;
    }
})
