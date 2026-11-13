import type { IconBaseProps, IconType } from "react-icons";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaQuoteLeft, FaYoutube } from "react-icons/fa";
import {
  LuActivity,
  LuArrowLeft,
  LuArrowRight,
  LuBrickWall,
  LuBug,
  LuCalendarDays,
  LuChartLine,
  LuChevronDown,
  LuChevronLeft,
  LuChevronRight,
  LuCircleCheck,
  LuClipboardCheck,
  LuClock,
  LuCloud,
  LuCloudCog,
  LuDatabaseBackup,
  LuEye,
  LuFileCheck,
  LuFileSearch,
  LuFolderOpen,
  LuGitFork,
  LuGlobe,
  LuGraduationCap,
  LuHardDrive,
  LuHeadset,
  LuKeyRound,
  LuLaptop,
  LuLayers,
  LuLightbulb,
  LuLock,
  LuMail,
  LuMapPin,
  LuMenu,
  LuMonitor,
  LuNetwork,
  LuPhone,
  LuRadar,
  LuScanSearch,
  LuServer,
  LuSettings,
  LuShield,
  LuShieldCheck,
  LuSiren,
  LuSmartphone,
  LuStar,
  LuTarget,
  LuUserCheck,
  LuUsers,
  LuWorkflow,
  LuX,
} from "react-icons/lu";

/** Monitor with a rising chart (used for "Network Monitoring"). */
const MonitorChart: IconType = (props) => (
  <span className="relative inline-flex">
    <LuMonitor {...props} />
    <LuChartLine {...props} className="absolute left-1/2 top-[18%] size-[46%] -translate-x-1/2" strokeWidth={2.4} />
  </span>
);

// Every icon the site can use, by the name templates.json stores. A new icon is added here once.
const icons: Record<string, IconType> = {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaQuoteLeft,
  FaYoutube,
  LuActivity,
  LuArrowLeft,
  LuArrowRight,
  LuBrickWall,
  LuBug,
  LuCalendarDays,
  LuChevronDown,
  LuChevronLeft,
  LuChevronRight,
  LuCircleCheck,
  LuClipboardCheck,
  LuClock,
  LuCloud,
  LuCloudCog,
  LuDatabaseBackup,
  LuEye,
  LuFileCheck,
  LuFileSearch,
  LuFolderOpen,
  LuGitFork,
  LuGlobe,
  LuGraduationCap,
  LuHardDrive,
  LuHeadset,
  LuKeyRound,
  LuLaptop,
  LuLayers,
  LuLightbulb,
  LuLock,
  LuMail,
  LuMapPin,
  LuMenu,
  LuNetwork,
  LuPhone,
  LuRadar,
  LuScanSearch,
  LuServer,
  LuSettings,
  LuShield,
  LuShieldCheck,
  LuSiren,
  LuSmartphone,
  LuStar,
  LuTarget,
  LuUserCheck,
  LuUsers,
  LuWorkflow,
  LuX,
  MonitorChart,
};

/** Looks up an icon by the name used in templates.json. */
export const Icon = ({ name, ...props }: IconBaseProps & { name: string }) => {
  const Cmp = icons[name];
  if (!Cmp) {
    if (process.env.NODE_ENV !== "production") console.warn(`Icon "${name}" is not in components/ui/Icon.tsx`);
    return <LuShield aria-hidden="true" {...props} />;
  }
  return <Cmp aria-hidden="true" {...props} />;
};
