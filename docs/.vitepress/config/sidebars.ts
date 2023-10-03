import componentLocale from '../json/pages/component.json'
import guideLocale from '../json/pages/guide.json'

function getGuideSidebar() {
  return Object.values(guideLocale).map((item) => mapPrefix(item, '/guide'))
}

function getComponentsSideBar() {
  return Object.values(componentLocale).map((item) =>
    mapPrefix(item, '/component')
  )
}

// return sidebar with language configs.
// this might create duplicated data but the overhead is ignorable
const getSidebars = () => {
  return {
    // '/guide/': getGuideSidebar(),
    '/component/': getComponentsSideBar(),
  }
}

type Item = {
  text: string
  children?: Item[]
  link?: string
}

function mapPrefix(item: Item, prefix = '') {
  if (item.children && item.children.length > 0) {
    return {
      ...item,
      children: item.children.map((child) => mapPrefix(child, prefix)),
    }
  }
  return {
    ...item,
    link: `${prefix}${item.link || ''}`,
  }
}

export const sidebars = getSidebars()
