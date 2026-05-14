import { AppleIconSm, AndroidIconSm, WebIconSm } from "./social-icons";

function AppButton({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <a
      href="#"
      className="inline-flex items-center gap-2.5 bg-neutral-900 text-white text-[13px] font-semibold px-3.5 py-2.5 rounded-[10px] hover:bg-neutral-800 w-fit transition-colors"
    >
      {icon}
      {label}
    </a>
  );
}

export function AppButtons() {
  return (
    <div className="flex flex-col gap-2">
      <AppButton icon={<AppleIconSm />} label="iPhone app" />
      <AppButton icon={<AppleIconSm />} label="iPad app" />
      <AppButton icon={<AndroidIconSm />} label="Android app" />
      <AppButton icon={<WebIconSm />} label="Web app" />
    </div>
  );
}
