"use client";

import { useRef, useState, useEffect } from "react";
import siteConfig from "@/config/siteConfig";

function StarRating({ rating }) {
    return (
        <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
                <svg
                    key={star}
                    className="w-4 h-4"
                    viewBox="0 0 20 20"
                    fill={star <= rating ? "#FBBC04" : "#e8e8e8"}
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

function Avatar({ author, avatar }) {
    const colors = [
        "#4285F4",
        "#EA4335",
        "#FBBC04",
        "#34A853",
        "#FF6D01",
        "#46BDC6",
    ];
    const colorIndex =
        author.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0) %
        colors.length;

    if (avatar) {
        return (
            <img
                src={avatar}
                alt={author}
                className="w-10 h-10 rounded-full object-cover"
            />
        );
    }

    return (
        <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm"
            style={{ backgroundColor: colors[colorIndex] }}
        >
            {author.charAt(0)}
        </div>
    );
}

function GoogleIcon() {
    return (
        <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
        </svg>
    );
}

function ReviewCard({ review }) {
    return (
        <div className="flex-shrink-0 w-[280px] sm:w-[300px] md:w-[340px] bg-white rounded-xl border border-gray-100 p-4 sm:p-5">
            <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                    <Avatar author={review.author} avatar={review.avatar} />
                    <div>
                        <p className="font-semibold text-sm text-primary-dark">{review.author}</p>
                        <p className="text-xs text-text-light">{review.date}</p>
                    </div>
                </div>
                <GoogleIcon />
            </div>
            <StarRating rating={review.rating} />
            <p className="mt-3 text-sm text-text-muted leading-relaxed">
                {review.text.length > 180
                    ? review.text.substring(0, 180) + "..."
                    : review.text}
            </p>
        </div>
    );
}

export default function GoogleReviews({ reviews }) {
    const scrollRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (!scrollRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setCanScrollLeft(scrollLeft > 5);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
    };

    useEffect(() => {
        checkScroll();
        const el = scrollRef.current;
        if (el) {
            el.addEventListener("scroll", checkScroll, { passive: true });
            return () => el.removeEventListener("scroll", checkScroll);
        }
    }, []);

    const scroll = (direction) => {
        if (!scrollRef.current) return;
        const amount = direction === "left" ? -360 : 360;
        scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    };

    return (
        <section id="reviews" className="bg-white py-16 sm:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-[240px] flex-shrink-0">
                        <div className="lg:sticky lg:top-24 text-center lg:text-left">
                            <h3 className="text-xl font-bold text-primary-dark mb-1 font-[family-name:var(--font-heading)]">
                                {siteConfig.businessName}
                            </h3>
                            <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                                <span className="text-2xl font-bold text-primary-dark">
                                    {reviews.rating}
                                </span>
                                <StarRating rating={Math.round(reviews.rating)} />
                            </div>
                            <p className="text-sm text-text-light mb-3">
                                Based on {reviews.totalReviews} reviews
                            </p>
                            <div className="flex items-center justify-center lg:justify-start gap-1.5 mb-4">
                                <GoogleIcon />
                                <span className="text-xs text-text-light">powered by Google</span>
                            </div>
                            <a
                                href={reviews.googleMapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-[#4285F4] hover:bg-[#3367d6] text-white text-sm font-medium px-5 py-2.5 min-h-[44px] rounded-full transition-colors duration-200 cursor-pointer"
                            >
                                <GoogleIcon />
                                Review us on Google
                            </a>
                        </div>
                    </div>

                    <div className="flex-1 min-w-0 relative">
                        {canScrollLeft && (
                            <button
                                onClick={() => scroll("left")}
                                className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-9 h-9 rounded-full bg-white border border-gray-200 items-center justify-center cursor-pointer"
                                aria-label="Previous reviews"
                            >
                                <svg className="w-4 h-4 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                        )}
                        {canScrollRight && (
                            <button
                                onClick={() => scroll("right")}
                                className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-9 h-9 rounded-full bg-white border border-gray-200 items-center justify-center cursor-pointer"
                                aria-label="Next reviews"
                            >
                                <svg className="w-4 h-4 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        )}

                        <div
                            ref={scrollRef}
                            className="flex gap-4 overflow-x-auto pb-4"
                            style={{
                                scrollbarWidth: "none",
                                msOverflowStyle: "none",
                                WebkitOverflowScrolling: "touch",
                            }}
                        >
                            {reviews.items.map((review, i) => (
                                <ReviewCard key={i} review={review} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
