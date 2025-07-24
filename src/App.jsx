import React from "react";
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import AppRouter from "./routes/AppRouter";
import ButtonPrimary from "./components/ButtonPrimary";


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
          {/* Test Button */}
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">Button Test - 3 Cases</h2>
            <div className="space-y-6">

              {/* Case 1: Chỉ có text */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Case 1: Chỉ có Text</h3>
                <div className="space-y-2">
                  <ButtonPrimary variant="primary">
                    予約追加
                  </ButtonPrimary>
                  <ButtonPrimary variant="default">
                    Default Button
                  </ButtonPrimary>
                </div>
              </div>

              {/* Case 2: Text + Icon bên phải */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Case 2: Text + Icon bên phải</h3>
                <div className="space-y-2">
                  <ButtonPrimary
                    variant="primary"
                    icon={<span>→</span>}
                    iconPosition="right"
                  >
                    Next Step
                  </ButtonPrimary>
                  <ButtonPrimary
                    variant="default"
                    icon={<span>▼</span>}
                    iconPosition="right"
                  >
                    Show More
                  </ButtonPrimary>
                </div>
              </div>

              {/* Case 3: Icon bên trái + Text */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Case 3: Icon bên trái + Text</h3>
                <div className="space-y-2">
                  <ButtonPrimary
                    variant="primary"
                    icon={<span>+</span>}
                    iconPosition="left"
                  >
                    予約追加
                  </ButtonPrimary>
                  <ButtonPrimary
                    variant="default"
                    icon={<span>✓</span>}
                    iconPosition="left"
                  >
                    Save Changes
                  </ButtonPrimary>
                </div>
              </div>

              {/* Case 4: Button Outline - Mới */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Case 4: Button Outline (Viền cam)</h3>
                <div className="space-y-2">
                  <ButtonPrimary variant="outline">
                    予約追加
                  </ButtonPrimary>
                  <ButtonPrimary
                    variant="outline"
                    icon={<span>+</span>}
                    iconPosition="left"
                  >
                    Add Item
                  </ButtonPrimary>
                  <ButtonPrimary
                    variant="outline"
                    icon={<span>→</span>}
                    iconPosition="right"
                  >
                    Continue
                  </ButtonPrimary>
                </div>
              </div>

              {/* Case 5: Button Size Comparison */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Case 5: Size Comparison (Medium vs Small)</h3>

                <div className="mb-4">
                  <h4 className="text-md font-medium mb-2">Size Medium (Mặc định):</h4>
                  <div className="flex flex-wrap gap-3">
                    <ButtonPrimary variant="primary" size="medium">
                      予約追加
                    </ButtonPrimary>
                    <ButtonPrimary variant="outline" size="medium" icon={<span>+</span>}>
                      Add Item
                    </ButtonPrimary>
                    <ButtonPrimary variant="default" size="medium" icon={<span>→</span>} iconPosition="right">
                      Continue
                    </ButtonPrimary>
                  </div>
                </div>

                <div>
                  <h4 className="text-md font-medium mb-2">Size Small:</h4>
                  <div className="flex flex-wrap gap-3">
                    <ButtonPrimary variant="primary" size="small">
                      予約追加
                    </ButtonPrimary>
                    <ButtonPrimary variant="outline" size="small" icon={<span>+</span>}>
                      Add Item
                    </ButtonPrimary>
                    <ButtonPrimary variant="default" size="small" icon={<span>→</span>} iconPosition="right">
                      Continue
                    </ButtonPrimary>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
    // <div>
    //   <AppRouter />
    // </div>
  );
}
export default App;
