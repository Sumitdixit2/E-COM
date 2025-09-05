import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Loader from "./components/loader/Loader.tsx";
import { ClerkProvider } from "@clerk/clerk-react";

// Lazy loaded components
const Home = lazy(() => import("@/components/Pages/Home/Home.tsx"));
const Categories = lazy(() => import("@/components/Pages/Category/Category.tsx"));
const Products = lazy(() => import("@/components/Pages/Product/Products.tsx"));
const WishList = lazy(() => import("@/components/Pages/wishlist/Wishlist.tsx"));
const Cart = lazy(() => import("@/components/Pages/Cart/Cart.tsx"));
const SignUp = lazy(() => import("@/components/Pages/SignUp/SignUp.tsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, // ✅ "index" should be on the default route
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/category/:category",
        element: (
          <Suspense fallback={<Loader />}>
            <Categories />
          </Suspense>
        ),
      },
      {
        path: "/:id", // ✅ Always start dynamic routes with "/"
        element: (
          <Suspense fallback={<Loader />}>
            <Products />
          </Suspense>
        ),
      },
      {
        path: "/wishlist",
        element: (
          <Suspense fallback={<Loader />}>
            <WishList />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<Loader />}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/signup",
        element: (
          <Suspense fallback={<Loader />}>
            <SignUp />
          </Suspense>
        ),
      },
    ],
  },
]);

const CLERK_PUBLISHABLE_KEY = import.meta.env
  .VITE_PUBLIC_CLERK_PUBLISHABLE_KEY as string;

if (!CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Clerk Publishable Key. Did you set it in .env");
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
);
