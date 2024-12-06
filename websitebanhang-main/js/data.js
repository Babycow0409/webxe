var product = [
{
    id :1,
    name : "Set công sở nữ",
    img : "img/aonu1.jpg",
    price : 690000,
    male :0,
},
{
    id :2,
    name : "Sơ mi nữ màu yellow",
    img : "img/aonu2.jpg",
    price : 20000,
    male :0,
},
{
    id :3,
    name : "Set đồ nữ",
    img : "img/aonu3.jfif",
    price : 120000,
    male :0,
},
{
    id :4,
    name : "Áo sơ mi công sở",
    img : "img/aonu5.jfif",
    price : 250000,
    male :0,
},
{
    id :5,
    name : "Set đồ màu hồng cánh sen ",
    img : "img/aonu6.jpg",
    price : 299000,
    male :0,
},
{
    id :6,
    name : "Váy cute ",
    img : "img/aonu7.jpg",
    price : 400000,
    male :0,
},
{
    id :7,
    name : "Váy dạo phố",
    img : "img/vay.jpg",
    price : 122000,
    male :0,
},
{
    id :8,
    name : "Áo sơ mi trắng",
    img : "img/aosomi.webp",
    price : 199000,
    male :0,
},
{
    id :9,
    name : "Áo khoác da - chính hãng",
    img : "img/aonam1.jpg",
    price : 899000,
    male :1,
},
{
    id :10,
    name : "Áo khoác nam kaki",
    img : "img/aonam2.jpg",
    price : 199000,
    male :1,
},
{
    id :11,
    name : "Áo Vest nam",
    img : "img/aonam3.jpg",
    price : 499000,
    male :1,
},
{
    id :12,
    name : "Áo Khoác nam màu đen",
    img : "img/aonam4.jpg",
    price : 299000,
    male :1,
},
{
    id :13,
    name : "Set lính không quân",
    img : "img/aonam5.jfif",
    price : 350000,
    male :1,
},
{
    id :14,
    name : "Set vest nam 1 ",
    img : "img/aonam6.jpg",
    price : 1499000,
    male :1,
},
{
    id :15,
    name : "Set vest nam 2",
    img : "img/aonam7.jpg",
    price : 1299000,
    male :1,
},
{
    id :16,
    name : "Set Sherlock Holmes",
    img : "img/aonam8.jpg",
    price : 490000,
    male :1,
},



];


function displayProduct() {
    for (let i = 0; i <= product.length - 1; i++) {
        if (product[i].male == 1) {
        var listproduct = '<div class="col-lg-3 col-md-6 col-sm-6 col-6">';
	        listproduct += '<div class="card product" styte="width:auto">'; 
	        listproduct += '<img class="card-img-top" src="' + product[i].img +'" alt="...">';
            listproduct += '<div class="card-title product-title text-center h5" >'+product[i].name+'</div>';
            listproduct += '<span class="price text-center h6">'+product[i].price+'₫</span>';
            listproduct +=  '<span class="text-center add-to-cart btn btn-outline-warning add-cart" data-id="'+product[i].id+'" data-name="'+product[i].name+'" data-img="'+product[i].img+'" data-price="'+product[i].price+'" onclick="tks()">';
            // listproduct +=  '<a class=" add-to-cart btn" data-name="'+product[i].name+'" data-price="'+product[i].price+'" onclick="tks()">';
            listproduct +=  '<a>';
            listproduct +=  '<i class="fas fa-cart-plus"></i>';
            listproduct +=  '</a>';
            listproduct +=  '</span>';
	        listproduct += '</div>';
	        listproduct += '</div>';

	        document.getElementById("man").innerHTML += listproduct;
        }
        else 
        {
            var listproduct = '<div class="col-lg-3 col-md-6 col-sm-6 col-6">';
	        listproduct += '<div class="card product" styte="width:auto">'; 
	        listproduct += '<img class="card-img-top" src="' + product[i].img +'" alt="...">';
            listproduct += '<div class="card-title product-title text-center h5" >'+product[i].name+'</div>';
            listproduct += '<span class="price text-center h6">'+product[i].price+'₫</span>';
            listproduct +=  '<span class="text-center add-to-cart btn btn-outline-warning add-cart" data-id="'+product[i].id+'" data-name="'+product[i].name+'" data-img="'+product[i].img+'" data-price="'+product[i].price+'" onclick="tks()">';
            // listproduct +=  '<a class=" add-to-cart btn" data-name="'+product[i].name+'" data-price="'+product[i].price+'" onclick="tks()">';
            listproduct +=  '<a>';
            listproduct +=  '<i class="fas fa-cart-plus"></i>';
            listproduct +=  '</a>';
            listproduct +=  '</span>';
	        listproduct += '</div>';
	        listproduct += '</div>';

	        document.getElementById("women").innerHTML += listproduct;

	       
        }
    }
}
displayProduct();