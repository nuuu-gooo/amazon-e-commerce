import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { PublicLayout } from "@src/layouts/PublicLayout";
import { AuthentficiationLayout } from "@src/layouts/AuthenLayout/AuthentficiationLayout";
import { Loader } from "@src/assets/Loader/Loader";
import { PrivateRoute } from "@src/views/Private/PrivateRoute";
import { PrivateOrderStatus } from "@src/views/Private/PrivateOrderStatus/PrivateOrderStatus";
import { SingleProduct } from "@src/views/DynamicPages/SingleProduct/SingleProduct";

const NotRegisteredPage = lazy(() => import("@src/views/NotRegisteredPage"));
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
const SearchedProducts = lazy(
  () => import("@src/views/DynamicPages/SearchedProducts")
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
            element={<PrivateRoute children={<Profile />} />}
          />
          <Route
            path="/orders"
            element={<PrivateRoute children={<Orders />} />}
          />

          <Route
            path="/loginSecurity"
            element={<PrivateRoute children={<LoginSecurity />} />}
          />

          <Route
            path="/checkout"
            element={<PrivateRoute children={<CheckoutPage />} />}
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
          <Route
            path="/wishList"
            element={<PrivateRoute children={<WishListProducts />} />}
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
            element={<PrivateRoute children={<ChangeInfo />} />}
          />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
