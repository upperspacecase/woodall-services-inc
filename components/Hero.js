"use client";

import { Phone, Mail, MapPin, Clock, Star } from "lucide-react";
import siteConfig from "@/config/siteConfig";

export default function Hero() {
    const featuredReviews = siteConfig.reviews.items.slice(0, 3);

    return (
        <section className="relative min-h-[90vh] flex items-center bg-primary-dark text-white overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/hero-bg.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f1b2d]/90 via-[#0f1b2d]/80 to-[#0f1b2d]/60" />

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">

                    {/* Left Column — Main Content */}
                    <div className="lg:col-span-2">

                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] font-[family-name:var(--font-heading)]">
                            {siteConfig.tagline}
                        </h1>



                        {/* CTA Buttons */}
                        <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center bg-cta hover:bg-cta-dark text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg transition-all duration-200 hover:translate-y-[-2px] shadow-lg shadow-orange-500/20 cursor-pointer"
                            >
                                Get a Free Quote
                            </a>
                            <a
                                href={siteConfig.phoneHref}
                                className="inline-flex items-center justify-center gap-2 border-2 border-white/20 hover:border-primary-light text-white font-semibold text-base sm:text-lg px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg transition-all duration-200 hover:translate-y-[-2px] cursor-pointer"
                            >
                                <Phone className="w-5 h-5" />
                                {siteConfig.phone}
                            </a>
                        </div>

                        {/* Review Quotes */}
                        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {featuredReviews.map((review, i) => (
                                <div key={i} className="space-y-2">
                                    <div className="flex gap-0.5">
                                        {[...Array(review.rating)].map((_, j) => (
                                            <Star
                                                key={j}
                                                className="w-4 h-4 fill-cta text-cta"
                                            />
                                        ))}
                                    </div>
                                    <p className="text-blue-100/70 text-sm leading-relaxed italic">
                                        &ldquo;{review.text.length > 100
                                            ? review.text.substring(0, 100) + "..."
                                            : review.text}&rdquo;
                                    </p>
                                    <p className="text-blue-300/50 text-xs font-medium">
                                        &mdash; {review.author}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column — Info Sidebar */}
                    <div className="space-y-0 bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/10">
                        {/* Hours */}
                        <div className="pb-5">
                            <div className="flex items-center gap-2 mb-2">
                                <Clock className="w-4 h-4 text-primary-light" />
                                <h3 className="text-white font-bold text-lg">Hours</h3>
                            </div>
                            <p className="text-blue-200/70 text-sm">
                                {siteConfig.hoursOfOperation}
                            </p>
                            {siteConfig.emergencyAvailable && (
                                <p className="text-cta text-xs font-semibold mt-1">
                                    24/7 Emergency Available
                                </p>
                            )}
                        </div>

                        <div className="border-t border-white/10" />

                        {/* Service Area */}
                        <div className="py-5">
                            <div className="flex items-center gap-2 mb-2">
                                <MapPin className="w-4 h-4 text-primary-light" />
                                <h3 className="text-white font-bold text-lg">Service Area</h3>
                            </div>
                            <p className="text-blue-200/70 text-sm">
                                {siteConfig.serviceArea.suburbs.slice(0, 5).join(", ")} and surrounding areas
                            </p>
                        </div>

                        <div className="border-t border-white/10" />

                        {/* Contact */}
                        <div className="py-5">
                            <div className="flex items-center gap-2 mb-2">
                                <Phone className="w-4 h-4 text-primary-light" />
                                <h3 className="text-white font-bold text-lg">Contact</h3>
                            </div>
                            <a
                                href={siteConfig.phoneHref}
                                className="text-blue-200/70 text-sm hover:text-white transition-colors block"
                            >
                                {siteConfig.phone}
                            </a>
                            <a
                                href={`mailto:${siteConfig.email}`}
                                className="text-blue-200/70 text-sm hover:text-white transition-colors block mt-1"
                            >
                                {siteConfig.email}
                            </a>
                        </div>

                        <div className="border-t border-white/10" />

                        {/* Google Rating */}
                        <div className="pt-5">
                            <div className="flex items-center gap-2 mb-2">
                                <Star className="w-4 h-4 fill-cta text-cta" />
                                <h3 className="text-white font-bold text-lg">Reviews</h3>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="w-3.5 h-3.5 fill-cta text-cta"
                                        />
                                    ))}
                                </div>
                                <span className="text-blue-200/70 text-sm">
                                    {siteConfig.reviews.rating}/5 ({siteConfig.reviews.totalReviews} reviews)
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
