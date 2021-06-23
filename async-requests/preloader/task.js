//DOM elements
const currancyList = document.getElementById('items');
const loader = document.querySelector('.loader');

//Cache
let storage = [];
if (JSON.parse(localStorage.getItem("CurrancyList"))) {
  storage = JSON.parse(localStorage.getItem("CurrancyList"));
  storage.forEach((item) => addNewValute(item.CharCode, item.Value));
  loader.classList.remove('loader_active');
}

//Functions
function addNewValute(code, value) {
  const newItem = document.createElement('div');
  newItem.classList.add('item');
  newItem.innerHTML = `
    <div class="item__code">
      ${code}
    </div>
    <div class="item__value">
      ${value}
    </div>
    <div class="item__currency">
      руб.
    </div>`;
  currancyList.appendChild(newItem);
}

//Request
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();
xhr.onreadystatechange=function(){if(xhr.readyState===4){
  const responseValuteArr = Object.values(JSON.parse(xhr.responseText).response.Valute);
  responseValuteArr.forEach(item=>{
  addNewValute(item.CharCode , item.Value)
  const storageItem = {};
  storageItem.CharCode = item.CharCode;
  storageItem.Value = item.Value;
  storage.push(storageItem);
});
  loader.classList.remove('loader_active');
  localStorage.setItem("CurrancyList", JSON.stringify(storage));
};};


