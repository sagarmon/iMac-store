// 8GB unified memory function
document.getElementById('8gb-unified-memory').addEventListener('click', function () {
    // get extra memory cost
    let extraMemoryCost = document.getElementById('extra-memory-cost');
    let extraMemoryCostValue = extraMemoryCost.innerText;
    let extraMemoryCostValueInt = parseInt(extraMemoryCostValue);
    extraMemoryCost.innerText = 0;

    // get total price
    let totalPrice = document.getElementById('total-price');
    let totalPriceValue = totalPrice.innerText;
    let totalPriceValueInt = parseInt(totalPriceValue);

    if (extraMemoryCostValueInt == 180) {
        totalPrice.innerText = totalPriceValueInt - 180;

        let grandTotal = document.getElementById('grand-total');
        grandTotal.innerText = totalPriceValueInt - 180;
    }

    document.getElementById("8gb-unified-memory").disabled = true;
    document.getElementById("16gb-unified-memory").disabled = false;
})

// 16GB unified memory function
document.getElementById('16gb-unified-memory').addEventListener('click', function () {
    // get extra memory cost
    let extraMemoryCost = document.getElementById('extra-memory-cost');
    let extraMemoryCostValue = extraMemoryCost.innerText;
    let extraMemoryCostValueInt = parseInt(extraMemoryCostValue);
    extraMemoryCost.innerText = 180;

    // get total price
    let totalPrice = document.getElementById('total-price');
    let totalPriceValue = totalPrice.innerText;
    let totalPriceValueInt = parseInt(totalPriceValue);

    if (extraMemoryCostValueInt == 0) {
        totalPrice.innerText = totalPriceValueInt + 180;

        let grandTotal = document.getElementById('grand-total');
        grandTotal.innerText = totalPriceValueInt + 180;
    }


    document.getElementById("16gb-unified-memory").disabled = true;
    document.getElementById("8gb-unified-memory").disabled = false;
})

// 256GB SSD function
document.getElementById('256gb-ssd-storage').addEventListener('click', function () {
    let extraStorageCost = document.getElementById('extra-storage-cost');
    let extraStorageCostValue = extraStorageCost.innerText;
    let extraStorageCostValueInt = parseInt(extraStorageCostValue);
    extraStorageCost.innerText = 0;

    // get total price
    let totalPrice = document.getElementById('total-price');
    let totalPriceValue = totalPrice.innerText;
    let totalPriceValueInt = parseInt(totalPriceValue);

    if (extraStorageCostValueInt == 100) {
        totalPrice.innerText = totalPriceValueInt - 100;

        let grandTotal = document.getElementById('grand-total');
        grandTotal.innerText = totalPriceValueInt - 100;
    }

    if (extraStorageCostValueInt == 180) {
        totalPrice.innerText = totalPriceValueInt - 180;
    }

    document.getElementById("256gb-ssd-storage").disabled = true;
    document.getElementById("512gb-ssd-storage").disabled = false;
    document.getElementById("1tb-ssd-storage").disabled = false;
})

// 512GB SSD function
document.getElementById('512gb-ssd-storage').addEventListener('click', function () {
    let extraStorageCost = document.getElementById('extra-storage-cost');
    let extraStorageCostValue = extraStorageCost.innerText;
    let extraStorageCostValueInt = parseInt(extraStorageCostValue);
    extraStorageCost.innerText = 100;

    // get total price
    let totalPrice = document.getElementById('total-price');
    let totalPriceValue = totalPrice.innerText;
    let totalPriceValueInt = parseInt(totalPriceValue);

    if (extraStorageCostValueInt == 0) {
        totalPrice.innerText = totalPriceValueInt + 100;

        let grandTotal = document.getElementById('grand-total');
        grandTotal.innerText = totalPriceValueInt + 100;
    }

    if (extraStorageCostValueInt == 180) {
        totalPrice.innerText = totalPriceValueInt - 80;

        let grandTotal = document.getElementById('grand-total');
        grandTotal.innerText = totalPriceValueInt - 80;
    }



    document.getElementById("256gb-ssd-storage").disabled = false;
    document.getElementById("512gb-ssd-storage").disabled = true;
    document.getElementById("1tb-ssd-storage").disabled = false;
})

