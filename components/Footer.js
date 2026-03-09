import { Phone, MapPin, Clock, ShieldCheck } from "lucide-react";
import siteConfig from "@/config/siteConfig";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary-dark border-t border-blue-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    <div>
                        <h3 className="text-cta font-bold text-lg mb-2 font-[family-name:var(--font-heading)]">
                            {siteConfig.businessName}
                        </h3>
                        <p className="text-blue-300/60 text-sm">
                            {siteConfig.tagline}
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold text-sm mb-3 font-[family-name:var(--font-heading)]">Contact</h4>
                        <div className="space-y-2">
                            <a
                                href={siteConfig.phoneHref}
                                className="flex items-center gap-2 text-blue-200 hover:text-cta text-sm transition-colors duration-200 cursor-pointer"
                            >
                                <Phone className="w-4 h-4" />
                                {siteConfig.phone}
                            </a>
                            <div className="flex items-start gap-2 text-blue-200 text-sm">
                                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                {siteConfig.address}
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold text-sm mb-3 font-[family-name:var(--font-heading)]">Hours</h4>
                        <div className="flex items-start gap-2 text-blue-200 text-sm">
                            <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                            <span>{siteConfig.hoursOfOperation}</span>
                        </div>

                    </div>

                    <div>
                        <h4 className="text-white font-semibold text-sm mb-3 font-[family-name:var(--font-heading)]">
                            Emergency?
                        </h4>
                        <p className="text-blue-200 text-sm mb-3">
                            24/7 emergency electrical service available.
                        </p>
                        <a
                            href={siteConfig.phoneHref}
                            className="inline-flex items-center gap-2 bg-cta hover:bg-cta-dark text-white font-bold text-sm px-4 py-2.5 min-h-[44px] rounded-lg transition-colors duration-200 cursor-pointer"
                        >
                            <Phone className="w-4 h-4" />
                            Call Now
                        </a>
                    </div>
                </div>

                <div className="mt-10 pt-6 border-t border-blue-800 text-center">
                    <p className="text-blue-300/40 text-xs">
                        {currentYear} {siteConfig.businessName}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
