"use client";

import { useState, useEffect } from "react";

interface ShortenedLink {
  originalUrl: string;
  shortUrl: string;
  copied: boolean;
}

const LinkShortener = () => {
  const [url, setUrl] = useState("");
  const [shortenedLinks, setShortenedLinks] = useState<ShortenedLink[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [inputError, setInputError] = useState("");

  // Load shortened links from localStorage when component mounts
  useEffect(() => {
    const savedLinks = localStorage.getItem("shortenedLinks");
    if (savedLinks) {
      try {
        // Parse the saved links and initialize all as not copied
        const links = JSON.parse(savedLinks);
        setShortenedLinks(
          links.map((link: ShortenedLink) => ({
            ...link,
            copied: false,
          }))
        );
      } catch (err) {
        console.error("Error loading links from localStorage:", err);
      }
    }
  }, []);

  // Save to localStorage whenever shortenedLinks changes
  useEffect(() => {
    if (shortenedLinks.length > 0) {
      localStorage.setItem("shortenedLinks", JSON.stringify(shortenedLinks));
    }
  }, [shortenedLinks]);

  // Function to validate URL format
  const isValidUrl = (urlString: string) => {
    try {
      // Try to construct a URL object - this will throw for invalid URLs
      new URL(urlString);
      return true;
    } catch (err) {
      return false;
    }
  };

  const validateInput = (value: string) => {
    if (!value.trim()) {
      setInputError("Please add a link");
      return false;
    } else if (!isValidUrl(value)) {
      setInputError("Valid url required");
      return false;
    }
    setInputError("");
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit clicked");

    // Validate the URL first
    if (!validateInput(url)) {
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      console.log("Attempting to shorten URL:", url);
      // Call the URL shortening service
      const response = await fetch(
        "https://shortly-api-alpha.vercel.app/api/shorten",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ url }),
        }
      );

      // Parse the JSON response
      const result = await response.json();

      // Check if the request was successful
      if (result.success && result.shortUrl) {
        console.log("URL shortened successfully:", result.shortUrl);
        console.log("Full response:", result);

        // Add the new shortened link to the list
        const newLinks = [
          {
            originalUrl: result.originalUrl || url,
            shortUrl: result.shortUrl,
            copied: false,
          },
          ...shortenedLinks,
        ];

        setShortenedLinks(newLinks);

        setUrl("");
      } else {
        console.error("URL shortening failed:", result.error);
        setError(result.error || "Failed to shorten URL");
      }
    } catch (err) {
      console.error("Exception while shortening URL:", err);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
      console.log("URL shortening process completed");
    }
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);

    const updatedLinks = shortenedLinks.map((link, i) => {
      if (i === index) {
        return { ...link, copied: true };
      } else {
        return { ...link, copied: false };
      }
    });

    setShortenedLinks(updatedLinks);
  };

  const clearAllLinks = () => {
    setShortenedLinks([]);
    localStorage.removeItem("shortenedLinks");
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 -mt-8 mb-12">
      <div className="max-w-4xl mx-auto">
        {/* Form Section */}
        <div className="bg-(--DarkViolet) p-6 md:p-10 rounded-lg shadow-lg link-bg-img">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row gap-4"
          >
            <div className="flex-grow flex flex-col">
              <input
                type="text"
                placeholder="Shorten a link here..."
                className={`w-full py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white
                  ${inputError ? "border-2 border-red-500" : ""}`}
                value={url}
                onChange={(e) => {
                  setUrl(e.target.value);
                  // Clear error when user starts typing
                  if (inputError) {
                    setInputError("");
                  }
                }}
                onBlur={() => {
                  // Validate on blur for a better user experience
                  if (url.trim()) {
                    validateInput(url);
                  }
                }}
                disabled={isLoading}
              />
              {inputError && (
                <p className="text-red-500 text-sm mt-1">{inputError}</p>
              )}
            </div>
            <button
              type="submit"
              className="bg-(--Cyan) text-white font-medium py-3 px-6 rounded-lg hover:bg-teal-600 transition-colors disabled:bg-gray-400"
              disabled={isLoading}
            >
              {isLoading ? "Shortening..." : "Shorten It!"}
            </button>
          </form>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>

        {/* Links Container - Ensuring proper spacing */}
        <div className="mt-6 space-y-4 w-full mb-32">
          {shortenedLinks.length > 0 && (
            <div className="flex justify-end mb-2">
              <button
                onClick={clearAllLinks}
                className="text-sm text-red-500 hover:text-red-700"
              >
                Clear All History
              </button>
            </div>
          )}

          {shortenedLinks.map((link, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow p-4 flex flex-col md:flex-row md:items-center md:justify-between w-full"
            >
              <p className="text-gray-800 truncate border-b pb-3 md:pb-0 md:border-0">
                {link.originalUrl}
              </p>

              <div className="flex flex-col md:flex-row items-start md:items-center mt-3 md:mt-0 gap-3">
                <p className="text-cyan-400 font-medium">{link.shortUrl}</p>
                <button
                  onClick={() => copyToClipboard(link.shortUrl, index)}
                  className={`py-2 px-6 rounded-lg text-white font-medium w-full md:w-auto ${
                    link.copied
                      ? "bg-purple-900"
                      : "bg-cyan-400 hover:opacity-70"
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
