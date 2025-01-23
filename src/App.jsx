import React from "react";
import { AuthProvider } from "./auth/AuthProvider";
import AppRouter from "./routes/Router";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;