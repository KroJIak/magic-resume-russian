import React from "react";
import { useTranslations } from "@/i18n/compat/client";
import { Certificate } from "@/types/resume";

interface CertificatesSectionProps {
    certificates: Certificate[];
}

const CertificatesSection: React.FC<CertificatesSectionProps> = ({ certificates }) => {
    const t = useTranslations("workbench.certificatesPanel");
    if (!certificates || certificates.length === 0) return null;

    return (
        <div className="flex flex-wrap gap-2 w-full mt-2">
            {certificates.map((cert) => (
                <div
                    key={cert.id}
                    style={{ width: `calc(${cert.width}% - 8px)` }}
                    className="flex justify-center max-w-full"
                >
                    <img
                        src={cert.url}
                        alt={t("imageAlt")}
                        className="w-full h-auto object-contain"
                    />
                </div>
            ))}
        </div>
    );
};

export default CertificatesSection;
