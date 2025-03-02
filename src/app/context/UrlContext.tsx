"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ShortenedLink {
  originalUrl: string;
  shortUrl: string;
  copied: boolean;
}

interface UrlContextType {
  shortenedLinks: ShortenedLink[];
  addShortenedLink: (link: ShortenedLink) => void;
}

const UrlContext = createContext<UrlContextType | undefined>(undefined);

export const UrlProvider = ({ children }: { children: ReactNode }) => {
  const [shortenedLinks, setShortenedLinks] = useState<ShortenedLink[]>([]);

  const addShortenedLink = (link: ShortenedLink) => {
    setShortenedLinks((prevLinks) => [link, ...prevLinks]);
  };

  return (
    <UrlContext.Provider value={{ shortenedLinks, addShortenedLink }}>
      {children}
    </UrlContext.Provider>
  );
};

export const useUrlContext = () => {
  const context = useContext(UrlContext);
  if (!context) {
    throw new Error("useUrlContext must be used within a UrlProvider");
  }
  return context;
};
