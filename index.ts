import { restaurants, Restaurant } from "./restaurants";
import { orders, Order, PriceBracket } from "./orders";

// Add your getMaxPrice() function below:

function getMaxPrice(price: PriceBracket): number | string {
  switch(price) {
    case PriceBracket.Low:
      return 10;
      break;
    case PriceBracket.Medium:
      return 20;
      break;
    case PriceBracket.High:
      return 30;
      break;
    default:
      return "None"
  }
}

// Add your getOrders() function below:
function getOrders(price: PriceBracket, orders : Order[][] ): Order[][] {
  let filteredOrders : Order[][] = [];
  const limit = getMaxPrice(price);
  if (typeof limit === "number") {
  filteredOrders = orders.map(restaurantOrders => restaurantOrders.filter(order => order.price < limit))
  }
return filteredOrders;
}

//console.log(getOrders(PriceBracket.Low, orders))

// Add your printOrders() function below:
function printOrders(restaurants: Restaurant[], filteredOrders: Order[][]):void {
  filteredOrders.forEach((restaurantOrders, index)=>{
    if (restaurantOrders.length > 0) {
      console.log(`Restaurant ${restaurants[index].name}`);
      restaurantOrders.forEach((order, index) => {
        console.log(`- Order ${index+1}: ${order.name} $${order.price}`)
      } )
    }
  })
}

// Main
const eligibleOrders = getOrders(PriceBracket.Low, orders);
//console.log(eligibleOrders)
printOrders(restaurants, eligibleOrders);
