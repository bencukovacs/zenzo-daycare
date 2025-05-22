import './globals.css'

export const metadata = {
  title: 'Paws Daycare - Premium Dog Care Services',
  description: 'Professional dog daycare services with loving care for your furry family members.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">
          🐕 Paws Daycare
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p>&copy; 2025 Paws Daycare. All rights reserved.</p>
        <p className="mt-2 text-gray-400">
          📞 (555) 123-4567 | 📧 info@pawsdaycare.com
        </p>
      </div>
    </footer>
  )
}