// Аннимация корзины
korzina_menu=document.getElementsByClassName('win-korzina');
strelka=document.getElementsByClassName('strelka');
korzina_back=document.getElementsByClassName('win-korzina-back');

strelka[0].onclick = function sdvig_left(){
  korzina_menu[0].classList.toggle('active');
  korzina_back[0].classList.toggle('active');
};



window.addEventListener('click', function (event) {
  if (event.target.dataset.action === 'plus') { // Ищем data-action=plus
    const parent = event.target.closest('.bread-mp0'); // Находим родительский элемент (класс)
    const breadNumber = parent.getElementsByClassName('bread-0')[0];
    breadNumber.innerText = ++breadNumber.innerText;
  }
});
window.addEventListener('click', function (event) {
  if (event.target.dataset.action === 'minus') {
    const parent = event.target.closest('.bread-mp0')
    const breadNumber = parent.getElementsByClassName('bread-0')[0];

    if (parseInt(breadNumber.innerText) > 0 ) {
      breadNumber.innerText = --breadNumber.innerText;
      // удалим товар из корзины
    } else if (event.target.closest('.win-korzina') && parseInt(breadNumber.innerText) === 0) {
      event.target.closest('.ForDelete').remove();
      toggleCart();

      calcPrice ();
    }
  }
  if (event.target.hasAttribute('data-action') && event.target.closest('.ForDelete')) {
    calcPrice ();
  }
})

const btn_soup = Array.from(document.querySelectorAll('button.btn-success'));
const block_soup = Array.from(document.querySelectorAll('.block-down'));
const soup = Array.from(document.querySelectorAll('.soup'));

btn_soup.forEach((item, i) => { 
  item.addEventListener('click', (e) => {
    soup[i].classList.toggle('active');
    block_soup[i].classList.toggle('active');
  });
});
function soupOpacity() {
  btn_soup.forEach((item, i) => { 
    item.addEventListener('click', (e) => {
      soup[i].classList.toggle('opacity');
    });
  });
}
setTimeout(() => soupOpacity(), 500)

const btn_pizza = Array.from(document.querySelectorAll('button.btn-rounded'));
const pizza = Array.from(document.querySelectorAll('.bread.pizza'));
const block_pizza = Array.from(document.querySelectorAll('.block-down2'));

btn_pizza.forEach((item, i) => { 
  item.addEventListener('click', (e) => {
    pizza[i].classList.toggle('active');
    block_pizza[i].classList.toggle('active');
  });
});
function pizzaOpacity() {
  block_pizza.forEach((item, i) => { 
    item.addEventListener('click', (e) => {
      pizza[i].classList.toggle('opacity');
    });
  });
}
setTimeout(() => pizzaOpacity(), 100)
const btn_peck = Array.from(document.querySelectorAll('button.btn-warning'));
const block_peck = Array.from(document.querySelectorAll('.block'));
const peck = Array.from(document.querySelectorAll('.bread.peck'));

btn_peck.forEach((item, i) => { 
  item.addEventListener('click', (e) => {
    peck[i].classList.toggle('active');
    block_peck[i].classList.toggle('active');
  });
});
function peckOpacity() {
  block_peck.forEach((item, i) => { 
    item.addEventListener('click', (e) => {
      peck[i].classList.toggle('opacity');
    });
  });
}
setTimeout(() => peckOpacity(), 100)


const winKrozina = document.querySelector('.win-korzina')

// В корзину
window.addEventListener('click', function (event) {
  if (event.target.hasAttribute('data-click')) {
    const parentCard = event.target.closest('.bread-menu');
    const productInfo = {
      id: parentCard.dataset.id,
      title: parentCard.querySelector('.bread-name').innerText,
      price: parentCard.querySelector('.price').innerText,
      number: parentCard.querySelector('.bread-0').innerText,
    };
    // Не получилось реализовать
    const NumberInKorzina = winKrozina.querySelector(`[data-id="${productInfo.id}"]`)
    if (NumberInKorzina) {
      const KorzinaEl = NumberInKorzina.getElementsByClassName('bread-0')[0];
      KorzinaEl.innerText = parseInt(KorzinaEl.innerText) + parseInt(productInfo.innerText);
    } else {
      const korzinaProductHTML = `<div class="ForDelete"><div class="container-sm element">
      <p class="Name">${productInfo.title}</p>
      <p class="price">${productInfo.price}</p>
      </div>
  
      <div class="container-sm number">
      <div class="container-sm pl-0-min bread-mp0">
        <div class="bread-0" data-action="number">${productInfo.number}</div><div class="bread-plus" data-action="plus">+</div><div class="bread-minus" data-action="minus">-</div>
      </div>
      <div class="line"></div>
      </div></div>`;
      winKrozina.insertAdjacentHTML('beforeend', korzinaProductHTML);
    }
    // Сбрасываем счётчик при добавлении
    parentCard.querySelector('[data-couter]').innerText = '1';
    // Статус корзины
    toggleCart();
    calcPrice ();
  }
})