// 1TB SSD function
document.getElementById('1tb-ssd-storage').addEventListener('click', function () {
    let extraStorageCost = document.getElementById('extra-storage-cost');
    let extraStorageCostValue = extraStorageCost.innerText;
    let extraStorageCostValueInt = parseInt(extraStorageCostValue);
    extraStorageCost.innerText = 180;

    // get total price
    let totalPrice = document.getElementById('total-price');
    let totalPriceValue = totalPrice.innerText;
    let totalPriceValueInt = parseInt(totalPriceValue);

    if (extraStorageCostValueInt == 0) {
        totalPrice.innerText = totalPriceValueInt + 180;

        let grandTotal = document.getElementById('grand-total');
        grandTotal.innerText = totalPriceValueInt + 180;
    }

    if (extraStorageCostValueInt == 100) {
        totalPrice.innerText = totalPriceValueInt + 80;

        let grandTotal = document.getElementById('grand-total');
        grandTotal.innerText = totalPriceValueInt + 80;
    }

    document.getElementById("256gb-ssd-storage").disabled = false;
    document.getElementById("512gb-ssd-storage").disabled = false;
    document.getElementById("1tb-ssd-storage").disabled = true;
})

// Free Delivery function
document.getElementById('delivery-free').addEventListener('click', function () {
    let deliveryCharge = document.getElementById('delivery-charge');
    let deliveryChargeValue = deliveryCharge.innerText;
    let deliveryChargeValueInt = parseInt(deliveryChargeValue);

    deliveryCharge.innerText = 0;

    // get total price
    let totalPrice = document.getElementById('total-price');
    let totalPriceValue = totalPrice.innerText;
    let totalPriceValueInt = parseInt(totalPriceValue);

    if (deliveryChargeValueInt == 20) {
        totalPrice.innerText = totalPriceValueInt - 20;

        let grandTotal = document.getElementById('grand-total');
        grandTotal.innerText = totalPriceValueInt - 20;
    }

    document.getElementById("delivery-free").disabled = true;
    document.getElementById("delivery-urgent").disabled = false;
})

// Urgent Delivery function
document.getElementById('delivery-urgent').addEventListener('click', function () {
    let deliveryCharge = document.getElementById('delivery-charge');
    let deliveryChargeValue = deliveryCharge.innerText;
    let deliveryChargeValueInt = parseInt(deliveryChargeValue);

    deliveryCharge.innerText = 20;

    // get total price
    let totalPrice = document.getElementById('total-price');
    let totalPriceValue = totalPrice.innerText;
    let totalPriceValueInt = parseInt(totalPriceValue);

    if (deliveryChargeValueInt == 0) {
        totalPrice.innerText = totalPriceValueInt + 20;

        let grandTotal = document.getElementById('grand-total');
        grandTotal.innerText = totalPriceValueInt + 20;
    }

    document.getElementById("delivery-free").disabled = false;
    document.getElementById("delivery-urgent").disabled = true;
})

// Promo Code function
document.getElementById('apply-button').addEventListener('click', function () {
    let inputField = document.getElementById('promo-input');
    let inputFieldText = inputField.value;

    // check if promo code is correct
    if (inputFieldText == 'stevekaku') {
        // get grand total
        let grandTotal = document.getElementById('grand-total');
        let grandTotalText = grandTotal.innerText;
        let grandTotalInt = parseInt(grandTotalText);

        // get total price and apply 20% discout using promo code
        let totalPrice = document.getElementById('total-price');
        let totalPriceValue = totalPrice.innerText;
        let totalPriceValueInt = parseInt(totalPriceValue);

        grandTotalInt = totalPriceValueInt * 0.8;
        grandTotal.innerText = grandTotalInt;
        document.getElementById('wrong-promo-info').innerText = "";
    }
    else {
        document.getElementById('wrong-promo-info').innerText = "Promo code is invalid!";
    }
})