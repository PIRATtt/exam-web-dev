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
    }
  }
})




// pluser=document.getElementsByClassName('pluser');
// minuser=document.getElementsByClassName('minuser');
// let noll=document.getElementsByClassName('noll');

// pluser[0].onclick = function () {
//   noll[0].textContent++
// };
// minuser[0].onclick = function () {
//   if ( parseInt(noll[0].innerText) > 0 ) {
//     noll[0].textContent--  
//   }
// };




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
    const parent = event.target.closest('.bread-menu');
    const productInfo = {
      id: parent.dataset.id,
      title: parent.querySelector('.bread-name').innerText,
      price: parent.querySelector('.price').innerText,
      number: parent.querySelector('.bread-0').innerText,
    };
    const NumberInKorzina = winKrozina.querySelector(`[data-id="${productInfo.id}"]`)
    if (NumberInKorzina) {
      const KorzinaEl = NumberInKorzina.getElementsByClassName('bread-0')[0];
      KorzinaEl.innerText = parseInt(KorzinaEl.innerText) + parseInt(productInfo.innerText)
    }
    const korzinaProductHTML = `<div class="container-sm element">
    <p class="Name">${productInfo.title}</p>
    <p class="price">${productInfo.price}</p>
  </div>

  <div class="container-sm number">
    <div class="container-sm pl-0-min bread-mp0">
      <div class="bread-0" data-action="number">${productInfo.number}</div><div class="bread-plus" data-action="plus">+</div><div class="bread-minus" data-action="minus">-</div>
    </div>
    <div class="line"></div>
  </div>`;
  winKrozina.insertAdjacentHTML('beforeend', korzinaProductHTML);
  }
})



  // API
// renderRecords(records) {
//   document.getElementById('records').tbody;
//   for (records in records) {
//     let row = document.createElement('tr');
//     let td = document.createElement('td');
//     td.innerHTML = record.name;
    

//     row.append(document.createElement('td'))
//     t.append(row);
//   }
// }

//   function records_path(id) {
//   return `/api/data1/${id}`
// }

// function sendRequest(method, url, onloadHandler) {
//   let xhr = new XmlHttpRequest();
//   xhr.open(method, url);
//   xhr.responseType = 'json';
//   xhr.onload = onloadHandler;
//   xhr.send();
// }

// let host='http://exam-2022-1-api.std-900.ist.mospolytech.ru';
// let records_path='/api/data1';

// window.onload = function() {
//   document.getElementById('downloadDataBtn').onclick = function() {
//     let url= new URL(records_path,host);
//     sendRequest(url, 'GET',function(){
//       renderRecords(this.response);
//     });
//   }

// }
