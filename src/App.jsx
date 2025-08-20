import React from "react";

import AppRoutes from "./routes/route";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <ToastContainer autoClose={3000} position="bottom-right"/>
      <AppRoutes />
    </div>
  );
}

export default App;