document.addEventListener('DOMContentLoaded', () => {
    const priceList = [
        { type: 'Wedding', amount: '$2000' },
        { type: 'Portrait', amount: '$500' },
        { type: 'Event', amount: '$1500' },
    ];

    const priceListElement = document.getElementById('price-list');
    priceList.forEach(price => {
        const listItem = document.createElement('li');
        listItem.textContent = `${price.type}: ${price.amount}`;
        priceListElement.appendChild(listItem);
    });

    const bookingForm = document.getElementById('booking-form');
    bookingForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const date = document.getElementById('date').value;
        const type = document.getElementById('type').value;
        
        alert(`Booking confirmed!\nName: ${name}\nDate: ${date}\nType: ${type}`);
        
        bookingForm.reset();
    });
});
