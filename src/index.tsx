import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";

const element = document.getElementById("root");
if (element) {
  const root = ReactDOM.createRoot(element);
  root.render(<RouterProvider router={router} />);
}
