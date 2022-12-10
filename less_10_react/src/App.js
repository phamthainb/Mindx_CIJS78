import { createContext, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Layout from "./Layout";

export const languTranslate = {
  vi: {
    header_label: "Đăng nhập",
    form_label: "Đăng nhập",
    form_btn: "Đăng nhập",
    form_placeholder: "Nhập tên đăng nhập...",
  },
  en: {
    header_label: "Login",
    form_label: "Sign In",
    form_btn: "Submit",
    form_placeholder: "Username...",
  },
};

// khởi tạo 1 cái context
export const AppContext = createContext({
  lang: "",
  username: "",
  setDate: undefined, // (data) => set lại data trong useState
});

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Login />
      </Layout>
    ),
  },
  {
    path: "/page-1",
    element: (
      <Layout>
        <p>page 1</p>
      </Layout>
    ),
  },
  {
    path: "/page-2",
    element: (
      <Layout>
        <p>page 2</p>
      </Layout>
    ),
    children: [
      {
        path: "page-2.1",
        element: (
          <Layout>
            <p>page 2.1</p>
          </Layout>
        ),
      },
      {
        path: "page-2.2",
        element: (
          <Layout>
            <p>page 2.2</p>
          </Layout>
        ),
      },
      {
        path: "page-2.3",
        element: (
          <Layout>
            <p>page 2.3</p>
          </Layout>
        ),
      },
    ],
  },

  {
    path: "/page-3",
    element: (
      <Layout>
        <p>page 3</p>
      </Layout>
    ),
  },
  {
    path: "/page-4",
    element: (
      <Layout>
        <p>page 4</p>
      </Layout>
    ),
  },
  {
    path: "/page-5",
    element: (
      <Layout>
        <p>page 5</p>
      </Layout>
    ),
  },
]);

function App() {
  // get, set state
  const [data, setData] = useState({ lang: "vi", username: "" });
  console.log("data ở App::", data);
  return (
    <AppContext.Provider value={{ ...data, setData }}>
      <RouterProvider router={router} />
    </AppContext.Provider>
  );
}

export default App;
