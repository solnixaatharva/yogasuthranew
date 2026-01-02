import { Link } from "react-router-dom";


const ContactStrip = () => {
  return (
    <div className="bg-cream/70 py-6 mt-8">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-neutral-900 font-semibold">Get in touch</div>

        <div className="text-neutral-700">
          Phone:{" "}
          <a href="tel:+918714066177" className="underline">
            +91 87140 66177
          </a>{" "}
          | Email:{" "}
          <a href="mailto:suthrayoga@gmail.com" className="underline">
            suthrayoga@gmail.com
          </a>
        </div>

        <div className="text-neutral-700">
          Follow us: <span className="ml-2">Facebook • Twitter • Youtube</span>
        </div>

        {/* ✅ New button (not in navbar) */}
        <div className="flex justify-center my-10">
          <Link
            to="/contactus"
            className="px-6 py-3 rounded-full font-bold bg-brand text-white hover:opacity-90 transition"
          >
            Contact Us
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ContactStrip;
