// File: js/cart.js
class Cart {
    constructor() {
        // Khởi tạo giỏ hàng từ localStorage
        this.items = JSON.parse(localStorage.getItem('cartItems')) || [];
    }

    // Thêm sản phẩm vào giỏ hàng
    addToCart(product) {
        // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
        const existingProduct = this.items.find(item => item.id === product.id);
        
        if (existingProduct) {
            // Nếu sản phẩm đã tồn tại, tăng số lượng
            existingProduct.quantity += 1;
        } else {
            // Nếu chưa tồn tại, thêm mới
            this.items.push({
                ...product,
                quantity: 1
            });
        }

        // Lưu vào localStorage
        this.saveToLocalStorage();
        
        // Cập nhật giao diện giỏ hàng
        this.updateCartUI();
        
        // Thông báo thêm giỏ hàng thành công
        this.showNotification(`Đã thêm ${product.name} vào giỏ hàng`);
    }

    // Xóa sản phẩm khỏi giỏ hàng
    removeFromCart(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.saveToLocalStorage();
        this.updateCartUI();
    }

    // Thay đổi số lượng sản phẩm
    updateQuantity(productId, quantity) {
        const product = this.items.find(item => item.id === productId);
        if (product) {
            product.quantity = quantity;
            this.saveToLocalStorage();
            this.updateCartUI();
        }
    }

    // Lưu giỏ hàng vào localStorage
    saveToLocalStorage() {
        localStorage.setItem('cartItems', JSON.stringify(this.items));
    }

    // Cập nhật giao diện giỏ hàng
    updateCartUI() {
        const cartCountElement = document.querySelector('.cart-count');
        const cartTotalElement = document.querySelector('.cart-total');
        
        // Tính tổng số lượng và tổng tiền
        const totalQuantity = this.items.reduce((total, item) => total + item.quantity, 0);
        const totalPrice = this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
        
        // Cập nhật số lượng sản phẩm trên icon giỏ hàng
        if (cartCountElement) {
            cartCountElement.textContent = totalQuantity;
        }
        
        // Hiển thị tổng tiền (nếu có)
        if (cartTotalElement) {
            cartTotalElement.textContent = this.formatCurrency(totalPrice);
        }
    }

    // Hiển thị chi tiết giỏ hàng
    showCartDetails() {
        const cartDetailsModal = `
        <div class="modal fade" id="cartDetailsModal" tabindex="-1">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Giỏ Hàng Của Bạn</h5>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body" id="cartItemsList">
                        ${this.generateCartItemsHTML()}
                    </div>
                    <div class="modal-footer">
                        <div class="cart-summary">
                            <strong>Tổng Cộng: <span class="cart-total">${this.calculateTotal()}</span></strong>
                        </div>
                        <button class="btn btn-primary" onclick="cart.checkout()">Thanh Toán</button>
                    </div>
                </div>
            </div>
        </div>
        `;

        // Thêm modal vào body nếu chưa tồn tại
        if (!document.getElementById('cartDetailsModal')) {
            document.body.insertAdjacentHTML('beforeend', cartDetailsModal);
        }

        // Hiển thị modal
        $('#cartDetailsModal').modal('show');
    }

    // Tạo HTML cho các sản phẩm trong giỏ hàng
    generateCartItemsHTML() {
        if (this.items.length === 0) {
            return `<p class="text-center">Giỏ hàng của bạn đang trống</p>`;
        }

        return this.items.map(item => `
            <div class="cart-item row mb-3 align-items-center">
                <div class="col-md-2">
                    <img src="${item.image}" class="img-fluid" alt="${item.name}">
                </div>
                <div class="col-md-4">
                    <h6>${item.name}</h6>
                </div>
                <div class="col-md-2">
                    <input type="number" class="form-control" 
                           value="${item.quantity}" 
                           min="1" 
                           onchange="cart.updateQuantity('${item.id}', this.value)">
                </div>
                <div class="col-md-2">
                    ${this.formatCurrency(item.price * item.quantity)}
                </div>
                <div class="col-md-2">
                    <button class="btn btn-danger" onclick="cart.removeFromCart('${item.id}')">Xóa</button>
                </div>
            </div>
        `).join('');
    }

    // Tính tổng tiền
    calculateTotal() {
        const total = this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        return this.formatCurrency(total);
    }

    // Định dạng tiền tệ
    formatCurrency(amount) {
        return new Intl.NumberFormat('vi-VN', { 
            style: 'currency', 
            currency: 'VND' 
        }).format(amount);
    }

    // Hiển thị thông báo
    showNotification(message) {
        // Tạo phần tử thông báo
        const notification = document.createElement('div');
        notification.className = 'alert alert-success fixed-top text-center';
        notification.style.zIndex = '9999';
        notification.textContent = message;
        
        // Thêm vào body
        document.body.appendChild(notification);
        
        // Tự động ẩn sau 3 giây
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    // Thanh toán
    checkout() {
        alert('Chức năng thanh toán đang được phát triển');
        // Có thể mở form thanh toán hoặc chuyển hướng
    }
}

// Khởi tạo giỏ hàng
const cart = new Cart();

// Sự kiện khi trang tải xong
document.addEventListener('DOMContentLoaded', () => {
    // Cập nhật UI giỏ hàng khi trang tải
    cart.updateCartUI();

    // Thêm sự kiện cho các nút "Thêm vào giỏ hàng"
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            const productElement = e.target.closest('.product-card');
            const product = {
                id: productElement.dataset.productId,
                name: productElement.querySelector('.card-title').textContent,
                price: parseFloat(productElement.querySelector('.product-price').dataset.price),
                image: productElement.querySelector('.card-img-top').src,
                quantity: 1
            };
            cart.addToCart(product);
        });
    });

    // Sự kiện hiển thị giỏ hàng
    document.querySelector('.cart a').addEventListener('click', (e) => {
        e.preventDefault();
        cart.showCartDetails();
    });
});