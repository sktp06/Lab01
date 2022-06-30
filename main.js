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
            varaints: [
                { id: 2234, color: 'green' },
                { id: 2235, color: 'blue' }
            ],
            sizes:['S','M','L'],
            onSale: true
        }
    }
})
