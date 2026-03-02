"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import * as LucideIcons from "lucide-react";
import { ChevronDown, Search } from "lucide-react";
import { useState } from "react";

// React Icons sets
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import * as CgIcons from "react-icons/cg";
import * as CiIcons from "react-icons/ci";
import * as DiIcons from "react-icons/di";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import * as GiIcons from "react-icons/gi";
import * as GoIcons from "react-icons/go";
import * as GrIcons from "react-icons/gr";
import * as HiIcons from "react-icons/hi";
import * as ImIcons from "react-icons/im";
import * as IoIcons from "react-icons/io";
import * as Io5Icons from "react-icons/io5";
import * as LiaIcons from "react-icons/lia";
import * as LuIcons from "react-icons/lu";
import * as MdIcons from "react-icons/md";
import * as PiIcons from "react-icons/pi";
import * as RiIcons from "react-icons/ri";
import * as RxIcons from "react-icons/rx";
import * as SiIcons from "react-icons/si";
import * as TbIcons from "react-icons/tb";
import * as TfiIcons from "react-icons/tfi";
import * as TiIcons from "react-icons/ti";
import * as VscIcons from "react-icons/vsc";
import * as WiIcons from "react-icons/wi";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface IconValue {
  name: string;
  library: "lucide" | "react-icons";
  set?: string;
}

interface IconPickerProps {
  value?: IconValue | null;
  onChange: (icon: IconValue) => void;
  placeholder?: string;
}

// ─── Icon sets ────────────────────────────────────────────────────────────────

const REACT_ICON_SETS: Record<string, Record<string, React.ComponentType<any>>> = {
  fa: FaIcons as any,
  md: MdIcons as any,
  ai: AiIcons as any,
  bi: BiIcons as any,
  bs: BsIcons as any,
  fi: FiIcons as any,
  hi: HiIcons as any,
  io: IoIcons as any,
  io5: Io5Icons as any,
  lu: LuIcons as any,
  pi: PiIcons as any,
  ri: RiIcons as any,
  si: SiIcons as any,
  tb: TbIcons as any,
  tfi: TfiIcons as any,
  vsc: VscIcons as any,
  cg: CgIcons as any,
  di: DiIcons as any,
  gr: GrIcons as any,
  im: ImIcons as any,
  lia: LiaIcons as any,
  rx: RxIcons as any,
  wi: WiIcons as any,
  ci: CiIcons as any,
  go: GoIcons as any,
  gi: GiIcons as any,
  ti: TiIcons as any,
};

const SET_LABELS: Record<string, string> = {
  fa: "Font Awesome",
  md: "Material",
  ai: "Ant Design",
  bi: "Box Icons",
  bs: "Bootstrap",
  fi: "Feather",
  hi: "Heroicons",
  io: "Ionicons",
  io5: "Ionicons 5",
  lu: "Lucide",
  pi: "Phosphor",
  ri: "Remix",
  si: "Simple Icons",
  tb: "Tabler",
  tfi: "Themify",
  vsc: "VS Code",
  cg: "Cg Icons",
  di: "Devicons",
  gr: "Github Octicons",
  im: "IcoMoon",
  lia: "Line Awesome",
  rx: "Radix",
  wi: "Weather",
  ci: "Circum",
  go: "Go Icons",
  gi: "Game Icons",
  ti: "Typicons",
  uil: "Unicons Line",
  vs: "VS Code Icons",
};

// ─── Resolve icon component ───────────────────────────────────────────────────

export function resolveIcon(
  icon: IconValue | null | undefined
): React.ComponentType<any> | null {
  if (!icon) return null;
  if (icon.library === "lucide") {
    const comp = (LucideIcons as any)[icon.name];
    return typeof comp === "function" ? comp : null;
  }
  if (icon.library === "react-icons" && icon.set) {
    const set = REACT_ICON_SETS[icon.set];
    if (!set) return null;
    const comp = set[icon.name];
    return typeof comp === "function" ? comp : null;
  }
  return null;
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
      }))
);

type Tab = "lucide" | string;

const TABS: { id: Tab; label: string }[] = [
  { id: "lucide", label: "Lucide" },
  ...Object.keys(SET_LABELS).map((set) => ({ id: set, label: SET_LABELS[set] })),
];

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
    i.name.toLowerCase().includes(searchTerm.toLowerCase())
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

      <DropdownMenuContent className="p-0 w-[420px]" align="start" sideOffset={4}>
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