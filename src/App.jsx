import React from "react";
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";


function App() {
  return (
    <div className="min-h-screen bg-primary flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">
        <Header />
      </div>

    </div>
  );
}
export default App;
