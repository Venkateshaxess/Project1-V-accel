import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo/logo.png";
import service from "../assets/images/services/r.png";
import bug from "../assets/images/services/bug.gif";
import cycle from "../assets/images/services/cycle.png";
import vmodel from "../assets/images/services/v-model.png";
import pmodel from "../assets/images/services/p-model.png";
import hmodel from "../assets/images/services/h-model.png";
import ai from "../assets/images/services/robot.gif";
import digi from "../assets/images/services/digi.png";
import AOS from "aos";
import vlogo from "../assets/images/V Logo.png";
import saas from "../assets/saas.gif";
import cloud from '../assets/cloud.gif';
import saasp from '../assets/saasp.gif';

function Services() {
  const [nav, setNav] = useState(false);
  const [popup, setPopup] = useState(true);
  setTimeout(() => {
    setPopup(false);
    let body = document.querySelector("body");
    let layout = document.querySelector(".layer-one");
    if (layout) {
      layout.style.display = "none";
      body.style.overflow = "";
      AOS.refresh();
    }
  }, 2000);

  let navigation = useNavigate();

  useEffect(() => {
    let body = document.querySelector("body");
    if (window.location.pathname == "/services") {
      window.scrollTo(0, 0);
      body.style.overflow = "hidden";
      console.log(window.location.pathname);
    } else {
      body.style.overflow = "auto";
    }
  }, [navigation]);

  let scrollTop = (getID, e) => {
    setNav(false);
    let element = document.getElementById(getID);
    if (element) {
      const goTop = element.offsetTop;
      window.scrollTo({
        top: goTop - 0,
        behavior: "smooth",
      });
      let allServiceNavs = document.querySelectorAll(".service-nav");
      allServiceNavs.forEach((nav) => {
        nav.classList.remove("active");
      });
      e.currentTarget.classList.add("active");
    }
  };

  let handleScroll = () => {
    // let softdevElement1 = document.getElementById("softdev");
    // let softdevElement2 = document.getElementById("softtest");
    // let softdevElement3 = document.getElementById("webdev");
    // let softdevElement4 = document.getElementById("digi");
    // let softdevElement5 = document.getElementById("micro");

    // let softdevTarget1 = document.querySelector(
    //   '.service-nav[data-axess-target="softdev"]'
    // );
    // let softdevTarget2 = document.querySelector(
    //   '.service-nav[data-axess-target="softtest"]'
    // );
    // let softdevTarget3 = document.querySelector(
    //   '.service-nav[data-axess-target="webdev"]'
    // );
    // let softdevTarget4 = document.querySelector(
    //   '.service-nav[data-axess-target="digi"]'
    // );
    // let softdevTarget5 = document.querySelector(
    //   '.service-nav[data-axess-target="micro"]'
    // );

    // if (
    //   window.scrollY >= softdevElement1.offsetTop - 0 &&
    //   window.scrollY < softdevElement2.offsetTop
    // ) {
    //   softdevTarget1.classList.add("active");
    //   softdevTarget2.classList.remove("active");
    //   softdevTarget3.classList.remove("active");
    //   softdevTarget4.classList.remove("active");
    //   softdevElement1.classList.add("active");
    //   softdevElement2.classList.remove("active");
    //   softdevElement3.classList.remove("active");
    //   softdevElement4.classList.remove("active");
    // } else if (
    //   window.scrollY >= softdevElement2.offsetTop - 50 &&
    //   window.scrollY < softdevElement3.offsetTop
    // ) {
    //   softdevTarget1.classList.remove("active");
    //   softdevTarget2.classList.add("active");
    //   softdevTarget3.classList.remove("active");
    //   softdevTarget4.classList.remove("active");
    //   softdevElement1.classList.remove("active");
    //   softdevElement2.classList.add("active");
    //   softdevElement3.classList.remove("active");
    //   softdevElement4.classList.remove("active");
    // } else if (
    //   window.scrollY >= softdevElement3.offsetTop - 50 &&
    //   window.scrollY < softdevElement4.offsetTop
    // ) {
    //   softdevTarget1.classList.remove("active");
    //   softdevTarget2.classList.remove("active");
    //   softdevTarget3.classList.add("active");
    //   softdevTarget4.classList.remove("active");
    //   softdevElement1.classList.remove("active");
    //   softdevElement2.classList.remove("active");
    //   softdevElement3.classList.add("active");
    //   softdevElement4.classList.remove("active");
    // } else if (window.scrollY + 50 >= softdevElement4.offsetTop) {
    //   softdevTarget1.classList.remove("active");
    //   softdevTarget2.classList.remove("active");
    //   softdevTarget3.classList.remove("active");
    //   softdevTarget4.classList.add("active");
    //   softdevElement1.classList.remove("active");
    //   softdevElement2.classList.remove("active");
    //   softdevElement3.classList.remove("active");
    //   softdevElement4.classList.add("active");
    // } else {
    //   document
    //     .querySelectorAll(".service-nav[data-axess-target]")
    //     .forEach((element) => {
    //       element.classList.remove("active");
    //       softdevElement1.classList.remove("active");
    //       softdevElement2.classList.remove("active");
    //       softdevElement3.classList.remove("active");
    //       softdevElement4.classList.remove("active");
    //     });
    // }
    const sections = [
      { element: document.getElementById("softdev"), nav: document.querySelector('.service-nav[data-axess-target="softdev"]') },
      { element: document.getElementById("softtest"), nav: document.querySelector('.service-nav[data-axess-target="softtest"]') },
      { element: document.getElementById("webdev"), nav: document.querySelector('.service-nav[data-axess-target="webdev"]') },
      { element: document.getElementById("digi"), nav: document.querySelector('.service-nav[data-axess-target="digi"]') },
      { element: document.getElementById("micro"), nav: document.querySelector('.service-nav[data-axess-target="micro"]') },
    ];
    
    const scrollY = window.scrollY + 100; // buffer/padding for earlier activation
    
    let activeFound = false;
    
    sections.forEach((section, index) => {
      const currentTop = section.element.offsetTop;
      const nextTop = sections[index + 1]?.element.offsetTop || Infinity;
    
      if (scrollY >= currentTop && scrollY < nextTop) {
        section.nav.classList.add("active");
        section.element.classList.add("active");
        activeFound = true;
      } else {
        section.nav.classList.remove("active");
        section.element.classList.remove("active");
      }
    });
    
    if (!activeFound) {
      sections.forEach((section) => {
        section.nav.classList.remove("active");
        section.element.classList.remove("active");
      });
    }
    
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div className="services">
      <div className="layer-one">
        <div className="row">
          <div className="col-md-7 vh-100 bg-axess-gold-3 one d-none d-md-block">
            <div className="d-flex vh-100 justify-content-center align-items-center">
              {/* <img src={gif} alt="gif" style={{width:`300px`}}/> */}
            </div>
          </div>
          <div className="col-md-5">
            <p className="popup-letters two">
              <span>l</span>
              <span>o</span>
              <span>a</span>
              <span>d</span>
              <span>i</span>
              <span>n</span>
              <span>g</span>
            </p>
          </div>
        </div>
      </div>
      <div className="layer-two min-vh-100">
        <div className="fixed-nav d-block d-md-none">
          <button
            className={`shadow-none border-0 hamburger hamburger--spring-r ${
              nav && "is-active"
            }`}
            type="button"
            onClick={() => setNav(!nav)}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
          {/*  */}
        </div>
        <div className="row gx-0">
          <div className={`col-md-8 bg-green-1`} id="scroller">
            <div className="vh-100 py-3 px-4 p-md-5">
              <div className="d-flex flex-column justify-content-between h-100">
                <div
                  className="d-flex justify-content-between align-items-center"
                  data-aos="fade-down"
                >
                  {/* <Link
                    to={"/"}
                    className="display-6 fw-medium text-decoration-none text-white d-none d-md-block"
                  >
                    V-Accel
                  </Link> */}
                  {/* <img src={vlogo} alt="logo" className="img-fluid logo" /> */}
                  {/* <button
                    className={`navbar-toggler shadow-none border-0 hamburger hamburger--spring-r ${
                      nav && "is-active"
                    } d-block d-md-none`}
                    type="button"
                    onClick={() => setNav(!nav)}
                  >
                    <span class="hamburger-box">
                      <span class="hamburger-inner"></span>
                    </span>
                  </button> */}
                </div>
                <div className="pattern d-none"></div>
                <h1 className='display-3 col-md-10 fw-bold text-white' data-aos="fade-up" data-aos-duration='700'>
                                    The <span className='gold-text-2'><Link to={"/"} className=" gold-text-2 text-decoration-none">V-Accel</Link> </span> Services
                                </h1>
                <div
                  data-aos="fade-up"
                  data-aos-duration="700"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  <h2 className=" text-white m-0 col-xxl-8 col-lg-10">
                    Code with <span className="gold-text-2">Confidence</span>,
                    <br></br> Click with{" "}
                    <span className="gold-text-2">Precision</span>,<br></br>{" "}
                    Convert with <span className="gold-text-2">Conviction</span>
                    : Partner with Us for{" "}
                    <span className="gold-text-2">Digital Mastery</span>
                  </h2>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="700"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  <p className="primary-text text-white m-0 col-xxl-8 col-lg-10">
                    Unshackle your digital potential. Code flawlessly, drive
                    clicks strategically, convert with unwavering certainty.
                    We're your partners in digital mastery.
                  </p>
                </div>
              </div>
            </div>
            <div className="my-5 roller-container softdev" id="softdev">
              <div className="min-vh-100 d-flex flex-column h-100 text-white justify-content-center p-5">
                <div className=" position-relative z-3">
                  <h1
                    className="primary-header mb-4"
                    data-aos="fade-up"
                    data-aos-duration="600"
                  >
                    Custom Software Development
                  </h1>
                  <h4
                    className=" mb-4"
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-anchor-placement="bottom-bottom"
                  >
                    Empowering Businesses with Future-Ready Software
                  </h4>
                  <p
                    className="primary-text mb-3 text-white mb-5"
                    data-aos="fade-up"
                    data-aos-duration="600"
                  >
                    From MVPs to enterprise-grade solutions, we engineer
                    scalable, modern applications tailored to your unique
                    vision.
                  </p>
                  <div
                    className="col-md-8 mx-auto mb-3"
                    data-aos="zoom-in"
                    data-aos-duration="600"
                    data-aos-anchor-placement="bottom-bottom"
                  >
                    <img
                      src={service}
                      className="w-100 animatedimg"
                      alt="service"
                    />
                  </div>
                  <h4
                    className=" mb-4 pt-5"
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-anchor-placement="bottom-bottom"
                  >
                    Become a Software Symphony Conductor:
                  </h4>
                  <p
                    className="primary-text mb-3 text-white mb-5"
                    data-aos="fade-up"
                    data-aos-duration="600"
                  >
                    Instead of juggling multiple agencies for design,
                    development, and deployment, harmonize your project with our
                    all-encompassing approach. We're your one-stop shop,
                    conducting every stage from conception to launch, ensuring
                    your software sings in perfect pitch.
                  </p>
                  <p
                    className="primary-text mb-3 text-white mb-5"
                    data-aos="fade-up"
                    data-aos-duration="600"
                  >
                    This collaborative and streamlined process means seamless
                    communication, reduced friction, and a beautiful symphony of
                    software at the end. So, ditch the cacophony of fragmented
                    services and let us orchestrate your digital masterpiece.
                  </p>

                  {/* Bullet points section */}
                  <ul
                    className="primary-text mb-4 text-white"
                    data-aos="fade-up"
                    data-aos-duration="600"
                  >
                    <li className="mb-2">⚡ Rapid MVP Prototyping</li>
                    <li className="mb-2">🌐 Web and Mobile Apps</li>
                    <li className="mb-2">
                      🧩 API Integrations & Microservices
                    </li>
                    <li className="mb-2">☁️ Cloud-native Development</li>
                  </ul>

                  <Link
                    to={"/development"}
                    className="gold-btn"
                    data-aos="fade"
                    data-aos-duration="600"
                    data-aos-anchor-placement="bottom-bottom"
                  >
                    <span className="d-block">Know More</span>{" "}
                    <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>


            <div className="my-5 text-white softtest mb-5" id="softtest">
              <div className="p-5">
                <div className=" position-relative z-3">
                  <h1
                    className="primary-header mb-4"
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-anchor-placement="bottom-bottom"
                  >
                    SaaS Product Development
                  </h1>
                  <div className="row align-items-center">
                    <div className="col-md-8">
                      <h4
                        className=" mb-4"
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-anchor-placement="bottom-bottom"
                      >
                        Transforming Ideas into SaaS Powerhouses
                      </h4>
                      <p
                        className="primary-text mb-3"
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-anchor-placement="bottom-bottom"
                      >
                        We specialize in crafting multi-tenant, AI-driven SaaS
                        products that scale seamlessly and deliver premium user
                        experiences.
                      </p>
                    </div>
                    
                    <div className="col-md-4">
                      <img
                        src={saasp}
                        className="w-100 animatedimg"
                        alt="service"
                        data-aos="zoom-in"
                        data-aos-duration="600"
                        data-aos-anchor-placement="bottom-bottom"
                      />
                    </div>
                  </div>

                  {/* Add bullet points here */}
                  <ul
                    className="primary-text mt-4 mb-5 text-white"
                    data-aos="fade-up"
                    data-aos-duration="600"
                  >
                    <li className="mb-2">🚀 SaaS MVP to Enterprise Launch</li>
                    <li className="mb-2">
                      🔐 SSO, Subscription, and Payment Integrations
                    </li>
                    <li className="mb-2">
                      📈 Built-in Analytics & Real-time Insights
                    </li>
                    <li className="mb-2">
                      ☁️ Cloud-optimized Deployments (AWS, GCP)
                    </li>
                  </ul>

                  {/* <h1 className='text-center primary-header mb-5' data-aos='fade-up' data-aos-duration='600' data-aos-anchor-placement="bottom-bottom">Software Testing Life Cycle</h1> */}
                  {/* Rest of the content remains unchanged */}

                  {/* At the end, right before the Link component */}
                  <Link
                    to={"/testing"}
                    className="gold-btn"
                    data-aos="fade"
                    data-aos-duration="600"
                    data-aos-anchor-placement="bottom-bottom"
                  >
                    <span className="d-block">Know More</span>{" "}
                    <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="my-5 roller-container text-white webdev"
              id="webdev"
            >
              <div className="min-vh-100 p-5">
                <div className=" position-relative z-3">
                  {/* <h1 className='light-header'>
                                        intelligent
                                    </h1> */}
                  <h1
                    className="primary-header mb-4"
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-anchor-placement="bottom-bottom"
                  >
                    AI & ML Engineering
                  </h1>
                  <div className="row align-items-center">
                    <div className="col-md-8">
                      <h4
                        className=" mb-4"
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-anchor-placement="bottom-bottom"
                      >
                        Crafting AI Solutions that Think, Predict, and Empower
                      </h4>
                      <p
                        className="primary-text mb-0"
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-anchor-placement="bottom-bottom"
                      >
                        From custom LLMs to intelligent automation, we unlock
                        the potential of AI to supercharge your business.
                      </p>
                    </div>
                    <div
                      className="col-md-4"
                      data-aos="zoom-out"
                      data-aos-duration="600"
                      data-aos-anchor-placement="bottom-bottom"
                    >
                      <img
                        src={ai}
                        className="w-100 animatedimg"
                        alt="service"
                      />
                    </div>
                     {/* Bullet points section */}
                  <ul
                    className="primary-text mb-4 text-white"
                    data-aos="fade-up"
                    data-aos-duration="600"
                  >
                    <li className="mb-2"> 🧠 Generative AI & Custom Chatbots</li>
                    <li className="mb-2">📊 Predictive Analytics & Insights</li>
                    <li className="mb-2">
                    🔗 Vector Databases & AI Integrations
                    </li>
                    <li className="mb-2">🎥 Multimodal AI (Text, Image, Video)</li>
                  </ul>
                  </div>
                  <br></br>
                  <Link
                    to={"/webdevelopment"}
                    className="gold-btn"
                    data-aos="fade"
                    data-aos-duration="600"
                    data-aos-anchor-placement="bottom-bottom"
                  >
                    <span className="d-block">Know More</span>{" "}
                    <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-5 roller-container text-white digi" id="digi">
              <div className="min-vh-100 p-5">
                <div className="position-relative">
                  {/* <h1 className='light-header'>
                                        Socializing
                                    </h1> */}
                  <h1
                    className="primary-header mb-4"
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-anchor-placement="bottom-bottom"
                  >
                    DevOps, Cloud & SRE
                  </h1>
                  <div className="row align-items-center">
                    <div className="col-md-8">
                      <h4
                        className=" mb-4"
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-anchor-placement="bottom-bottom"
                      >
                        Scaling Infrastructure, Accelerating Innovation
                      </h4>
                      <p
                        className="primary-text mb-4"
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-anchor-placement="bottom-bottom"
                      >
                        We build resilient, scalable, and automated cloud
                        architectures that power your growth at every stage.
                      </p>
                    </div>
                    <div
                      className="col-md-4"
                      data-aos="zoom-out"
                      data-aos-duration="600"
                      data-aos-anchor-placement="bottom-bottom"
                    >
                      <img
                        src={cloud}
                        className="w-100 animatedimg"
                        alt="service"
                      />
                    </div>
                     {/* Bullet points section */}
                  <ul
                    className="primary-text mb-4 text-white"
                    data-aos="fade-up"
                    data-aos-duration="600"
                  >

                    <li className="mb-2">🛠️ CI/CD Pipelines & GitOps Deployments</li>
                    <li className="mb-2">🐳 Containerization & Kubernetes Expertise</li>
                    <li className="mb-2">
                    ☁️ AWS, Azure, GCP Certified Engineers
                    </li>
                    <li className="mb-2">🔥 Serverless, Multi-Region Cloud Setups</li>
                  </ul>
                  </div>
                  <br></br>
                  <Link
                    to={"/digitalmarketing"}
                    className="gold-btn"
                    data-aos="fade"
                    data-aos-duration="600"
                    data-aos-anchor-placement="bottom-bottom"
                  >
                    <span className="d-block">Know More</span>{" "}
                    <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="mt-5 flex flex-col min-h-screen p-5 text-white"
              id="micro"
            >
              <div className="my-5 text-white softtest mb-5" id="softtest">
                {/* <div className="p-5"> */}
                  <div className=" position-relative z-3">
                    <h1
                      className="primary-header mb-4"
                      data-aos="fade-up"
                      data-aos-duration="600"
                      data-aos-anchor-placement="bottom-bottom"
                    >
                      Microservices Architecture & Engineering
                    </h1>
                    <div className="row align-items-center">
                      <div className="col-md-8">
                        <h4
                          className=" mb-4"
                          data-aos="fade-up"
                          data-aos-duration="600"
                          data-aos-anchor-placement="bottom-bottom"
                        >
                          Decoupling Complexity, Delivering Agility
                        </h4>
                        <p
                          className="primary-text mb-4"
                          data-aos="fade-up"
                          data-aos-duration="600"
                          data-aos-anchor-placement="bottom-bottom"
                        >
                          Design, build, and manage microservices architectures
                          that scale reliably across distributed systems.
                        </p>
                      </div>
                      <div className="col-md-4">
                        <img
                          src={bug}
                          className="w-100 animatedimg"
                          alt="service"
                          data-aos="zoom-in"
                          data-aos-duration="600"
                          data-aos-anchor-placement="bottom-bottom"
                        />
                      </div>
                    </div>

                    {/* Add bullet points here */}
                    <ul
                      className="primary-text mt-4 mb-5 text-white"
                      data-aos="fade-up"
                      data-aos-duration="600"
                    >
                      <li className="mb-2">
                        ⚡ Event-Driven Microservices (Kafka)
                      </li>
                      <li className="mb-2">
                        🔗 API Gateway & Service Mesh Setups
                      </li>
                      <li className="mb-2">🛡️ Secure, Resilient Systems</li>
                      <li className="mb-2">
                        🏗️ Monolith-to-Microservices Migration Experts
                      </li>
                    </ul>

                    {/* <h1 className='text-center primary-header mb-5' data-aos='fade-up' data-aos-duration='600' data-aos-anchor-placement="bottom-bottom">Software Testing Life Cycle</h1> */}
                    {/* Rest of the content remains unchanged */}

                    {/* At the end, right before the Link component */}
                    <Link
                      to={"/micro-services"}
                      className="gold-btn"
                      data-aos="fade"
                      data-aos-duration="600"
                      data-aos-anchor-placement="bottom-bottom"
                    >
                      <span className="d-block">Know More</span>{" "}
                      <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            {/* </div> */}
          </div>

          <div
            className={`col-md-4 vh-100 bg-axess-gold-2 position-fixed end-0 second-nav ${
              nav && "is-active"
            }`}
          >
            {/* <div className='d-md-none d-flex justify-content-between align-items-center bg-white px-2'>
                            <Link to={'/'} className='text-decoration-none'>
                                <img src={logo} alt="logo" className='img-fluid logo p-2' /></Link>
                            <button
                                className={`shadow-none border-0 hamburger hamburger--spring-r ${nav && 'is-active'} d-block d-md-none mt-2`}
                                type="button" onClick={() => setNav(!nav)}>
                                <span className="hamburger-box text-danger">
                                    <span className="hamburger-inner text-danger"></span>
                                </span>
                            </button>
                        </div> */}
            <div className="services-right-side d-flex h-100 justify-content-center align-items-end flex-column position-relative">
              <button
                data-aos="fade-left"
                className="service-nav"
                data-axess-target="softdev"
                onClick={(e) => {
                  scrollTop("softdev", e);
                }}
              >
                <span>Custom Software Development </span>
              </button>
              <button
                data-aos="fade-left"
                className="service-nav"
                data-axess-target="softtest"
                onClick={(e) => {
                  scrollTop("softtest", e);
                }}
              >
                <span>SaaS Product Development</span>
              </button>
              <button
                data-aos="fade-left"
                className="service-nav"
                data-axess-target="webdev"
                onClick={(e) => {
                  scrollTop("webdev", e);
                }}
              >
                <span>AI & ML Engineering </span>
              </button>
              <button
                data-aos="fade-left"
                className="service-nav"
                data-axess-target="digi"
                onClick={(e) => {
                  scrollTop("digi", e);
                }}
              >
                <span>DevOps, Cloud & SRE</span>
              </button>
              <button
                data-aos="fade-left"
                className="service-nav"
                data-axess-target="micro"
                onClick={(e) => {
                  scrollTop("micro", e);
                }}
              >
                <span>Microservices Architecture and Engineering</span>
              </button>
              
              <Link to="/" className="service-hover-nav" data-aos="fade">
                <span>Home</span>
              </Link>
              <Link
                to="/ourworks"
                className="service-hover-nav two"
                data-aos="fade"
              >
                <span>Our Works</span>
              </Link>
              <Link
                to="/contact"
                className="service-hover-nav three"
                data-aos="fade"
              >
                <span>Contact</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
