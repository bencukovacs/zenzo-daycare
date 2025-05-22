import './globals.css'

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
        <Footer />
      </body>
    </html>
  )
}

function Header() {
  return (
    <header className="bg-cream-50 shadow-sm border-b border-sage-200">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img 
            src="/images/logo/zenzo-logo.png" 
            alt="Zenzo Logo"
            className="w-12 h-12 object-contain"
          />
          <div className="text-2xl font-display font-bold text-sage-800">
            Zenzo Kutyanapközi
          </div>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-sage-700 hover:text-terracotta-600 transition-colors font-medium">Főoldal</a>
          <a href="#" className="text-sage-700 hover:text-terracotta-600 transition-colors font-medium">Szolgáltatások</a>
          <a href="#" className="text-sage-700 hover:text-terracotta-600 transition-colors font-medium">Rólunk</a>
          <a href="#" className="text-sage-700 hover:text-terracotta-600 transition-colors font-medium">Kapcsolat</a>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-sage-800 text-cream-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/images/logo/zenzo-logo.png" 
                alt="Zenzo Logo"
                className="w-10 h-10 object-contain"
              />
              <h3 className="text-xl font-display font-bold">Zenzo Kutyanapközi</h3>
            </div>
            <p className="text-cream-200">
              Természetes környezetben, szeretettel várjuk négylábú barátaikat.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Elérhetőség</h4>
            <p className="text-cream-200 mb-2">📞 +36 (30) 123-4567</p>
            <p className="text-cream-200 mb-2">📧 info@zenzo-kutyanapoozi.hu</p>
            <p className="text-cream-200">📍 Hegyi út 123, Budapest</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Nyitvatartás</h4>
            <p className="text-cream-200 mb-2">Hétfő - Péntek: 7:00 - 19:00</p>
            <p className="text-cream-200 mb-2">Szombat: 8:00 - 16:00</p>
            <p className="text-cream-200">Vasárnap: Zárva</p>
          </div>
        </div>
        <div className="border-t border-sage-700 pt-8 text-center">
          <p className="text-cream-300">
            &copy; 2025 Zenzo Kutyanapközi. Minden jog fenntartva.
          </p>
        </div>
      </div>
    </footer>
  )
}