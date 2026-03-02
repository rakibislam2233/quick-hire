import React from "react";
import { resolveIcon, type IconValue } from "./icon-config";

// Parse icon value from database
export const parseIconValue = (iconData?: string): IconValue | null => {
  if (!iconData) return null;

  try {
    // Try to parse as JSON (new format)
    const parsed = JSON.parse(iconData);
    if (parsed.name && parsed.library) {
      return parsed as IconValue;
    }
  } catch {
    // If parsing fails, treat as old Lucide format
    if (typeof iconData === "string") {
      return { name: iconData, library: "lucide" };
    }
  }

  return null;
};

// Function to render icon by name
export const renderIcon = (iconData?: string): React.ReactElement => {
  const iconValue = parseIconValue(iconData);
  const IconComponent = resolveIcon(iconValue);

  if (IconComponent) {
    return <IconComponent className="w-5 h-5" />;
  }

  return <div className="w-5 h-5 bg-gray-200 rounded" />;
};

// Get icon display name
export const getIconDisplayName = (iconData?: string): string => {
  const iconValue = parseIconValue(iconData);
  if (!iconValue) return "None";

  if (iconValue.library === "lucide") {
    return iconValue.name;
  }

  if (iconValue.library === "react-icons" && iconValue.set) {
    return `${iconValue.set}:${iconValue.name}`;
  }

  return iconValue.name;
};
