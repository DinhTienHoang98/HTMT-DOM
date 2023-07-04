const listNews = [
    {
        id: 1,
        img: 'images/ThuyTien_01.jpg',
        tenHoa: 'Hoa thủy tiên',
        loaiHoa: `Những bát hoa thủy tiên đẹp chưng trong nhà ngày Tết vốn là thú chơi tao nhã, thanh lịch, hào hoa
        của người Hà Nội xưa`
    },
    {
        id: 2,
        img: 'images/hoalai.jpg',
        tenHoa: 'Hoa tỉ muội',
        loaiHoa: `Hoa phi yến còn có tên hoa chân chim vì hoa trông giống như chân con chim hoặc phi yến (chim yến đang bay) hay violet vì hoa màu tím và còn có tên La-let hay đông thảo thuộc họ Mao lương 
        (Ranuncolaceae) thực chất cũng có cây cho hoa màu hồng và trắng xong rất ít.`
    },
    {
        id: 3,
        img: 'images/hoalili.PNG',
        tenHoa: 'Hoa violet',
        loaiHoa: `Những giọt nước mắt nào có giúp được gì! Giắc sẽ phải lên đường chinh chiến ở một xứ xa lạ,
        đành bỏ lại Lilia, người vợ chưa cưới của mình trên đất Pháp. 
        Lúc chia tay, Giắc rút trái tim ra khỏi lồng ngực mình, trao cho Lilia và nói`
    },
    {
        id: 4,
        img: 'images/hoaphonglan.jpg',
        tenHoa: 'Hoa thủy tiên',
        loaiHoa: `Mùi hương thoảng thoảng như cứ đeo đẳng theo 
        chúng ta mọi nơi lại phát ra từ những bông hoa trắng nhỏ xíu, mong manh.`
    },
    {
        id: 5,
        img: 'images/hoaviolet2.jpg',
        tenHoa: 'Hoa cẩm chướng',
        loaiHoa: `Nếu không có ảnh hậu trường, khó ai hình dung được chiêu thức chụp bức ảnh hoa lan này.
        Nhiều dân mạng đã đặt tên cho tác phẩm này là: "Tôi đã thấy hoa vàng trên quần đen". Người ta hay bảo chỉ có giới trẻ mới tiếp cận được những 
        "tinh hoa" của công nghệ chỉnh sửa ảnh lung linh ảo diệu thời hiện đại.`
    }
];
var headElement = document.getElementById('heading')
headElement.innerHTML = 'Sản phẩm nổi bật';

var ulElement = document.getElementById('list');
var html = '';
listNews.map(item => {
    html += `
<li>
                <div class="left">
                    <a href="#" title=""><img src=${item.img} alt=${item.img} /></a>
                </div>
                <div class="right">
                    <h2><a href="#" title="">${item.tenHoa}</a></h2>
                    <p>${item.loaiHoa}</p>
                    <span><a href="#" title="">-Chi tiết-</a></span>
                </div>
                <div class="clr"></div>
            </li>`
});
ulElement.innerHTML += '<ul>' + html + '</ul>';