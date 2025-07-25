import React from "react";
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import AppRouter from "./routes/AppRouter";
import Scr503 from "./pages/503scr";


function App() {
  return (
    <div className="min-h-screen bg-primary flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-[240px]">
        <Header />

        {/* Content with padding-top to account for fixed header */}
        <div className="pt-[70px]">
          < Scr503 />
        </div>
      </div>

    </div>
    // <div>
    //   <AppRouter />
    // </div>
  );
}
export default App;
