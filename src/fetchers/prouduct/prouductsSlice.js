import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { json } from "react-router-dom";

import prouductApi from "../../common/api/prouductApi";
const ProductCard = JSON.parse(localStorage.getItem("cards"));
const initialState = {
  products: [],
  cats: [],
  status: null,
  productCat: [],
  singleProduct: [],
  cards: ProductCard || [],
};

export const fetchAllprouducts = createAsyncThunk(
  "products/fetchAllproducts",
  async (id) => {
    const res = await prouductApi.get(`/products`);
    return res.data;
  }
);
export const fetchSingleprouduct = createAsyncThunk(
  "products/fetchSingleproduct",
  async (id) => {
    const res = await prouductApi.get(`/products/${id}`);
    return res.data;
  }
);

export const fetchAllcats = createAsyncThunk(
  "products/fetchAllCats",
  async () => {
    const res = await prouductApi.get("products/categories");
    return res.data;
  }
);
export const fetchproductCat = createAsyncThunk(
  "products/fetchproductCat",
  async (cat) => {
    const res = await prouductApi.get(
      `products/category/${cat}`
    );
    return res.data;
  }
);

const proudctSlice = createSlice({
  name: "products",
  initialState,

  reducers: {
    removeProductCat: {
      reducer(state, action) {
        state.productCat = [];
      },
    },

    addToCard: {
      reducer(state, action) {
        const exist = state.cards.find(
          (item) => item.id === action.payload.id
        );

        if (!exist) {
          state.cards = [
            ...state.cards,
            { ...action.payload, qty: 1 },
          ];
          localStorage.setItem(
            "cards",
            JSON.stringify(state.cards)
          );
        } else {
          state.cards = state.cards.map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: item.qty + 1 }
              : item
          );
        }
        localStorage.setItem(
          "cards",
          JSON.stringify(state.cards)
        );
      },
      prepare(item) {
        return { payload: item };
      },
    },
    removeToCard: {
      reducer(state, action) {
        const exsit = state.cards.find(
          (item) => item.id === action.payload
        );
        if (exsit.qty === 1) {
          state.cards = state.cards.filter(
            (item) => item.id !== action.payload
          );
          localStorage.setItem(
            "cards",
            JSON.stringify(state.cards)
          );
        } else {
          state.cards = state.cards.map((item) =>
            item.id === action.payload
              ? { ...item, qty: item.qty - 1 }
              : item
          );
          localStorage.setItem(
            "cards",
            JSON.stringify(state.cards)
          );
        }
      },
    },
  },

  extraReducers(builder) {
    builder
      .addCase(fetchAllprouducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAllprouducts.fulfilled, (state, action) => {
        state.status = "successed";
        state.products = action.payload;
      })
      .addCase(fetchAllcats.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAllcats.fulfilled, (state, action) => {
        state.status = "successed";
        state.cats = action.payload;
      })
      .addCase(fetchproductCat.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchproductCat.fulfilled, (state, action) => {
        state.status = "successed";
        state.productCat = action.payload;
      })
      .addCase(fetchSingleprouduct.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(
        fetchSingleprouduct.fulfilled,
        (state, action) => {
          state.status = "successed";
          state.singleProduct = action.payload;
        }
      );
  },
});

export const allProducts = (state) => state.products.products;
export const allCats = (state) => state.cats;
export const productCat = (state) =>
  state.products.productCat.products;
export const singleProduct = (state) =>
  state.products.singleProduct;
export const { removeProductCat } = proudctSlice.actions;
export const { addToCard } = proudctSlice.actions;
export const { removeToCard } = proudctSlice.actions;
export const productsCard = (state) => state.products.cards;
export default proudctSlice.reducer;
