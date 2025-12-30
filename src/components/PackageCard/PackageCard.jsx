// src/components/PackageCard/PackageCard.jsx
export default function PackageCard({ pack }) {
  return (
    <div
      className={[
        "bg-white rounded-2xl shadow-xl overflow-hidden border p-6",
        pack.featured ? "border-brand" : "",
      ].join(" ")}
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-extrabold text-neutral-800">{pack.name}</h3>
          <p className="text-sm text-neutral-500 mt-1">{pack.duration}</p>
        </div>

        <p className="text-2xl font-extrabold text-brand">{pack.price}</p>
      </div>

      <ul className="mt-4 space-y-2 text-sm text-neutral-600 list-disc ml-5">
        {pack.features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>

      <button className="mt-6 w-full px-4 py-2 rounded-xl font-bold bg-brand text-white hover:opacity-90 transition">
        Choose Plan
      </button>
    </div>
  );
}
