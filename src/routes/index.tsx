import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import "../portfolio.css";
const flowchart = { url: "/sys-flowchart (1).png" };
const modelArch = { url: "/model-arch (1).jpeg" };
const fitboxPdf = { url: "/FitBox_Strategic_Diagnostic.pdf" };
const hospitalPdf = { url: "/Hospital_Group_B2O_Turnaround.pdf" };
const icDeckPdf = { url: "/Investment_Committee_Decision_Deck.pdf" };
const pepsiPdf = { url: "/Pepsi_Cola_Riyadh_Financial_Model (1).pdf" };
import capstoneDeckPdf from "@/assets/Hajj_Earbud_Presentation.pdf.asset.json";
import capstonePosterPdf from "@/assets/Hajj_Earbud_Poster.pdf.asset.json";

const TITLE = "Manar Alosaimi — Technology, Data & Structured Problem-Solving";
const DESCRIPTION =
  "Computer Engineering graduate combining technology, data analysis, business analysis, and structured problem-solving to support technology-enabled transformation and performance improvement.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  component: Index,
});

const figures = [
  {
    src: flowchart.url,
    alt: "System analysis and design flowchart",
    caption: "System flowchart — vital-sign monitoring, KWS, and SOS logic",
  },
  {
    src: modelArch.url,
    alt: "CNN model architecture summary",
    caption: "CNN architecture — sequential model, Conv2D + BatchNorm blocks",
  },
];

const MARQUEE_ITEMS = [
  "Business Analysis",
  "Data Analysis",
  "Structured Problem-Solving",
  "Financial Modelling",
  "Requirements Engineering",
  "Systems Analysis",
  "Process Analysis",
  "Edge AI / Machine Learning",
  "Enterprise Technology",
  "Python",
  "SQL",
  "Excel Modelling",
  "PowerPoint",
  "Stakeholder Communication",
  "Digital Transformation",
  "Feasibility Studies",
  "Market Research",
  "Root-Cause Diagnosis",
  "Technology-Enabled Performance",
  "Portfolio Management",
];

const PDF_EVENT = "portfolio:open-pdf";

function DocLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      className="doc-link"
      href={href}
      target="_blank"
      rel="noopener"
      onClick={(e) => {
        e.preventDefault();
        window.dispatchEvent(new CustomEvent(PDF_EVENT, { detail: href }));
      }}
    >
      {children}
    </a>
  );
}

function PdfViewer() {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    const open = (e: Event) => setSrc((e as CustomEvent<string>).detail);
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setSrc(null);
    window.addEventListener(PDF_EVENT, open);
    window.addEventListener("keydown", esc);
    return () => {
      window.removeEventListener(PDF_EVENT, open);
      window.removeEventListener("keydown", esc);
    };
  }, []);

  if (!src) return null;

  return (
    <div className="pdf-overlay" onClick={() => setSrc(null)}>
      <div className="pdf-shell" onClick={(e) => e.stopPropagation()}>
        <div className="pdf-bar">
          <a href={src} target="_blank" rel="noopener">Open in new tab ↗</a>
          <button type="button" onClick={() => setSrc(null)} aria-label="Close document">
            Close ✕
          </button>
        </div>
        <iframe src={src} title="Document viewer" />
      </div>
    </div>
  );
}

