import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { PublicLayout } from "@src/layouts/PublicLayout";
import { AuthentficiationLayout } from "@src/layouts/AuthenLayout/AuthentficiationLayout";
import { Loader } from "@src/assets/Loader/Loader";
import { PrivateRoute } from "@src/views/Private/PrivateRoute";
import { Profile } from "@src/views/PrivateViews/Profile/Profile";
import { Orders } from "@src/views/PrivateViews/Orders/Orders";
import { CategoryProducts } from "@src/views/DynamicPages/CategoryProducts/CategoryProducts";
import { SearchedProducts } from "./views/DynamicPages/SearchedProducts/SearchedProducts";
import { SingleProduct } from "./views/DynamicPages/SIngleProduct/SingleProduct";
const Home = lazy(() => import("@src/views/Home"));
const Products = lazy(() => import("@src/views/Products"));
const Login = lazy(() => import("@src/views/Login"));
const NotFonud = lazy(() => import("@src/views/NotFound"));
const CreateAcc = lazy(() => import("@src/views/CreateAcc"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          <Loader />
        </div>
      }
    >
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<NotFonud />} />

          <Route
            path="/profile"
            element={<PrivateRoute children={<Profile />} />}
          />
          <Route
            path="/orders"
            element={<PrivateRoute children={<Orders />} />}
          />
          <Route
            path="/productCategory/:productCategoryId"
            element={<CategoryProducts />}
          />
          <Route
            path="/search/:productCategoryId/:productId"
            element={<SearchedProducts />}
          />
          <Route
            path="/search/:searchedProductId"
            element={<SingleProduct />}
          />
        </Route>

        <Route element={<AuthentficiationLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/createaccount" element={<CreateAcc />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
