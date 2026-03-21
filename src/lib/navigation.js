import { navigation } from "./site.js";

export const getChildren = (parentId) =>
  navigation.filter((item) => {
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

const toGroup = (item) => {
  const links = getChildren(item.navId)
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

export const getNavigationTree = () =>
  getChildren(null).map((item) => ({
    id: item.navId,
    title: item.title,
    href: normalizeHref(item.url),
    groups: getChildren(item.navId).map(toGroup).filter(Boolean),
  }));
