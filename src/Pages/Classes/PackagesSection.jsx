import { useState } from "react";

const PACKAGES = [
  { id: "daily", title: "Daily Package", price: "₹500 / day" },
  { id: "weekly", title: "Weekly Package", price: "₹2500 / week" },
  { id: "monthly", title: "Monthly Package", price: "₹8000 / month" },
];

const SERVICES = ["Yoga Classes", "Meditation", "Therapy Yoga", "Pranayama"];

function PackageCard({ title, price, value, onChange }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl px-8 py-8">
      <h3 className="text-xl font-extrabold text-neutral-800">{title}</h3>
      <p className="text-3xl font-extrabold text-brand mt-3">{price}</p>

      <div className="mt-8">
        <p className="text-sm font-semibold text-neutral-700">Choose a service</p>

        <select
          className="select select-bordered w-full mt-3"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="" disabled>
            Select a service...
          </option>

          {SERVICES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default function PackagesSection() {
  const [selected, setSelected] = useState({ daily: "", weekly: "", monthly: "" });

  return (
    <section className="max-w-7xl mx-auto px-4 mt-10">
      <h2 className="text-4xl font-extrabold text-center text-brand">
        Our Packages
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        {PACKAGES.map((p) => (
          <PackageCard
            key={p.id}
            title={p.title}
            price={p.price}
            value={selected[p.id]}
            onChange={(val) => setSelected((prev) => ({ ...prev, [p.id]: val }))}
          />
        ))}
      </div>
    </section>
  );
}
