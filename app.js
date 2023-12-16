document.addEventListener('alpine:init', () => {
    Alpine.data('menu', () => ({
        items: [
            {id: 1, name: 'Thai Tea', img: 'thai-tea.png', price: 8000},
            {id: 2, name: 'Milo', img: '2.png', price: 8000},
            {id: 3, name: 'Green Tea', img: '3.png', price: 8000},
            {id: 4, name: 'Ovaltine', img: '4.png', price: 8000},
            {id: 5, name: 'Danco Vanilla', img: '5.png', price: 8000},
            {id: 6, name: 'Vanilla Latte', img: '6.png', price: 8000},
            {id: 7, name: 'Strawberry Yakult', img: '7.png', price: 8000},
            {id: 8, name: 'Taro', img: '8.png', price: 8000},
        ], 
    }));

    Alpine.store('cart', {
     items: [],
     total: 0,
     quantity: 0,
     add(newItem) {
      onsole.log(newItem);
     },
    });
});

// konversi ke rupiah
const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(number);
};