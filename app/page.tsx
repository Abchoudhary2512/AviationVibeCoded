"use client";

import { useEffect, useState } from "react";
import { ArrowRight, CalendarCheck, ConciergeBell, Menu, ShieldCheck, X } from "lucide-react";

const navItems = ["Start", "Story", "Rates", "Benefits", "FAQ"];

const facilities = [
  {
    title: "Private Terminal Access",
    text: "Arrive minutes before departure through quiet lounges, priority security, and direct ramp boarding.",
    icon: ConciergeBell,
  },
  {
    title: "On-Demand Flight Desk",
    text: "A dedicated concierge coordinates aircraft, crew, routes, catering, and ground transfers around your schedule.",
    icon: CalendarCheck,
  },
  {
    title: "Certified Safety Network",
    text: "Every journey is operated through vetted partners, experienced crews, and strict maintenance standards.",
    icon: ShieldCheck,
  },
];

const benefits = ["Empty-leg access", "Transparent hourly rates", "Global partner fleet", "24/7 trip support"];

const scrollSteps = [
  { id: "start", title: "Start", text: "Begin the journey." },
  { id: "story", title: "Story", text: "Explore the experience." },
  { id: "facilities", title: "Facilities", text: "See what is included." },
  { id: "rates", title: "Rates", text: "Review access options." },
  { id: "benefits", title: "Benefits", text: "Compare the advantages." },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(scrollSteps[0].id);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal-on-scroll");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -80px" },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollMarker = window.scrollY + window.innerHeight * 0.42;
      const currentStep = scrollSteps.reduce((current, step) => {
        const element = document.getElementById(step.id);

        if (element && element.offsetTop <= scrollMarker) {
          return step.id;
        }

        return current;
      }, scrollSteps[0].id);

      setActiveSection(currentStep);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 text-[#202A36]">
      <aside className="fixed left-6 top-1/2 z-50 hidden -translate-y-1/2 md:block">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/90 px-5 py-6 shadow-2xl shadow-black/10 backdrop-blur-xl">
          <div className="absolute left-[2.05rem] top-10 bottom-10 w-px bg-gray-200" />

          <nav className="relative flex flex-col gap-5" aria-label="Page progress">
            {scrollSteps.map((step) => {
              const isActive = activeSection === step.id;

              return (
                <a
                  key={step.id}
                  href={`#${step.id}`}
                  className="group grid grid-cols-[1.5rem_1fr] items-center gap-3"
                  aria-current={isActive ? "step" : undefined}
                >
                  <span
                    className={`relative flex h-6 w-6 items-center justify-center rounded-full border transition-all duration-500 ease-out ${
                      isActive
                        ? "border-[#202A36] bg-[#202A36] shadow-lg shadow-[#202A36]/25"
                        : "border-gray-200 bg-white group-hover:border-[#202A36]"
                    }`}
                  >
                    <span
                      className={`h-2 w-2 rounded-full transition-all duration-500 ease-out ${
                        isActive ? "bg-white scale-100" : "bg-gray-300 scale-75 group-hover:bg-[#202A36]"
                      }`}
                    />
                  </span>
                  <span className="min-w-0">
                    <span
                      className={`block text-xs font-semibold transition-colors duration-500 ${
                        isActive ? "text-[#202A36]" : "text-gray-500 group-hover:text-[#202A36]"
                      }`}
                    >
                      {step.title}
                    </span>
                    <span
                      className={`block text-[0.68rem] leading-4 transition-colors duration-500 ${
                        isActive ? "text-gray-500" : "text-gray-300 group-hover:text-gray-500"
                      }`}
                    >
                      {step.text}
                    </span>
                  </span>
                </a>
              );
            })}
          </nav>
        </div>
      </aside>

      <section className="relative h-screen overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover brightness-[0.62] contrast-[1.18] saturate-[0.55]"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_091828_e240eb17-6edc-4129-ad9d-98678e3fd238.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/38 via-[#111820]/22 to-black/62" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(255,255,255,0.06),rgba(32,42,54,0.28)_54%,rgba(0,0,0,0.66))]" />
        <div className="absolute inset-0 bg-[linear-gradient(112deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.03)_18%,rgba(0,0,0,0.22)_42%,rgba(255,255,255,0.08)_58%,rgba(0,0,0,0.36)_100%)] mix-blend-multiply" />

        <div className="relative flex h-full flex-col">
          <header className="z-20 mx-auto w-full max-w-7xl px-8 py-6">
            <nav className="relative flex items-center justify-between">
              <a
                href="#start"
                className="text-2xl font-semibold text-white transition-colors hover:text-gray-200"
              >
                SkyElite
              </a>

              <div className="hidden items-center gap-9 md:flex">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-sm font-medium text-white transition-colors hover:text-gray-200"
                  >
                    {item}
                  </a>
                ))}
              </div>

              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white shadow-sm backdrop-blur transition-colors hover:bg-black/55 md:hidden"
                aria-label="Toggle navigation menu"
                aria-expanded={isMenuOpen}
                onClick={() => setIsMenuOpen((open) => !open)}
              >
                {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>

              {isMenuOpen && (
                <div className="absolute right-0 top-14 z-30 w-56 rounded-3xl bg-white/95 p-3 shadow-2xl backdrop-blur md:hidden">
                  {navItems.map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="block rounded-2xl px-4 py-3 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100 hover:text-gray-700"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </nav>
          </header>

          <div
            id="start"
            className="flex flex-1 items-center justify-center px-8 text-center"
          >
            <div className="-mt-80 flex max-w-5xl flex-col items-center">
              <p className="mb-4 text-sm font-semibold tracking-wider text-gray-200 uppercase">
                PRIVATE JETS
              </p>
              <h1 className="flex flex-col items-center">
                <span className="text-6xl leading-none font-normal tracking-tighter text-gray-300 md:text-7xl lg:text-8xl">
                  Premium.
                </span>
                <span className="-mt-3 text-6xl leading-none font-normal tracking-tighter text-white md:text-7xl lg:text-8xl">
                  Accessible.
                </span>
              </h1>
              <p className="mt-6 mb-6 max-w-2xl text-lg text-gray-200 md:text-xl">
                Your dedication deserves recognition.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="#story"
                  className="rounded-full bg-gray-300 px-4 py-2 font-medium text-gray-800 transition-colors hover:bg-gray-400"
                >
                  Discover
                </a>
                <a
                  href="#rates"
                  className="rounded-full bg-[#202A36] px-4 py-2 font-medium text-white transition-colors hover:bg-[#1a2229]"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="relative overflow-hidden bg-gray-50 px-8 py-24 md:py-32">
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent" />
        <div className="mx-auto grid max-w-7xl items-end gap-12 md:grid-cols-[0.85fr_1.15fr]">
          <div className="reveal-on-scroll">
            <p className="mb-4 text-sm font-semibold tracking-wider text-gray-500 uppercase">
              THE EXPERIENCE
            </p>
            <h2  className="max-w-xl text-4xl leading-tight font-normal tracking-tighter text-[#202A36] md:text-6xl">
              Private aviation made calm, precise, and personal.
            </h2>
          </div>
          <div className="reveal-on-scroll delay-1">
            <p className="max-w-2xl text-lg leading-8 text-gray-600">
              SkyElite is built for founders, families, and executive teams who
              need speed without friction. From short regional hops to
              transcontinental journeys, every detail is shaped around privacy,
              comfort, and reliable timing.
            </p>
          </div>
        </div>
      </section>

      <section id="facilities" className="bg-white px-8 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="reveal-on-scroll mb-14 max-w-3xl">
            <p className="mb-4 text-sm font-semibold tracking-wider text-gray-500 uppercase">
              FACILITIES
            </p>
            <h2 className="text-4xl leading-tight font-normal tracking-tighter md:text-6xl">
              Everything around the flight feels first class.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {facilities.map((facility, index) => {
              const Icon = facility.icon;

              return (
                <article
                  key={facility.title}
                  className={`facility-card reveal-on-scroll delay-${index + 1} group rounded-[2rem] border border-gray-200 bg-gray-50 p-7 shadow-sm transition-all duration-700 ease-out hover:border-gray-300 hover:bg-white hover:shadow-2xl`}
                >
                  <div className="facility-icon mb-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#202A36] text-white transition-all duration-700 ease-out group-hover:bg-gray-900">
                    <Icon size={22} />
                  </div>
                  <h3 className="mb-4 text-2xl font-medium tracking-tight text-[#202A36]">
                    {facility.title}
                  </h3>
                  <p className="leading-7 text-gray-600">{facility.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="rates" className="relative overflow-hidden bg-[#202A36] px-8 py-24 text-white md:py-32">
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-56 w-56 rounded-full bg-gray-400/10 blur-3xl" />
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1fr_0.85fr] md:items-center">
          <div className="reveal-on-scroll">
            <p className="mb-4 text-sm font-semibold tracking-wider text-gray-300 uppercase">
              RATES & ACCESS
            </p>
            <h2 className="max-w-3xl text-4xl leading-tight font-normal tracking-tighter md:text-6xl">
              Flexible private jet access without long-term complexity.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
              Request aircraft by trip, compare curated options, and confirm
              the route that fits your timing, passenger count, and comfort
              level.
            </p>
            <a
              href="#benefits"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-medium text-[#202A36] transition-colors hover:bg-gray-200"
            >
              View benefits
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="reveal-on-scroll delay-2 rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <div className="rounded-[1.5rem] bg-white p-6 text-[#202A36]">
              <p className="text-sm font-semibold tracking-wider text-gray-500 uppercase">
                Sample route
              </p>
              <div className="mt-8 flex items-end justify-between gap-6">
                <div>
                  <p className="text-5xl font-normal tracking-tighter">NYC</p>
                  <p className="text-gray-500">Teterboro</p>
                </div>
                <div className="mb-5 h-px flex-1 bg-gray-300" />
                <div className="text-right">
                  <p className="text-5xl font-normal tracking-tighter">MIA</p>
                  <p className="text-gray-500">Opa-locka</p>
                </div>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-4">
                <div className="rounded-3xl bg-gray-100 p-4">
                  <p className="text-sm text-gray-500">Flight time</p>
                  <p className="mt-2 text-2xl font-medium">2h 45m</p>
                </div>
                <div className="rounded-3xl bg-gray-100 p-4">
                  <p className="text-sm text-gray-500">Aircraft</p>
                  <p className="mt-2 text-2xl font-medium">Light Jet</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="bg-gray-50 px-8 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="reveal-on-scroll mb-12 flex max-w-4xl flex-col gap-5">
            <p className="text-sm font-semibold tracking-wider text-gray-500 uppercase">
              BENEFITS
            </p>
            <h2 className="text-4xl leading-tight font-normal tracking-tighter md:text-6xl">
              A smoother way to move through the world.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div
                key={benefit}
                className={`benefit-pill reveal-on-scroll delay-${index + 1} rounded-full border border-gray-200 bg-white px-5 py-4 text-center font-medium text-gray-700 shadow-sm transition-all duration-700 ease-out hover:border-gray-300 hover:text-[#202A36] hover:shadow-xl`}
              >
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
