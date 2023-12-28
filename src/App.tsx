import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { PublicLayout } from "@src/layouts/PublicLayout";
import { AuthentficiationLayout } from "./layouts/AuthenLayout/AuthentficiationLayout";
import { CreateAccComp } from "./components/CreateAccComp/CreateAcc";

const Home = lazy(() => import("@src/views/Home"));
const Products = lazy(() => import("@src/views/Products"));
const Login = lazy(() => import("@src/views/Login"));
const CreateAcc = lazy(() => import("@src/views/CreateAcc"));
const NotFonud = lazy(() => import("@src/views/NotFound"));

function App() {
  return (
    <Suspense fallback={<div>loading</div>}>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<NotFonud />} />
        </Route>
        <Route element={<AuthentficiationLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/createaccount" element={<CreateAccComp />} />
        </Route>
        x{" "}
      </Routes>
    </Suspense>
  );
}

export default App;
