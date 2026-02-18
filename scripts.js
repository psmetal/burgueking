function mostrarCardapio() {
  menuOptions.forEach(element => {
    const menuList = document.getElementById('menu-list');
    const listItem = document.createElement('li');
    const image = document.createElement('img');
    const name = document.createElement('p');
    const price = document.createElement('p');
    image.src = element.src;
    name.textContent = element.name;
    price.textContent = `Preço : R$${element.price},00`;
    price.classList.add('price');
    listItem.appendChild(image);
    listItem.appendChild(name);
    listItem.appendChild(price);
    menuList.appendChild(listItem);
  });
}
