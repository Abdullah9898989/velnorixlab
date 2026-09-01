import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  FileSpreadsheet,
  LayoutTemplate,
  Sparkles,
  Menu,
  X,
} from "lucide-react";

const products = [
  {
    category: "BUSINESS TOOL",
    title: "Cleaning Business Profit Leak Detector",
    description:
      "A practical Excel system for finding hidden profit leaks across jobs, quotes, extra work, discounts and missed revenue.",
    price: "$5.99",
    tag: "Featured",
    icon: FileSpreadsheet,
  },
  {
    category: "COMING SOON",
    title: "Business Quote Calculator",
    description:
      "A simple pricing and quoting tool designed to help small businesses create clearer, more consistent quotes.",
    price: "Soon",
    tag: "Coming soon",
    icon: LayoutTemplate,
  },
  {
    category: "COMING SOON",
    title: "Small Business Client Tracker",
    description:
      "Keep clients, follow-ups, notes and important business information organized in one simple workspace.",
    price: "Soon",
    tag: "Coming soon",
    icon: LayoutTemplate,
  },
];

const faqs = [
  [
    "What is VelnorixLab?",
    "VelnorixLab creates practical digital products, templates and business tools designed to simplify everyday work.",
  ],
  [
    "Are the products digital downloads?",
    "Yes. Our digital products are delivered electronically. No physical product is shipped.",
  ],
  [
    "Who are these products for?",
    "Our products are designed for individuals, freelancers, creators and small businesses looking for practical tools.",
  ],
  [
    "Will more products be added?",
    "Yes. VelnorixLab is being built as a growing library of useful digital tools and templates.",
  ],
];

