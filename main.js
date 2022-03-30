const site=document.querySelector('#block') //получаю доступ к блоку

const block_pizza = Array.from(document.querySelectorAll('.block'));
const btn_pizza = Array.from(document.querySelectorAll('button.btn-rounded'));
const blockdownmenu = Array.from(document.querySelectorAll('.block-down-pizza'));
const btn_sup = Array.from(document.querySelectorAll('button.btn-success'));

const btn_bread = Array.from(document.querySelectorAll('button.btn-warning'));

btn_pizza.forEach((item, i) => { // проходимся по каждому тригеру
  item.addEventListener('click', (e) => { // ставим на него слушатель события клика
    const block_pizza_opacity = Array.from(document.querySelectorAll('.block-pizza'));
    const block_sup = Array.from(document.querySelectorAll('.block-sup'));
    const block_bread = Array.from(document.querySelectorAll('.block-bread'));

    block_pizza[i].classList.toggle('active'); // прозрачность всех блоков
    blockdownmenu[i].classList.toggle('active'); // движение нижней строки
    block_sup[i].classList.toggle(remove); // ВЫКЛ блок супов
    block_pizza_opacity[i].classList.toggle('opacity'); // ВКЛ блок пиццы
    block_bread[i].classList.toggle(remove); // ВЫКЛ блок супов
  });
});

btn_sup.forEach((item, i) => { 
    item.addEventListener('click', (e) => {
      const block_pizza_opacity = Array.from(document.querySelectorAll('.block-pizza'));
      const block_sup = Array.from(document.querySelectorAll('.block-sup'));
      const block_bread = Array.from(document.querySelectorAll('.block-bread'));

      block_pizza[i].classList.toggle('active'); // прозрачность всех блоков
      blockdownmenu[i].classList.toggle('active'); // движение нижней строки
      block_pizza_opacity[i].classList.toggle(remove); // ВЫКЛ блок с пиццей
      block_bread[i].classList.toggle(remove); // ВЫКЛ блок супов
      block_sup[i].classList.toggle('opacity'); // ВКЛ блок супов
    });
  });

  btn_bread.forEach((item, i) => { 
    item.addEventListener('click', (e) => { 
      const block_pizza_opacity = Array.from(document.querySelectorAll('.block-pizza'));
      const block_sup = Array.from(document.querySelectorAll('.block-sup'));
      const block_bread = Array.from(document.querySelectorAll('.block-bread'));

      block_pizza[i].classList.toggle('active'); // прозрачность всех блоков
      blockdownmenu[i].classList.toggle('active'); // движение нижней строки
      block_sup[i].classList.toggle(remove); // ВЫКЛ блок супов
      block_pizza_opacity[i].classList.toggle(remove); // ВЫКЛ блок с пиццей
      block_bread[i].classList.toggle('opacity'); // ВКЛ блок супов
    });
  });

  // if (block_bread[i].classList.toggle('opacity')) {
  //   block_pizza_opacity[i].classList.toggle('active')
  //   block_sup[i].classList.toggle('active')
  // }

  const pizza_but = document.querySelector(".pizza-plus");
  const res_1 = document.querySelector(".num-right");
  
  pizza_but.addEventListener("click", () => {
    res_1.textContent++
  });






  // Увеличивается число на +

  // const btn_plus_pizza = document.querySelector(".pizza-plus");
  // const res = document.querySelector("#number");
  // btn_plus_pizza.addEventListener("click", () => {
  //   res.textContent++
  // });

  // КОД выполняется когда стр полностью загружена
  // $( function () {
  //   $(".pizza-plus").click(function()) {
  //     alert('LOL KEK')
  //   }
  // });






  // const btnpizza = Array.from(document.querySelectorAll('.pizza-plus'));

  // btnpizza.forEach((item, i) => { 
  //   item.addEventListener('click', (e) => { 
  //     var numberr=$(".number");
  //     var numbers = parseint(numberr.text());

  //     numberr.text(numbers+1);
  //   });
  // });



//   // API
// function records_path(id) {
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

// }
