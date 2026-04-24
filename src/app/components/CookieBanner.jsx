import { useState } from "react";

export default function CookieBanner() {
  const [accepted, setAccepted] = useState(
    localStorage.getItem("cookiesAccepted")
  );

  if (accepted) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-white p-4 flex justify-between items-center z-50">
      <p className="text-sm">
        Este site utiliza cookies para melhorar sua experiência.
      </p>

      <button
        onClick={() => {
          localStorage.setItem("cookiesAccepted", "true");
          setAccepted(true);
        }}
        className="bg-green-500 px-4 py-2 rounded"
      >
        Aceitar
      </button>
    </div>
  );
}