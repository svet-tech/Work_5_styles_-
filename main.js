function writeStyledText(stylesArray, text) {
    // Создаем строку стилей из массива
    const stylesString = stylesArray.map(style => `${style.name}: ${style.value}`).join('; ');

    // Формируем HTML-код с использованием document.write()
    document.write(`<p style="${stylesString}">${text}</p>`);
}

// Пример использования функции
const styles = [
    { name: 'color', value: 'blue' },
    { name: 'font-size', value: '20px' },
    { name: 'font-weight', value: 'bold' },
    { name: 'text-align', value: 'center' }
];

const text = 'Это стилизованный текст!';
writeStyledText(styles, text);



//Использование document.write() не рекомендуется в современных веб-приложениях, 
// так как это может перезаписать всю страницу,  если вызывается после загрузки документа. 
// Вместо этого лучше использовать методы DOM для добавления элементов на страницу, 
// такие как appendChild или innerHTML. Если необходимо использовать данный подход в современном контексте,
//  можно модифицировать функцию для работы с элементами DOM.

// function writeStyledText(stylesArray, text) {
//     // Создаем новый элемент <p>
//     const p = document.createElement('p');

//     // Создаем строку стилей из массива
//     const stylesString = stylesArray.map(style => `${style.name}: ${style.value}`).join('; ');

//     // Устанавливаем атрибут style для элемента <p>
//     p.setAttribute('style', stylesString);

//     // Устанавливаем текст внутри элемента <p>
//     p.textContent = text;

//     // Добавляем элемент <p> в документ (в конец <body> или в нужный контейнер)
//     document.body.appendChild(p);
// }

// // Пример использования функции
// const styles = [
//     { name: 'color', value: 'blue' },
//     { name: 'font-size', value: '20px' },
//     { name: 'font-weight', value: 'bold' },
//     { name: 'text-align', value: 'center' }
// ];

// const text = 'Это стилизованный текст!';
// writeStyledText(styles, text);




//Задание 2

// Массив, описывающий чек в магазине
const receipt = [
    { name: 'Яблоки', quantity: 3, price: 50 },
    { name: 'Молоко', quantity: 2, price: 60 },
    { name: 'Хлеб', quantity: 1, price: 30 },
    { name: 'Яйца', quantity: 12, price: 5 },
    { name: 'Сыр', quantity: 1, price: 120 }
];

// Функция для распечатки чека на экран
function printReceipt(receipt) {
    console.log('Чек:');
    receipt.forEach(item => {
        console.log(`${item.name} - ${item.quantity} шт. по ${item.price} руб. = ${item.quantity * item.price} руб.`);
    });
    console.log(`Итого: ${calculateTotal(receipt)} руб.`);
}

// Функция для подсчета общей суммы покупки
function calculateTotal(receipt) {
    return receipt.reduce((total, item) => {
        return total + (item.quantity * item.price);
    }, 0);
}

// Функция для получения самой дорогой покупки в чеке
function getMostExpensivePurchase(receipt) {
    return receipt.reduce((mostExpensive, item) => {
        const itemTotal = item.quantity * item.price;
        return itemTotal > mostExpensive.total ? { name: item.name, total: itemTotal } : mostExpensive;
    }, { name: '', total: 0 });
}

// Функция для подсчета средней стоимости одного товара в чеке
function calculateAveragePrice(receipt) {
    const totalItems = receipt.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = calculateTotal(receipt);
    return totalItems > 0 ? (totalPrice / totalItems).toFixed(2) : 0;
}

// Использование функций
printReceipt(receipt);
console.log(`Самая дорогая покупка: ${getMostExpensivePurchase(receipt).name} на сумму ${getMostExpensivePurchase(receipt).total} руб.`);
console.log(`Средняя стоимость одного товара: ${calculateAveragePrice(receipt)} руб.`);