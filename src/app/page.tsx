import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

export default function Home() {
  return (
    <>
      <div className="">
        <div className="fixed -mt-16 w-full">
          <Navbar />
        </div>
        <div className="mt-16">
          <div id="home" className="h-screen bg-gray-200">
            <h1 className="text-4xl">Home Section</h1>
          </div>
          <div id="about" className="h-screen bg-gray-300">
            <h1 className="text-4xl">About Section</h1>
          </div>
          <div id="projects" className="h-screen bg-gray-400">
            <h1 className="text-4xl">Projects Section</h1>
          </div>
          <div id="contact" className="h-screen bg-gray-500">
            <h1 className="text-4xl">Contact Section</h1>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
