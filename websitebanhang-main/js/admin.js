var product = [];

// đẩy mảng product vào local
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
var productAdmin = function(){
    var listproduct1 ="";
    for (var i in product){
        var data = JSON.parse(JSON.stringify(product[i]))
     var listproduct1 = '<tr>';
      listproduct1+='<td>'+data.id+'</td>';
      listproduct1+='<td>'+data.name+'</td>';
      listproduct1+='<td><img src="../img/'+data.img+'" alt="" style="width: 50px;"></td>';
      listproduct1+='<td>'+data.price+'</td>';
     //  listproduct1+='';
      listproduct1+='<td><button onclick="updateProduct('
      +i+')" class="btn btn-outline-danger"  data-toggle="modal" data-target="#updateProduct"><i class="fas fa-cogs"></i></button>';
      listproduct1+='<button onclick="deleteProduct('
      +i+')" class="btn ml-1 btn-outline-warning"><i class="fas fa-trash"></i></button></td>';
      listproduct1+='</tr>';  

     document.getElementById("product-admin").innerHTML += listproduct1;
    }
    // Save();
    }

var addProduct = function(){
    var Product = {
        id :"SP"+parseInt( product.length+1),
        name : document.getElementById("name").value,
        img : document.getElementById("img").value,
        price : document.getElementById("price").value
    }
        product.push(Product);
        localStorage.setItem('listProduct',JSON.stringify(product));
        window.location.reload();
    }

    // Xóa sản phẩm 
    var deleteProduct= function (i){
            product.splice(i, 1);
            localStorage.setItem('listProduct',JSON.stringify(product));
            window.location.reload();
    }

    // Sửa sản phẩm 
    var updateProduct = function(i){
        var k = product[i];
        document.getElementById("idd").value = k.id;
        document.getElementById("named").value = k.name;
        document.getElementById("imgd").value = k.img;
        document.getElementById("priced").value = k.price;
        document.getElementById("idd").setAttribute("disabled","disabled");
        document.getElementById("submitUpdate").innerHTML = '<button class="btn btn-outline-danger mt-3" onclick="submitUpdate('+i+')"> Đồng ý</button>'
    }
    var submitUpdate = function(i){
        var k = product[i];
        k.id= document.getElementById("idd").value;
        k.name= document.getElementById("named").value;
        k.img= document.getElementById("imgd").value;
        k.price= document.getElementById("priced").value;
        // document.getElementById("idd").setAttribute("disabled","disabled");
        localStorage.setItem('listProduct',JSON.stringify(product));
        window.location.reload();
    }

    var userAdmin = function(){
        var listproduct ="";
        for (var i in user){
            var data = JSON.parse(JSON.stringify(user[i]))
         var listproduct = '<tr>';
          listproduct+='<td>'+data.id+'</td>';
          listproduct+='<td>'+data.username+'</td>';
        //   listproduct+='<td><img src="../img/'+data.img+'" alt="" style="width: 50px;"></td>';
          listproduct+='<td>'+data.email+'</td>';
         //  listproduct1+='';
          listproduct+='<td><button onclick="updateProduct('
          +i+')" class="btn btn-outline-danger"  data-toggle="modal" data-target="#updateProduct"><i class="fas fa-cogs"></i></button>';
          listproduct+='<button onclick="deleteProduct('
          +i+')" class="btn ml-1 btn-outline-warning"><i class="fas fa-trash"></i></button></td>';
          listproduct+='</tr>';  
    
         document.getElementById("user-admin").innerHTML += listproduct;
        }
        // Save();
        }
        $(document).ready(function() {
            $('#filterForm').on('submit', function(e) {
                e.preventDefault();
        
                var brand = $('#brand').val();
                var car = $('#car').val();
                var minPrice = $('#minPrice').val();
                var maxPrice = $('#maxPrice').val();
        
                // Gọi hàm để lọc sản phẩm
                filterProducts(brand, car, minPrice, maxPrice);
            });
        
            function filterProducts(brand, car, minPrice, maxPrice) {
                // Logic để lọc sản phẩm dựa trên các tiêu chí
                // Bạn có thể sử dụng AJAX để lấy dữ liệu từ server hoặc lọc trên trang
                // Sau đó cập nhật danh sách sản phẩm hiển thị
            }
        });
        function paginateProducts(products, currentPage, itemsPerPage) {
            var startIndex = (currentPage - 1) * itemsPerPage;
            var endIndex = startIndex + itemsPerPage;
            return products.slice(startIndex, endIndex);
        }
        
    productAdmin();
    userAdmin();
