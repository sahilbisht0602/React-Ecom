import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItem: (state, action) => {
      //return -1 if not found
      const index = state.items.findIndex((item) => {
        return item.id === action.payload.id;
      });
      //already exists
      if (index >= 0) {
        // console.log(typeof action.payload.quantity);
        state.items[index].quantity += Number(action.payload.quantity);
        state.totalQuantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
        state.totalQuantity += action.payload.quantity;
      }
    },
    increaseQuantity: (state, action) => {
      // console.log(action.payload);
      const index = state.items.findIndex((item) => {
        return item.id === action.payload;
      });
      //don't allow to add more then 10 items
      if (state.items[index].quantity >= 10) {
        return;
      }
      if (index >= 0) {
        state.items[index].quantity += 1;
        state.totalQuantity++;
      } else {
        return;
      }
    },
    decreaseQuantity: (state, action) => {
      const index = state.items.findIndex((item) => {
        return item.id === action.payload;
      });

      //if quantity is 0 then don't decrease further
      if (state?.items[index]?.quantity === 1) {
        state.items.splice(index, 1);
        state.totalQuantity--;
        return;
      }
      if (index >= 0) {
        state.items[index].quantity -= 1;
        state.totalQuantity--;
      } else {
        return;
      }
    },
    removeItem: (state, action) => {
      const index = state.items.findIndex((item) => {
        return item.id === action.payload;
      });
      if (index >= 0) {
        state.items.splice(index, 1);
        state.totalQuantity--;
      } else {
        // state.totalQuantity--;
      }
    },
    emptyItem: (state) => {
      state.items = [];
      state.totalQuantity = 0;
    },
  },
});

export const {
  addItem,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  emptyItem,
} = cartSlice.actions;
export default cartSlice.reducer;
