export const initialState = {
  basket: [],
 
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      const item = action.item;
      const oldBasket = state.basket;

      const prod = oldBasket.filter((i) => i.id === item.id);

      if (!prod.length) {
        console.log("run");
        item.quantity = 1;
        return {
          ...state,
          basket: [...state.basket, item],
        };
      }

      const prodItem = prod[0];

      // console.log("before", prodItem.quantity);
      prodItem.quantity = item.quantity + 1;

      prodItem.amount = prodItem.quantity * item.amount ;
      
      console.log("after", prodItem.amount);

      const newState = oldBasket.filter((i) => i.id !== item.id);

      return {
        ...state,
        basket: [...newState, prodItem],
      };

    case "REMOVE_FROM_CART":
      const newBasket = state.basket.filter(
        (item) => item.title !== action.title
      );

      return { basket: newBasket };

    //  case "DECREASE":
    //  state.basket[state.basket.findIndex(item => item.id === action.item.id)].quantity--
    // // let indexdata=state.basket.findIndex(item => item.id === action.item.id)
    // // let identifydata=state.basket[indexdata]

    // state.basket[state.basket.findIndex(item => item.id === action.item.id)].quantity=-1

    // let data2 = data.quantity + 1

    // console.log("fdsfsd",state.basket[state.basket.findIndex(item => item.id === action.item.id)])
    // // console.log(indexdata)
    // // console.log(identifydata,"1")

    //  return {
    //      ...state,

    //      basket: [state.basket]
    //  }

    case "DECREASE":
      const decitem = action.item;
      const decoldBasket = state.basket;

      const decprod = decoldBasket.filter((i) => i.id === decitem.id);

      if (!decprod.length) {
        // console.log("run");
        decitem.quantity = 1;
        return {
          ...state,
          basket: [...state.basket, decitem],
        };
      }

      const decprodItem = decprod[0];

      console.log("before decrease", decprodItem.quantity);
      decprodItem.quantity = decitem.quantity <= 0 ? 0 : decitem.quantity - 1;
      console.log("after decrease", decprodItem.quantity);

      const decnewState = decoldBasket.filter((i) => i.id !== decitem.id);

      return {
        ...state,
        basket: [...decnewState, decprodItem],
      };

    default:
      return state;
  }
};
export default reducer;
