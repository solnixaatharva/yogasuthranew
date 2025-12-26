const Packages = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-8">
      <h3 className="text-2xl font-semibold mb-4">Our Packages</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded shadow p-4">
          <img src="http://yogasuthra.in/images/packages.jpg" alt="Packages" className="w-full rounded mb-3" />
          <h4 className="font-semibold">Customized Programs</h4>
          <p className="text-neutral-700 text-sm">Programs tailored to specific health needs.</p>
        </div>
        <div className="bg-white rounded shadow p-4">
          <img src="http://yogasuthra.in/images/certificate_1.jpg" alt="Certificate" className="w-full rounded mb-3" />
          <h4 className="font-semibold">Certification</h4>
          <p className="text-neutral-700 text-sm">Recognized accomplishments and certifications.</p>
        </div>
        <div className="bg-white rounded shadow p-4">
          <img src="http://yogasuthra.in/images/yogi.png" alt="Founder" className="w-full rounded mb-3" />
          <h4 className="font-semibold">Founder</h4>
          <p className="text-neutral-700 text-sm">About our founder and his approach to Yogasuthra.</p>
        </div>
      </div>
    </section>
  )
}

export default Packages;