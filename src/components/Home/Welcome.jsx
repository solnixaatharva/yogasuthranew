const Welcome = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <img src="http://yogasuthra.in/images/yoga1.jpg" alt="Yogasuthra" className="w-full rounded-lg shadow-md object-cover" />
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-neutral-900 mb-4">Welcome to Yogasuthra</h2>
          <p className="text-neutral-700 mb-4">Yogasuthra is a time-tested methodology used for generations, combining Siddha vaidya, naturopathy, Ayurveda and Marma Chikilsa to prevent and cure chronic diseases. Our treatments focus on natural approaches and yogic principles for overall wellbeing.</p>
          <p className="text-neutral-700 mb-6">We treat with and without medicine and use traditional therapies for chronic and acute conditions. Call or visit our site for details on packages and consultations.</p>
          <div className="flex gap-4">
            <a href="/yogasuthra" className="px-4 py-2 rounded bg-brand text-white font-semibold">Learn more</a>
            <a href="/contactus" className="px-4 py-2 rounded border border-neutral-300 text-neutral-800">Contact us</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Welcome;