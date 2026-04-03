import { getCollection } from "astro:content";

const byOrder = (a, b) => a.data.order - b.data.order;

let placesPromise;
let navigationPromise;
let insurancesPromise;

export const getPlaces = () =>
  (placesPromise ??= getCollection("places").then((entries) =>
    entries.sort(byOrder).map((entry) => entry.data),
  ));

export const getNavigation = () =>
  (navigationPromise ??= getCollection("navigation").then((entries) =>
    entries.sort(byOrder).map((entry) => entry.data),
  ));

export const getInsurances = () =>
  (insurancesPromise ??= getCollection("insurances").then((entries) =>
    entries.sort(byOrder).map((entry) => entry.data),
  ));
