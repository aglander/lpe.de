import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Button from "./button"

const VerticalNavigation = ({ data, id }) => {
  const navItems = data
    .filter(navItem => navItem.parentId === null)
    .map(navItem => {
      let navItemContent

      navItemContent = (
        <li>
          <h1 class="text-lg text-text border-divider border-t border-b py-2 mt-4">
            {navItem.url ? (
              <Link to={navItem.url}>{navItem.title}</Link>
            ) : (
              navItem.title
            )}
          </h1>
          <ul>
            <SubNavigationItems id={navItem.navId} data={data} />
          </ul>
        </li>
      )

      return navItemContent
    })

  return (
    <ul>
      {navItems}
      <li class="mt-4">
        <Button url="/kontakt">Kontakt</Button>
      </li>
    </ul>
  )
}

const DropDown = ({ id, data, open }) => {
  return (
    <div
      class={
        (open ? "block" : "hidden") +
        " absolute w-2/3 max-w-5xl bg-white p-10 shadow-2xl top-16 left-1/2 transform -translate-x-1/2"
      }
    >
      <ul class="flex flex-wrap">
        <SubNavigationItems id={id} data={data} />
      </ul>
    </div>
  )
}

const SubNavigationItems = ({ id, data }) => {
  let navItemContent
  const navItems = data
    .filter(navItem => navItem.parentId === id)
    .map(navItem => {
      // sub header
      if (navItem.url === null) {
        navItemContent = (
          <li class="pr-5 flex-1">
            <h2 class="text-sm text-green uppercase py-2 mt-2">
              {navItem.title}
            </h2>
            <ul>
              <SubNavigationItems id={navItem.navId} data={data} />
            </ul>
          </li>
        )
      }

      // menu item
      else {
        navItemContent = (
          <li class="py-1">
            <Link
              to={navItem.url}
              class="text-base text-text whitespace-nowrap"
            >
              {navItem.title}
            </Link>
          </li>
        )
      }

      return navItemContent
    })

  return navItems
}

const HorizontalNavigation = ({ data }) => {
  const [openedPopoverId, setOpenedPopoverId] = useState(null)

  const handleClick = (event, popoverId) => {
    if (openedPopoverId === popoverId) {
      setOpenedPopoverId(null)
    } else {
      setOpenedPopoverId(popoverId)
    }
  }

  const navItems = data
    .filter(navItem => navItem.parentId === null)
    .map(navItem => {
      let navItemContent

      // main item
      if (navItem.parentId === null) {
        navItemContent = (
          <li>
            <h1 class="text-lg text-text py-2 px-4">
              {navItem.url ? (
                <Link to={navItem.url}>{navItem.title}</Link>
              ) : (
                <span onClick={e => handleClick(e, navItem.navId)} role="button" aria-hidden="true">
                  {navItem.title}{" "}
                  <i
                    class={
                      openedPopoverId === navItem.navId
                        ? "fas fa-angle-up"
                        : "fas fa-angle-down"
                    }
                  ></i>
                </span>
              )}
            </h1>
            <DropDown
              id={navItem.navId}
              data={data}
              open={openedPopoverId === navItem.navId}
            />
          </li>
        )
      }

      // sub header
      else if (navItem.url === null) {
        navItemContent = (
          <li>
            <h2 class="text-sm text-green uppercase py-2 mt-2">
              {navItem.title}
            </h2>
          </li>
        )
      }

      // menu item
      else {
        navItemContent = (
          <li class="py-1">
            <Link to={navItem.url} class="text-base text-text">
              {navItem.title}
            </Link>
          </li>
        )
      }

      return navItemContent
    })

  return (
    <ul class="flex">
      {navItems}
      <li class="ml-4 -mb-3">
        <Button url="/kontakt">Kontakt</Button>
      </li>
    </ul>
  )
}

const Navigation = ({ horizontal, id }) => {

  const {
    allNavigationJson: { nodes: navigationData },
  } = useStaticQuery(graphql`
    {
      allNavigationJson {
        nodes {
          navId
          title
          url
          parentId
        }
      }
    }
  `)

  if (horizontal) {
    return <HorizontalNavigation data={navigationData} />
  } else if (id) {
    return (
      <ul class="flex flex-wrap w-3/4 mx-auto">
        <SubNavigationItems id={id} data={navigationData} />
      </ul>
    )
  } else {
    return <VerticalNavigation data={navigationData} id={id} />
  }
}

export default Navigation
