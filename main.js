const product = 'Socks'
const app = Vue.createApp({
    data() {
        return {
            product: 'Boots',
            description: 'A boot is a type of footwear. Some boots extend up the leg, sometimes as far as the knee or even the hip.',
            image: './assets/images/socks_green.jpg',
            link: 'http://www.camt.cmu.ac.th',
            
            product: 'Shoes',
            image: './assets/images/socks_green.jpg',
            inStock: true,
            inventory: 100,
            details: ['50% cotton','30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image:'./assets/images/socks_green.jpg' },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' }
            ],
            sizes:['S','M','L'],
            onSale: true,
            cart: 0, 
        }
    },
    methods: {
        addToCart() {
            this.cart +=1
        },
        updateImage(variantImage){
            this.image = variantImage
        },
        changeStatus() {
            this.count += 1
            if(this.count%2 !== 0){
                this.inventory = 0
            }
            else if(this.count%2 === 0) {
                this.inventory = 100
            }

        }
    }
})
