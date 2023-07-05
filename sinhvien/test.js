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

// Gắn sự kiện click cho nút Thêm
createButton.addEventListener('click', addStudent);

// Hàm hiển thị danh sách sinh viên
function displayStudents() {
    let html = '';

    studentList.forEach((student) => {
        html += `<li class='student-${student.id}'>
            <h2>Tên: ${student.name}</h2>
            <p>Địa chỉ: ${student.address}</p>
            <button onclick="onUpdate(${student.id})">Sửa</button>
            <button onclick="onDelete(${student.id})">Xóa</button>
        </li>`;
    });

    studentInput.innerHTML = html;
}

displayStudents();

// Hàm xử lý sự kiện khi nhấn nút Sửa
function onUpdate(id) {
    // Tìm sinh viên trong danh sách dựa trên id
    const student = studentList.find(item => item.id === id);

    if (student) {
        // Hiển thị thông tin sinh viên trong ô input
        nameElement.value = student.name;
        addressElement.value = student.address;

        // Ẩn nút Thêm và hiển thị nút Sửa
        createButton.style.display = 'none';
        updateButton.style.display = 'block';

        // Gán sự kiện click cho nút Sửa
        updateButton.addEventListener('click', function () {
            // Cập nhật thông tin sinh viên trong danh sách
            student.name = nameElement.value;
            student.address = addressElement.value;

            // Hiển thị danh sách sinh viên
            displayStudents();

            // Xóa nội dung ô input sau khi sửa sinh viên thành công
            nameElement.value = '';
            addressElement.value = '';

            // Hiển thị lại nút Thêm và ẩn nút Sửa
            createButton.style.display = 'block';
            updateButton.style.display = 'none';
        });
    }
}

// Hàm xử lý sự kiện khi nhấn nút Xóa
function onDelete(id) {
    const confirmed = confirm('Bạn có chắc chắn muốn xóa sinh viên này?');
    if (confirmed) {
        // Lọc sinh viên có id khác với id được truyền vào
        const filteredList = studentList.filter(student => student.id !== id);

        // Cập nhật lại danh sách sinh viên
        studentList.length = 0;
        Array.prototype.push.apply(studentList, filteredList);

        // Hiển thị danh sách sinh viên
        displayStudents();
    }
}
