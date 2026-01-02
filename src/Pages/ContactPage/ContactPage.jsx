const ContactPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-extrabold text-center text-brand">
        CONTACT US
      </h1>

      <p className="text-center text-gray-600 mt-3">
        This page is only accessible from the Home button (not from the navbar).
      </p>

      {/* Later we will replace this content with Booking Calendar */}
      <div className="mt-8 border rounded-lg p-6 bg-white">
        <p className="text-gray-700">
          Phone: <a className="underline" href="tel:+918714066177">+91 87140 66177</a>
        </p>
        <p className="text-gray-700 mt-2">
          Email: <a className="underline" href="mailto:suthrayoga@gmail.com">suthrayoga@gmail.com</a>
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