function Reveal({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const [mob, setMob] = useState(false);
  const [faq, setFaq] = useState(null);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setMob(false);
  };

  return (
    <div className="site">
      <header className="nav-wrap">
        <nav className="nav container">
          <button className="brand" onClick={() => go("home")}>
            VELNORIX<span>LAB</span>
          </button>

          <div className={`nav-links ${mob ? "mobile-show" : ""}`}>
            <button onClick={() => go("products")}>Products</button>
            <button onClick={() => go("about")}>About</button>
            <button onClick={() => go("faq")}>FAQ</button>

            <button
              className="nav-cta"
              onClick={() => go("products")}
            >
              Explore products <ArrowUpRight size={15} />
            </button>
          </div>

          <button
            className="menu-button"
            onClick={() => setMob(!mob)}
            aria-label="Toggle menu"
          >
            {mob ? <X size={21} /> : <Menu size={21} />}
          </button>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-grid" />

          <div className="container hero-content">
            <Reveal>
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                DIGITAL PRODUCTS FOR REAL WORK
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1>
                Tools that make
                <br />
                <em>work simpler.</em>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="hero-copy">
                Thoughtfully designed digital tools, templates and resources
                for people who want less friction and more clarity in their
                everyday work.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="hero-actions">
                <button
                  className="primary-button"
                  onClick={() => go("products")}
                >
                  Explore products <ArrowUpRight size={17} />
                </button>

                <button
                  className="text-button"
                  onClick={() => go("about")}
                >
                  Why VelnorixLab <span>↓</span>
                </button>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="hero-meta">
                <div>
                  <strong>01</strong>
                  <span>Practical</span>
                </div>

                <div>
                  <strong>02</strong>
                  <span>Simple</span>
                </div>

                <div>
                  <strong>03</strong>
                  <span>Useful</span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="intro section">
          <div className="container intro-grid">
            <Reveal>
              <p className="section-label">01 / THE IDEA</p>
            </Reveal>

            <Reveal delay={0.08}>
              <div>
                <h2>
                  Good digital tools shouldn't
                  <span> feel complicated.</span>
                </h2>

                <p className="large-copy">
                  We create straightforward products that solve specific
                  problems. No unnecessary complexity. No endless features.
                  Just useful tools built around the way people actually work.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="products" className="products section">
          <div className="container">
            <Reveal>
              <div className="section-top">
                <div>
                  <p className="section-label">02 / PRODUCTS</p>
                  <h2>Made to be useful.</h2>
                </div>

                <p className="section-note">
                  A growing collection of practical digital tools.
                </p>
              </div>
            </Reveal>

            <div className="product-list">
              {products.map((p, i) => {
                const Icon = p.icon;

                return (
                  <Reveal key={p.title} delay={i * 0.08}>
                    <article className="product-card">
                      <div className="product-number">0{i + 1}</div>

                      <div className="product-icon">
                        <Icon size={22} strokeWidth={1.5} />
                      </div>

                      <div className="product-main">
                        <div className="product-category">
                          {p.category}
                        </div>

                        <h3>{p.title}</h3>

                        <p>{p.description}</p>

                        <button
                          className={
                            p.price === "Soon"
                              ? "product-button disabled"
                              : "product-button"
                          }
                          disabled={p.price === "Soon"}
                        >
                          {p.price === "Soon"
                            ? "Coming soon"
                            : "View product"}

                          {p.price !== "Soon" && (
                            <ArrowUpRight size={16} />
                          )}
                        </button>
                      </div>

                      <div className="product-side">
                        <span>{p.tag}</span>
                        <strong>{p.price}</strong>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="featured section">
          <div className="container">
            <Reveal>
              <div className="featured-box">
                <div className="featured-left">
                  <div className="featured-label">
                    <Sparkles size={15} />
                    FEATURED PRODUCT
                  </div>

                  <h2>
                    Find the leaks
                    <br />
                    <em>before they grow.</em>
                  </h2>

                  <p>
                    Cleaning Business Profit Leak Detector is built to help
                    cleaning businesses understand where revenue and profit
                    can disappear across everyday jobs.
                  </p>

                  <ul>
                    <li>
                      <Check size={16} />
                      Job-by-job profitability
                    </li>

                    <li>
                      <Check size={16} />
                      Quote accuracy tracking
                    </li>

                    <li>
                      <Check size={16} />
                      Unbilled work detection
                    </li>

                    <li>
                      <Check size={16} />
                      Discounts & no-show tracking
                    </li>
                  </ul>

                  <button
                    className="primary-button"
                    onClick={() => go("products")}
                  >
                    Explore the product <ArrowUpRight size={17} />
                  </button>
                </div>

                <div className="featured-visual">
                  <div className="sheet-window">
                    <div className="sheet-top">
                      <span />
                      <span />
                      <span />
                    </div>

                    <div className="sheet-title">
                      PROFIT OVERVIEW
                    </div>

                    <div className="sheet-stats">
                      <div>
                        <small>REVENUE</small>
                        <strong>$8,420</strong>
                      </div>

                      <div>
                        <small>JOB PROFIT</small>
                        <strong>$3,180</strong>
                      </div>

                      <div>
                        <small>LEAKS FOUND</small>
                        <strong>12</strong>
                      </div>
                    </div>

                    <div className="fake-chart">
                      {[38, 57, 45, 72, 61, 88, 76].map(
                        (h, i) => (
                          <span
                            key={i}
                            style={{ height: `${h}%` }}
                          />
                        )
                      )}
                    </div>

                    <div className="sheet-line" />
                    <div className="sheet-line short" />
                    <div className="sheet-line medium" />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="about" className="about section">
          <div className="container about-grid">
            <Reveal>
              <p className="section-label">03 / OUR APPROACH</p>
            </Reveal>

            <Reveal delay={0.08}>
              <div>
                <h2>
                  Less noise.
                  <br />
                  <em>More useful.</em>
                </h2>

                <div className="values">
                  {[
                    [
                      "01",
                      "Problem first",
                      "We start with a real problem instead of adding features for the sake of features.",
                    ],
                    [
                      "02",
                      "Clarity always",
                      "Products should be easy to understand, navigate and actually use.",
                    ],
                    [
                      "03",
                      "Built for everyday use",
                      "Practical templates that fit into real workflows rather than creating more work.",
                    ],
                  ].map((v) => (
                    <div className="value" key={v[0]}>
                      <span>{v[0]}</span>

                      <div>
                        <h3>{v[1]}</h3>
                        <p>{v[2]}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="faq" className="faq section">
          <div className="container faq-grid">
            <Reveal>
              <div>
                <p className="section-label">04 / FAQ</p>

                <h2>
                  Questions,
                  <br />
                  <em>answered.</em>
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="faq-list">
                {faqs.map((f, i) => {
                  const open = faq === i;

                  return (
                    <div
                      className={`faq-item ${open ? "open" : ""}`}
                      key={f[0]}
                    >
                      <button
                        onClick={() =>
                          setFaq(open ? null : i)
                        }
                      >
                        <span>{f[0]}</span>

                        <ChevronDown
                          size={18}
                          className="faq-chevron"
                        />
                      </button>

                      <motion.div
                        initial={false}
                        animate={{
                          height: open ? "auto" : 0,
                          opacity: open ? 1 : 0,
                        }}
                        transition={{ duration: 0.25 }}
                        className="faq-answer-wrap"
                      >
                        <p>{f[1]}</p>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="cta section">
          <div className="container">
            <Reveal>
              <div className="cta-box">
                <p className="section-label">START SIMPLE</p>

                <h2>
                  Find a tool that
                  <br />
                  <em>works for you.</em>
                </h2>

                <button
                  className="primary-button light"
                  onClick={() => go("products")}
                >
                  Explore VelnorixLab <ArrowUpRight size={17} />
                </button>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-top">
          <div>
            <button
              className="brand footer-brand"
              onClick={() => go("home")}
            >
              VELNORIX<span>LAB</span>
            </button>

            <p>
              Practical digital tools
              <br />
              for better everyday work.
            </p>
          </div>

          <div className="footer-links">
            <button onClick={() => go("products")}>
              Products
            </button>

            <button onClick={() => go("about")}>About</button>

            <button onClick={() => go("faq")}>FAQ</button>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© 2026 VelnorixLab. All rights reserved.</span>
          <span>Digital products & resources</span>
        </div>
      </footer>
    </div>
  );
}
