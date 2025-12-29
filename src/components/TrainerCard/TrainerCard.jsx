// src/components/TrainerCard/TrainerCard.jsx
import { Link } from "react-router-dom";

export default function TrainerCard({ trainer }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      <img
        src={trainer.image}
        alt={trainer.name}
        className="w-full h-56 object-cover"
      />

      <div className="p-5">
        <h3 className="text-xl font-bold text-neutral-800">{trainer.name}</h3>
        <p className="text-sm text-neutral-300 mt-1">{trainer.title}</p>

        <div className="mt-5 flex items-center justify-between">
          <p className="text-xl font-bold text-brand">{trainer.fee}</p>

          {/* you can change this to Book Now / View Profile */}
          <Link
            to={`/trainer/${trainer.id}`}
            className="px-4 py-2 rounded-full font-bold border border-brand text-neutral-800 hover:bg-brand hover:text-white transition"
          >
            VIEW
          </Link>
        </div>
      </div>
    </div>
  );
}
