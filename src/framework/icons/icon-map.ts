// icon-map.ts
import { lazy } from "react";

export const iconMap = {
  arrowLeft: lazy(() => import("./svg/icon-arrow-left.svg?react")),
  calendar1: lazy(() => import("./svg/icon-calendar-1.svg?react")),
  calendar: lazy(() => import("./svg/icon-calendar.svg?react")),
  chat: lazy(() => import("./svg/icon-chat.svg?react")),
  cup: lazy(() => import("./svg/icon-cup.svg?react")),
  fatrows: lazy(() => import("./svg/icon-fatrows.svg?react")),
  flash: lazy(() => import("./svg/icon-flash.svg?react")),
  home: lazy(() => import("./svg/icon-home.svg?react")),
  kanban: lazy(() => import("./svg/icon-kanban.svg?react")),
  like: lazy(() => import("./svg/icon-like.svg?react")),
  moon: lazy(() => import("./svg/icon-moon.svg?react")),
  notification: lazy(() => import("./svg/icon-notification.svg?react")),
  plus: lazy(() => import("./svg/icon-plus.svg?react")),
  profile: lazy(() => import("./svg/icon-profile.svg?react")),
  searchNormal: lazy(() => import("./svg/icon-search-normal.svg?react")),
  star: lazy(() => import("./svg/icon-star.svg?react")),
  sun: lazy(() => import("./svg/icon-sun.svg?react")),
  tickSquare: lazy(() => import("./svg/icon-tick-square.svg?react")),
} as const;

export type IconName = keyof typeof iconMap;