function toggleCart() {
  const WinKorzina = document.querySelector('.win-korzina')
  const cartEmpty = document.querySelector('[data-cart-empty]')
  const lineKorzina = document.querySelector('.line-korzina')

  const finalZakaz = document.querySelector('.final-zakaz');

  if (WinKorzina.children.length > 4) {
    lineKorzina.classList.add('none');
    cartEmpty.classList.add('none');
    finalZakaz.classList.add('none');
  } else {
    lineKorzina.classList.remove('none');
    cartEmpty.classList.remove('none');
    finalZakaz.classList.remove('none')
  }
}
// суммирование цены

function calcPrice () {
  const winItem = document.querySelectorAll('.ForDelete')
  const TotalPriceEl = document.querySelector('.summ');

  let totalprice = 0;
  winItem.forEach(function (item) {
    const element = item.querySelector('[data-action="number"]');
    const price = item.querySelector('p.price');

    const elementPrice = parseInt(element.innerText) * parseInt(price.innerText);
    totalprice += elementPrice;
  });
  // Финальная цена в корзине
  TotalPriceEl.innerText = totalprice;
  const Fast = document.querySelector('#click-fast');
  const allPrice = document.querySelector('.all-price')
  console.log(Fast)
  Fast.onclick = function () {
    if (Fast.checked) {
      allPrice.classList.add('active')
      TotalPriceEl.classList.add('active')
      TotalPriceEl.innerText = totalprice + 300;
    } else {
      allPrice.classList.remove('active')
      TotalPriceEl.classList.remove('active')
      TotalPriceEl.innerText = totalprice;
    }
  }


  const free = document.querySelector('.dostavka-free')
  if (totalprice > 800) {
     free.classList.add('free')
     free.innerText = '300 Р'
  } else {
    free.classList.remove('free')
  }
};


// API
// function renderRecords(records) {
//   document.getElementById('records').tbody;
//   for (records in records) {
//     let row = document.createElement('tr');
//     let td = document.createElement('td');
//     td.innerHTML = records.name;
    

//     row.append(document.createElement('td'));
//     t.append(row);
//   }
// }

//   function records_path(id) {
//   return `/api/data1/${id}`
// }

// function sendRequest(method, url, onloadHandler) {
//   let xhr = new XMLHttpRequest();
//   xhr.open(url, method);
//   xhr.responseType = 'json';
//   xhr.onload = onloadHandler;
//   xhr.send();
// }

// let host='http://exam-2022-1-api.std-900.ist.mospolytech.ru';
// let records_path='/api/restaurants';
// let api_key = '3e0308a9-c0ef-4ce4-906a-a0fea7c14444'

// window.onload = function() {
//   document.querySelector('.btn-sm').onclick = function() {
//     let url= new URL(records_path,host);
//     url.searchParams.append('api_key', api_key);
//     sendRequest(url, 'GET',function(){
//       renderRecords(this.response);
//     });
//   }

// }

// function createContentElement (record) {
//   let contentElement = document.createElement('div');

// }





// API
// function createcontentElement(){
//   let contentElement = document.createElement('div');
//   contentElement.classList.add('bread-name');
//   contentElement.innerHTML = record.text;
//   return contentElement;
// }
// function createElement(record) {
//   let itemElement = document.createElement('div');
//   itemElement.classList.add('bread-menu');
//   itemElement.append(createcontentElement(record));
//   return itemElement;
// }
// function renderRecords(records) {
//   let bread = document.querySelector('.bread')
//   bread.innerHTML = '';
//   for (let i=0; i < records.length; i++) {
//     bread.append(createElement(records[i]));
//   }
// }

// function downloadData() {
//   let bread = document.querySelector('.bread')

//   let xhr= new XMLHttpRequest();
//   xhr.open('GET', bread.dataset.url);
//   xhr.responseType='json';
//   xhr.onload = function () {
//     renderRecords();
//     console.log(this.response.all);
//   }
//   xhr.send();
// }

// window.onload = function () {
//   downloadData();
// }


let host='http://exam-2022-1-api.std-900.ist.mospolytech.ru';
let records_path='/api/restaurants';
let api_key = '3e0308a9-c0ef-4ce4-906a-a0fea7c14444'

// window.onload = function() {
//   document.querySelector('.btn-sm').onclick = function() {
//     let url= new URL(records_path,host);
//     url.searchParams.append('api_key', api_key);
//     sendRequest(url, 'GET',function(){
//       renderRecords(this.response);
//     });
//   }

const containerJSON = document.querySelector('.json')
getElements ()

async function getElements () {
  let url= new URL(records_path,host);
  url.searchParams.append('api_key', api_key);
  const response = await fetch(url);
  const elementsArray = await response.json();

  // renderProducts (elementsArray);
  // renderNumberProduct (elementsArray);
}


function renderProducts (elementsArray) {
    elementsArray.forEach(function (item) {
      const productHTML = `<div class="container json">
      <div class="name-element">${item.name}</div>
      <div class="type-element">${item.typeObject}</div>
      <div class="address-element">${item.address}</div>
      <div class="doing-element">123</div>
      </div>`;
      containerJSON.insertAdjacentHTML('beforeend', productHTML);
    })
}

function renderNumberProduct(elementsArray) {
  for( let item = 0; item < 5; item++) {
    console.log(elementsArray[item]);
  }
}

// function compactDiv(elementsArray) {
//   for( let item = 0; item < 5; item++) {
//     console.log(elementsArray[item]);
//   }
// }
