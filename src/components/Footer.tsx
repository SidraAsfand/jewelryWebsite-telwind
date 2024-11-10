export default function Footer() {
  return (
    <footer className="bg-orange-400 text-white py-6 mt-40">
      <div className="container mx-auto flex flex-col items-center space-y-4 text-center sm:flex-row sm:justify-between sm:space-y-0">
        <p className="text-sm ">© {new Date().getFullYear()} Elegant Jewelry. All rights reserved.</p>
        <div className="space-x-4">
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
          <a href="/terms" className="hover:underline">Terms of Service</a>
        </div>
      </div>
    </footer>
    
  );
}