import { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

const base = 'h-5 w-5';

export function BoltIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={base} {...props}>
      <path d="M13 2 4 14h7l-1 8 10-13h-7l0-7Z" />
    </svg>
  );
}

export function RepeatIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={base} {...props}>
      <path d="M17 2v4h-4" />
      <path d="M3 11a8 8 0 0 1 14-5l0 0" />
      <path d="M7 22v-4h4" />
      <path d="M21 13a8 8 0 0 1-14 5" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={base} {...props}>
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

export function ChartIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={base} {...props}>
      <path d="M4 19h16" />
      <path d="M8 16V9" />
      <path d="M12 16V5" />
      <path d="M16 16v-3" />
    </svg>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={base} {...props}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={base} {...props}>
      <path d="M12 3 4 7v6c0 5 3.5 7.7 8 9 4.5-1.3 8-4 8-9V7l-8-4Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function UserGearIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={base} {...props}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <circle cx="18" cy="17" r="3" />
      <path d="M18 13v2M18 19v2M14 17h2M20 17h2" />
    </svg>
  );
}

export function PlayIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m10 8 6 4-6 4V8Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function MessageIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={base} {...props}>
      <path d="M21 12a8 8 0 0 1-8 8H7l-4 2 1.5-4.5A8 8 0 1 1 21 12Z" />
    </svg>
  );
}

export function BellIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={base} {...props}>
      <path d="M15 17H5.5a1.5 1.5 0 0 1-1.2-2.4L6 12.5V10a6 6 0 1 1 12 0v2.5l1.7 2.1A1.5 1.5 0 0 1 18.5 17H15Z" />
      <path d="M10 20a2 2 0 0 0 4 0" />
    </svg>
  );
}

export function PlugIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={base} {...props}>
      <path d="M9 3v5M15 3v5" />
      <path d="M7 8h10v2a5 5 0 0 1-5 5 5 5 0 0 1-5-5V8Z" />
      <path d="M12 15v6" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={base} {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function TrendUpIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={base} {...props}>
      <path d="M4 17 10 11l4 4 6-8" />
      <path d="M20 7h-5" />
      <path d="M20 7v5" />
    </svg>
  );
}

export function SparkIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={base} {...props}>
      <path d="m12 2 1.7 5.3L19 9l-5.3 1.7L12 16l-1.7-5.3L5 9l5.3-1.7L12 2Z" />
      <path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" />
    </svg>
  );
}

export function TargetIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={base} {...props}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M22 12h-2M4 12H2" />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={base} {...props}>
      <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM8.34 18.34H5.66V9.72h2.68v8.62ZM7 8.53A1.55 1.55 0 1 1 7 5.43a1.55 1.55 0 0 1 0 3.1Zm11.34 9.81h-2.67v-4.19c0-1-.02-2.29-1.4-2.29s-1.61 1.09-1.61 2.22v4.26H10V9.72h2.56V10.9h.04c.36-.67 1.23-1.39 2.53-1.39 2.71 0 3.21 1.78 3.21 4.1v4.73Z" />
    </svg>
  );
}
