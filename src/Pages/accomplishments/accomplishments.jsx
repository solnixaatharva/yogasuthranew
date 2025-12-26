import { useMemo, useState } from "react";

const ACCOMPLISHMENTS = [
  {
    title: "International Man of the Millennium",
    description:
      "Awarded by The International Biographical Center of Cambridge, England.",
    imageUrl: "http://yogasuthra.in/images/pop_1.jpg",
  },
  {
    title: "Kerala Sree Award Winner",
    description: "Kerala State Amateur Bodybuilders' Association.",
    imageUrl: "http://yogasuthra.in/images/pop_2.jpg",
  },
  {
    title: "Bharat Shree Award Winner",
    description: "Amateur Bodybuilders' Federation of India.",
    imageUrl: "http://yogasuthra.in/images/pop_3.jpg",
  },
  {
    title: "Indian Yoga Federation",
    description: "Membership of Indian Yoga Federation.",
    imageUrl: "http://yogasuthra.in/images/pop_4.jpg",
  },
  {
    title: "Judge at National Yogashana Championship - 2006",
    description:
      "Jointly conducted by Karnataka Yoga Association & Indian Yoga Federation.",
    imageUrl: "http://yogasuthra.in/images/pop_5.jpg",
  },
  {
    title: "Judge at Karnataka State Yogasana",
    description:
      "Conducted by Sri Adichuchanagiri Yoga and Nature Cure Centre, Bangalore, Karnataka. India.",
    imageUrl: "http://yogasuthra.in/images/pop_6.jpg",
  },
  {
    title:
      "Judge at All India Open Interstate Yogasana Combination Championship - 2004",
    description: "Conducted by Karnataka Yoga Association.",
    imageUrl: "http://yogasuthra.in/images/pop_7.jpg",
  },
  {
    title: "Judge at South Indian Open Yoga Championship 2002",
    description:
      "Conducted by Karnataka Yoga Association at Bangalore, Karnataka. India.",
    imageUrl: "http://yogasuthra.in/images/pop_8.jpg",
  },
  {
    title: "Referee for All India Invitation Yogasana Championship 2002 - 2003",
    description: "Conducted by Indian Yoga Federation.",
    imageUrl: "http://yogasuthra.in/images/pop_9.jpg",
  },
  {
    title: "Judge at Himalaya Yoga Olympiad",
    description: "Conducted by Vivekananda Kendra Yoga Research Foundation.",
    imageUrl: "http://yogasuthra.in/images/pop_10.jpg",
  },
  {
    title: "Certificate of Guru",
    description:
      "Awarded on successful completion of 12 years Kalariyabhyasam.",
    imageUrl: "http://yogasuthra.in/images/pop_11.jpg",
  },
  {
    title: "Member of Kerala Siddha Marma Chikilsa Sanghom",
    description: "Membership of Kerala Siddha Marma Chikilsa Sanghom.",
    imageUrl: "http://yogasuthra.in/images/pop_12.jpg",
  },
  {
    title: "Certificate of Yogacharya",
    description:
      "Certificate issued by Sree Surya Narayana Yoga Ashram. Thalassery, Kerala. India.",
    imageUrl: "http://yogasuthra.in/images/pop_13.jpg",
  },
  {
    title: "Certificate of Brahma Gnanam.",
    description:
      "Course conducted by Vethathiri Maharishi Kundalini Yoga & Kayakalpa Research.",
    imageUrl: "http://yogasuthra.in/images/pop_14.jpg",
  },
  {
    title: "Letter from ISKON(Bangalore), Karnataka, India.",
    description: "",
    imageUrl: "http://yogasuthra.in/images/pop_15.jpg",
  },
  {
    title: "Certificate from Yogachikilsalayam",
    description:
      "Certificate issued to Acharya Ramesh Babu on course completion.",
    imageUrl: "http://yogasuthra.in/images/pop_16.jpg",
  },
  {
    title: "Letter from Amercian Biographical, Inc.",
    description: "",
    imageUrl: "http://yogasuthra.in/images/pop_17.jpg",
  },
  {
    title: "The International Biographical Center of Cambridge, England",
    description: "Nomination for International Man of the Millennium.",
    imageUrl: "http://yogasuthra.in/images/pop_18.jpg",
  },
];

function Modal({ open, onClose, title, imageUrl }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="w-full max-w-4xl overflow-hidden rounded-xl bg-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 border-b px-4 py-3">
          <h3 className="text-base font-semibold text-neutral-900">{title}</h3>
          <button
            onClick={onClose}
            className="rounded px-3 py-1 text-sm text-neutral-700 hover:bg-neutral-100"
          >
            Close
          </button>
        </div>

        <div className="bg-neutral-50 p-4">
          <img
            src={imageUrl}
            alt={title}
            className="mx-auto max-h-[75vh] w-auto rounded"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default function Accomplishments() {
  const [selected, setSelected] = useState(null);

  const items = useMemo(() => ACCOMPLISHMENTS, []);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="mb-6 text-3xl font-extrabold text-brand">
        ACCOMPLISHMENTS
      </h1>

      <p className="mb-8 text-sm text-neutral-600">
        Click “Take a look” to preview each certificate/letter.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.imageUrl}
            className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-neutral-900">
              {item.title}
            </h2>

            {item.description ? (
              <p className="mt-2 text-sm text-neutral-700">{item.description}</p>
            ) : (
              <p className="mt-2 text-sm text-neutral-500"> </p>
            )}

            <div className="mt-4 flex items-center gap-3">
              <button
                type="button"
                onClick={() => setSelected(item)}
                className="text-sm font-medium text-brand underline"
              >
                Take a look
              </button>

              <a
                href={item.imageUrl}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-neutral-600 hover:text-neutral-900"
              >
                Open in new tab
              </a>
            </div>
          </div>
        ))}
      </div>

      <Modal
        open={!!selected}
        onClose={() => setSelected(null)}
        title={selected?.title || ""}
        imageUrl={selected?.imageUrl || ""}
      />
    </div>
  );
}
