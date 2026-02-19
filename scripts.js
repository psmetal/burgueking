function mostrarCardapio() {

  const menuList = document.getElementById('menu-list');
  menuList.innerHTML = '';

  menuOptions.forEach(element => {
    
    const listItem = document.createElement('li');
    const image = document.createElement('img');
    const name = document.createElement('p');
    const price = document.createElement('p');
    image.src = element.src;
    name.textContent = element.name;
    name.classList.add('name');
    price.textContent = `Preço : R$${element.price},00`;
    price.classList.add('price');
    listItem.appendChild(image);
    listItem.appendChild(name);
    listItem.appendChild(price);
    menuList.appendChild(listItem);
  });
}
function mapearCardapio() {

  const menuList = document.getElementById('menu-list');

  menuList.innerHTML = '';
  const mappedMenu = menuOptions.map(element => {
    return {
      name: element.name,
      price: element.price - (element.price * 0.10),
      src: element.src,
    };
  });
  mappedMenu.forEach(element => {
    const listItem = document.createElement('li');
    const image = document.createElement('img');
    const name = document.createElement('p');
    const price = document.createElement('p');

    image.src = element.src;
    name.textContent = element.name;
    name.classList.add('name');
    price.textContent = `Preço : R$${element.price.toFixed(2)}`;
    price.classList.add('price');
    listItem.appendChild(image);
    listItem.appendChild(name);
    listItem.appendChild(price);
    menuList.appendChild(listItem);
  });
}
function filtrarVegano() {

  const menuList = document.getElementById('menu-list');
  menuList.innerHTML = '';
  const veganOptions = menuOptions.filter(element => element.vegan);

  veganOptions.forEach(element => {
    const listItem = document.createElement('li');
    const image = document.createElement('img');
    const name = document.createElement('p');
    const price = document.createElement('p');

    image.src = element.src;
    name.textContent = element.name;
    name.classList.add('name');
    price.textContent = `Preço : R$${element.price.toFixed(2)}`;
    price.classList.add('price');
    listItem.appendChild(image);
    listItem.appendChild(name);
    listItem.appendChild(price);
    menuList.appendChild(listItem);
  });
}
function calcularTotal() {
  const menuList = document.getElementById('menu-list');
  menuList.innerHTML = '';
  
  const listItem = document.createElement('li');
  const totalcomDesconto = menuOptions.reduce((acc, element) => acc + (element.price - (element.price * 0.10)), 0);
  const total = menuOptions.reduce((acc, element) => acc + element.price, 0);

  const nameComDesconto = document.createElement('p');
  nameComDesconto.classList.add('name');
  nameComDesconto.textContent = `Valor total do cardápio com desconto: R$${totalcomDesconto.toFixed(2)}`;
  
  const nameSemDesconto = document.createElement('p');
  nameSemDesconto.classList.add('price');
  nameSemDesconto.textContent = `Valor total do cardápio sem desconto: R$${total.toFixed(2)}`;

  listItem.appendChild(nameComDesconto);
  listItem.appendChild(nameSemDesconto);
  menuList.appendChild(listItem);
}