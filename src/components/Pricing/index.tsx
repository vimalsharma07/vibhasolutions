"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Website Development Pricing"
          paragraph="Choose the best option for your business needs. Whether you need a static website, dynamic website, or a full-fledged e-commerce site, we've got you covered."
          center
          width="665px"
        />

        <div className="w-full">
          <div className="mb-8 flex justify-center md:mb-12 lg:mb-16">
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Monthly
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${
                isMonthly
                  ? "text-dark dark:text-white"
                  : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Yearly
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Static Website"
            price={isMonthly ? "₹4999" : "₹4999"}
            duration={isMonthly ? "" : ""}
            subtitle="Ideal for showcasing your business with minimal updates."
          >
            <OfferList text="Up to 5 Pages" status="active" />
            <OfferList text="Responsive Design" status="active" />
            <OfferList text="Basic SEO Optimization" status="active" />
            <OfferList text="Contact Form Integration" status="active" />
            <OfferList text="Hosting Not Included" status="inactive" />
            <OfferList text="No CMS Integration" status="inactive" />
          </PricingBox>
          <PricingBox
            packageName="Dynamic Website"
            price={isMonthly ? "₹9999" : "₹9999"}
            duration={isMonthly ? "" : "yr"}
            subtitle="Perfect for businesses requiring frequent updates and dynamic content."
          >
            <OfferList text="Up to 10 Pages" status="active" />
            <OfferList text="Content Management System" status="active" />
            <OfferList text="Advanced SEO Optimization" status="active" />
            <OfferList text="Blog Integration" status="active" />
            <OfferList text="Custom Functionalities" status="active" />
            <OfferList text="24/7 Support" status="inactive" />
          </PricingBox>
          <PricingBox
            packageName="E-commerce Website"
            price={isMonthly ? "₹14999" : "₹14999"}
            duration={isMonthly ? "" : "yr"}
            subtitle="Best solution for online stores with payment integration and product management."
          >
            <OfferList text="Unlimited Products" status="active" />
            <OfferList text="Payment Gateway Integration" status="active" />
            <OfferList text="Product Management System" status="active" />
            <OfferList text="Shopping Cart Functionality" status="active" />
            <OfferList text="Inventory Management" status="active" />
            <OfferList text="Free Maintenance for 6 months" status="inactive" />
          </PricingBox>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
