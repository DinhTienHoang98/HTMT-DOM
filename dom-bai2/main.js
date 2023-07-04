const listNews = [
    {
        id: 1,
        img: 'images/hoa1.jpg',
        tenHoa: 'Hoa Phong Lan',
        loaiHoa: 'Khai trương'
    },
    {
        id: 2,
        img: 'images/hoa2.jpg',
        tenHoa: 'Hoa tỉ muội',
        loaiHoa: 'Khai trương'
    },
    {
        id: 3,
        img: 'images/hoa3.jpg',
        tenHoa: 'Hoa violet',
        loaiHoa: 'Hoa kỉ niệm'
    },
    {
        id: 4,
        img: 'images/hoa4.jpg',
        tenHoa: 'Hoa thủy tiên',
        loaiHoa: 'Hoa tình yêu'
    },
    {
        id: 5,
        img: 'images/hoa5.jpg',
        tenHoa: 'Hoa cẩm chướng',
        loaiHoa: 'Hoa hạnh phúc'
    }
];
var titleElement = document.querySelector('h3');
titleElement.innerHTML = 'Danh sách hoa';

var tableElement = document.getElementById('tbl');
var title = `<thead>
<tr>
    <th>ID</th>
    <th>Tên hoa</th>
    <th>Loại hoa</th>
    <th>Hình ảnh</th>
</tr>
</thead>`;
tableElement.innerHTML = title;

var html = '';
listNews.map(item => {
    html += `
    <tr>
    <td>${item.id}</td>
    <td><a href="#" title= ${item.tenHoa}></a>${item.tenHoa}</td>
    <td>${item.loaiHoa}</td>
    <td><img src= ${item.img} alt=${item.img} /></td>
</tr>
    `;
})
tableElement.innerHTML += '<tbody>' + html + '</tbody>';