const studentList = [
    {
        id: 1,
        name: 'Hoàng',
        address: 'Hòa Hải',
    },
    {
        id: 2,
        name: 'Nam',
        address: 'QN',
    },
    {
        id: 3,
        name: 'Việt',
        address: 'ĐN',
    }
];

const nameElement = document.querySelector('input[name="name"]');
const addressElement = document.querySelector('input[name="address"]');
const createButton = document.getElementById('create');
const updateButton = document.getElementById('update');
const studentInput = document.getElementById('list-students');

// Hàm kiểm tra input
function handleBlurInput(input) {
    const checkElement = input.parentElement.querySelector('.form-message');

    input.onblur = function () {
        if (input.value.trim() === '') {
            checkElement.setAttribute('style', 'color: red; font-style: italic');
            checkElement.innerText = 'Vui lòng nhập';
            input.classList.add('invalid');
        } else {
            checkElement.innerText = '';
            input.classList.remove('invalid');
        }
    };

    input.oninput = function () {
        checkElement.setAttribute('style', 'display: none');
        input.classList.remove('invalid');
    };
}

handleBlurInput(nameElement);
handleBlurInput(addressElement);

// Hàm thêm sinh viên mới vào danh sách
function addStudent() {
    const name = nameElement.value;
    const address = addressElement.value;

    // Kiểm tra xem tên và địa chỉ có được cung cấp hay không
    if (name.trim() === '' || address.trim() === '') {
        alert('Vui lòng nhập tên và địa chỉ.');
        return;
    }

    // Tạo đối tượng sinh viên từ thông tin nhập vào
    const student = {
        id: studentList.length + 1,
        name: name,
        address: address
    };

    // Thêm sinh viên vào mảng
    studentList.push(student);

    // Hiển thị danh sách sinh viên
    displayStudents();

    // Xóa nội dung ô input sau khi thêm sinh viên thành công
    nameElement.value = '';
    addressElement.value = '';
}
function editStudent() {
    const name = nameElement.value;
    const address = addressElement.value
    var editSt = {
        id: idEd,
        name: name,
        address: address
    }
    var idx = studentList.findIndex(function (el) {
        return el.id == idEd;
    });
    studentList.splice(idx, 1, editSt);

    // Hiển thị danh sách sinh viên
    displayStudents();

    // Xóa nội dung ô input sau khi thêm sinh viên thành công
    nameElement.value = '';
    addressElement.value = '';

    updateButton.setAttribute('style', 'display: none');
    createButton.setAttribute('style', 'display: block');

}
function deleteSt(id) {
    var check = confirm('Bạn có chắc muốn xóa không?');
    if (check) {
        var idx = studentList.findIndex(el => {
            return el.id == id;
        })
        studentList.splice(idx, 1)
        displayStudents();
    }
}
// Gắn sự kiện click cho nút Thêm
createButton.addEventListener('click', addStudent);

// Gắn sự kiện click cho nút Sửa
updateButton.addEventListener('click', editStudent);

// Hàm hiển thị danh sách sinh viên
function displayStudents() {
    let html = '';

    studentList.forEach((student) => {
        html += `<li class='student-${student.id}'>
            <h2>Tên: ${student.name}</h2>
            <p>Địa chỉ: ${student.address}</p>
            <button onclick = update(${student.id})>Sửa</button>
            <button onclick = deleteSt(${student.id})>Xóa</button>
        </li>`;
    });

    studentInput.innerHTML = html;
}

displayStudents();

// chuc nang sua
var idEd;
function update(id) {
    idEd = id;
    var editSt = studentList.find(function (el) {
        return el.id == id
    });
    console.log(editSt);

    nameElement.value = editSt.name;
    addressElement.value = editSt.address;

    updateButton.setAttribute('style', 'display: block');
    createButton.setAttribute('style', 'display: none');

}
