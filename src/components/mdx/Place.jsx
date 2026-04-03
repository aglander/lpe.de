import React from "react";

// React bridge wrapper so MDX pages can receive runtime place data from the shared route.
export default function Place({ placeData, long = false, description = false }) {
  if (!placeData) return null;
  if (description) {
    return (
      <p
        className="mb-6 text-base lg:text-lg lg:leading-7"
        dangerouslySetInnerHTML={{ __html: placeData.description || "" }}
      />
    );
  }
  if (long) return <>{placeData.title}</>;
  return <>{placeData.short}</>;
}
