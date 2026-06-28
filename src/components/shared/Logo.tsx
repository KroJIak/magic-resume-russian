import React from "react";
import Image from "@/lib/image";
import { useTranslations } from "@/i18n/compat/client";

interface LogoProps {
  size?: number;
  className?: string;
  onClick?: () => void;
}

const Logo: React.FC<LogoProps> = ({
  size = 100,
  className = "",
  onClick,
}) => {
  const t = useTranslations("common");
  return (
    <Image
      src="/logo.svg"
      alt={t("logoAlt")}
      width={size}
      height={size}
      className={className}
      onClick={onClick}
      priority={size >= 64}
    />
  );
};

export default Logo;
