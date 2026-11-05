import {
  Activity,
  BrickWallFire,
  Bug,
  CalendarDays,
  ChartLine,
  ClipboardCheck,
  Clock,
  Cloud,
  CloudCog,
  DatabaseBackup,
  Eye,
  FileCheck,
  FileSearch,
  GitFork,
  Globe,
  GraduationCap,
  HardDrive,
  Headset,
  KeyRound,
  Laptop,
  Layers,
  Lightbulb,
  Lock,
  Mail,
  MapPin,
  Monitor,
  Network,
  Phone,
  Radar,
  ScanSearch,
  Server,
  Settings,
  Shield,
  ShieldCheck,
  Siren,
  Smartphone,
  Target,
  UserCheck,
  Users,
  Workflow,
  type LucideIcon,
  type LucideProps,
} from "lucide-react";

/** Monitor with a rising chart (used for "Network Monitoring"). */
const MonitorChart = (props: LucideProps) => (
  <span className="relative inline-flex">
    <Monitor {...props} />
    <ChartLine
      {...props}
      className="absolute left-1/2 top-[18%] size-[46%] -translate-x-1/2"
      strokeWidth={2.4}
    />
  </span>
);

const icons: Record<string, LucideIcon | ((p: LucideProps) => React.JSX.Element)> = {
  activity: Activity,
  "brick-wall-fire": BrickWallFire,
  bug: Bug,
  calendar: CalendarDays,
  "clipboard-check": ClipboardCheck,
  clock: Clock,
  cloud: Cloud,
  "cloud-cog": CloudCog,
  "database-backup": DatabaseBackup,
  eye: Eye,
  "file-check": FileCheck,
  "file-search": FileSearch,
  globe: Globe,
  "graduation-cap": GraduationCap,
  "hard-drive": HardDrive,
  headset: Headset,
  "key-round": KeyRound,
  laptop: Laptop,
  layers: Layers,
  lightbulb: Lightbulb,
  lock: Lock,
  mail: Mail,
  "map-pin": MapPin,
  "monitor-chart": MonitorChart,
  network: Network,
  nodes: GitFork,
  phone: Phone,
  radar: Radar,
  "scan-search": ScanSearch,
  server: Server,
  settings: Settings,
  shield: Shield,
  "shield-check": ShieldCheck,
  siren: Siren,
  smartphone: Smartphone,
  target: Target,
  "user-check": UserCheck,
  users: Users,
  workflow: Workflow,
};

type Props = LucideProps & { name: string };

/** Looks up an icon by the name used in site.json. */
export default function Icon({ name, ...props }: Props) {
  const Cmp = icons[name] ?? Shield;
  return <Cmp aria-hidden="true" {...props} />;
}
