
import { DateInput } from "@heroui/date-input";
import { HeroUIProvider } from "@heroui/react";
import { CalendarDate, parseDate } from "@internationalized/date";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useLocale } from "@/i18n/compat/client";

const PRESENT_VALUES = ["至今", "Present", "Now", "По настоящее время"];
const HERO_UI_LOCALES = {
  zh: "zh-CN",
  en: "en-US",
  ru: "ru-RU",
} as const;

interface UnifiedDateInputProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  isRequired?: boolean;
  className?: string;
}

export function UnifiedDateInput({
  value,
  onChange,
  label,
  isRequired,
  className,
}: UnifiedDateInputProps) {
  const locale = useLocale();
  const parseValue = (input: string): CalendarDate | null => {
    if (!input) return null;
    try {
      let normalized = input.replace(/[./]/g, "-");
      if (normalized.length === 7) normalized = `${normalized}-01`;
      return parseDate(normalized);
    } catch {
      return null;
    }
  };

  const isPresent = PRESENT_VALUES.some(
    (presentValue) =>
      value === presentValue || value.includes(presentValue)
  );

  const [selectedDate, setSelectedDate] = useState<CalendarDate | null>(() =>
    parseValue(value)
  );

  useEffect(() => {
    setSelectedDate(parseValue(value));
  }, [value]);

  const handleDateChange = (date: CalendarDate | null) => {
    setSelectedDate(date);
    if (!date) {
      onChange("");
      return;
    }
    const month = date.month.toString().padStart(2, "0");
    onChange(`${date.year}/${month}`);
  };

  return (
    <div className={className}>
      <HeroUIProvider locale={HERO_UI_LOCALES[locale as keyof typeof HERO_UI_LOCALES] ?? "en-US"}>
        <DateInput
          value={isPresent ? null : selectedDate}
          onChange={handleDateChange}
          isRequired={isRequired}
          granularity={"month" as any}
          variant="bordered"
          labelPlacement="outside"
          shouldForceLeadingZeros
          isDisabled={isPresent}
          className={cn(isPresent && "opacity-50")}
          classNames={{
            inputWrapper:
              "shadow-sm hover:border-primary/50 focus-within:ring-2 focus-within:ring-primary focus-within:border-primary bg-background",
          }}
        />
      </HeroUIProvider>
    </div>
  );
}
