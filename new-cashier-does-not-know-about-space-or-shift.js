// Some new cashiers started to work at your restaurant.

// They are good at taking orders, but they don't know how to capitalize words, or use a space bar!

// All the orders they create look something like this:

// "milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"

// The kitchen staff are threatening to quit, because of how difficult it is to read the orders.

// Their preference is to get the orders as a nice clean string with spaces and capitals like so:

// "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"

// The kitchen staff expect the items to be in the same order as they appear in the menu.

// The menu items are fairly simple, there is no overlap in the names of the items:

// 1. Burger
// 2. Fries
// 3. Chicken
// 4. Pizza
// 5. Sandwich
// 6. Onionrings
// 7. Milkshake
// 8. Coke

//                  solution  

const menu = ["Burger", "Fries", "Chicken", "Pizza", "Sandwich", "Onionrings", "Milkshake", "Coke"];
const capitalize = word => word.slice(0, 1).toUpperCase() + word.slice(1);
const comparator = (a, b) => menu.indexOf(a) - menu.indexOf(b);

function getOrder(input) {
  return input.match(new RegExp(menu.join("|"), "ig")).map(capitalize).sort(comparator).join(" ");
}

//              solution

const getOrder = input => {
    const menu = ['Burger','Fries','Chicken','Pizza','Sandwich','Onionrings','Milkshake','Coke'];
    let orders = input.match(new RegExp(menu.join('|'), 'gi'))
                      .map(item => item[0].toUpperCase() + item.slice(1))
                      .sort((a,b) => menu.indexOf(a) - menu.indexOf(b));
    return orders.join(' ');
  };

//                  solution

const getOrder = input => {
    const menu = [
      'burger',
      'fries',
      'chicken',
      'pizza',
      'sandwich',
      'onionrings',
      'milkshake',
      'coke'
    ];
  
    let order = [];
  
    while (input !== '') {
      for (let i = 0; i < menu.length; i++) {
        while (input.indexOf(menu[i]) !== -1) {
          if (input.indexOf(menu[i]) >= 0) {
            order.push(menu[i][0].toUpperCase() + menu[i].slice(1));
            input = input.replace(menu[i], '');
          }
        }
      }
    }
  
  
    return order.join(' ');
  };