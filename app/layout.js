import './globals.css'
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: 'Zenzo Kutyanapközi - Prémium Kutyagondozás',
  description: 'Természetes hegyi környezetben, szeretettel várjuk négylábú barátaikat.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="hu">
      <body className="font-body">
        <Header />
        {children}
        <Analytics/>
        <Footer />
      </body>
    </html>
  )
}

function Header() {
  return (
    <header className="bg-amber-50 shadow-sm border-b border-amber-200">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img 
            src="/images/logo/zenzo-logo.png" 
            alt="Zenzo Logo"
            className="w-12 h-12 object-contain"
          />
          <div className="text-2xl font-display font-bold text-amber-900">
            Zenzo Kutyanapközi
          </div>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="text-amber-800 hover:text-amber-900 transition-colors font-medium">Főoldal</a>
          <a href="#services" className="text-amber-800 hover:text-amber-900 transition-colors font-medium">Szolgáltatások</a>
          <a href="#about" className="text-amber-800 hover:text-amber-900 transition-colors font-medium">Rólunk</a>
          <a href="#contact" className="text-amber-800 hover:text-amber-900 transition-colors font-medium">Kapcsolat</a>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-amber-900 text-amber-50 py-12">
        <div className="border-amber-500 text-center">
          <p className="text-amber-200">
            &copy; 2025 Zenzo Kutyanapközi. Minden jog fenntartva.
          </p>
        </div>
    </footer>
  )
}