export default function Header() {
  return (
    <header className="bg-yellow-600 text-white py-4 px-6  sm:px-6 lg:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl  md:text-3xl  font-bold">Elegant Jewelry</a>
        <p>Your one-stop shop for luxury jewelry</p>
        <nav className="space-x-4">
          <a href="/" className="hover:underline">Home</a>
          <a href="/shop" className="hover:underline">about</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </nav>
      </div>
    </header>
  );
}