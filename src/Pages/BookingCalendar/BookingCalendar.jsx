import { useEffect, useMemo, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const timeSlots = ["06:00", "07:00", "08:00", "09:00", "10:00", "17:00", "18:00", "19:00"];

const toDateKey = (date) => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
};

const BookingCalendar = () => {
  const [servicesData, setServicesData] = useState([]);
  const [serviceId, setServiceId] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        setServicesData(data);
        if (data?.length) setServiceId(String(data[0].id));
      });
  }, []);

  const selectedService = useMemo(
    () => servicesData.find((s) => String(s.id) === String(serviceId)),
    [servicesData, serviceId]
  );

  const dateKey = useMemo(() => toDateKey(selectedDate), [selectedDate]);

  const handleBook = () => {
    if (!selectedService || !selectedTime) return;

    const booking = {
      serviceId: selectedService.id,
      serviceTitle: selectedService.title,
      dateKey,
      time: selectedTime,
      createdAt: new Date().toISOString(),
    };

    const prev = JSON.parse(localStorage.getItem("bookings") || "[]");
    localStorage.setItem("bookings", JSON.stringify([booking, ...prev]));
    setSelectedTime("");
    alert("Booked successfully!");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900">
          Schedule your service
        </h1>
        <p className="text-neutral-600 mt-3">
          Check out our availability and book the date and time that works for you
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Service + calendar */}
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <p className="text-sm font-semibold text-neutral-700">Choose a service</p>

          <select
            className="select select-bordered w-full mt-3"
            value={serviceId}
            onChange={(e) => {
              setServiceId(e.target.value);
              setSelectedTime("");
            }}
          >
            {servicesData.map((s) => (
              <option key={s.id} value={String(s.id)}>
                {s.title}
              </option>
            ))}
          </select>

          {selectedService?.img && (
            <img
              src={selectedService.img}
              alt={selectedService.title}
              className="w-full h-44 object-cover rounded-xl mt-5"
            />
          )}

          <div className="mt-6">
            <p className="text-sm font-semibold text-neutral-700">Select a date</p>
            <div className="mt-3">
              <Calendar
                value={selectedDate}
                onChange={(d) => {
                  setSelectedDate(d);
                  setSelectedTime("");
                }}
                minDate={new Date()}
              />
            </div>
            <p className="text-xs text-neutral-500 mt-3">Selected: {dateKey}</p>
          </div>
        </div>

        {/* Times */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div>
              <h2 className="text-xl font-extrabold text-neutral-900">Available times</h2>
              <p className="text-sm text-neutral-600 mt-1">
                {selectedService ? selectedService.title : "Loading..."} • {dateKey}
              </p>
            </div>

            <button
              onClick={handleBook}
              disabled={!selectedTime || !selectedService}
              className="px-6 py-3 rounded-full font-bold bg-brand text-white disabled:opacity-40"
            >
              Book now
            </button>
          </div>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {timeSlots.map((t) => (
              <button
                key={t}
                onClick={() => setSelectedTime(t)}
                className={[
                  "border rounded-xl py-3 font-bold",
                  selectedTime === t
                    ? "bg-brand text-white border-brand"
                    : "bg-white text-neutral-800 hover:bg-neutral-50",
                ].join(" ")}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCalendar;
