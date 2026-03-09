import { MapPin } from "lucide-react";
import siteConfig from "@/config/siteConfig";

export default function ServiceArea() {
    const { serviceArea } = siteConfig;

    return (
        <section id="service-area" className="bg-surface py-16 sm:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark font-[family-name:var(--font-heading)]">
                        Service Area
                    </h2>
                    <p className="mt-3 text-text-muted text-lg">
                        Proudly servicing these areas and surrounds
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="rounded-xl overflow-hidden border border-gray-200 aspect-[4/3]">
                        <iframe
                            src={serviceArea.mapEmbedUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Service area map"
                        />
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-primary-dark mb-4 flex items-center gap-2 font-[family-name:var(--font-heading)]">
                            <MapPin className="w-5 h-5 text-cta" />
                            Areas We Service
                        </h3>
                        <div className="grid grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-2">
                            {serviceArea.suburbs.map((suburb, i) => (
                                <p
                                    key={i}
                                    className="text-text-muted text-sm py-1.5 border-b border-gray-100"
                                >
                                    {suburb}
                                </p>
                            ))}
                        </div>
                        <p className="mt-6 text-sm text-text-light">
                            Don&apos;t see your suburb? Give us a call — we likely cover your
                            area too.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
