import { getNavigation } from "./content-data.js";

export const getChildren = async (parentId) =>
  (await getNavigation()).filter((item) => {
    if (parentId == null) {
      return item.parentId == null;
    }

    return item.parentId === parentId;
  });

const normalizeHref = (url) => {
  if (!url) return undefined;
  return `${url}/`.replace(/\/\//g, "/");
};

const toLink = (item) => ({
  id: item.navId,
  title: item.title,
  href: normalizeHref(item.url),
});

const toGroup = async (item) => {
  const links = (await getChildren(item.navId))
    .filter((child) => child.url)
    .map(toLink);

  if (!item.url && links.length === 0) return null;

  return {
    id: item.navId,
    title: item.title,
    href: normalizeHref(item.url),
    links,
  };
};

export const getNavigationTree = async () =>
  Promise.all(
    (await getChildren(null)).map(async (item) => ({
      id: item.navId,
      title: item.title,
      href: normalizeHref(item.url),
      groups: (await Promise.all((await getChildren(item.navId)).map(toGroup))).filter(Boolean),
    })),
  );
