export default function Home() {
  return (
    <main className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <section 
        id="home"
        className="relative py-32 bg-amber-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-8">
            <img 
              src="/images/logo/zenzo-logo.png" 
              alt="Zenzo Kutyanapközi Logo"
              className="mx-auto w-48 h-48 object-contain"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-amber-900">
            Zenzo Kutyanapközi
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light text-amber-800">
            Természetes környezetben, szeretettel várjuk négylábú barátaikat
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-orange-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold text-amber-900 mb-6">
                Tapasztalat és Szeretet
              </h2>
              <p className="text-lg text-amber-800 mb-6 leading-relaxed">
                A Zenzo Kutyanapközit 2025-ben alapítottam. 
                Veszprém közelében található létesítmény természetes környezetet biztosít 
                kedvenceinek a játékhoz és pihenéshez.
              </p>
              <p className="text-lg text-amber-800 leading-relaxed">
                Magas szintű tapasztalattal biztosított, hogy minden kutya egyéni figyelmet 
                és szeretetet kapjon, miközben szocializálódhat fajtársaival.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/images/hero/dogs-playing.jpg" 
                alt="Kutyák játszanak a természetben"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-300 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-amber-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center text-amber-900 mb-16">
            Szolgáltatásaink
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon="/images/services/daycare-icon.svg"
              title="Nappali Gondozás"
              description="Teljes napos felügyelet és játék természetes környezetben. Tapasztalt gondozó biztosítja kedvence biztonságát."
            />
            <ServiceCard
              icon="/images/services/training-icon.svg"
              title="Kiképzés"
              description="Alapvető engedelmességi és viselkedési tréning tapasztalt kutyakiképzővel."
            />
            <ServiceCard
              icon="/images/services/outdoor-icon.svg"
              title="Szabadtéri Programok"
              description="Túrák, játékok és szocializációs programok a gyönyörű hegyi környezetben."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-orange-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold text-amber-900 mb-8">
            Látogasson el hozzánk!
          </h2>
          <p className="text-lg text-amber-800 mb-8">
            Szeretettel várjuk Önt és négylábú barátját a Csatár-hegyen.
          </p>
          <div className="bg-amber-50 p-8 rounded-xl shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-amber-900 mb-4">Elérhetőség</h3>
                <p className="text-amber-800 mb-2">📞 +36 (30) 123-4567</p>
                <p className="text-amber-800 mb-2">📧 info@zenzo-dogcare.hu</p>
                <p className="text-amber-800">📍 Hegyi út 123, Budapest</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-amber-900 mb-4">Nyitvatartás</h3>
                <p className="text-amber-800 mb-2">Hétfő - Péntek: 7:00 - 19:00</p>
                <p className="text-amber-800 mb-2">Szombat: Zárva</p>
                <p className="text-amber-800">Vasárnap: Zárva</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-orange-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-orange-200">
      <div className="mb-6">
        <img 
          src={icon} 
          alt={`${title} ikon`}
          className="w-16 h-16 mx-auto"
        />
      </div>
      <h3 className="text-xl font-display font-semibold text-amber-900 mb-4 text-center">
        {title}
      </h3>
      <p className="text-amber-800 text-center leading-relaxed">
        {description}
      </p>
    </div>
  )
}