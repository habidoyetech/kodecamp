var prompt = require('prompt-sync')();


const cart = {
    cartArray: [],
    addToCart(product) {
      this.cartArray.push(product);
      console.log(`Added ${product} to the cart.`);
    },
    removeFromCart(product) {
      const index = this.cartArray.indexOf(product);
      if (index !== -1) {
        this.cartArray.splice(index, 1);
        console.log(`Removed ${product} from the cart.`);
      } else {
        console.log(`${product} is not in the cart.`);
      }
    },
    showItems() {
      const itemsString = this.cartArray.join(', ');
      console.log(`Items in the cart: ${itemsString}`);
    },
    length() {
      console.log(`Number of products in the cart: ${this.cartArray.length}`);
    },
    standBy(command) {
      switch (command) {
        case 'add':
          const productToAdd = prompt('Enter the product to add: ');
          this.addToCart(productToAdd);
          break;
        case 'remove':
          const productToRemove = prompt('Enter the product to remove: ');
          this.removeFromCart(productToRemove);
          break;
        case 'show-items':
          this.showItems();
          break;
        case 'length':
          this.length();
          break;
        case 'exit':
          console.log('Exiting the program.');
          break;
        default:
          console.log('Invalid command.');
      }
    },
  };
  
 
  