"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { REACT_ICON_SETS, SET_LABELS, TABS, resolveIcon, type IconValue } from "@/lib/icon-config";
import * as LucideIcons from "lucide-react";
import { ChevronDown, Search } from "lucide-react";
import { useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface IconPickerProps {
  value?: IconValue | null;
  onChange: (icon: IconValue) => void;
  placeholder?: string;
}

// ─── Build icon list (once, outside component) ───────────────────────────────

interface IconEntry {
  name: string;
  library: "lucide" | "react-icons";
  set?: string;
  component: React.ComponentType<any>;
}

const lucideIcons: IconEntry[] = Object.keys(LucideIcons)
  .filter((key) => {
    if (!/^[A-Z]/.test(key)) return false;
    if (key === "createLucideIcon") return false;
    const c = (LucideIcons as any)[key];
    return typeof c === "function";
  })
  .map((name) => ({
    name,
    library: "lucide" as const,
    component: (LucideIcons as any)[name],
  }));

const reactIcons: IconEntry[] = Object.entries(REACT_ICON_SETS).flatMap(
  ([set, icons]) =>
    Object.keys(icons)
      .filter((key) => /^[A-Z]/.test(key) && typeof icons[key] === "function")
      .map((name) => ({
        name,
        library: "react-icons" as const,
        set,
        component: icons[name],
      })),
);

type Tab = "lucide" | string;

// ─── Component ────────────────────────────────────────────────────────────────

const IconPicker = ({
  value,
  onChange,
  placeholder = "Select an icon",
}: IconPickerProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState<Tab>("lucide");
  const [open, setOpen] = useState(false);

  const tabIcons: IconEntry[] =
    activeTab === "lucide"
      ? lucideIcons
      : reactIcons.filter((i) => i.set === activeTab);

  const filtered = tabIcons.filter((i) =>
    i.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const SelectedIcon = resolveIcon(value ?? null);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          type="button"
          variant="outline"
          className="w-full justify-between h-12 rounded-none border-gray-200 focus-visible:ring-0 focus-visible:border-primary font-epilogue"
        >
          <div className="flex items-center gap-2">
            {SelectedIcon ? (
              <SelectedIcon className="w-4 h-4" />
            ) : (
              <div className="w-4 h-4 border border-gray-300 rounded" />
            )}
            <span className="text-sm text-muted-foreground">
              {value ? value.name : placeholder}
            </span>
          </div>
          <ChevronDown className="w-4 h-4 opacity-50" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="p-0 w-[420px]"
        align="start"
        sideOffset={4}
      >
        {/* Search */}
        <div className="p-3 border-b border-gray-100 font-epilogue">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search icons..."
              className="pl-10 rounded-none border-gray-200 focus-visible:ring-0 focus-visible:border-primary h-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Library tabs */}
        <div className="flex gap-0 overflow-x-auto border-b border-gray-100 bg-gray-50 font-epilogue">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => {
                setActiveTab(tab.id);
                setSearchTerm("");
              }}
              className={`
                shrink-0 px-3 py-2 text-xs font-bold border-b-2 transition-colors whitespace-nowrap
                ${
                  activeTab === tab.id
                    ? "border-primary text-primary bg-white"
                    : "border-transparent text-gray-400 hover:text-gray-700"
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Icon grid */}
        <div className="max-h-56 overflow-y-auto p-3 font-epilogue">
          <div className="grid grid-cols-8 gap-1.5">
            {filtered.slice(0, 80).map((icon) => {
              const IC = icon.component;
              const isSelected =
                value?.name === icon.name && value?.library === icon.library;
              return (
                <button
                  key={`${icon.library}-${icon.set ?? ""}-${icon.name}`}
                  type="button"
                  title={icon.name}
                  onClick={() => {
                    onChange({
                      name: icon.name,
                      library: icon.library,
                      set: icon.set,
                    });
                    setOpen(false);
                    setSearchTerm("");
                  }}
                  className={`
                    flex items-center justify-center p-2 rounded border cursor-pointer
                    hover:bg-gray-50 hover:border-primary transition-all h-9 w-full
                    ${isSelected ? "border-primary bg-primary/10" : "border-gray-200"}
                  `}
                >
                  <IC className="w-4 h-4" />
                </button>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-8 text-gray-400 text-sm">
              No icons found for &quot;{searchTerm}&quot;
            </div>
          )}
          {filtered.length > 80 && (
            <p className="text-center py-2 text-gray-400 text-xs">
              Showing 80 of {filtered.length} — refine search to see more
            </p>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-3 py-2 border-t border-gray-100 bg-gray-50 font-epilogue">
          <span className="text-xs text-gray-400">
            {filtered.length} icons ·{" "}
            {activeTab === "lucide" ? "Lucide React" : SET_LABELS[activeTab]}
          </span>
          {value && (
            <Badge variant="outline" className="text-xs">
              {value.name}
            </Badge>
          )}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default IconPicker;
