import "./App.css";
import react from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import PageNotFound from "../PageNotFound/PageNotFound";
import ProductCat from "../ProuductCat/ProductCat";
import SingleProduct from "../SingleProduct/SingleProduct";
import Login from "../Login/login";
import CardPage from "../cardPage/CardPage";

const queryClient = new QueryClient();
function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cats/:id" element={<ProductCat />} />
            <Route path="/p/:id" element={<SingleProduct />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Cards" element={<CardPage />} />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </div>
  );
}

export default App;
