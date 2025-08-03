function calculateTotal() {
    const quantity = parseInt(document.getElementById('quantity').value);
    const pricePerService = 50;
    let total = quantity * pricePerService;
    let discountMessage = "";

    if (quantity >= 5) {
        const discount = total * 0.10;
        total -= discount;
        discountMessage = `🎉 You qualified for a 10% discount! You saved $${discount.toFixed(2)}.`;
    } else {
        discountMessage = "Order 5 or more services to receive a 10% discount!";
    }

    document.getElementById('total').innerText = total.toFixed(2);
    document.getElementById('discountMessage').innerText = discountMessage;
}
