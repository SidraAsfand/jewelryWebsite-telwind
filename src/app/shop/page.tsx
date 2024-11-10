import Footer from "@/components/Footer";
import Gallery from "@/components/gallery";
import Header from "@/components/Header";


export default function shop() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <Header/>
      <header className="bg-yellow-600 text-white p-4 text-center">
        <h1 className="text-3xl font-bold">Our Jewelry Collection</h1>
      </header>
      <main className="p-6">
        <Gallery/>
      </main>
      <Footer/>
    </div>
  );
}