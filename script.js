// โครงสร้างข้อมูลสินค้า
const products = [
    {
        id: "uniqueID1",
        name: "สินค้า A",
        price: 500,
        inStock: 10,
        category: "electronics",
        minStock: 5,
        totalSales: 50
    }
];

// ฟังก์ชันเพิ่มสินค้า
function addProduct(productData) {
    products.push(productData);
    saveToLocalStorage("products", products);
}

// ฟังก์ชันอัพเดทจำนวนสินค้า
function updateStock(productId, quantity) {
    const product = products.find(p => p.id === productId);
    if (product) {
        product.inStock += quantity;
        saveToLocalStorage("products", products);
    }
}

// ตรวจสอบสินค้าที่มีจำนวนน้อยกว่าค่าที่กำหนด
function checkLowStock() {
    return products.filter(p => p.inStock < p.minStock);
}

// รายงานยอดขาย
function generateSalesReport() {
    return products.map(p => ({
        name: p.name,
        totalSales: p.totalSales
    }));
}

// จัดเก็บข้อมูลลง Local Storage
function saveToLocalStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
        console.error("Error saving to localStorage:", error);
    }
}

// ดึงข้อมูลจาก Local Storage
function getFromLocalStorage(key) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error("Error reading from localStorage:", error);
        return null;
    }
}
