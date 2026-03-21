import React from "react";
import { getChildren } from "../../lib/navigation.js";

function Branch({ id }) {
  return (
    <>
      {getChildren(id).map((item) =>
        item.url ? (
          <li key={item.navId} className="py-1 pr-5">
            <a href={`${item.url}/`.replace(/\/\//g, "/")} className="text-base text-text">
              {item.title}
            </a>
          </li>
        ) : (
          <li key={item.navId} className="flex-1 pr-5">
            <h2 className="mt-2 py-2 text-sm uppercase text-green">{item.title}</h2>
            <ul>
              <Branch id={item.navId} />
            </ul>
          </li>
        ),
      )}
    </>
  );
}

export default function Navigation({ id }) {
  return (
    <ul className="mx-auto flex w-3/4 flex-wrap">
      <Branch id={id} />
    </ul>
  );
}
