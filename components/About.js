import siteConfig from "@/config/siteConfig";

export default function About() {
    const { about } = siteConfig;

    return (
        <section id="about" className="bg-surface py-16 sm:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Photo */}
                    <div className="relative">
                        <div className="rounded-xl overflow-hidden bg-primary-dark">
                            {about.image ? (
                                <img
                                    src={about.image}
                                    alt={`${siteConfig.businessName} team`}
                                    className="w-full h-auto"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary-light/20 flex items-center justify-center">
                                            <span className="text-primary-light text-3xl font-bold font-[family-name:var(--font-heading)]">
                                                {siteConfig.businessName.charAt(0)}
                                            </span>
                                        </div>
                                        <p className="text-sm text-blue-300">Team photo</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Text */}
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark mb-4 font-[family-name:var(--font-heading)]">
                            {about.headline}
                        </h2>
                        <p className="text-text-muted text-lg leading-relaxed">
                            {about.text}
                        </p>

                    </div>
                </div>
            </div>
        </section>
    );
}
