function calculateTotal() {
    let quantity = parseInt(document.getElementById('quantity').value);
    let pricePerService = 50;
    let total = quantity * pricePerService;

    let discountThreshold = 5;
    let discountRate = 0.10;
    let discountMessage = "";

    if (quantity >= discountThreshold) {
        let discount = total * discountRate;
        total -= discount;
        discountMessage = `🎉 You received a 10% discount! You saved $${discount.toFixed(2)}.`;
    } else {
        discountMessage = `Order ${discountThreshold} or more services for a 10% discount.`;
    }

    document.getElementById('total').innerText = total.toFixed(2);
    document.getElementById('discountMessage').innerText = discountMessage;
}
