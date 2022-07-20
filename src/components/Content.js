import html from "../core.js";
import { connect } from "../store.js";
import Product from "./Navbar/Product.js";

function Content(props) {
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
            ${props && props.products && props.products.map(p => Product(p))}
            <p> về chúng tôi</p>
            <h1 style="color:#0693e3;"> italio - Công Ty Sản Xuất Kem Ý Gelato </h1>
            ${imgs_gt.map(src => html`<img src=${src} width="450" height="450"></img>`)}
            ${props && props.productionIntroduce && props.productionIntroduce.map(p =>productionIntroduce(p))}
            
            <h3  style ="
            padding: 10px;
            width: 350px;
            height: 350px;
            text-align: justify;">
            Với triết lí, chất lượng sản phẩm là linh hồn của thương hiệu.
            ITALIO luôn giữ vững và ngày
            càng phát triển thêm nhiều hương vị,
            đa dạng sự lựa chọn cho thực khách, mong muốn
            mang những viên kem ngon,bổ dưỡng tới tất cả 
           các cửa hàng trên toàn quốc, để mỗi ly kem đưa
           tới khách hàng là những ly kem ý gelato chất lượng tuyệt hảo !<h3>
        </div>
        </div>
    `;
}

export default connect()(Content);
