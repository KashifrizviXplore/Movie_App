import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <AppRoutes />
    </div>
  );
};

export default App;
