// 1. PreventDefault (Để loại bỏ hành vi mặc định của trình duyệt trên 1 thẻ html)
// VD1 :
var aElement = document.querySelectorAll('a')
for (var i = 0; i < aElement.length; ++i)
    aElement[i].onclick = function (e) {
        if (!e.target.href.startsWith('https://f8.edu.vn/')) {
            e.preventDefault();
        }
    }
// VD2 :
var ulElement = document.querySelector('ul');
ulElement.onmousedown = function (e) {
    e.preventDefault()
}
ulElement.onclick = function (e) {
    console.log(e.target)
}

// 2. StopPropagation (Loại bỏ event nổi bọt)
document.querySelector('div').onclick =
    function () {
        console.log('here')
    }
document.querySelector('button').onclick =
    function (e) {
        e.stopPropagation(); // ngan chan noi bot say ra
        console.log('Click me')
    }