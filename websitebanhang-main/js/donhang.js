var donhang =[];
function Savedon(){
  localStorage.setItem('listdon',JSON.stringify(donhang))
}
if (localStorage.getItem("listdon") == null) {
  Save();
}
//lấy sản phẩm 
function loaddon(){
donhang = JSON.parse(localStorage.getItem('listdon'));
}
loaddon();
if (localStorage.getItem("listdon") != null) {
    loaddon();
} 
var donhangAdmin = function(){
    var listproduct1 ="";
    for (var i in product){
        var data = JSON.parse(JSON.stringify(donhang[i]))
     var listproduct1 = '<tr>';
      listproduct1+='<td>'+data.id+'</td>';
      listproduct1+='<td>'+data.total+' VNĐ</td>';
      listproduct1+='<td>'+data.user+'</td>';
      listproduct1+='<td>'+data.phone+'</td>';
      listproduct1+='<td>'+data.email+'</td>';
      listproduct1+='<td>'+data.address+'</td>';
      listproduct1+='<td>'+data.trangthai+'</td>';
     //  listproduct1+='';
      listproduct1+='<td><button onclick="updatedonhang('
      +i+')" class="btn btn-outline-danger"  data-toggle="modal" data-target="#updateProduct"><i class="fas fa-cogs"></i></button>';
      // listproduct1+='<button onclick="deleteProduct('
      // +i+')" class="btn ml-1 btn-outline-warning"><i class="fas fa-trash"></i></button></td>';
      listproduct1+='</tr>';  

     document.getElementById("donhang").innerHTML += listproduct1;
    }
    // Save();
    }
    // Xóa sản phẩm 
    var deleteProduct= function (i){
            product.splice(i, 1);
            localStorage.setItem('listProduct',JSON.stringify(product));
            window.location.reload();
    }

    // Sửa sản phẩm 
    var updatedonhang = function(i){
        var k = donhang[i];
        document.getElementById("don-id").value = k.id;
        document.getElementById("don-user").value = k.user;
        document.getElementById("don-phone").value = k.phone;
        document.getElementById("don-email").value = k.email;
        document.getElementById("trangthai").value = k.trangthai;
        document.getElementById("don-address").value = k.address;
        document.getElementById("don-total").value = k.total;

       // document.getElementById("priced").value = k.price;
     document.getElementById("don-id").setAttribute("disabled","disabled");
       document.getElementById("Update").innerHTML = '<button class="btn col-12 btn-outline-danger mt-3" onclick="submitDon('+i+')"> Đồng ý</button>'
    }
    var submitDon = function(i){
        var k = donhang[i];
        k.id=document.getElementById("don-id").value; 
        k.user= document.getElementById("don-user").value;
        k.phone= document.getElementById("don-phone").value;
        k.email=document.getElementById("don-email").value;
        k.trangthai=document.getElementById("trangthai").value;
        k.address=document.getElementById("don-address").value;
        k.total=document.getElementById("don-total").value;
        // document.getElementById("idd").setAttribute("disabled","disabled");
        localStorage.setItem('listdon',JSON.stringify(donhang));
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
        var options = function(){
          var optionselect = "";
        }
        donhangAdmin();
    userAdmin();
