var product = [];
var pro = [];

function saveproduct() {
    sessionStorage.setItem('shopping', JSON.stringify(pro));
  }
    // Load cart
  function loadproduct() {
    pro = JSON.parse(sessionStorage.getItem('shopping'));
  }
  
  var chuyen = function() {
    pro=[];
    saveproduct();    
    window.location = "index.html";
  };
  $('.proo').click(function(event) {
    event.preventDefault();
    var id = $(this).data('id');
    var name = $(this).data('name');
    var img = $(this).data('img');
    var price = Number($(this).data('price'));
   var item ={
       id,
       name,
       img,
       price
   }
    pro.push(item);
    saveproduct();
   window.location="chitiet.html";    
  });
  
  if (sessionStorage.getItem("shopping") != null) {
    loadproduct();
  }
  
function Save(){
    localStorage.setItem('listProduct',JSON.stringify(product))
}
//lấy sản phẩm 
function load(){
   product = JSON.parse(localStorage.getItem('listProduct'));
} 
//xuất sản phẩm ra html
if (localStorage.getItem("listProduct") != null) {
load();
}
var ProductLocal = function(){
    loadproduct();
    var Cproduct ="";
    var data1 =pro[pro.length-1];
    Cproduct+='<h3>Sản phẩm/'+data1.name+'</h3>';
    Cproduct+='<div class="sanpham">';
    Cproduct+='<div class="hinhanh mt-3">';
    Cproduct+='<img src="img/'+data1.img+'" alt="">';
    Cproduct+='</div>';
    Cproduct+='<div class="content mt-3">';
    Cproduct+='<div class="title">';
    Cproduct+='<span class="title-name h5">'+data1.name+'</span> ';
    Cproduct+='<span class="title-ma">Mã sản phẩm: <b>'+data1.id+'</b> </span> ';
    Cproduct+='<span class="title-trangthai">Còn hàng</span> ';
    Cproduct+='</div> ';
    Cproduct+='<div class="price">'+data1.price+'₫</div>';
    Cproduct+='<button class="btn btn-primary add-to-cart add-cart  themhang"  data-id="'+data1.id+'" data-name="'+data1.name+'" data-img="'+data1.img+'" data-price="'+data1.price+'">Thêm vào giỏ</button>';
    Cproduct+='<div class="content-footer">';
    Cproduct+='<div class="giaohang">';
    Cproduct+='<div><i class="fas fa-truck"></i></div>';
    Cproduct+='<div class="giaohang-content">';
    Cproduct+='<h4>MIỄN PHÍ GIAO HÀNG TOÀN QUỐC</h4>';
    Cproduct+='<p>(Sản phẩm trên 300,000đ)</p>';
    Cproduct+='</div>';      
    Cproduct+='</div>';
    Cproduct+='<div class="giaohang">';
    Cproduct+='<div><i class="fas fa-file-invoice"></i></div>';
    Cproduct+='<div class="giaohang-content">';
    Cproduct+='<h4>ĐỔI TRẢ DỄ DÀNG</h4>';
    Cproduct+='<p>(Đổi trả 24h cho tất cả sản phẩm đầy đủ tem mác)</p>';
    Cproduct+='</div>';
    Cproduct+='</div>';
    Cproduct+='<div class="giaohang">';
    Cproduct+='<div><i class="fas fa-phone-alt"></i></div>';
    Cproduct+='<div class="giaohang-content">';
    Cproduct+='<h4>TỔNG ĐÀI BÁN HÀNG 1800 1162</h4>';
    Cproduct+='<p>(Miễn phí từ 8h30 - 21:30 mỗi ngày)</p>';
    Cproduct+='</div>        ';   
    Cproduct+='</div>';
    Cproduct+='</div>';
    Cproduct+='</div>';
    Cproduct+='</div>';
    document.getElementById("chitiet").innerHTML =Cproduct; 
    }
    ProductLocal();