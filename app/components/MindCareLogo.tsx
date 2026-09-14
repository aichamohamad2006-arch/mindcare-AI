
import Image from "next/image";

type MindCareLogoProps = {
  light?: boolean;
};

export default function MindCareLogo({
  light = false,
}: MindCareLogoProps) {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/image/logo/mindcare-logo.png"
        alt="MindCare AI logo"
        width={42}
        height={42}
        className="h-10 w-10 rounded-full object-cover"
      />

      <span
        className={`text-xl font-bold ${
          light ? "text-white" : "text-slate-900"
        }`}
      >
        MindCare AI
      </span>
    </div>
  );
}

