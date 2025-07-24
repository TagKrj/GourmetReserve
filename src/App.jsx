import React from "react";
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import AppRouter from "./routes/AppRouter";


function App() {
  return (
    // <div className="min-h-screen bg-primary flex">
    //   {/* Sidebar */}
    //   <Sidebar />

    //   {/* Main Content */}
    //   <div className="flex-1 ml-[240px]">
    //     <Header />
    //   </div>

    // </div>
    <div>
      <AppRouter />
    </div>
  );
}
export default App;
