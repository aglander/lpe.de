import React from "react";

export default function Example({ title, children, number, link, image }) {
  const content = (
    <div className="inline-block align-top text-left sm:w-1/2 lg:w-1/3">
      {image ? (
        <div className="m-1 rounded-2xl border-2 border-green bg-white p-5">
          <img src={image} alt={title} className="mb-2 inline-block h-[50px]" />
          <h4 className="mb-2 text-xl font-bold [hyphens:auto]">{title}</h4>
          <p className="text-base [hyphens:auto]">{children}</p>
        </div>
      ) : (
        <div className="m-4">
          <span className="mb-2 inline-block rounded-2xl border-2 border-green bg-white px-4 py-2 text-2xl text-green">
            {number}
          </span>
          <h4 className="mb-2 text-xl font-bold [hyphens:auto]">{title}</h4>
          <p className="text-base [hyphens:auto]">{children}</p>
        </div>
      )}
    </div>
  );

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  );
}
