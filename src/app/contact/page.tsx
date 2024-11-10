import Footer from "@/components/Footer";
import Header from "@/components/Header";


export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <Header/>
      <main className="flex-grow p-6">
        <div className="max-w-lg mx-auto bg-white shadow-lg p-8 rounded">
          <h1 className="text-3xl font-bold text-center mb-6 text-orange-600">Contact Us</h1>
          <p className="text-center mb-8">We’d love to hear from you! Fill out the form below and we’ll get in touch.</p>
          <form className="space-y-4 ">
            <div>
              <label htmlFor="name" className="block text-sm font-medium  text-orange-600">Name</label>
              <input type="text" id="name" name="name" className="mt-1 p-3 block w-full border border-gray-300 rounded" placeholder="Your Name" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-orange-600">Email</label>
              <input type="email" id="email" name="email" className="mt-1 p-3 block w-full border border-gray-300 rounded" placeholder="Your Email" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-orange-600">Message</label>
              <textarea id="message" name="message" rows="4" className="mt-1 p-3 block w-full border border-gray-300 rounded" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="w-full bg-yellow-600 text-white py-3 rounded hover:bg-yellow-700 transition duration-200">Send Message</button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}