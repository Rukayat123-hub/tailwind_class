import React from "react";
import "./NigerianCard.css"; // or ./nigeriancard.css if you renamed it

const NigerianCard = ({ category, image, headline, excerpt, author, date, readTime, link }) => {
  const categoryColors = {
    Politics: "bg-green-700",
    Sports: "bg-yellow-500",
    Entertainment: "bg-red-600",
  };

  return (
    <div className="news-card max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden border border-green-200">
      <img src={image} alt={headline} className="w-full h-48 object-cover" />
      <div className="p-5">
        <span
          className={`text-xs text-white px-3 py-1 rounded-full ${categoryColors[category]} uppercase tracking-wide`}
        >
          {category}
        </span>

        <h2 className="text-xl font-bold mt-3 text-green-900">{headline}</h2>

        <p className="text-gray-700 text-sm mt-2 leading-relaxed">{excerpt}</p>

        <div className="flex items-center justify-between text-xs text-gray-500 mt-4">
          <span>By {author}</span>
          <span>{date} • {readTime}</span>
        </div>

        <a
          href={link}
          className="mt-4 inline-block text-green-700 font-semibold hover:text-green-900 transition-colors"
        >
          Read more →
        </a>
      </div>
    </div>
  );
};

export default NigerianCard;
