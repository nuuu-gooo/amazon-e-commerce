import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { PublicLayout } from "@src/layouts/PublicLayout";
import { AuthentficiationLayout } from "./layouts/AuthenLayout/AuthentficiationLayout";
import { CreateAccComp } from "./components/CreateAccComp/CreateAcc";
import { Loader } from "./assets/Loader/Loader";
import { PrivateRoute } from "./utils/Private/PrivateRoute";
import { Profile } from "./views/PrivateViews/Profile/Profile";
import { Orders } from "./views/PrivateViews/Orders/Orders";
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
