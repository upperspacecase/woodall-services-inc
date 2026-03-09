"use client";

import { Phone, MessageSquare } from "lucide-react";
import siteConfig from "@/config/siteConfig";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <a href="#" className="flex items-center gap-2">
                        <span className="text-primary font-bold text-xl tracking-tight font-[family-name:var(--font-heading)]">
                            {siteConfig.businessName}
                        </span>
                    </a>

                    <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                        <a href="#services" className="text-text-muted hover:text-primary transition-colors duration-200">
                            Services
                        </a>
                        <a href="#service-area" className="text-text-muted hover:text-primary transition-colors duration-200">
                            Service Area
                        </a>
                        <a href="#contact" className="text-text-muted hover:text-primary transition-colors duration-200">
                            Contact
                        </a>
                    </nav>

                    <div className="flex items-center gap-3">
                        <a
                            href={siteConfig.smsHref}
                            className="inline-flex items-center gap-2 bg-cta hover:bg-cta-dark text-white font-bold text-sm px-4 py-2.5 min-h-[44px] rounded-lg transition-colors duration-200 cursor-pointer"
                        >
                            <MessageSquare className="w-4 h-4" />
                            <span className="hidden sm:inline">Text Us Now</span>
                            <span className="sm:hidden">Text</span>
                        </a>
                        <a
                            href={siteConfig.phoneHref}
                            className="hidden sm:flex items-center gap-2 text-sm font-medium text-text-muted"
                        >
                            <Phone className="w-4 h-4" />
                            {siteConfig.phone}
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}
