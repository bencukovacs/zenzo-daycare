export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to Paws Daycare
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            A safe, fun, and loving environment for your furry family members
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 transition-colors">
            Learn More
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Full Day Care</h3>
              <p className="text-gray-600">
                Professional supervision and playtime for your dog while you're at work
              </p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Half Day Care</h3>
              <p className="text-gray-600">
                Perfect for dogs who need some socialization but prefer shorter stays
              </p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Training Sessions</h3>
              <p className="text-gray-600">
                Basic obedience and behavioral training with certified trainers
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}