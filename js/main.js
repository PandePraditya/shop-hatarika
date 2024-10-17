const appMain = new Vue({
    el: '#appSale',
    data: {
        sizes: ["37", "38", "39", "40"],
        qty: 0,
        cart: [], // add to cart
        selectSize: [],
        selectPackage: [],
        customSize: '',
        totalPrice: 0,
        packagings: ["Normal", "Bubble Wrap", "Kotak Kayu"],
        specifications: [
            "10 Oz canvas upper material", 
            "Canvas lining material", 
            "Polyester flat laces", 
            "Rubber foxing and outsole", 
            "Custom woven label",
        ],
        sizeCharts: [
            "US 5 / UK 4 / EUR 36 / JP 24", 
            "US 6.5 / UK 5.5 / EUR 38 / JP 24", 
            "US 7 / UK 6 / EUR 39 / JP 25.8", 
            "US 8 / UK 7 / EUR 40 / JP 26", 
            "US 8 / UK 7 / EUR 41 / JP 26.3", 
            "US 11 / UK 10.5 / EUR 45 / JP 29.5",
        ],
        // imgSrc = item, index = array per masing masing produk
        productSale: [
            {
                imgSrc: 'images/sale/blue-sneaker.jpg',
                altText: 'Blue Sneaker',
                name: 'Blue Sneaker',
                originalPrice: 'Rp. 200.000',
                salePrice: 100000,
            },
            {
                imgSrc: 'images/sale/black-pantofel.jpg',
                altText: 'Black Pantofel',
                name: 'Black Pantofel',
                originalPrice: 'Rp. 250.000',
                salePrice: 150000,
            },
            {
                imgSrc: 'images/sale/green-sneaker.jpg',
                altText: 'Green Sneaker',
                name: 'Green Sneaker',
                originalPrice: 'Rp. 220.000',
                salePrice: 120000,
            },
            {
                imgSrc: 'images/sale/red-sandals.jpg',
                altText: 'Red Sandals',
                name: 'Red Sandals',
                originalPrice: 'Rp. 180.000',
                salePrice: 90000,
            },
            {
                imgSrc: 'images/sale/white-sneaker.jpg',
                altText: 'White Sneaker',
                name: 'White Sneaker',
                originalPrice: 'Rp. 300.000',
                salePrice: 200.000,
            },
            {
                imgSrc: 'images/sale/choco-pantofel.jpg',
                altText: 'Choco Pantofel',
                name: 'Choco Pantofel',
                originalPrice: 'Rp. 300.000',
                salePrice: 200000,
            },
        ],
        showModal: false,
        showCart: false,
        selectProduct: null,
    },
    // hanya untuk development, hapus atau comment jika sudah jadi
    // created() {
    //     // Initialize the modal with the first product
    //     this.selectProduct = this.productSale[1];
    //     this.showModal = true; // Set this to true if you want to show the modal initially
    // },
    methods: {
        // Modal Product
        openModal(product) {
            this.selectProduct = product;
            this.showModal = true;
            document.body.style.overflow = 'hidden';
        },
        closeModal() {
            this.showModal = false;
            this.selectProduct = null;
            document.body.style.overflow = '';
        },
        // Quantity
        qty_plus() {
            this.qty++;
        },
        qty_minus() {
            if (this.qty > 0) {
                this.qty--;
            }
        },
        addToCart() {
            if (this.selectProduct) {
                this.cart.push({
                    imgSrc: this.selectProduct.imgSrc,
                    altText: this.selectProduct.altText,
                    name: this.selectProduct.name,
                    salePrice: this.selectProduct.salePrice * this.qty,
                    size: this.selectSize,
                    packaging: this.selectPackage,
                    info: this.customSize,
                    totalPrice: this.totalPrice += this.selectProduct.salePrice * this.qty,
                    qty: this.qty
                });
            }
        },
        openCart() {
            this.showCart = true;
        },
        closeCart() {
            this.showCart = false;
        },
        clearCart() {
            this.cart = [];
        },
        buyNow() {
            window.location.href = "https://wa.me/62895805000702?text=Hallo%2C%20Saya%20ingin%20memesan%20%0AProduk%3A%20" 
                                    + this.selectProduct.name + "%0AVariant%3A%20" + this.selectSize +
                                    "%0AJumlah%3A%20" + this.qty + "%0A%0ATerimakasih"
        },
    },
});