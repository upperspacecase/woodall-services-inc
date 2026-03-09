"use client";

import { useState } from "react";
import { Phone } from "lucide-react";
import siteConfig from "@/config/siteConfig";

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.target);
        const data = {
            name: formData.get("name"),
            phone: formData.get("phone"),
            service: formData.get("service"),
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setSubmitted(true);
            }
        } catch (err) {
            // Fail silently for now
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="bg-primary-dark py-16 sm:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 font-[family-name:var(--font-heading)]">
                        Get a Free Quote
                    </h2>
                    <p className="text-blue-200 text-lg mb-8">
                        Tell us what you need and we&apos;ll get back to you fast.
                    </p>

                    {submitted ? (
                        <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-8 text-center">
                            <p className="text-green-400 text-lg font-semibold mb-2">
                                Thanks! We&apos;ll be in touch shortly.
                            </p>
                            <p className="text-blue-200 text-sm">
                                Need it sooner? Call us directly:
                            </p>
                            <a
                                href={siteConfig.phoneHref}
                                className="inline-flex items-center gap-2 text-cta font-semibold text-lg mt-2 cursor-pointer"
                            >
                                <Phone className="w-5 h-5" />
                                {siteConfig.phone}
                            </a>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="Your name"
                                className="w-full px-4 py-3 rounded-lg bg-primary/80 border border-blue-700 text-white placeholder-blue-300/50 focus:outline-none focus:border-primary-light text-base"
                            />
                            <input
                                type="tel"
                                name="phone"
                                required
                                placeholder="Phone number"
                                className="w-full px-4 py-3 rounded-lg bg-primary/80 border border-blue-700 text-white placeholder-blue-300/50 focus:outline-none focus:border-primary-light text-base"
                            />
                            <select
                                name="service"
                                required
                                defaultValue=""
                                className="w-full px-4 py-3 rounded-lg bg-primary/80 border border-blue-700 text-white focus:outline-none focus:border-primary-light text-base appearance-none cursor-pointer"
                            >
                                <option value="" disabled className="text-blue-300">
                                    Service needed
                                </option>
                                {siteConfig.contactForm.serviceOptions.map((service, i) => (
                                    <option key={i} value={service}>
                                        {service}
                                    </option>
                                ))}
                            </select>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-cta hover:bg-cta-dark text-white font-bold text-lg px-6 py-4 rounded-lg transition-colors duration-200 disabled:opacity-50 cursor-pointer"
                            >
                                {loading ? "Sending..." : "Get a Free Quote"}
                            </button>
                        </form>
                    )}

                    <p className="mt-6 text-blue-300/60 text-sm">
                        Or call us directly:{" "}
                        <a
                            href={siteConfig.phoneHref}
                            className="text-cta font-medium cursor-pointer"
                        >
                            {siteConfig.phone}
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}
