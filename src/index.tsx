import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { Reset } from "styled-reset";
import GlobalStyle from "./GlobalStyle";

const element = document.getElementById("root");
if (element) {
  const root = ReactDOM.createRoot(element);
  root.render(
    <>
      <Reset />
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}
