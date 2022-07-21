import html from "../core.js";
import { connect } from "../store.js";
import Product from "./Product.js";

function Content(props) {
    console.log('props: ', props)
    let imgs = [];
    let imgs_gt=[];

    if (props.home && props.home.ownerProducts) {
        imgs = props.home.ownerProducts;
    }
    if (props.home && props.home.productionIntroduce) {
        imgs_gt = props.home.productionIntroduce;
    }
    return html`
        <div class='content'>
        <div class='folder'>
            <h3 style="color:#0693e3;">SẢN PHẨM CỦA CHÚNG TÔI</h3>
            ${imgs.map(src => html`<img src=${src} width="300" height="225"></img>`)}
            ${
                props
                && props.products
                && props.products.map(p => Product(p))
            }
            <p> về chúng tôi</p>
            <h1 style="color:#0693e3;"> italio - Công Ty Sản Xuất Kem Ý Gelato </h1>
         
        
            <div class="grid-container">
            <div  class="item1"> <img src="https://italio.vn/wp-content/uploads/2021/08/italio-decor-1.jpg" style="width:580px;height:750px;"></div>
            
            <div class="item2" >
            <div style =" font-size: 25px;
            color: #26427C;text-align: justify;">
           
            Với triết lí, chất lượng sản phẩm là linh hồn của thương hiệu.
            ITALIO luôn giữ vững và ngày
            càng phát triển thêm nhiều hương vị,
            đa dạng sự lựa chọn cho thực khách, mong muốn
            mang những viên kem ngon,bổ dưỡng tới tất cả 
           các cửa hàng trên toàn quốc, để mỗi ly kem đưa
           tới khách hàng là những ly kem ý gelato chất lượng tuyệt hảo !</div></div>
           <div class="item3"> 
           <img src="https://italio.vn/wp-content/uploads/2021/04/1.png" style="width:480px;height:750x; padding: 70px ;"></div>
           <div class="item6"> <div style =" font-size: 25px;
           color: #26427C;text-align: justify;">Lấy cảm hứng từ nguồn nguyên liệu trái cây tươi thiên nhiên Việt Nam cùng niềm đam mê mãnh liệt về kem, nhóm bạn trẻ đã cho ra những viên kem đầu tiên mang thương hiệu ITALIO sau chuyến đi dài từ vùng đất Ý, nơi sinh ra dòng kem Gelato tươi, ngon, mát lạnh nổi tiếng trên toàn thế giới…</div>
        <h3 style="font-size: 25px;color: #26427C;">Tại ITALIO, chúng tôi sử dụng nguyên liệu sạch, có nguồn gốc xuất xứ rõ ràng hướng tới một chất lượng sản phẩm từ thiên nhiên, tốt cho sức khoẻ.</h3>
          </div>
          </div>
           <h1 style="color:#0693e3;padding: 170px">SẢN PHẨM CỦA CHÚNG TÔI</h1>
           </div>
           </div>
    `;
}

export default connect()(Content);
