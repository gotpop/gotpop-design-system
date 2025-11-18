import type { BaselineStatusData } from "./BaselineStatus"

export const widelyAvailableFeature: BaselineStatusData = {
  featureId: "css-grid",
  featureUrl: "https://web.dev/css-grid/",
  normalizedName: "CSS Grid",
  status: "widely",
  label: "Widely available",
  badgeText: null,
  lowDateFormatted: null,
  highDateFormatted: "March 2017",
  browsers: [
    {
      key: "chrome",
      label: "Chrome",
      support: "available",
    },
    {
      key: "edge",
      label: "Edge",
      support: "available",
    },
    {
      key: "firefox",
      label: "Firefox",
      support: "available",
    },
    {
      key: "safari",
      label: "Safari",
      support: "available",
    },
  ],
}

export const newlyAvailableFeature: BaselineStatusData = {
  featureId: "container-queries",
  featureUrl:
    "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries",
  normalizedName: "Container Queries",
  status: "newly",
  label: "2023",
  badgeText: "newly available",
  lowDateFormatted: "February 2023",
  highDateFormatted: null,
  browsers: [
    {
      key: "chrome",
      label: "Chrome",
      support: "available",
    },
    {
      key: "edge",
      label: "Edge",
      support: "available",
    },
    {
      key: "firefox",
      label: "Firefox",
      support: "available",
    },
    {
      key: "safari",
      label: "Safari",
      support: "available",
    },
  ],
}

export const limitedAvailabilityFeature: BaselineStatusData = {
  featureId: "view-transitions",
  featureUrl:
    "https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API",
  normalizedName: "View Transitions",
  status: "limited",
  label: "Limited availability",
  badgeText: "limited",
  lowDateFormatted: null,
  highDateFormatted: null,
  browsers: [
    {
      key: "chrome",
      label: "Chrome",
      support: "available",
    },
    {
      key: "edge",
      label: "Edge",
      support: "available",
    },
    {
      key: "firefox",
      label: "Firefox",
      support: "unavailable",
    },
    {
      key: "safari",
      label: "Safari",
      support: "unavailable",
    },
  ],
}

export const noDataFeature: BaselineStatusData = {
  featureId: "experimental-feature",
  featureUrl: "https://developer.mozilla.org/",
  normalizedName: "Experimental Feature",
  status: "no_data",
  label: "Unknown availability",
  badgeText: null,
  lowDateFormatted: null,
  highDateFormatted: null,
  browsers: [
    {
      key: "chrome",
      label: "Chrome",
      support: "no_data",
    },
    {
      key: "edge",
      label: "Edge",
      support: "no_data",
    },
    {
      key: "firefox",
      label: "Firefox",
      support: "no_data",
    },
    {
      key: "safari",
      label: "Safari",
      support: "no_data",
    },
  ],
}
