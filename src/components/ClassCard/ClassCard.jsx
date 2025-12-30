import { Link } from "react-router-dom";

export default function ClassCard({ cls }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border">
      <div className="bg-gradient-to-r from-orange-400 to-pink-500 p-4">
        <h3 className="text-white text-xl font-extrabold">{cls.name}</h3>
        <p className="text-white/90 text-sm mt-1">{cls.subtitle}</p>
      </div>

      <div className="p-5">
        <img
          src={cls.image}
          alt={cls.name}
          className="w-full h-44 object-cover rounded-xl"
        />

        <div className="mt-4 flex items-center justify-between">
          <p className="text-2xl font-extrabold text-brand">{cls.price}</p>

          <Link
            to={`/classes/${cls.id}`}
            className="px-5 py-2 rounded-full font-bold bg-brand text-white hover:opacity-90 transition"
          >
            BOOK
          </Link>
        </div>
      </div>
    </div>
  );
}
