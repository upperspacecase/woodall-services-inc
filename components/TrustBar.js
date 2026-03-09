import { Star, ShieldCheck, Clock, Award } from "lucide-react";
import siteConfig from "@/config/siteConfig";

export default function TrustBar() {
    const yearsInBusiness = new Date().getFullYear() - siteConfig.yearEstablished;

    const items = [
        {
            icon: Star,
            label: `${siteConfig.reviews.rating} Stars`,
            value: `${siteConfig.reviews.totalReviews} Google Reviews`,
        },
        {
            icon: Clock,
            label: `${yearsInBusiness}+ Years`,
            value: "In Business",
        },
        {
            icon: ShieldCheck,
            label: "Licensed",
            value: "& Insured",
        },
        {
            icon: Award,
            label: siteConfig.trustBar.credential,
            value: "Certified",
        },
    ];

    return (
        <section className="bg-surface border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {items.map((item, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-3 justify-center lg:justify-start"
                        >
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                <item.icon className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <p className="text-primary-dark font-semibold text-sm">{item.label}</p>
                                <p className="text-text-light text-xs">{item.value}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
