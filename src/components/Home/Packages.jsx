import { useEffect, useState } from "react";

const PACKAGE_TYPES = [
  { key: "daily", label: "Daily Package", priceText: "₹500 / day" },
  { key: "weekly", label: "Weekly Package", priceText: "₹2500 / week" },
  { key: "monthly", label: "Monthly Package", priceText: "₹8000 / month" },
];

const Packages = () => {
  const [services, setServices] = useState([]);

  // separate dropdown state per package card
  const [selectedByPackage, setSelectedByPackage] = useState({
    daily: "",
    weekly: "",
    monthly: "",
  });

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error(err));
  }, []);

  const getSelectedService = (pkgKey) => {
    const id = selectedByPackage[pkgKey];
    if (!id) return null;
    return services.find((s) => String(s.id) === String(id)) ?? null;
  };

  const onChangeService = (pkgKey, value) => {
    setSelectedByPackage((prev) => ({ ...prev, [pkgKey]: value }));
  };

  return (
    <section className="max-w-screen-xl mx-auto px-4 py-10">
      <h3 className="text-3xl font-extrabold text-center text-brand mb-8">
        Our Packages
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PACKAGE_TYPES.map((pkg) => {
          const selectedService = getSelectedService(pkg.key);

          return (
            <div key={pkg.key} className="bg-white rounded-2xl shadow-xl p-5">
              <h4 className="text-xl font-bold text-neutral-800">
                {pkg.label}
              </h4>

              <p className="text-brand font-extrabold text-2xl mt-2">
                {pkg.priceText}
              </p>

              {/* dropdown inside each package */}
              <div className="mt-4">
                <label className="block text-sm font-semibold text-neutral-800 mb-2">
                  Choose a service
                </label>

                <select
                  className="select select-bordered w-full bg-white"
                  value={selectedByPackage[pkg.key]}
                  onChange={(e) => onChangeService(pkg.key, e.target.value)}
                >
                  <option value="">Select a service...</option>
                  {services.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* show details for the selected service (inside the card) */}
              {selectedService && (
                <div className="mt-5">
                  <img
                    src={selectedService.img}
                    alt={selectedService.title}
                    className="w-full h-40 object-cover rounded-xl"
                  />

                  <h5 className="mt-3 text-lg font-bold text-neutral-800 capitalize">
                    {selectedService.title}
                  </h5>

                  <p className="text-sm text-neutral-700 mt-1 line-clamp-3">
                    {selectedService.dsc}
                  </p>

                  <button className="btn btn-outline mt-4 w-full">
                    Book {pkg.label}
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Packages;
