import * as LucideIcons from "lucide-react";
import siteConfig from "@/config/siteConfig";

export default function Services() {
    return (
        <section id="services" className="bg-white py-16 sm:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark font-[family-name:var(--font-heading)]">
                        Our Services
                    </h2>
                    <p className="mt-3 text-text-muted text-lg max-w-xl mx-auto">
                        Professional electrical services for homes and businesses across{" "}
                        {siteConfig.serviceArea.suburbs[0]} and surrounding areas.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {siteConfig.services.map((service, i) => {
                        const Icon = LucideIcons[service.icon] || LucideIcons.Zap;
                        return (
                            <a
                                key={i}
                                href="#contact"
                                className="group block bg-surface hover:bg-primary rounded-xl p-4 sm:p-6 transition-colors duration-200 border border-gray-100 hover:border-primary cursor-pointer"
                            >
                                <div className="w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-white/20 flex items-center justify-center mb-4">
                                    <Icon className="w-6 h-6 text-primary group-hover:text-white" />
                                </div>
                                <h3 className="text-lg font-semibold text-primary-dark group-hover:text-white mb-2 font-[family-name:var(--font-heading)]">
                                    {service.title}
                                </h3>
                                <p className="text-text-muted group-hover:text-blue-100 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
