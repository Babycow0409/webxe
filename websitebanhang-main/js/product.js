// Add this function to handle product detail page navigation
function showProductDetail(product) {
    // Lưu sản phẩm hiện tại vào localStorage
    localStorage.setItem('currentProduct', JSON.stringify(product));
    
    // Mở trang chi tiết sản phẩm
    window.location.href = 'product-detail.html';
}

    // Save the detail page to localStorage or create a new page
    localStorage.setItem('currentProductDetail', JSON.stringify(product));
    
    // Open the product detail page
    const detailPageWindow = window.open('', '_blank');
    detailPageWindow.document.write(detailPage);


// Modify existing click events to trigger product details
function attachProductDetailListeners() {
    const productElements = document.querySelectorAll('.proo');
    
    productElements.forEach(element => {
        element.addEventListener('click', function(e) {
            const productData = {
                id: this.getAttribute('data-id'),
                name: this.getAttribute('data-name'),
                img: this.getAttribute('data-img'),
                price: parseFloat(this.getAttribute('data-price')),
            };
            showProductDetails(productData);
        });
    });
}


// Gắn sự kiện cho các sản phẩm
document.querySelectorAll('.product-card, .proo').forEach(element => {
    element.addEventListener('click', function() {
        const product = {
            id: this.getAttribute('data-id') || this.closest('.product-card').getAttribute('data-id'),
            name: this.getAttribute('data-name') || this.querySelector('.product-name').textContent,
            img: this.getAttribute('data-img') || this.querySelector('img').getAttribute('src'),
            price: this.getAttribute('data-price') || this.querySelector('.product-pricing').textContent,
            // Thêm thông tin chi tiết khác nếu cần
        };
        
    });
});
function setProductDetails(name, price, img, details) {
    const product = {
        name: name,
        price: price,
        img: img,
        details: details
    };
    localStorage.setItem('currentProduct', JSON.stringify(product));
}

   var listLocal = function(){
       var listproduct ="";
       for (var i in product){
           var data = JSON.parse(JSON.stringify(product[i]))
        var listproduct = '<div class="col-lg-3 col-md-6 col-sm-6 col-6 mt-3">';
        listproduct += '<div class="card product p-2" styte="width:auto">'; 
        listproduct += '<a ><img  class="proo card-img-top" data-id="'+data.id+'" data-name="'+data.name+'" data-img="'+data.img+'" data-price="'+data.price+'" src="img/' + data.img +'" alt="..."></a>';
        listproduct += '<div class="card-title product-title text-center h5" ><a href="#"  class="proo" data-id="'+data.id+'" data-name="'+data.name+'" data-img="'+data.img+'" data-price="'+data.price+'">'+data.name+'</a></div>';
        listproduct += '<div class="price text-center h6">'+data.price+'₫</div>';
        listproduct +=  '<span class="text-center add-to-cart add-cart btn btn-outline-warning" data-id="'+data.id+'" data-name="'+data.name+'" data-img="'+data.img+'" data-price="'+data.price+'" onclick="tks()">';
        listproduct +=  '<a>';
        listproduct +=  '<i class="fas fa-cart-plus"></i>';
        listproduct +=  '</a>';
        listproduct +=  '</span>';
        listproduct += '</div>';
        listproduct += '</div>';
        document.getElementById("banchay").innerHTML += listproduct;
       }
       Save();
       
   }
   var productAll = JSON.parse(localStorage.getItem('products')).filter(item => item.status == 1);
function searchProducts(mode) {
    let valeSearchInput = document.querySelector('.form-search-input').value;
    let valueCategory = document.getElementById("advanced-search-category-select").value;
    let minPrice = document.getElementById("min-price").value;
    let maxPrice = document.getElementById("max-price").value;
    if(parseInt(minPrice) > parseInt(maxPrice) && minPrice != "" && maxPrice != "") {
        alert("Giá đã nhập sai !");
    }

    let result = valueCategory == "Tất cả" ? productAll : productAll.filter((item) => {
        return item.category == valueCategory;
    });

    result = valeSearchInput == "" ? result : result.filter(item => {
        return item.title.toString().toUpperCase().includes(valeSearchInput.toString().toUpperCase());
    })

    if(minPrice == "" && maxPrice != "") {
        result = result.filter((item) => item.price <= maxPrice);
    } else if (minPrice != "" && maxPrice == "") {
        result = result.filter((item) => item.price >= minPrice);
    } else if(minPrice != "" && maxPrice != "") {
        result = result.filter((item) => item.price <= maxPrice && item.price >= minPrice);
    }

    document.getElementById("home-service").scrollIntoView();
    switch (mode){
        case 0:
            result = JSON.parse(localStorage.getItem('products'));;
            document.querySelector('.form-search-input').value = "";
            document.getElementById("advanced-search-category-select").value = "Tất cả";
            document.getElementById("min-price").value = "";
            document.getElementById("max-price").value = "";
            break;
        case 1:
            result.sort((a,b) => a.price - b.price)
            break;
        case 2:
            result.sort((a,b) => b.price - a.price)
            break;
    }
    showHomeProduct(result)
}

   
   listLocal();


