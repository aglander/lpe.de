import React from "react";
import { getChildren } from "../../lib/navigation.js";

export default function Navigation({ id }) {
  const sections = getChildren(id);

  return (
    <ul className="mx-auto grid w-full max-w-6xl list-none gap-x-6 gap-y-10 pl-0 md:grid-cols-2 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.15fr)]">
      {sections.map((section) => (
        <li key={section.navId} className="min-w-0 list-none">
          <div className="mt-2 border-b border-divider pb-3 text-sm uppercase leading-snug text-green md:text-base xl:text-[1.15rem]">
            {section.title}
          </div>
          <ul className="mt-6 list-none space-y-3 pl-0">
            {getChildren(section.navId).map((item) => (
              <li key={item.navId} className="min-w-0 list-none">
                <a
                  href={`${item.url}/`.replace(/\/\//g, "/")}
                  className="block text-base leading-8 text-text hyphens-auto hover:text-green"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
