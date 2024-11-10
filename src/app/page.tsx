import Header from "@/components/Header";


          export default function Hero() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
    <Header/>
    
    <section className="relative bg-cover bg-center bg-no-repeat h-screen mt-5" style={{ backgroundImage: "url('/images/ring3.jpeg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold">Discover Elegant Jewelry</h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl">Shop our stunning collection of handcrafted jewelry that brings elegance to every look.</p>
        <a href="/shop" className="mt-8 bg-yellow-600 hover:bg-yellow-700 text-white py-3 px-6 rounded text-lg transition duration-200">
          Shop Now
        </a>
      </div>
    </section>
    

          </div>
  );
}
       
      
   
  