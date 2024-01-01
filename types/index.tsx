

export type DashboardConfig = {
  mainNav: MainNavItem[]
}
export type NavItem = {
  title: string
  href: string
  disabled?: boolean
}

export type MainNavItem = NavItem