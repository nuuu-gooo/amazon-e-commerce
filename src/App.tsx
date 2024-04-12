import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { PublicLayout } from "@src/layouts/PublicLayout";
import { AuthentficiationLayout } from "@src/layouts/AuthenLayout/AuthentficiationLayout";
import { Loader } from "@src/assets/Loader/Loader";
import { CurrentSearchedInputProducts } from "./views/DynamicPages/CurrentSearchedInputProducts/CurrentSearchedInputProducts";

import DynamicSingleProduct from "./views/DynamicPages/DynamicSingleProduct";
const NotRegisteredPage = lazy(() => import("@src/views/NotRegisteredPage"));
const PrivateOrderStatus = lazy(
  () => import("@src/views/Private/PrivateOrderStatus")
);
const PrivateRouteAuth = lazy(
  () => import("@src/views/Private/PrivateRouteAuth")
);
const ChekoutSuccess = lazy(
  () => import("@src/views/DynamicPages/CheckoutPage/ChekoutSuccess")
);
const Home = lazy(() => import("@src/views/Home"));
const Login = lazy(() => import("@src/views/Login"));
const NotFonud = lazy(() => import("@src/views/NotFound"));
const CreateAcc = lazy(() => import("@src/views/CreateAcc"));
const Profile = lazy(() => import("@src/views/PrivateViews/Profile"));
const LoginSecurity = lazy(
  () => import("@src/views/PrivateViews/Profile/LoginSecurity")
);
const Cart = lazy(() => import("@src/views/DynamicPages/Cart"));
const WishListProducts = lazy(
  () => import("@src/views/PrivateViews/WishListProducts")
);
const ChangeInfo = lazy(
  () => import("@src/views/PrivateViews/Profile/LoginSecurity/ChangeInfo")
);
const CheckoutPage = lazy(() => import("@src/views/DynamicPages/CheckoutPage"));
const CategoryProducts = lazy(
  () => import("@src/views/DynamicPages/CategoryProducts")
);
const SearchedProductsAndCategory = lazy(
  () => import("@src/views/DynamicPages/SearchedProductsAndCategory")
);
const Orders = lazy(() => import("@src/views/PrivateViews/Orders"));

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
          <Route path="*" element={<NotFonud />} />
          <Route path="/noRegisteredPage" element={<NotRegisteredPage />} />
          <Route
            path="/profile"
            element={<PrivateRouteAuth children={<Profile />} />}
          />
          <Route
            path="/orders"
            element={<PrivateRouteAuth children={<Orders />} />}
          />

          <Route
            path="/loginSecurity"
            element={<PrivateRouteAuth children={<LoginSecurity />} />}
          />

          <Route
            path="/checkout"
            element={<PrivateRouteAuth children={<CheckoutPage />} />}
          />
          <Route
            path="/productCategory/:productCategoryId"
            element={<CategoryProducts />}
          />
          <Route
            path="/search/:productCategoryId/:productId"
            element={<SearchedProductsAndCategory />}
          />
          <Route
            path="/search/:searchedProductId"
            element={<CurrentSearchedInputProducts />}
          />
          <Route
            path="/wishList"
            element={<PrivateRouteAuth children={<WishListProducts />} />}
          />
          <Route
            path="/search/singleItem/:singleItemId"
            element={<DynamicSingleProduct />}
          />
          <Route
            path="/checkout/success"
            element={<PrivateOrderStatus children={<ChekoutSuccess />} />}
          />
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route element={<AuthentficiationLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/createaccount" element={<CreateAcc />} />
          <Route
            path="/loginSecurity/changeInfo"
            element={<PrivateRouteAuth children={<ChangeInfo />} />}
          />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
