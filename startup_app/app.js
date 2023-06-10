function login() {
  const nameEl = document.querySelector('#name');
  localStorage.setItem("userName", nameEl.value);
  window.location.assign("list.html");

}

class App {
  constructor() {
    document.querySelectorAll('.game-button').forEach((el, i) => {
      if (i < btnDescriptions.length) {
        this.buttons.set(el.id, new Button(btnDescriptions[i], el));
      }
    });
  }

  async getPlayerName() {
    const playerNameEl = document.querySelector('.player-name');
    playerNameEl.textContent = await this.retrievePlayerName();
  }

  retrievePlayerName() {
    return localStorage.getItem('userName') ?? 'Mystery player';
  }

  submitForm() {
    const itemName = document.getElementById('item-name').value;
    const quantity = document.getElementById('quantity').value;
    const price = document.getElementById('price').value;

    const newItem = {
      name: itemName,
      quantity: quantity,
      price: price
    };
  
    let itemList = JSON.parse(localStorage.getItem('itemList')) || [];
    itemList.push(newItem);
  
    localStorage.setItem('itemList', JSON.stringify(itemList));
  
    document.getElementById('item-name').value = '';
    document.getElementById('quantity').value = '';
    document.getElementById('price').value = '';
  
    console.log(itemList); // Add this line to check if the item is added to the list
  
    // Redirect to the list.html page
    window.location.href = "list.html";
  }
  
  renderItemList() {
    const itemList = JSON.parse(localStorage.getItem('itemList')) || [];
    const itemNameList = document.getElementById('item-name-list');
    const quantityList = document.getElementById('quantity-list');
    const priceList = document.getElementById('price-list');
  
    // Clear the previous items
    itemNameList.innerHTML = '';
    quantityList.innerHTML = '';
    priceList.innerHTML = '';
  
    // Render each item in the list
    itemList.forEach((item) => {
      const itemNameItem = document.createElement('li');
      itemNameItem.textContent = item.name;
      itemNameList.appendChild(itemNameItem);
  
      const quantityItem = document.createElement('li');
      quantityItem.textContent = item.quantity;
      quantityList.appendChild(quantityItem);
  
      const priceItem = document.createElement('li');
      priceItem.textContent = item.price;
      priceList.appendChild(priceItem);
    });
  
    // Update the total number of items and total price
    document.getElementById('total-items').textContent = itemList.length;
    const totalPrice = itemList.reduce((total, item) => total + parseFloat(item.price), 0);
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
  }  

  bindSubmitForm() {
    const submitButton = document.getElementById('submit-button');
    submitButton.addEventListener('click', () => {
      this.submitForm();
    });
  }

}

const appInstance = new App();
appInstance.getPlayerName();
appInstance.renderItemList();
