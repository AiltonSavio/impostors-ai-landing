"use client";

import DroppingEmojis from "@/components/DroppingEmojis";
import PixelFrame from "@/components/PixelFrame";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-composite bg-repeat min-h-screen font-pixel text-primary-content bg-[#0a1219]">
      {/* NAVBAR */}
      <nav className="sticky text-sm sm:text-base text-center top-0 z-50 bg-secondary py-2 px-5 flex justify-center items-center shadow-md">
        <span>
          We’re thrilled to share that Impostors AI won the{" "}
          <a
            href="https://devfolio.co/projects/impostorsai-abd1"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Safe Agentathon
          </a>
          ! 🎉
        </span>
      </nav>

      {/* HERO SECTION */}
      <section className="relative">
        <div className="absolute inset-0 pointer-events-none z-0">
          <DroppingEmojis count={15} />
        </div>

        {/* TITLE + BUTTONS */}
        <div className="flex flex-col items-center w-full pt-5 md:pt-12 relative z-10">
          <div className="flex items-center gap-1 lg:mb-4">
            <Image
              src="/favicon.png"
              alt="Impostors AI"
              width={120}
              height={120}
              className="mr-2 w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px]"
            />
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold drop-shadow-lg">
              <span>Impostors AI</span>
            </h1>
          </div>
          <h2 className="text-xl sm:text-3xl lg:text-4xl mb-6">
            The First AI Social Deduction Game
          </h2>
          <div className="flex gap-4 sm:gap-9 items-center justify-center">
            <a
              href="https://app.impostorsai.xyz"
              className="pixel-button pixel-button--green"
              target="_blank"
              rel="noopener noreferrer"
            >
              ▶ Launch Game
            </a>
            <a
              href="https://docs.fileverse.io/0x3D213B573D6471271AEf247e34f46B39D59A3142/0#key=TIAkL31D_zHZEqHD3MiHcw4PiCgy9Dr1tPJef_gW2CyOQjUDo4UhWAq0BXiFXMuH"
              className="pixel-button pixel-button--blue"
              target="_blank"
              rel="noopener noreferrer"
            >
              📜 Documentation
            </a>
          </div>
        </div>

        {/* COUNCIL IMAGE + ABOUT */}
        <div className="relative w-full flex justify-center items-center mt-12 z-0">
          <div className="flex flex-col">
            <Image
              src="/images/hero-council-table3.png"
              alt="Impostors AI Council"
              width={1024}
              height={435}
              priority
              className="w-full"
            />

            <Image
              src="/images/about-section.png"
              alt="Impostors AI About Section"
              width={1024}
              height={435}
              priority
              className="-mt-2 hidden lg:block mx-auto"
            />
          </div>

          {/* ABOUT OVER TABLE */}
          <section
            id="about"
            className="absolute top-[70%] sm:top-[80%] lg:top-[50%] lg:w-full px-5 mx-2 sm:mx-28 md:mx-44 lg:mx-12 z-10"
          >
            <div className="flex justify-center text-center">
              <div className="rounded-xl shadow-xl">
                <h2 className="text-[26px] min-[425px]:text-4xl sm:text-5xl font-bold mt-3 sm:mt-0 text-primary">
                  About
                </h2>

                <div className="flex flex-col items-center mx-auto lg:flex-row mt-8 md:mt-14 lg:mt-28 lg:w-[950px]">
                  <div className="lg:max-w-[280px] lg:mr-7">
                    <h3 className="font-bold text-2xl">AI-Driven Strategy</h3>
                    <p className="text-xs min-[930px]:text-sm lg:px-5">
                      10 AI agents strategize, but one is sabotaging. Players
                      must analyze conversations & vote out the traitor.
                    </p>
                  </div>
                  <div className="lg:w-[500px]">
                    <h3 className="font-bold text-2xl">On-Chain Governance</h3>
                    <p className="text-xs min-[930px]:text-sm min-[930px]:px-5">
                      Everything runs fully on-chain, ensuring fair outcomes and
                      tamper-proof voting mechanics.
                    </p>
                  </div>
                  <div className="lg:max-w-[300px] lg:ml-8">
                    <h3 className="font-bold text-2xl">Scalable Themes</h3>
                    <p className="text-xs min-[930px]:text-sm md:px-5 ">
                      Medieval kingdom? Futuristic colony? The system supports
                      infinite AI deception scenarios and expansions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* VIDEO DEMO SECTION */}
      <section id="video-demo">
        <div className="max-w-5xl mx-auto px-5 mt-[360px] min-[490px]:mt-[350px] sm:mt-[350px] lg:mt-12">
          <div className="flex justify-center">
            <PixelFrame className="pixel-frame w-full max-w-[850px]" blue>
              <div
                className="relative w-full"
                style={{ paddingBottom: "56.25%" }}
              >
                <iframe
                  src="https://www.youtube.com/embed/HUw_e4JudvY?si=iuJUgm403tnGBAKz"
                  title="Impostors AI Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-sm"
                  frameBorder="0"
                ></iframe>
              </div>
            </PixelFrame>
          </div>
        </div>
      </section>

      {/* AGENTS SECTION */}
      <section id="agents" className="py-10 md:pb-10 md:pt-20">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center text-primary">
            Meet the Agents
          </h2>
          <p className="text-base w-3/4 md:w-auto sm:text-xl text-center mb-6 mx-auto ">
            Each AI Agent plays a unique role in the kingdom. One of them isn’t
            telling the truth...
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 md:gap-x-24 gap-y-5 justify-center items-start max-w-3xl mx-auto">
            {[
              { name: "General", image: "General", desc: "Leads armies" },
              { name: "Diplomat", image: "Diplomat", desc: "Forges alliances" },
              {
                name: "Treasurer",
                image: "Treasurer",
                desc: "Manages treasury",
              },
              { name: "Spymaster", image: "Spymaster", desc: "Gathers intel" },
              { name: "Blacksmith", image: "Blacksmith", desc: "Forges gear" },
              { name: "Mage", image: "Mage", desc: "Arcane powers" },
              { name: "Healer", image: "Healer", desc: "Heals allies" },
              {
                name: "Strategist",
                image: "Strategist",
                desc: "Plans tactics",
              },
              {
                name: "Tactician",
                image: "Tactician",
                desc: "Coordinates moves",
              },
              {
                name: "Architect",
                image: "Architect",
                desc: "Builds defenses",
              },
            ].map((agent) => (
              <div key={agent.name} className="agent-wrapper">
                <PixelFrame className="agent-card">
                  <Image
                    src={`/agents/${agent.image}.png`}
                    alt={agent.name}
                    width={120}
                    height={120}
                    className="mx-auto mb-6 bg-[#0a1219]"
                  />
                  <h3 className="agent-name">{agent.name}</h3>
                </PixelFrame>
                <p className="agent-description w-max">{agent.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section id="team" className="pb-10">
        <div className="max-w-5xl mx-auto px-5">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center text-primary">
            Team
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
            {[
              {
                name: "Ailton Júnior",
                role: "CTO",
                image: "Blacksmith",
              },
              {
                name: "Lawrence Gabriel",
                role: "CEO",
                image: "Tactician",
              },
            ].map((member) => (
              <PixelFrame
                key={member.name}
                className="pixel-frame px-4 py-6 flex flex-col items-center text-center"
                width="w-72"
                blue
              >
                <Image
                  src={`/agents/${member.image}.png`}
                  alt={member.name}
                  width={120}
                  height={120}
                  className="mb-4"
                />
                <h3 className="text-2xl font-bold">{member.name}</h3>
                <p className="text-base text-accent-content font-pixel uppercase">
                  {member.role}
                </p>
              </PixelFrame>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer py-4 px-4 flex items-center justify-between max-w-5xl mx-auto">
        <div>
          <p className="text-base">© 2025 Impostors AI</p>
        </div>
        <div className="flex space-x-4 sm:space-x-8">
          {/* X/Twitter */}
          <a
            href="https://x.com/impostorsai"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition"
            aria-label="Twitter"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 5H23V6H22V5ZM22 3H23V4H22V3ZM21 5V6H22V7H21V12H20V14H19V16H18V17H17V18H16V19H14V20H11V21H4V20H2V19H1V18H3V19H6V18H7V17H5V16H4V15H3V14H5V13H3V12H2V10H4V9H3V8H2V4H3V5H4V6H5V7H7V8H10V9H12V5H13V4H14V3H19V4H22V5H21Z"
                fill="#eae2d1"
              />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Impostors-AI"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition"
            aria-label="GitHub"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23 9V15H22V17H21V19H20V20H19V21H18V22H16V23H15V18H14V17H15V16H17V15H18V14H19V9H18V6H16V7H15V8H14V7H10V8H9V7H8V6H6V9H5V14H6V15H7V16H9V18H7V17H6V16H4V17H5V19H6V20H9V23H8V22H6V21H5V20H4V19H3V17H2V15H1V9H2V7H3V5H4V4H5V3H7V2H9V1H15V2H17V3H19V4H20V5H21V7H22V9H23Z"
                fill="#eae2d1"
              />
            </svg>
          </a>
        </div>
      </footer>
    </main>
  );
}
