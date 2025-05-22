export default function Home() {
  return (
    <main className="min-h-screen bg-cream-50">
      {/* Hero Section */}
      <section 
        className="relative bg-sage-800 py-32 bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(63, 69, 62, 0.7), rgba(63, 69, 62, 0.7)), url('/images/hero/mountain-bg.jpg')"
        }}
      >
        <div className="max-w-6xl mx-auto px-4 text-center text-cream-50">
          <div className="mb-8">
            <img 
              src="/images/logo/zenzo-logo.png" 
              alt="Zenzo Kutyanapközi Logo"
              className="mx-auto w-48 h-48 object-contain"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-cream-100">
            Zenzo Kutyanapközi
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Természetes környezetben, szeretettel várjuk négylábú barátaikat
          </p>
          <button className="bg-terracotta-600 hover:bg-terracotta-700 text-cream-50 px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
            Tudjon meg többet
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold text-sage-800 mb-6">
                Tapasztalat és Szeretet
              </h2>
              <p className="text-lg text-sage-700 mb-6 leading-relaxed">
                A Zenzo Kutyanapköziben több mint 10 éve foglalkozunk kutyák gondozásával. 
                Hegyek ölelésében található létesítményünk természetes környezetet biztosít 
                kedvenceinek a játékhoz és pihenéshez.
              </p>
              <p className="text-lg text-sage-700 leading-relaxed">
                Szakképzett munkatársaink biztosítják, hogy minden kutya egyéni figyelmet 
                és szeretetet kapjon, miközben szocializálódhat fajtársaival.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/images/hero/dogs-playing.jpg" 
                alt="Kutyák játszanak a természetben"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-terracotta-500 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-sage-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center text-sage-800 mb-16">
            Szolgáltatásaink
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon="/images/services/daycare-icon.svg"
              title="Nappali Gondozás"
              description="Teljes napos felügyelet és játék természetes környezetben. Szakképzett gondozók biztosítják kedvence biztonságát."
            />
            <ServiceCard
              icon="/images/services/training-icon.svg"
              title="Kiképzés"
              description="Alapvető engedelmességi és viselkedési tréning tapasztalt kutyakiképzőkkel."
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
      <section className="py-20 bg-terracotta-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold text-sage-800 mb-8">
            Látogasson el hozzánk!
          </h2>
          <p className="text-lg text-sage-700 mb-8">
            Szeretettel várjuk Önt és négylábú barátját a hegyek ölelésében.
          </p>
          <div className="bg-cream-100 p-8 rounded-xl shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-sage-800 mb-4">Elérhetőség</h3>
                <p className="text-sage-700 mb-2">📞 +36 (30) 123-4567</p>
                <p className="text-sage-700 mb-2">📧 info@zenzo-kutyanapoozi.hu</p>
                <p className="text-sage-700">📍 Hegyi út 123, Budapest</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-sage-800 mb-4">Nyitvatartás</h3>
                <p className="text-sage-700 mb-2">Hétfő - Péntek: 7:00 - 19:00</p>
                <p className="text-sage-700 mb-2">Szombat: 8:00 - 16:00</p>
                <p className="text-sage-700">Vasárnap: Zárva</p>
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
    <div className="bg-cream-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-sage-200">
      <div className="mb-6">
        <img 
          src={icon} 
          alt={`${title} ikon`}
          className="w-16 h-16 mx-auto"
        />
      </div>
      <h3 className="text-xl font-display font-semibold text-sage-800 mb-4 text-center">
        {title}
      </h3>
      <p className="text-sage-700 text-center leading-relaxed">
        {description}
      </p>
    </div>
  )
}