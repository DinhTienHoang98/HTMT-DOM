// 1. Xử lý nhiều việc khi 1 event xảy ra
// 2. Lắng nghe / Hủy bỏ lắng nghe
var btnElement = document.querySelector('#btn')
console.log(btnElement)

// DOM EVENT - sử dụng trong trường hợp đơn giản và ko muốn gỡ bỏ lắng nghe
// 1. Xử lý nhiều việc khi 1 event xảy ra
btnElement.onclick = function () {
    // viec 1
    console.log('viec 1')
    // viec 2
    console.log('viec 2')
    // viec 3
    console.log('viec 3')
}
// 2. Lắng nghe / Hủy bỏ lắng nghe
// setTimeout(function () {
//     btnElement.onclick = function () {
//         // viec 1
//         console.log('viec 1')
//         // viec 2
//         console.log('viec 2')
//         // viec 3
//         console.log('viec 3')
//     }
// }, 3000)
// EVENT LISTENER - khi 1 event xảy ra và muốn hủy bỏ event hoặc nhiều event mà muốn loại bỏ event nào đó
// 1. Xử lý nhiều việc khi 1 event xảy ra
// Viec 1
btnElement.addEventListener('click', function (e) {
    console.log(Math.random())
})
// viec 2 
btnElement.addEventListener('click', function (e) {
    console.log('viec 2')
})
// viec 3
btnElement.addEventListener('click', function (e) {
    console.log(Math.random());
    console.log('==============')
})

// 2. Lắng nghe / Hủy bỏ lắng nghe
// Huy bo lang nghe
function viec1() {
    console.log('viec1')
}
btnElement.addEventListener('click', viec1)
setTimeout(function () {
    btnElement.removeEventListener('click', viec1);
}, 3000);
