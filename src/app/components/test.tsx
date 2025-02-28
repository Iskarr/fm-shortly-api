"use client";

import { useState } from "react";

const LinkShortener = () => {
  const [url, setUrl] = useState("");
  const [shortenedLinks, setShortenedLinks] = useState([
    // Example data - you would normally get this from your API
    {
      originalUrl: "https://www.frontendmentor.io",
      shortUrl: "https://rel.ink/k4lKyk",
    },
    {
      originalUrl: "https://twitter.com/frontendmentor",
      shortUrl: "https://rel.ink/gxOXp9",
    },
  ]);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate URL input
    if (!url.trim()) {
      setError("Please add a link");
      return;
    }

    // Simple URL validation
    const urlPattern =
      /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    if (!urlPattern.test(url)) {
      setError("Please enter a valid URL");
      return;
    }

    setError("");

    // In a real app, you would call your API here
    // This is just a demo that adds a fake shortened URL
    const newShortenedLink = {
      originalUrl: url,
      shortUrl: `https://rel.ink/${Math.random().toString(36).substring(2, 8)}`,
    };

    setShortenedLinks([newShortenedLink, ...shortenedLinks]);
    setUrl("");
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);

    // Create a new array with the copied status updated
    const updatedLinks = shortenedLinks.map((link, i) => {
      if (i === index) {
        return { ...link, copied: true };
      } else {
        return { ...link, copied: false };
      }
    });

    setShortenedLinks(updatedLinks);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 -mt-8 mb-12">
      <div className="max-w-4xl mx-auto">
        <div className="bg-(--DarkViolet) p-6 md:p-10 rounded-lg shadow-lg link-bg-img">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row gap-4"
          >
            <div className="flex-grow relative">
              <input
                type="text"
                placeholder="Shorten a link here..."
                className={`w-full py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-(--Cyan) ${
                  error ? "border-2 border-red-500 placeholder-red-500" : ""
                }`}
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              {error && (
                <p className="text-red-500 text-sm italic absolute -bottom-6 left-0">
                  {error}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="bg-(--Cyan) text-white font-medium py-3 px-6 rounded-lg hover:opacity-70 transition-colors"
            >
              Shorten It!
            </button>
          </form>
        </div>

        {/* Shortened URLs list */}
        <div className="mt-6 space-y-4">
          {shortenedLinks.map((link, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow p-4 flex flex-col md:flex-row md:items-center md:justify-between"
            >
              <p className="text-gray-800 truncate border-b pb-3 md:pb-0 md:border-0">
                {link.originalUrl}
              </p>

              <div className="flex flex-col md:flex-row items-start md:items-center mt-3 md:mt-0 gap-3">
                <p className="text-(--Cyan) font-medium">{link.shortUrl}</p>
                <button
                  onClick={() => copyToClipboard(link.shortUrl, index)}
                  className={`py-2 px-6 rounded-lg text-white font-medium w-full md:w-auto ${
                    link.copied
                      ? "bg-(--DarkViolet)"
                      : "bg-(--Cyan) hover:opacity-70"
                  }`}
                >
                  {link.copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LinkShortener;
