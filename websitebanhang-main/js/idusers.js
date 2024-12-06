// Khởi tạo dữ liệu users mẫu
const defaultUsers = [
    // Admin users
    {
        id: "1",
        username: "admin",
        name: "Nguyễn Đỗ Anh",
        email: "nguyendoanh1124@gmail.com",
        password: "1",
        sdt: "0981528588",
        address: "Hoài Đức - Hà Nội",
        role: "admin",
        member_since: '2024-01-01'
    },
    // Regular users
    {
        id: "2", 
        username: "user",
        name: "Trương Thị Linh",
        email: "truongthilinh@gmail.com",
        password: "1",
        sdt: "0389785322",
        address: "Hoài Đức - Hà Nội",
        role: "user",
        member_since: '2024-01-15'
    },
    {
        id: "3",
        username: "usergame",
        name: "Nguyễn Văn A",
        email: "user1@gmail.com",
        password: "123456",
        sdt: "0987654321",
        address: "Cầu Giấy - Hà Nội",
        role: "user",
        member_since: '2024-03-15'
    },
    {
        id: "4", 
        username: "GenzPN",
        name: "Phạm Văn B",
        email: "user2@gmail.com",
        password: "123456",
        sdt: "0123456789",
        address: "Nam Từ Liêm - Hà Nội",
        role: "user",
        member_since: '2024-02-28'
    },
    {
        id: "5",
        username: "Trumm",
        name: "Trần Thị C",
        email: "user3@gmail.com",
        password: "123456",
        sdt: "0369852147",
        address: "Đống Đa - Hà Nội",
        role: "user",
        member_since: '2024-01-23'
    },
    {
        id: "6",
        username: "Decuuu",
        name: "Lê Văn D",
        email: "user4@gmail.com",
        password: "123456",
        sdt: "0147852369",
        address: "Hai Bà Trưng - Hà Nội",
        role: "user",
        member_since: '2024-03-07'
    },
    {
        id: "7",
        username: "Clske",
        name: "Hoàng Thị E",
        email: "user5@gmail.com",
        password: "123456",
        sdt: "0258963147",
        address: "Thanh Xuân - Hà Nội",
        role: "user",
        member_since: '2024-02-14'
    },
    {
        id: "8",
        username: "Peunla",
        name: "Vũ Văn F",
        email: "user6@gmail.com",
        password: "123456",
        sdt: "0321654987",
        address: "Ba Đình - Hà Nội",
        role: "user",
        member_since: '2024-03-21'
    },
    {
        id: "9",
        username: "Acela",
        name: "Đỗ Thị G",
        email: "user7@gmail.com",
        password: "123456",
        sdt: "0741852963",
        address: "Long Biên - Hà Nội",
        role: "user",
        member_since: '2024-01-30'
    },
    {
        id: "10",
        username: "Gisna",
        name: "Ngô Văn H",
        email: "user8@gmail.com",
        password: "123456",
        sdt: "0963852741",
        address: "Hoàng Mai - Hà Nội",
        role: "user",
        member_since: '2024-02-05'
    },
    {
        id: "11",
        username: "Jalfda",
        name: "Bùi Thị I",
        email: "user9@gmail.com",
        password: "123456",
        sdt: "0852963741",
        address: "Tây Hồ - Hà Nội",
        role: "user",
        member_since: '2024-03-01'
    }
];

// Khởi tạo localStorage nếu chưa có
if (!localStorage.getItem('listUser')) {
    localStorage.setItem('listUser', JSON.stringify(defaultUsers));
}

// Hàm lấy danh sách users
function getUsers() {
    return JSON.parse(localStorage.getItem('listUser')) || [];
}

// Hàm tạo ID tự động
function generateUserId() {
    const users = getUsers();
    if (users.length === 0) return "1";
    
    // Chuyển đổi tất cả ID sang số và tìm số lớn nhất
    const maxId = Math.max(...users.map(user => parseInt(user.id)));
    // Trả về ID mới dưới dạng string
    return (maxId + 1).toString();
}

// Hàm thêm user mới
function addUser(userData) {
    const users = getUsers();
    
    // Kiểm tra username và email tồn tại
    if (users.some(user => user.username === userData.username)) {
        throw new Error('Tên đăng nhập đã tồn tại!');
    }
    if (users.some(user => user.email === userData.email)) {
        throw new Error('Email đã được sử dụng!');
    }

    // Tạo user mới với ID dạng string
    const newUser = {
        id: generateUserId(),
        username: userData.username,
        email: userData.email,
        password: userData.password,
        name: userData.name || '',
        sdt: userData.sdt || '',
        address: userData.address || '',
        gender: userData.gender || 'male',
        role: 'user',
        status: 'active',
        member_since: new Date().toISOString().split('T')[0] // Thêm ngày tạo tài khoản
    };

    users.push(newUser);
    localStorage.setItem('listUser', JSON.stringify(users));
    return newUser;
}

// Hàm xác thực đăng nhập
function authenticateUser(identifier, password) {
    const users = getUsers();
    const user = users.find(u => 
        (u.username === identifier || u.email === identifier) && 
        u.password === password
    );
    
    if (!user) {
        console.log('Không tìm thấy user:', identifier);
        return null;
    }
    
    if (user.status === 'blocked') {
        console.log('User bị khóa:', identifier);
        return null;
    }
    
    console.log('Đăng nhập thành công:', user.username);
    return user;
}

// Hàm cập nhật thông tin user
function updateUser(userId, userData) {
    const users = getUsers();
    const index = users.findIndex(user => user.id === userId.toString()); // Đảm bảo so sánh string
    
    if (index === -1) {
        throw new Error('Không tìm thấy người dùng!');
    }

    // Cập nhật thông tin, giữ nguyên id và role
    users[index] = {
        ...users[index],
        ...userData,
        id: users[index].id, // Giữ nguyên ID dạng string
        role: users[index].role,
        member_since: users[index].member_since // Giữ nguyên ngày tạo tài khoản
    };

    localStorage.setItem('listUser', JSON.stringify(users));
    return users[index];
}

// Hàm xóa user
function deleteUser(userId) {
    const users = getUsers();
    const filteredUsers = users.filter(user => user.id !== userId);
    localStorage.setItem('listUser', JSON.stringify(filteredUsers));
}

// Hàm kiểm tra trạng thái tài khoản
function checkUserStatus(userId) {
    const users = getUsers();
    const user = users.find(u => u.id === userId);
    return user ? user.status : null;
}

// Export tất cả các hàm một lần duy nhất
export {
    getUsers,
    addUser,
    updateUser,
    authenticateUser,
    checkUserStatus,
    deleteUser
};
