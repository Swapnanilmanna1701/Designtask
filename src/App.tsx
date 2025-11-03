import Frame8 from "./imports/Frame8";
import Frame5 from "./imports/Frame5";
import Frame2121454188 from "./imports/Frame2121454188";
import Frame2121454189 from "./imports/Frame2121454189";
import Features from "./imports/Features";
import Frame2121454190 from "./imports/Frame2121454190";
import Component6 from "./imports/3";
import Frame2121453380 from "./imports/Frame2121453380";
import Footer from "./imports/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      {/* Navigation Bar */}
      <div className="h-[88px] w-full">
        <Frame8 />
      </div>
      
      {/* Hero Section */}
      <div className="h-[800px] w-full">
        <Frame5 />
      </div>
      
      {/* About Section */}
      <div className="min-h-screen w-full">
        <Frame2121454188 />
      </div>
      
      {/* Latest Download & Latest Release Section */}
      <div className="h-[400px] w-full">
        <Frame2121454189 />
      </div>
      
      {/* Features Section */}
      <div className="h-[1200px] w-full">
        <Features />
      </div>
      
      {/* Major Contributors Section */}
      <div className="h-[600px] w-full">
        <Frame2121454190 />
      </div>
      
      {/* Global Users Section */}
      <div className="h-[900px] w-full">
        <Component6 />
      </div>
      
      {/* Organizations & FAQ Section */}
      <div className="w-full">
        <Frame2121453380 />
      </div>
      
      {/* Footer */}
      <div className="h-[300px] w-full">
        <Footer />
      </div>
    </div>
  );
}