function Index() {
  return (
    <div className="pf">
      <PdfViewer />
      <header className="site-nav">
        <div className="nav-inner">
          <div className="brand">
            MANAR ALOSAIMI <span>/ portfolio</span>
          </div>
          <ul className="nav-links">
            <li><a href="#profile">Profile</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#cases">Case Studies</a></li>
            <li><a href="#capstone">Capstone</a></li>
            
          </ul>
          <a className="nav-cta" href="#contact">Contact</a>
        </div>
      </header>

      <section className="hero">
        <div className="wrap">
          <div className="eyebrow">Riyadh, Saudi Arabia</div>
          <h1>
            Technology, Data &amp; Structured Problem-Solving for Complex Business Challenges
          </h1>
          <p className="hero-subtitle">
            Computer Engineering graduate (First Class Honors) combining technology, data analysis,
            business analysis, and structured problem-solving to support technology-enabled
            transformation and performance improvement.
          </p>
          <p className="lede">
            I combine an engineering foundation with hands-on experience in business analysis,
            data-driven problem solving, financial modelling, and enterprise technology. Through
            consulting Accelerator, technical projects, and structured case studies, I have developed
            the ability to move from problem definition and analysis to practical recommendations,
            system delivery, and stakeholder-ready communication.
          </p>
          <div className="hero-meta">
            <div><span>Education</span>B.Sc. Computer Engineering, Taif University — GPA 3.82/4.0</div>
            <div><span>Most Recent</span>Boost Accelerator, Arpus Consulting (Completed)</div>
            <div><span>Focus</span>Enterprise Technology · Business Analysis · Data &amp; Analytics</div>
          </div>
        </div>
      </section>

      <section id="profile">
        <div className="wrap">
          <div className="section-head"><span className="section-num">01</span><h2>Profile</h2></div>
          <div className="profile-grid">
            <div>
              <p>
                Computer Engineering graduate with First Class Honors and a strong foundation in
                technology, data analysis, business analysis, and structured problem-solving.
                Experienced in research, market and demand analysis, Excel-based financial modelling,
                requirements engineering, and developing client-ready presentations and deliverables.
              </p>
              <p>
                Brings hands-on exposure to enterprise IT environments and end-to-end technology
                delivery through an Edge-AI graduation project. Interested in technology-enabled
                transformation, enterprise systems, data-driven decision-making, and performance
                improvement.
              </p>
              <div className="skill-block">
                <h4>Business Analysis &amp; Technology</h4>
                <div className="tag-row">
                  <span className="tag">Business Analysis</span>
                  <span className="tag">Data Analysis</span>
                  <span className="tag">Structured Problem-Solving</span>
                  <span className="tag">Requirements Engineering</span>
                  <span className="tag">Systems Analysis</span>
                  <span className="tag">Process Analysis</span>
                  <span className="tag">Research &amp; Data Collection</span>
                  <span className="tag">Financial Modelling</span>
                  <span className="tag">Stakeholder Communication</span>
                  <span className="tag">Presentation Development</span>
                </div>
              </div>
              <div className="skill-block">
                <h4>Technical</h4>
                <div className="tag-row">
                  <span className="tag">Python Fundamentals</span>
                  <span className="tag">SQL Fundamentals</span>
                  <span className="tag">Data Analysis</span>
                  <span className="tag">Edge AI / Machine Learning</span>
                  <span className="tag">Systems Integration</span>
                  <span className="tag">Enterprise IT Concepts</span>
                  <span className="tag">Git / GitHub</span>
                </div>
              </div>
              <div className="skill-block">
                <h4>Tools</h4>
                <div className="tag-row">
                  <span className="tag">Microsoft Excel</span>
                  <span className="tag">Microsoft PowerPoint</span>
                  <span className="tag">Microsoft Word</span>
                  <span className="tag">Lucidcharts</span>
                </div>
              </div>
              <div className="skill-block">
                <h4>Languages</h4>
                <div className="tag-row">
                  <span className="tag">Arabic — Native</span>
                  <span className="tag">English — Professional</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="col-head">Certifications &amp; Professional Development</h4>
              <ul className="cert-list">
                <li>Digital Transformation and AI for Business</li>
                <li>IBM AI Engineering Professional Certificate</li>
                <li>McKinsey Forward Program</li>
                <li>“C-Suite Ready in 90 Days” — AI-Augmented Business &amp; Technology Program</li>
                <li>Excel Fundamentals</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="experience">
        <div className="wrap">
          <div className="section-head"><span className="section-num">02</span><h2>Experience</h2></div>

          <div className="exp-item">
            <div className="when">Jul 2026 — Completed</div>
            <div>
              <h3>Boost Accelerator Programme</h3>
              <div className="org">
                Arpus Consulting, Saudi Arabia — Strategy consulting firm serving public- and
                private-sector clients across strategy, feasibility, and operating-model engagements
              </div>
              <ul>
                <li>Conducted market research, benchmarking, and data analysis to support strategy and feasibility engagements across public- and private-sector.</li>
                <li>Analyzed market demand and sizing for a healthcare feasibility study, supporting capacity and service-mix assumptions.</li>
                <li>Built Excel-based financial models to test commercial and operational assumptions and support data-driven feasibility analysis.</li>
                <li>Structured findings into clear recommendations and client-ready presentations, translating analytical outputs into decision-oriented deliverables.</li>
              </ul>
              <p className="gained">
                Gained: feasibility-study structuring, market sizing &amp; demand analysis,
                Excel-based financial modelling, and client-ready deliverable writing under senior
                review.
              </p>
            </div>
          </div>

          <div className="exp-item">
            <div className="when">Jul — Aug 2025</div>
            <div>
              <h3>IT Trainee</h3>
              <div className="org">King Fahad Air Base — International Systems Engineering</div>
              <ul>
                <li>Completed a structured rotation across enterprise IT domains within a large, mission-critical organizational environment.</li>
                <li>Analyzed enterprise infrastructure management principles and the relationship between technical architecture, operational reliability, and organizational performance.</li>
                <li>Developed practical understanding of how technology infrastructure supports business continuity, operational efficiency, and large-scale organizational requirements.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee-wrap" role="region" aria-label="Skills and focus areas">
        <div className="marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="marquee-item">{item}</span>
          ))}
        </div>
      </div>

      <section id="cases">
        <div className="wrap">
          <div className="section-head"><span className="section-num">03</span><h2>Business &amp; Technology Case Studies</h2></div>
          <p className="section-sub">
            Developed through a structured consulting-methodology programme: each case moves from
            problem definition and analysis to practical recommendations and decision-oriented
            deliverables.
          </p>

          <div className="case-grid">
            <div className="case-card flagship">
              <div className="idx">01</div>
              <div>
                <span className="flag-badge">FLAGSHIP CASE</span>
                <h3>FitBox Strategic Diagnostic &amp; Transformation Roadmap</h3>
                <span className="sector">Retail / Consumer Subscription — Riyadh</span>
                <p>
                  Analyzed a 22% revenue decline using structured root-cause analysis across customer,
                  operational, and value-chain dimensions.
                </p>
                <p>
                  Identified logistics misalignment and value proposition issues as key drivers of
                  customer churn. Designed a phased transformation roadmap connecting operational
                  improvements, technology enablement, and performance KPIs. Presented findings and
                  recommendations through a structured executive-style decision narrative.
                </p>
                <p className="skills-line">
                  Root-cause diagnosis · impact/evidence prioritization · Porter value-chain mapping
                  · phased roadmap design
                </p>
                <DocLink href={fitboxPdf.url}>
                  Read the full case (PDF) ↗
                </DocLink>
              </div>
            </div>

            <div className="case-card">
              <div className="idx">02</div>
              <div>
                <h3>Hospital Group Turnaround</h3>
                <span className="sector">Healthcare / Government-adjacent — Riyadh</span>
                <p>
                  Analyzed organizational and operational performance issues to identify structural
                  root causes beyond surface-level market explanations.
                </p>
                <p>
                  Applied structured hypothesis testing to evaluate operational drivers and define
                  improvement priorities. Developed a transformation plan focused on restoring
                  operational and organizational performance.
                </p>
                <p className="skills-line">
                  Organisation-level diagnosis · structured hypothesis testing · transformation
                  planning
                </p>
                <DocLink href={hospitalPdf.url}>
                  Read the full case (PDF) ↗
                </DocLink>
              </div>
            </div>

            <div className="case-card">
              <div className="idx">03</div>
              <div>
                <h3>Investment Committee Decision Deck</h3>
                <span className="sector">
                  Healthcare / Real Estate / Government — $200M PPP Investment, Riyadh
                </span>
                <p>
                  Analyzed a healthcare investment opportunity across market, operational, financial,
                  and partnership considerations.
                </p>
                <p>
                  Built a structured decision framework combining business analysis, financial
                  modelling, and scenario evaluation. Synthesized complex analysis into an
                  executive-ready recommendation and decision deck.
                </p>
                <p className="skills-line">
                  Executive synthesis · PPP / financing structuring · end-to-end deal narrative
                </p>
                <DocLink href={icDeckPdf.url}>
                  View the decision deck (PDF) ↗
                </DocLink>
              </div>
            </div>

            <div className="case-card">
              <div className="idx">04</div>
              <div>
                <h3>Pepsi Cola Riyadh — Financial Model</h3>
                <span className="sector">FMCG / Retail — Riyadh</span>
                <p>
                  Built a financial model to evaluate commercial and operational assumptions for
                  Riyadh operations.
                </p>
                <p>
                  Conducted scenario analysis and assumption stress-testing to support structured
                  decision-making.
                </p>
                <p className="skills-line">Financial modelling · assumption stress-testing</p>
                <DocLink href={pepsiPdf.url}>
                  View the model summary (PDF) ↗
                </DocLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="capstone">
        <div className="wrap">
          <div className="section-head"><span className="section-num">04</span><h2>Technical Capstone</h2></div>

          <div className="capstone-hero">
            <div>
              <h3>Standalone Smart Hajj Earbud Assistant</h3>
              <p>
                Edge-AI Wearable | Graduation Project
              </p>
              <p>
                Translated user and safety requirements into an integrated Edge-AI system designed
                for real-time pilgrim support. Architected and integrated five hardware modules,
                on-device AI inference, sensors, and communication services into one system. Developed
                a keyword-spotting pipeline using 12,000 Arabic audio samples and deployed the trained
                model on-device. Managed end-to-end delivery from requirements and system design
                through integration, testing, documentation, and presentation. Achieved 97–99%
                keyword classification accuracy and validated the prototype through end-to-end
                testing.
              </p>
            </div>
            <div className="capstone-stats">
              <div><div className="stat-num">97–99%</div><div className="stat-lbl">KWS MODEL ACCURACY</div></div>
              <div><div className="stat-num">5</div><div className="stat-lbl">HARDWARE MODULES INTEGRATED</div></div>
              <div><div className="stat-num">29</div><div className="stat-lbl">ARABIC KEYWORDS CLASSIFIED</div></div>
            </div>
          </div>

          <div className="cap-cols">
            <div>
              <h4>My Role</h4>
              <ul>
                <li>Led development of the Edge-AI wearable, delivering real-time keyword spotting alongside continuous biometric monitoring with minimal latency.</li>
                <li>Architected and integrated five hardware modules, an on-device AI inference engine, and communication services into one unified edge-computing system.</li>
                <li>Managed end-to-end delivery from requirements through testing, documenting outcomes in technical reports and a final stakeholder presentation and poster.</li>
              </ul>
            </div>
            <div>
              <h4>Key Functionalities</h4>
              <ul>
                <li><strong>Keyword Spotting (KWS):</strong> continuous on-device audio processing to detect Hajj-related keywords and trigger translation.</li>
                <li><strong>Automated Translation:</strong> real-time verbal bridge between pilgrims and Arabic-speaking medical teams.</li>
                <li><strong>Health Monitoring:</strong> heart rate, SpO₂, and body temperature via sensor.</li>
                <li><strong>Intelligent SOS:</strong> manual button or automatic trigger on critical health conditions, sending GPS + vitals via SMS.</li>
              </ul>
            </div>
          </div>

          <h4 className="col-head">System Specification</h4>
          <table className="spec-table">
            <tbody>
              <tr><td>Processing Unit</td><td>ESP32-S3 microcontroller — low-power Edge-AI</td></tr>
              <tr><td>Sensors</td><td>PPG (heart rate / SpO₂), MAX30205 temperature, SIM7600E 4G/GPS module</td></tr>
              <tr><td>ML Pipeline</td><td>12,000 Arabic audio samples → Mel-spectrogram feature extraction → custom CNN → TensorFlow Lite deployment on-device</td></tr>
              <tr><td>Training</td><td>Google Colab (GPU-accelerated); noise and echo augmentation to simulate real crowd conditions during Hajj</td></tr>
              <tr><td>Result</td><td>97–99% classification accuracy, confirmed by confusion-matrix and loss/accuracy validation; full prototype tested end-to-end including live 4G SMS transmission of GPS and vital-sign data</td></tr>
            </tbody>
          </table>

          <div className="figure-grid">
            {figures.map((fig) => (
              <figure key={fig.src}>
                <img src={fig.src} alt={fig.alt} loading="lazy" />
                <figcaption>{fig.caption}</figcaption>
              </figure>
            ))}
          </div>

          <div className="video-cta">
            <span>
              Watch the full hardware prototype in action — end-to-end demo of sensing, translation,
              and SOS alerting.
            </span>
            <a
              className="btn"
              href="https://drive.google.com/file/d/1hmwNn0QASMDEc8QMWpB2e99zIvRB3RI-/view?usp=drivesdk"
              target="_blank"
              rel="noopener"
            >
              Watch Demo ↗
            </a>
          </div>

          <div className="doc-row">
            <DocLink href={capstoneDeckPdf.url}>
              Final presentation (PDF) ↗
            </DocLink>
            <DocLink href={capstonePosterPdf.url}>
              Research poster (PDF) ↗
            </DocLink>
          </div>
        </div>
      </section>


      <footer id="contact">
        <div className="wrap">
          <div className="contact-grid">
            <div>
              <h2>What I Bring</h2>
              <p>
                A combination of engineering thinking, data analysis, business understanding, and
                practical technology delivery — with a focus on turning complex problems into
                structured, actionable solutions.
              </p>
              <p>
                Open to opportunities across Enterprise Technology, Technology Transformation,
                Business Analysis, Data &amp; Analytics, and Technology-enabled Performance
                Improvement.
              </p>
            </div>
            <ul className="contact-list">
              <li><span>Email</span><a href="mailto:engmanaralosaimi@gmail.com">engmanaralosaimi@gmail.com</a></li>
              <li><span>Phone</span><a href="tel:+966538988789">+966 538 988 789</a></li>
              <li><span>LinkedIn</span><a href="https://www.linkedin.com/in/manar-alosaimixx" target="_blank" rel="noopener">manar-alosaimixx</a></li>
              <li><span>GitHub</span><a href="https://github.com/Eng-Manar-Alosaimi" target="_blank" rel="noopener">Eng-Manar-Alosaimi</a></li>
              <li><span>Location</span><span style={{ color: "var(--ink)" }}>Riyadh, Saudi Arabia</span></li>
            </ul>
          </div>
          <div className="fine-print">
            <span>© 2026 Manar Mastour Alosaimi</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
