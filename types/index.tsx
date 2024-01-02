import type { Icons } from "@/components/icons"


export type NavItem = {
  title: string
  href?: string
  disabled?: boolean
  icon?: keyof typeof Icons
}
