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

// Icon value interface
export interface IconValue {
  name: string;
  library: "lucide" | "react-icons";
  set?: string;
}

// React Icons sets mapping
export const REACT_ICON_SETS: Record<
  string,
  Record<string, React.ComponentType<any>>
> = {
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

// Set labels for display
export const SET_LABELS: Record<string, string> = {
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
};

// Tab configuration for icon picker
export const TABS: { id: string; label: string }[] = [
  { id: "lucide", label: "Lucide" },
  ...Object.keys(SET_LABELS).map((set) => ({
    id: set,
    label: SET_LABELS[set],
  })),
];

// Resolve icon component function
export function resolveIcon(
  icon: IconValue | null | undefined,
): React.ComponentType<any> | null {
  if (!icon) return null;
  
  if (icon.library === "lucide") {
    // Import LucideIcons dynamically to avoid circular dependency
    const LucideIcons = require("lucide-react");
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
