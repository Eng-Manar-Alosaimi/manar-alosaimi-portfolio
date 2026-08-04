import { createFileRoute } from "@tanstack/react-router";

import "../portfolio.css";
import flowchart from "@/assets/sys-flowchart.png.asset.json";
import modelArch from "@/assets/model-arch.jpeg.asset.json";
import fitboxPdf from "@/assets/FitBox_Strategic_Diagnostic.pdf.asset.json";
import hospitalPdf from "@/assets/Hospital_Group_B2O_Turnaround.pdf.asset.json";
import icDeckPdf from "@/assets/Investment_Committee_Decision_Deck.pdf.asset.json";
import pepsiPdf from "@/assets/Pepsi_Cola_Riyadh_Financial_Model.pdf.asset.json";
import capstoneDeckPdf from "@/assets/Hajj_Earbud_Presentation.pdf.asset.json";
import capstonePosterPdf from "@/assets/Hajj_Earbud_Poster.pdf.asset.json";

const TITLE = "Manar Alosaimi — Consulting & Engineering Portfolio";
const DESCRIPTION =
  "Computer Engineering graduate building toward management consulting. Case studies, engagement experience, and an Edge-AI technical capstone.";

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

function Index() {
  return (
    <div className="pf">
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
            Structured thinking for <em>complex</em> business &amp; technical problems.
          </h1>
          <p className="lede">
            Computer Engineering graduate (First Class Honours) building toward a career in
            technology and management consulting — combining root-cause diagnostics, financial
            modelling, and hands-on systems delivery.
          </p>
          <div className="hero-meta">
            <div><span>Education</span>B.Sc. Computer Engineering, Taif University — GPA 3.82/4.0</div>
            <div><span>Most Recent</span>Boost Accelerator, Arpus Consulting (Completed)</div>
            <div><span>Focus</span>Strategy · Feasibility · Business Diagnosis</div>
          </div>
        </div>
      </section>

      <section id="profile">
        <div className="wrap">
          <div className="section-head"><span className="section-num">01</span><h2>Profile</h2></div>
          <div className="profile-grid">
            <div>
              <p>
                I build toward management consulting from an engineering foundation: strong
                analytical and structured problem-solving skills paired with hands-on experience in
                enterprise systems and business analysis. I completed the Boost Accelerator
                Programme, an intensive AI-augmented business and consulting programme, where I put
                that capability to work on live feasibility and diagnostic engagements — from market
                sizing to financial modelling to client-ready deliverables.
              </p>
              <p>
                What I look for in a problem: the gap between the symptom people describe and the
                root cause underneath it — then a plan that's honest about trade-offs and sequenced
                enough to actually ship.
              </p>
              <div className="skill-block">
                <h4>Business &amp; Consulting</h4>
                <div className="tag-row">
                  <span className="tag">Structured Problem-Solving</span>
                  <span className="tag">Requirements Engineering</span>
                  <span className="tag">Systems &amp; Business Analysis</span>
                  <span className="tag">UML Modelling</span>
                  <span className="tag">Financial Modelling</span>
                </div>
              </div>
              <div className="skill-block">
                <h4>Technical</h4>
                <div className="tag-row">
                  <span className="tag">Python</span>
                  <span className="tag">SQL</span>
                  <span className="tag">Data Analysis</span>
                  <span className="tag">Git / GitHub</span>
                </div>
              </div>
              <div className="skill-block">
                <h4>Tools</h4>
                <div className="tag-row">
                  <span className="tag">Excel</span>
                  <span className="tag">PowerPoint</span>
                  <span className="tag">Word</span>
                  <span className="tag">Lucidchart</span>
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
              <h4 className="col-head">Certifications &amp; Programmes</h4>
              <ul className="cert-list">
                <li>"C-Suite Ready in 90 Days" — AI-Augmented Business &amp; Consulting Programme</li>
                <li>IBM AI Engineering Professional Certificate</li>
                <li>McKinsey Forward Programme</li>
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
                <li>Conducted market research, benchmarking, and data analysis to support strategy and feasibility engagements across public- and private-sector clients.</li>
                <li>Contributed to a healthcare feasibility study, supporting market sizing and demand analysis used to shape capacity and service-mix assumptions.</li>
                <li>Built financial models in Excel to test commercial and operational assumptions and support feasibility analysis.</li>
                <li>Prepared client-ready slides and sections of reports and presentations, keeping content aligned with the overall engagement storyline.</li>
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
              <div className="org">King Fahad Air Base, International Systems Engineering</div>
              <ul>
                <li>Completed a structured training rotation across multiple enterprise IT domains, gaining exposure to how large, mission-critical organisations run their technology operations.</li>
                <li>Studied infrastructure architecture and enterprise infrastructure management principles, connecting technical design decisions to operational reliability and security.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="cases">
        <div className="wrap">
          <div className="section-head"><span className="section-num">03</span><h2>Business Case Studies</h2></div>
          <p className="section-sub">
            Developed through a structured consulting-methodology programme: each case moves from
            symptom identification through root-cause diagnosis to a phased, sequenced
            recommendation.
          </p>

          <div className="case-grid">
            <div className="case-card flagship">
              <div className="idx">01</div>
              <div>
                <span className="flag-badge">FLAGSHIP CASE</span>
                <h3>FitBox Strategic Diagnostic &amp; Transformation Roadmap</h3>
                <span className="sector">Retail / Consumer Subscription — Riyadh</span>
                <p>
                  A subscription meal-delivery business facing a 22% monthly revenue decline and
                  rising churn. Applied a symptoms → assessments → root causes → priorities
                  framework across strategy, operating model, and financials; an impact/evidence
                  prioritization matrix isolated outsourced delivery logistics and a commoditized
                  value proposition as the two reinforcing root causes. Delivered a three-phase
                  roadmap (Stabilize → Redesign → Scale) with named KPIs — on-time delivery to 85%,
                  churn from 40% to 18%.
                </p>
                <p className="skills-line">
                  Root-cause diagnosis · impact/evidence prioritization · Porter value-chain mapping
                  · phased roadmap design
                </p>
                <a className="doc-link" href={fitboxPdf.url} target="_blank" rel="noopener">
                  Read the full case (PDF) ↗
                </a>
              </div>
            </div>

            <div className="case-card">
              <div className="idx">02</div>
              <div>
                <h3>Hospital Group Turnaround (B2O)</h3>
                <span className="sector">Healthcare / Government-adjacent — Riyadh</span>
                <p>
                  Diagnosed performance issues across an underperforming hospital group, moving past
                  the surface explanation of "the market is competitive" to structural and
                  operational root causes, and defined a transformation plan to restore performance.
                </p>
                <p className="skills-line">
                  Organisation-level diagnosis · structured hypothesis testing · transformation
                  planning
                </p>
                <a className="doc-link" href={hospitalPdf.url} target="_blank" rel="noopener">
                  Read the full case (PDF) ↗
                </a>
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
                  Capstone of a multi-week private healthcare investment case, culminating in an
                  IC-ready recommendation to proceed via a partner-structured, PPP-financed
                  investment — built on prior work spanning screening, build-vs-partner entry,
                  performance diagnosis, PPP bankability, and a 5-year financial forecast.
                </p>
                <p className="skills-line">
                  Executive synthesis · PPP / financing structuring · end-to-end deal narrative
                </p>
                <a className="doc-link" href={icDeckPdf.url} target="_blank" rel="noopener">
                  View the decision deck (PDF) ↗
                </a>
              </div>
            </div>

            <div className="case-card">
              <div className="idx">04</div>
              <div>
                <h3>Pepsi Cola Riyadh — Financial Model</h3>
                <span className="sector">FMCG / Retail — Riyadh</span>
                <p>
                  Built a financial model to test commercial and operational assumptions for a
                  recognised consumer brand's Riyadh operations, supporting scenario analysis and
                  decision-making.
                </p>
                <p className="skills-line">Financial modelling · assumption stress-testing</p>
                <a className="doc-link" href={pepsiPdf.url} target="_blank" rel="noopener">
                  View the model summary (PDF) ↗
                </a>
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
                An Edge-AI wearable improving pilgrim safety through real-time keyword spotting,
                continuous vital-sign monitoring, and automated translation — built end-to-end from
                requirements to a tested hardware prototype. Graduation project, Department of
                Computer Engineering, Taif University, supervised by Dr. Shaima Elnazer.
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
            <a className="doc-link" href={capstoneDeckPdf.url} target="_blank" rel="noopener">
              Final presentation (PDF) ↗
            </a>
            <a className="doc-link" href={capstonePosterPdf.url} target="_blank" rel="noopener">
              Research poster (PDF) ↗
            </a>
          </div>
        </div>
      </section>

      <footer id="contact">
        <div className="wrap">
          <div className="contact-grid">
            <div>
              <h2>Let's talk about how structured thinking solves your next problem.</h2>
              <p>
                Open to management consulting internships and analyst opportunities across strategy,
                feasibility, and technology-enabled transformation.
              </p>
            </div>
            <ul className="contact-list">
              <li><span>Email</span><a href="mailto:engmanaralosaimi@gmail.com">engmanaralosaimi@gmail.com</a></li>
              <li><span>Phone</span><a href="tel:+966538988789">+966 538 988 789</a></li>
              <li><span>LinkedIn</span><a href="https://www.linkedin.com/in/manar-alosaimixx" target="_blank" rel="noopener">manar-alosaimixx</a></li>
              <li><span>Location</span><span style={{ color: "var(--ink)" }}>Riyadh, Saudi Arabia</span></li>
            </ul>
          </div>
          <div className="fine-print">
            <span>© 2026 Manar Mastour Alosaimi</span>
            <span>Built as a portfolio companion to CV &amp; case study decks</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
