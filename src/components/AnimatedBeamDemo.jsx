import React, { forwardRef, useRef } from "react";
import { cn } from "../lib/utils";
import { AnimatedBeam } from "./magicui/animated-beam";

// Import images
import chatgptLogo from "../assets/chatgpt-logo-transparent-background-free-png.webp";
import whatsappLogo from "../assets/WhatsApp.svg.webp";
import powerAutomateLogo from "../assets/Microsoft_Power_Automate.svg.png";
import powerBiLogo from "../assets/New_Power_BI_Logo.svg.png";
import officeLogo from "../assets/Microsoft_Office_logo_(2013–2019).png";
import langchainLogo from "../assets/langchain-dp1uxj2zn3752pntqnpfu2.webp";

const Circle = forwardRef(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-16 items-center justify-center rounded-full border-2 bg-white p-4 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function AnimatedBeamDemo() {
  const containerRef = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);
  const div5Ref = useRef(null);
  const div6Ref = useRef(null);
  const div7Ref = useRef(null);

  // Force re-render after mount to ensure alignment
  React.useEffect(() => {
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full min-h-screen bg-slate-900 flex items-center justify-center py-20">
      <div className="text-center max-w-4xl mx-auto px-4">
        <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          AI-Powered Connections
        </h2>
        <p className="text-gray-400 text-base md:text-lg mb-8 md:mb-16 max-w-2xl mx-auto">
          Watch how our AI connects and processes data from multiple sources in real-time
        </p>
        
        {/* Desktop Layout */}
        <div
          className="hidden md:flex relative h-[800px] lg:h-[900px] w-full mx-auto items-center justify-center overflow-visible px-4 py-12"
          ref={containerRef}
        >
          <div className="flex w-full max-w-7xl flex-row items-stretch justify-between">
            <div className="flex flex-col justify-center gap-12">
              <Circle ref={div1Ref} className="size-16 lg:size-20">
                <img src={chatgptLogo} alt="ChatGPT" className="w-10 lg:w-12 h-10 lg:h-12 object-contain" />
              </Circle>
              <Circle ref={div2Ref} className="size-16 lg:size-20">
                <img src={whatsappLogo} alt="WhatsApp" className="w-10 lg:w-12 h-10 lg:h-12 object-contain" />
              </Circle>
              <Circle ref={div3Ref} className="size-16 lg:size-20">
                <img src={powerAutomateLogo} alt="Power Automate" className="w-10 lg:w-12 h-10 lg:h-12 object-contain" />
              </Circle>
            </div>
            <div className="flex flex-col justify-center">
              <Circle ref={div7Ref} className="size-20 lg:size-24 bg-gradient-to-br from-blue-500 to-purple-600">
                <Icons.user />
              </Circle>
            </div>
            <div className="flex flex-col justify-center gap-12">
              <Circle ref={div4Ref} className="size-16 lg:size-20">
                <img src={powerBiLogo} alt="Power BI" className="w-10 lg:w-12 h-10 lg:h-12 object-contain" />
              </Circle>
              <Circle ref={div5Ref} className="size-16 lg:size-20">
                <img src={officeLogo} alt="Microsoft Office" className="w-10 lg:w-12 h-10 lg:h-12 object-contain" />
              </Circle>
              <Circle ref={div6Ref} className="size-16 lg:size-20">
                <img src={langchainLogo} alt="LangChain" className="w-10 lg:w-12 h-10 lg:h-12 object-contain" />
              </Circle>
            </div>
          </div>

          {/* Animated Beams - Desktop Only */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div1Ref}
            toRef={div7Ref}
            duration={3}
            pathWidth={6}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div2Ref}
            toRef={div7Ref}
            duration={3}
            pathWidth={6}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div3Ref}
            toRef={div7Ref}
            duration={3}
            pathWidth={6}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div4Ref}
            toRef={div7Ref}
            duration={3}
            pathWidth={6}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div5Ref}
            toRef={div7Ref}
            duration={3}
            pathWidth={6}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div6Ref}
            toRef={div7Ref}
            duration={3}
            pathWidth={6}
          />
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden relative w-full px-4 py-8">
          <div className="flex flex-col items-center space-y-8 max-w-sm mx-auto">
            {/* Top row - 3 services */}
            <div className="flex justify-center gap-4 w-full">
              <Circle className="size-12">
                <img src={chatgptLogo} alt="ChatGPT" className="w-8 h-8 object-contain" />
              </Circle>
              <Circle className="size-12">
                <img src={whatsappLogo} alt="WhatsApp" className="w-8 h-8 object-contain" />
              </Circle>
              <Circle className="size-12">
                <img src={powerAutomateLogo} alt="Power Automate" className="w-8 h-8 object-contain" />
              </Circle>
            </div>

            {/* Arrow down */}
            <div className="flex justify-center">
              <svg className="w-8 h-8 text-blue-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>

            {/* Center - User */}
            <div className="flex justify-center">
              <Circle className="size-16 bg-gradient-to-br from-blue-500 to-purple-600">
                <Icons.user />
              </Circle>
            </div>

            {/* Arrow down */}
            <div className="flex justify-center">
              <svg className="w-8 h-8 text-blue-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>

            {/* Bottom row - 3 outputs */}
            <div className="flex justify-center gap-4 w-full">
              <Circle className="size-12">
                <img src={powerBiLogo} alt="Power BI" className="w-8 h-8 object-contain" />
              </Circle>
              <Circle className="size-12">
                <img src={officeLogo} alt="Microsoft Office" className="w-8 h-8 object-contain" />
              </Circle>
              <Circle className="size-12">
                <img src={langchainLogo} alt="LangChain" className="w-8 h-8 object-contain" />
              </Circle>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Icons = {
  chatgpt: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" fill="currentColor"/>
    </svg>
  ),
  whatsapp: () => (
    <svg width="32" height="32" viewBox="0 0 175.216 175.552" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="b" x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#57d163" />
          <stop offset="1" stopColor="#23b33a" />
        </linearGradient>
      </defs>
      <path d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z" fill="url(#b)"/>
      <path d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647" fill="#ffffff" fillRule="evenodd"/>
    </svg>
  ),
  powerAutomate: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="3" fill="#0078D4"/>
      <path d="M8.5 7h7v1.5h-7V7zm0 3h7v1.5h-7v-1.5zm0 3h4v1.5h-4V13z" fill="white"/>
      <path d="M14 11.5l3 2-3 2v-4z" fill="white"/>
      <path d="M6.5 16.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" fill="#FFC83D"/>
      <path d="M17.5 6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" fill="#FFC83D"/>
    </svg>
  ),
  powerbi: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="12" width="2.5" height="8" fill="#F2C811" rx="0.5"/>
      <rect x="7.5" y="9" width="2.5" height="11" fill="#F2C811" rx="0.5"/>
      <rect x="11" y="6" width="2.5" height="14" fill="#F2C811" rx="0.5"/>
      <rect x="14.5" y="8" width="2.5" height="12" fill="#F2C811" rx="0.5"/>
      <rect x="18" y="10" width="2.5" height="10" fill="#F2C811" rx="0.5"/>
    </svg>
  ),
  office: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="2" fill="#EA3F00"/>
      <rect x="6" y="6" width="12" height="2" fill="white" rx="0.5"/>
      <rect x="6" y="10" width="12" height="2" fill="white" rx="0.5"/>
      <rect x="6" y="14" width="8" height="2" fill="white" rx="0.5"/>
      <circle cx="17" cy="15" r="1" fill="white"/>
    </svg>
  ),
  langchain: () => (
    <svg width="32" height="32" viewBox="0 0 306 306" xmlns="http://www.w3.org/2000/svg">
      <rect width="306" height="306" fill="#1C3C3C"/>
      <path d="M90 90a6 6 0 1 1-12 0 6 6 0 0 1 12 0zM150 90a6 6 0 1 1-12 0 6 6 0 0 1 12 0zM210 90a6 6 0 1 1-12 0 6 6 0 0 1 12 0zM228 108a6 6 0 1 1-12 0 6 6 0 0 1 12 0zM228 138a6 6 0 1 1-12 0 6 6 0 0 1 12 0zM228 168a6 6 0 1 1-12 0 6 6 0 0 1 12 0zM228 198a6 6 0 1 1-12 0 6 6 0 0 1 12 0zM210 216a6 6 0 1 1-12 0 6 6 0 0 1 12 0zM150 216a6 6 0 1 1-12 0 6 6 0 0 1 12 0zM90 216a6 6 0 1 1-12 0 6 6 0 0 1 12 0zM72 198a6 6 0 1 1-12 0 6 6 0 0 1 12 0zM72 168a6 6 0 1 1-12 0 6 6 0 0 1 12 0zM72 138a6 6 0 1 1-12 0 6 6 0 0 1 12 0zM72 108a6 6 0 1 1-12 0 6 6 0 0 1 12 0z" fill="#10B981"/>
      <path d="M84 96h60M210 144v60M144 210H84M66 168V108" stroke="#10B981" strokeWidth="3"/>
    </svg>
  ),
  user: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" stroke="white" strokeWidth="2" fill="none"/>
      <circle cx="12" cy="7" r="4" stroke="white" strokeWidth="2" fill="none"/>
    </svg>
  ),
};