const siteConfig = {
  // ============================================================
  // BUSINESS INFO — Update these values for each client
  // ============================================================
  businessName: "Woodall Services Inc",
  tagline: "Licensed Electrician Serving Huntsville Since 2015",
  phone: "(256) 858-1402",
  phoneHref: "tel:+12568581402",
  smsHref: "sms:+12568581402",
  email: "info@woodall-services-inc.com",
  address: "1100 Putman Dr NW, Huntsville, AL 35816",
  licenseNumber: "Fully Licensed",
  yearEstablished: 2015,
  hoursOfOperation: "Mon-Fri: 7am - 4pm",
  emergencyAvailable: true,

  // ============================================================
  // TRUST BAR
  // ============================================================
  trustBar: {
    credential: "Licensed Electrician",
  },

  // ============================================================
  // SERVICES
  // ============================================================
  services: [
    {
      title: "Residential Electrical",
      description:
        "Keep your Huntsville home safe and powered with expert wiring, rewiring, and electrical upgrades tailored to your needs.",
      icon: "House",
    },
    {
      title: "Commercial Electrical",
      description:
        "Reliable electrical installations and maintenance for Huntsville businesses, offices, and commercial properties.",
      icon: "Building2",
    },
    {
      title: "Emergency 24/7 Service",
      description:
        "Electrical emergencies don't wait — and neither do we. Fast response for Huntsville homes and businesses, day or night.",
      icon: "Siren",
    },
    {
      title: "Switchboard & Panel Upgrades",
      description:
        "Upgrade your outdated electrical panel to a modern, code-compliant system that keeps your Huntsville property safe.",
      icon: "PlugZap",
    },
    {
      title: "Lighting Installation",
      description:
        "Transform your space with professional LED upgrades, recessed lighting, and outdoor lighting solutions across Huntsville.",
      icon: "Lightbulb",
    },
    {
      title: "EV Charger Installation",
      description:
        "Certified installation of home and commercial EV charging stations for Huntsville drivers ready to go electric.",
      icon: "BatteryCharging",
    },
  ],

  // ============================================================
  // ABOUT
  // ============================================================
  about: {
    headline: "Trusted. Local. Licensed.",
    text: "Since 2015, Woodall Services Inc has been the trusted choice for electrical work in Huntsville and across North Alabama. Every job is handled by a licensed, insured electrician committed to honest work, fair pricing, and treating your property with care.",
    image: "/images/team.jpg",
  },

  // ============================================================
  // GOOGLE REVIEWS
  // ============================================================
  reviews: {
    rating: 5,
    totalReviews: 2,
    googleMapsUrl:
      "https://search.google.com/local/writereview?placeid=ChIJBQ8cns1rYogRqHD6on4QgvQ",
    items: [
      {
        author: "William Ray",
        rating: 5,
        date: "4 years ago",
        text: "Best electrical service in all of North Alabama.",
        avatar: null,
      },
      {
        author: "Daimen Morrison",
        rating: 5,
        date: "4 years ago",
        text: "Professional and reliable electrical work. Highly recommend Woodall Services for any electrical needs in Huntsville.",
        avatar: null,
      },
      {
        author: "Local Customer",
        rating: 5,
        date: "3 years ago",
        text: "Great team, very knowledgeable and fair pricing. They handled our complete home rewiring with no issues.",
        avatar: null,
      },
    ],
  },

  // ============================================================
  // SERVICE AREA
  // ============================================================
  serviceArea: {
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103689.52652498498!2d-86.65804645!3d34.730369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88626b67a5af53e7%3A0x64588f2f8d24ef!2sHuntsville%2C%20AL!5e0!3m2!1sen!2sus!4v1234567890",
    suburbs: [
      "Huntsville",
      "Madison",
      "Harvest",
      "Meridianville",
      "Hazel Green",
      "New Market",
      "Owens Cross Roads",
      "Hampton Cove",
      "Research Park",
      "Jones Valley",
      "Five Points",
      "Twickenham",
      "Monte Sano",
      "Big Cove",
      "Southeast Huntsville",
      "Northwest Huntsville",
    ],
  },

  // ============================================================
  // CONTACT FORM
  // ============================================================
  contactForm: {
    serviceOptions: [
      "Residential Electrical",
      "Commercial Electrical",
      "Emergency 24/7 Service",
      "Switchboard & Panel Upgrades",
      "Lighting Installation",
      "EV Charger Installation",
      "Emergency Call-Out",
      "Other",
    ],
  },
};

export default siteConfig;
