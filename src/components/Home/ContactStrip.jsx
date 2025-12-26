const ContactStrip = () => {
  return (
    <div className="bg-cream/70 py-6 mt-8">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-neutral-900 font-semibold">Get in touch</div>
        <div className="text-neutral-700">Phone: <a href="tel:+918714066177" className="underline">+91 87140 66177</a> | Email: <a href="mailto:suthrayoga@gmail.com" className="underline">suthrayoga@gmail.com</a></div>
        <div className="text-neutral-700">Follow us: <span className="ml-2">Facebook • Twitter • Youtube</span></div>
      </div>
    </div>
  )
}

export default ContactStrip;