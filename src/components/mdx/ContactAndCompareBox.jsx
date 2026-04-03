import React from "react";

// React bridge wrapper so MDX pages can receive prebuilt CTA elements from the shared route.
export default function ContactAndCompareBox({ ctas }) {
  return (
    <div className="my-5 border-t border-b border-divider bg-lightgrey px-4 py-6 text-center md:rounded-2xl md:border md:px-10 md:py-8">
      <div className="mb-4 text-center">
        <div className="text-2xl font-bold text-grey lg:text-4xl">Interesse geweckt?</div>
      </div>
      <div className="flex flex-wrap justify-center gap-3">{ctas}</div>
    </div>
  );
}
