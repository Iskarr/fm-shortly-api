"use client";

import { useState } from "react";

const LinkShortener = () => {
  const [url, setUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("URL to shorten:", url);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 -mt-8 mb-12">
      <div className="max-w-4xl mx-auto">
        <div className="bg-(--DarkViolet) p-6 md:p-10 rounded-lg shadow-lg link-bg-img">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row gap-4"
          >
            <input
              type="text"
              placeholder="Shorten a link here..."
              className="flex-grow py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <button
              type="submit"
              className="bg-(--Cyan) text-white font-medium py-3 px-6 rounded-lg hover:bg-teal-600 transition-colors"
            >
              Shorten It!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LinkShortener;
