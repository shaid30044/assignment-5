function getItemById(itemName) {
    const productName = document.getElementById(itemName);
    const productNameText = productName.innerText;
    console.log(productNameText);

    const purchaseItems = document.getElementById('purchase-items');
    const countItems = purchaseItems.childElementCount;
    const p = document.createElement('p');
    p.innerText = countItems + 1 + '.' + ' ' + productNameText;
    purchaseItems.appendChild(p);
}

function getItemPriceById(itemPrice) {
    const productPriceValue = document.getElementById(itemPrice);
    const productPriceString = productPriceValue.innerText;
    const productPrice = parseFloat(productPriceString);
    console.log(productPrice);

    const totalPriceValue = document.getElementById('total-price');
    const totalPriceString = totalPriceValue.innerText;
    const totalPrice = parseFloat(totalPriceString);
    console.log(totalPrice);

    const newTotalPrice = productPrice + totalPrice;
    console.log(newTotalPrice);

    totalPriceValue.innerText = newTotalPrice.toFixed(2);

    const discountValue = document.getElementById('discount');
    const discountString = discountValue.innerText;
    const discount = parseFloat(discountString);


    const totalValue = document.getElementById('total');
    const totalString = totalValue.innerText;
    const total = parseFloat(totalString);

    const totalPriceAfterDiscount = newTotalPrice - discount;
    totalValue.innerText = totalPriceAfterDiscount.toFixed(2);

    const purchaseBtn = document.getElementById('purchase-btn');

    if (newTotalPrice > 0) {
        purchaseBtn.disabled = false;
    }

    const couponField = document.getElementById('coupon-field');
    const couponBtn = document.getElementById('coupon-btn');

    if (newTotalPrice >= 200) {
        couponField.disabled = false;
        couponBtn.disabled = false;

        couponBtn.addEventListener('click', function () {
            if (couponField.value === 'SELL200') {
                const totalDiscount = newTotalPrice * 0.2;
                discountValue.innerText = totalDiscount.toFixed(2);

                const totalPayablePrice = newTotalPrice - totalDiscount;
                totalValue.innerText = totalPayablePrice.toFixed(2);
            } else {
                totalValue.innerText = newTotalPrice.toFixed(2);
            }
        })
    }

    document.getElementById('home-btn').addEventListener('click', function() {
        totalPriceValue.innerText = '0.00';
        totalValue.innerText = '0.00';
        discountValue.innerText ='0.00';
        couponField.value = '';

        const itemList = document.getElementById('purchase-items');
        itemList.innerText = '';

        couponField.disabled = true;
        couponBtn.disabled = true;
        purchaseBtn.disabled = true;
    })
}

// item 1

document.getElementById('item-btn-1').addEventListener('click', function () {
    const item = getItemById('item-name-1');
    const Price = getItemPriceById('item-1');
})

// item 2

document.getElementById('item-btn-2').addEventListener('click', function () {
    const item = getItemById('item-name-2');
    const Price = getItemPriceById('item-2');
})

// item 3

document.getElementById('item-btn-3').addEventListener('click', function () {
    const item = getItemById('item-name-3');
    const Price = getItemPriceById('item-3');
})

// item 4

document.getElementById('item-btn-4').addEventListener('click', function () {
    const item = getItemById('item-name-4');
    const Price = getItemPriceById('item-4');
})

// item 5

document.getElementById('item-btn-5').addEventListener('click', function () {
    const item = getItemById('item-name-5');
    const Price = getItemPriceById('item-5');
})

// item 6

document.getElementById('item-btn-6').addEventListener('click', function () {
    const item = getItemById('item-name-6');
    const Price = getItemPriceById('item-6');
})

// item 7

document.getElementById('item-btn-7').addEventListener('click', function () {
    const item = getItemById('item-name-7');
    const Price = getItemPriceById('item-7');
})

// item 8

document.getElementById('item-btn-8').addEventListener('click', function () {
    const item = getItemById('item-name-8');
    const Price = getItemPriceById('item-8');
})

// item 9

document.getElementById('item-btn-9').addEventListener('click', function () {
    const item = getItemById('item-name-9');
    const Price = getItemPriceById('item-9');
})