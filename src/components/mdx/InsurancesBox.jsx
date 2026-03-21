import React from "react";
import { insurances } from "../../lib/site.js";

export default function InsurancesBox({ title }) {
  return (
    <div>
      {insurances
        .filter((insurance) => (title ? insurance.title === title : true))
        .map((insurance) => (
          <div key={insurance.title} className="mb-5">
            <h3 className="mb-3 text-lg">{insurance.title}</h3>
            <p className="text-sm">{insurance.data}</p>
          </div>
        ))}
    </div>
  );
}
