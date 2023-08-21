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

// item 1

document.getElementById('item-btn-1').addEventListener('click', function () {
    const item1 = getItemById('item-name-1');
})

// item 2

document.getElementById('item-btn-2').addEventListener('click', function () {
    const item2 = getItemById('item-name-2');
})

// item 3

document.getElementById('item-btn-3').addEventListener('click', function () {
    const item3 = getItemById('item-name-3');
})

// item 4

document.getElementById('item-btn-4').addEventListener('click', function () {
    const item4 = getItemById('item-name-4');
})

// item 5

document.getElementById('item-btn-5').addEventListener('click', function () {
    const item5 = getItemById('item-name-5');
})

// item 6

document.getElementById('item-btn-6').addEventListener('click', function () {
    const item6 = getItemById('item-name-6');
})

// item 7

document.getElementById('item-btn-7').addEventListener('click', function () {
    const item7 = getItemById('item-name-7');
})

// item 8

document.getElementById('item-btn-8').addEventListener('click', function () {
    const item8 = getItemById('item-name-8');
})

// item 9

document.getElementById('item-btn-9').addEventListener('click', function () {
    const item9 = getItemById('item-name-9');
})