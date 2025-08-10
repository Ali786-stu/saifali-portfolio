import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ContactForm() {
  const [searchParams] = useSearchParams();
  const [service, setService] = useState("");

  useEffect(() => {
    const serviceFromUrl = searchParams.get("service");
    if (serviceFromUrl) {
      setService(serviceFromUrl);
    }
  }, [searchParams]);

  return (
    <form className="space-y-4 p-4 max-w-md mx-auto">
      <label className="block">
        Service
        <input
          type="text"
          value={service}
          readOnly
          className="w-full border rounded p-2"
        />
      </label>

      <label className="block">
        Your Name
        <input type="text" className="w-full border rounded p-2" />
      </label>

      <label className="block">
        Message
        <textarea className="w-full border rounded p-2"></textarea>
      </label>

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Send
      </button>
    </form>
  );
}
