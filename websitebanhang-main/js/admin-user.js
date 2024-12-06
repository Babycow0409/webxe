var userAdmin = function(){
    var listproduct ="";
    for (var i in user){
        var data = JSON.parse(JSON.stringify(user[i]))
     var listproduct = '<tr>';
      listproduct+='<td>'+data.id+'</td>';
      listproduct+='<td>'+data.username+'</td>';
      listproduct+='<td>'+data.name+'</td>';
      listproduct+='<td>'+data.sdt+'</td>';
    //   listproduct+='<td><img src="../img/'+data.img+'" alt="" style="width: 50px;"></td>';
      listproduct+='<td>'+data.email+'</td>';
      listproduct+='<td>'+data.address+'</td>';
      listproduct+='<td>'+data.role+'</td>';
     //  listproduct1+='';
      listproduct+='<td><button onclick="updateUser('
      +i+')" class="btn btn-outline-danger"  data-toggle="modal" data-target="#updateProduct"><i class="fas fa-cogs"></i></button>';
      listproduct+='<button onclick="deleteUser('
      +i+')" class="btn ml-1 btn-outline-warning"><i class="fas fa-trash"></i></button></td>';
      listproduct+='</tr>';  

     document.getElementById("user-admin").innerHTML += listproduct;
    }
    // Save();
    }
    loadUser();

var addUser = function(){
    var User = {
        id :"USER"+ parseInt(user.length+1),
        username : document.getElementById("username").value,
        name : document.getElementById("name").value,
        password : document.getElementById("password").value,
        sdt : document.getElementById("sdt").value,
        email : document.getElementById("email").value,
        address : document.getElementById("address").value,
        role : document.getElementById("role").value,
    }
        user.push(User);
        localStorage.setItem('listUser',JSON.stringify(user));
        // Save();
     window.location.reload();
    }

    // Xóa Người dùng
    var deleteUser= function (i){
        if (user[i].role != "admin"){
            user.splice(i, 1);
            localStorage.setItem('listUser',JSON.stringify(user));
            window.location.reload();
        }
        if (user[i].role == "admin") {
            alert("không thể xóa tài khoản admin");
        }
    }


    var updateUser = function(i){
        var k = user[i];
        document.getElementById("id").value=k.id,
        document.getElementById("username1").value = k.username,
        document.getElementById("name1").value  = k.name,
        document.getElementById("password1").value = k.password,
        document.getElementById("sdt1").value = k.sdt,
         document.getElementById("email1").value = k .email,
        document.getElementById("address1").value = k.address,
        document.getElementById("role1").value = k.role,
        document.getElementById("id").setAttribute("disabled","disabled");
        document.getElementById("Update").innerHTML = '<button class="btn btn-outline-danger mt-3" onclick="update('+i+')"> Đồng ý</button>'
    }
    var update = function(i){
        alert("Thành công");
        var k = user[i];
        k.id = k.id,
        k.username= document.getElementById("username1").value,
        k.name = document.getElementById("name1").value,
        k.password = document.getElementById("password1").value ,
        k.sdt = document.getElementById("sdt1").value ,
        k.email = document.getElementById("email1").value ,
        k.address = document.getElementById("address1").value ,
        k.role = document.getElementById("role1").value,
        localStorage.setItem('listUser',JSON.stringify(user));
        window.location.reload();
    }

   
    // productAdmin();
    userAdmin();
