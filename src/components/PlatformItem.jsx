import React from "react";

export const PlatformItem = ({ items }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {items &&
        items.map((item, index) => (
          <span
            key={index}
            className="text-xs font-semibold px-4 md:px-6 py-1 md:py-2 border rounded-[100px] font-syne text-primary"
          >
            {item}
          </span>
        ))}
    </div>
  );
};
