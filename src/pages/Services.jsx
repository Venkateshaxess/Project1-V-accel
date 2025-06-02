// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import logo from "../assets/images/logo/logo.png";
// import service from "../assets/images/services/r.png";
// import bug from "../assets/images/services/bug.gif";
// import cycle from "../assets/images/services/cycle.png";
// import vmodel from "../assets/images/services/v-model.png";
// import pmodel from "../assets/images/services/p-model.png";
// import hmodel from "../assets/images/services/h-model.png";
// import ai from "../assets/images/services/robot.gif";
// import digi from "../assets/images/services/digi.png";
// import AOS from "aos";
// import vlogo from "../assets/images/V Logo.png";
// import saas from "../assets/saas.gif";
// import cloud from '../assets/cloud.gif';
// import saasp from '../assets/saasp.png';
// import csd from "../assets/csd.png";
// import micro from "../assets/micro.png";
// import Navbar from "../components/Navbar";
// import ServicesNav from "../components/ServicesNav";

// function Services() {
//   const [nav, setNav] = useState(false);
//   const [popup, setPopup] = useState(true);
//   setTimeout(() => {
//     setPopup(false);
//     let body = document.querySelector("body");
//     let layout = document.querySelector(".layer-one");
//     if (layout) {
//       layout.style.display = "none";
//       body.style.overflow = "";
//       AOS.refresh();
//     }
//   }, 2000);

//   let navigation = useNavigate();

//   useEffect(() => {
//     let body = document.querySelector("body");
//     if (window.location.pathname == "/services") {
//       window.scrollTo(0, 0);
//       body.style.overflow = "hidden";
//       console.log(window.location.pathname);
//     } else {
//       body.style.overflow = "auto";
//     }
//   }, [navigation]);

//   let scrollTop = (getID, e) => {
//     setNav(false);
//     let element = document.getElementById(getID);
//     if (element) {
//       const goTop = element.offsetTop;
//       window.scrollTo({
//         top: goTop - 0,
//         behavior: "smooth",
//       });
//       let allServiceNavs = document.querySelectorAll(".service-nav");
//       allServiceNavs.forEach((nav) => {
//         nav.classList.remove("active");
//       });
//       e.currentTarget.classList.add("active");
//     }
//   };

//   let handleScroll = () => {
//     // let softdevElement1 = document.getElementById("softdev");
//     // let softdevElement2 = document.getElementById("softtest");
//     // let softdevElement3 = document.getElementById("webdev");
//     // let softdevElement4 = document.getElementById("digi");
//     // let softdevElement5 = document.getElementById("micro");

//     // let softdevTarget1 = document.querySelector(
//     //   '.service-nav[data-axess-target="softdev"]'
//     // );
//     // let softdevTarget2 = document.querySelector(
//     //   '.service-nav[data-axess-target="softtest"]'
//     // );
//     // let softdevTarget3 = document.querySelector(
//     //   '.service-nav[data-axess-target="webdev"]'
//     // );
//     // let softdevTarget4 = document.querySelector(
//     //   '.service-nav[data-axess-target="digi"]'
//     // );
//     // let softdevTarget5 = document.querySelector(
//     //   '.service-nav[data-axess-target="micro"]'
//     // );

//     // if (
//     //   window.scrollY >= softdevElement1.offsetTop - 0 &&
//     //   window.scrollY < softdevElement2.offsetTop
//     // ) {
//     //   softdevTarget1.classList.add("active");
//     //   softdevTarget2.classList.remove("active");
//     //   softdevTarget3.classList.remove("active");
//     //   softdevTarget4.classList.remove("active");
//     //   softdevElement1.classList.add("active");
//     //   softdevElement2.classList.remove("active");
//     //   softdevElement3.classList.remove("active");
//     //   softdevElement4.classList.remove("active");
//     // } else if (
//     //   window.scrollY >= softdevElement2.offsetTop - 50 &&
//     //   window.scrollY < softdevElement3.offsetTop
//     // ) {
//     //   softdevTarget1.classList.remove("active");
//     //   softdevTarget2.classList.add("active");
//     //   softdevTarget3.classList.remove("active");
//     //   softdevTarget4.classList.remove("active");
//     //   softdevElement1.classList.remove("active");
//     //   softdevElement2.classList.add("active");
//     //   softdevElement3.classList.remove("active");
//     //   softdevElement4.classList.remove("active");
//     // } else if (
//     //   window.scrollY >= softdevElement3.offsetTop - 50 &&
//     //   window.scrollY < softdevElement4.offsetTop
//     // ) {
//     //   softdevTarget1.classList.remove("active");
//     //   softdevTarget2.classList.remove("active");
//     //   softdevTarget3.classList.add("active");
//     //   softdevTarget4.classList.remove("active");
//     //   softdevElement1.classList.remove("active");
//     //   softdevElement2.classList.remove("active");
//     //   softdevElement3.classList.add("active");
//     //   softdevElement4.classList.remove("active");
//     // } else if (window.scrollY + 50 >= softdevElement4.offsetTop) {
//     //   softdevTarget1.classList.remove("active");
//     //   softdevTarget2.classList.remove("active");
//     //   softdevTarget3.classList.remove("active");
//     //   softdevTarget4.classList.add("active");
//     //   softdevElement1.classList.remove("active");
//     //   softdevElement2.classList.remove("active");
//     //   softdevElement3.classList.remove("active");
//     //   softdevElement4.classList.add("active");
//     // } else {
//     //   document
//     //     .querySelectorAll(".service-nav[data-axess-target]")
//     //     .forEach((element) => {
//     //       element.classList.remove("active");
//     //       softdevElement1.classList.remove("active");
//     //       softdevElement2.classList.remove("active");
//     //       softdevElement3.classList.remove("active");
//     //       softdevElement4.classList.remove("active");
//     //     });
//     // }
//     const sections = [
//       { element: document.getElementById("softdev"), nav: document.querySelector('.service-nav[data-axess-target="softdev"]') },
//       { element: document.getElementById("softtest"), nav: document.querySelector('.service-nav[data-axess-target="softtest"]') },
//       { element: document.getElementById("webdev"), nav: document.querySelector('.service-nav[data-axess-target="webdev"]') },
//       { element: document.getElementById("digi"), nav: document.querySelector('.service-nav[data-axess-target="digi"]') },
//       { element: document.getElementById("micro"), nav: document.querySelector('.service-nav[data-axess-target="micro"]') },
//     ];
    
//     const scrollY = window.scrollY + 100; // buffer/padding for earlier activation
    
//     let activeFound = false;
    
//     sections.forEach((section, index) => {
//       const currentTop = section.element.offsetTop;
//       const nextTop = sections[index + 1]?.element.offsetTop || Infinity;
    
//       if (scrollY >= currentTop && scrollY < nextTop) {
//         section.nav.classList.add("active");
//         section.element.classList.add("active");
//         activeFound = true;
//       } else {
//         section.nav.classList.remove("active");
//         section.element.classList.remove("active");
//       }
//     });
    
//     if (!activeFound) {
//       sections.forEach((section) => {
//         section.nav.classList.remove("active");
//         section.element.classList.remove("active");
//       });
//     }
    
//   };

//   window.addEventListener("scroll", handleScroll);

//   return (
//     <div> 
//       <ServicesNav />
//     <div className="services">
//       <div className="layer-one">
//         <div className="row">
//           <div className="col-md-7 vh-100 bg-axess-gold-3 one d-none d-md-block">
//             <div className="d-flex vh-100 justify-content-center align-items-center">
//               {/* <img src={gif} alt="gif" style={{width:`300px`}}/> */}
//             </div>
//           </div>
//           <div className="col-md-5">
//             <p className="popup-letters two">
//               <span>l</span>
//               <span>o</span>
//               <span>a</span>
//               <span>d</span>
//               <span>i</span>
//               <span>n</span>
//               <span>g</span>
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="layer-two min-vh-100">
//         <div className="fixed-nav d-block d-md-none">
//           <button
//             className={`shadow-none border-0 hamburger hamburger--spring-r ${
//               nav && "is-active"
//             }`}
//             type="button"
//             onClick={() => setNav(!nav)}
//           >
//             <span className="hamburger-box">
//               <span className="hamburger-inner"></span>
//             </span>
//           </button>
//           {/*  */}
//         </div>
//         <div className="row gx-0">
//           <div className={`col-md-8 bg-green-1`} id="scroller">
//             <div className="vh-100 py-3 px-4 p-md-5">
//               <div className="d-flex flex-column justify-content-between h-100">
//                 <div
//                   className="d-flex justify-content-between align-items-center"
//                   data-aos="fade-down"
//                 >
//                   {/* <Link
//                     to={"/"}
//                     className="display-6 fw-medium text-decoration-none text-white d-none d-md-block"
//                   >
//                     Devnio
//                   </Link> */}
//                   {/* <img src={vlogo} alt="logo" className="img-fluid logo" /> */}
//                   {/* <button
//                     className={`navbar-toggler shadow-none border-0 hamburger hamburger--spring-r ${
//                       nav && "is-active"
//                     } d-block d-md-none`}
//                     type="button"
//                     onClick={() => setNav(!nav)}
//                   >
//                     <span class="hamburger-box">
//                       <span class="hamburger-inner"></span>
//                     </span>
//                   </button> */}
//                 </div>
//                 <div className="pattern d-none"></div>
//                 <h1 className='display-3 col-md-10 fw-bold text-white' data-aos="fade-up" data-aos-duration='700'>
//                                     The <span className='gold-text-2'><Link to={"/"} className=" gold-text-2 text-decoration-none">Devnio</Link> </span> Services
//                                 </h1>
//                 <div
//                   data-aos="fade-up"
//                   data-aos-duration="700"
//                   data-aos-anchor-placement="bottom-bottom"
//                 >
//                   <h2 className=" text-white m-0 col-xxl-8 col-lg-10">
//                     Code with <span className="gold-text-2">Confidence</span>,
//                     <br></br> Click with{" "}
//                     <span className="gold-text-2">Precision</span>,<br></br>{" "}
//                     Convert with <span className="gold-text-2">Conviction</span>
//                     : Partner with Us for{" "}
//                     <span className="gold-text-2">Digital Mastery</span>
//                   </h2>
//                 </div>
//                 <div
//                   data-aos="fade-up"
//                   data-aos-duration="700"
//                   data-aos-anchor-placement="bottom-bottom"
//                 >
//                   <p className="primary-text text-white m-0 col-xxl-8 col-lg-10">
//                     Unshackle your digital potential. Code flawlessly, drive
//                     clicks strategically, convert with unwavering certainty.
//                     We're your partners in digital mastery.
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="my-5 roller-container softdev" id="softdev">
//               {/* <div className="min-vh-100 d-flex flex-column h-100 text-white justify-content-center p-5">
//                 <div className=" position-relative z-3">
//                   <h1
//                     className="primary-header mb-4"
//                     data-aos="fade-up"
//                     data-aos-duration="600"
//                   >
//                     Custom Software Development
//                   </h1>
//                   <h4
//                     className=" mb-4"
//                     data-aos="fade-up"
//                     data-aos-duration="600"
//                     data-aos-anchor-placement="bottom-bottom"
//                   >
//                     Empowering Businesses with Future-Ready Software
//                   </h4>
//                   <p
//                     className="primary-text mb-3 text-white mb-5"
//                     data-aos="fade-up"
//                     data-aos-duration="600"
//                   >
//                     From MVPs to enterprise-grade solutions, we engineer
//                     scalable, modern applications tailored to your unique
//                     vision.
//                   </p>
//                   <div
//                     className="col-md-8 mx-auto mb-3"
//                     data-aos="zoom-in"
//                     data-aos-duration="600"
//                     data-aos-anchor-placement="bottom-bottom"
//                   >
//                     <img
//                       src={service}
//                       className="w-100 animatedimg"
//                       alt="service"
//                     />
//                   </div>
//                   <h4
//                     className=" mb-4 pt-5"
//                     data-aos="fade-up"
//                     data-aos-duration="600"
//                     data-aos-anchor-placement="bottom-bottom"
//                   >
//                     Become a Software Symphony Conductor:
//                   </h4>
//                   <p
//                     className="primary-text mb-3 text-white mb-5"
//                     data-aos="fade-up"
//                     data-aos-duration="600"
//                   >
//                     Instead of juggling multiple agencies for design,
//                     development, and deployment, harmonize your project with our
//                     all-encompassing approach. We're your one-stop shop,
//                     conducting every stage from conception to launch, ensuring
//                     your software sings in perfect pitch.
//                   </p>
//                   <p
//                     className="primary-text mb-3 text-white mb-5"
//                     data-aos="fade-up"
//                     data-aos-duration="600"
//                   >
//                     This collaborative and streamlined process means seamless
//                     communication, reduced friction, and a beautiful symphony of
//                     software at the end. So, ditch the cacophony of fragmented
//                     services and let us orchestrate your digital masterpiece.
//                   </p>

                  
//                   <ul
//                     className="primary-text mb-4 text-white"
//                     data-aos="fade-up"
//                     data-aos-duration="600"
//                   >
//                     <li className="mb-2">⚡ Rapid MVP Prototyping</li>
//                     <li className="mb-2">🌐 Web and Mobile Apps</li>
//                     <li className="mb-2">
//                       🧩 API Integrations & Microservices
//                     </li>
//                     <li className="mb-2">☁️ Cloud-native Development</li>
//                   </ul>

//                   <Link
//                     to={"/development"}
//                     className="gold-btn"
//                     data-aos="fade"
//                     data-aos-duration="600"
//                     data-aos-anchor-placement="bottom-bottom"
//                   >
//                     <span className="d-block">Know More</span>{" "}
//                     <i className="bi bi-arrow-right"></i>
//                   </Link>
//                 </div>
//               </div> */}
//             </div>
//             <div className="my-5 text-white softtest mb-5" id="softdev">
//               <div className="p-5">
//                 <div className=" position-relative z-3">
//                   <h1
//                     className="primary-header mb-4"
//                     data-aos="fade-up"
//                     data-aos-duration="600"
//                     data-aos-anchor-placement="bottom-bottom"
//                   >
//                     Software Development
//                   </h1>
//                   <div className="row align-items-center">
//                     <div className="col-md-8">
//                       <h4
//                         className="mt-4 mb-4"
//                         data-aos="fade-up"
//                         data-aos-duration="600"
//                         data-aos-anchor-placement="bottom-bottom"
//                       >
//                         We Don’t Just Build Software — We Orchestrate Digital Masterpieces.
//                       </h4>
                      
//                       <h4
//                         className="primary-text mb-3"
//                         data-aos="fade-up"
//                         data-aos-duration="300"
//                         data-aos-anchor-placement="bottom-bottom"
//                       >
//                        Why juggle multiple vendors for UI, backend, and deployment?
//                       </h4>
//                       <p
//                         className="primary-text mb-3"
//                         data-aos="fade-up"
//                         data-aos-duration="600"
//                         data-aos-anchor-placement="bottom-bottom"
//                       >
//                       Think of us as your tech orchestra — with frontend, backend, DevOps, and AI playing in sync.
//                       <br />
//                       <br />
//                       We replace scattered teams and misaligned timelines with a full-stack symphony that moves fast, builds smart, and scales right.
// Let go of the chaos. Let us harmonize your innovation.
//                       </p>
                      
//                     </div>
                    
//                     <div className="col-md-4">
//                       <img
//                         src={csd}
//                         className="w-100 animatedimg"
//                         alt="service"
//                         data-aos="zoom-in"
//                         data-aos-duration="600"
//                         data-aos-anchor-placement="bottom-bottom"
//                       />
//                     </div>
//                   </div>

//                   {/* Add bullet points here */}
//                   <p
//                     className="primary-text mt-4 mb-5 text-white"
//                     data-aos="fade-up"
//                     data-aos-duration="600"
//                   >
//                      <p className="mb-2 ">⚡ Rapid MVP Prototyping</p>
//                     <p className="mb-2">🌐 Web and Mobile Apps</p>
//                     <p className="mb-2">
//                       🧩 API Integrations & Microservices
//                     </p>
//                     <p className="mb-2">☁️ Cloud-native Development</p>
//                   </p>

//                   {/* <h1 className='text-center primary-header mb-5' data-aos='fade-up' data-aos-duration='600' data-aos-anchor-placement="bottom-bottom">Software Testing Life Cycle</h1> */}
//                   {/* Rest of the content remains unchanged */}

//                   {/* At the end, right before the Link component */}
//                   <div className="d-flex justify-content-center gap-3">
//                   <Link
//                     to={"/contact"}
//                     className="gold-btn"
//                     data-aos="fade"
//                     data-aos-duration="600"
//                     data-aos-anchor-placement="bottom-bottom"
//                   >
//                     <span className="d-block">“ Let’s Build Your Digital Symphony ”</span>{" "}
//                     <i className="bi bi-arrow-right"></i>
//                   </Link>

//                   <Link
//                     to={"/development"}
//                     className="gold-btn"
//                     // data-aos="fade"
//                     data-aos-duration="600"
//                     data-aos-anchor-placement="bottom-bottom"
//                   >
//                     <span className="d-block">Know More</span>{" "}
//                     <i className="bi bi-arrow-right"></i>
//                   </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>



//             <div className="mt-5 roller-container text-white digi" id="digi">
//               <div className="min-vh-100 p-5">
//                 <div className="position-relative">
//                   {/* <h1 className='light-header'>
//                                         Socializing
//                                     </h1> */}
//                   <h1
//                     className="primary-header mb-4"
//                     data-aos="fade-up"
//                     data-aos-duration="600"
//                     data-aos-anchor-placement="bottom-bottom"
//                   >
//                     DevOps, Cloud & SRE
//                   </h1>
//                   <div className="row align-items-center">
//                     <div className="col-md-8">
//                       <h4
//                         className=" mb-4"
//                         data-aos="fade-up"
//                         data-aos-duration="600"
//                         data-aos-anchor-placement="bottom-bottom"
//                       >
//                         Modern Cloud Engineering Built to Scale, Secure, and Ship Fast.
//                       </h4>
//                       <p
//                         className="primary-text mb-4"
//                         data-aos="fade-up"
//                         data-aos-duration="600"
//                         data-aos-anchor-placement="bottom-bottom"
//                       >
//                         From CI/CD to serverless multicloud deployment, we help you build infrastructure that is automated, resilient, and ready for rapid innovation.
//                       </p>
//                     </div>
//                     <div
//                       className="col-md-4"
//                       data-aos="zoom-out"
//                       data-aos-duration="600"
//                       data-aos-anchor-placement="bottom-bottom"
//                     >
//                       <img
//                         src={cloud}
//                         className="w-100 animatedimg"
//                         alt="service"
//                       />
//                     </div>
//                      {/* Bullet points section */}
//                   <p
//                     className="primary-text mb-4 text-white"
//                     data-aos="fade-up"
//                     data-aos-duration="600"
//                   >

//                     <p className="mb-2">🛠️ End-to-End CI/CD & GitOps Deployments</p>
//                     <p className="mb-2">🐳 Kubernetes & Container Orchestration</p>
//                     <p className="mb-2">
//                     ☁️ Certified AWS, Azure, GCP Engineers
//                     </p>
//                     <p className="mb-2">🌐 Serverless & Multi-Region Cloud Scaling</p>
//                   </p>
//                   </div>
//                   <br></br>
               
//                   <div className="d-flex justify-content-center gap-3">
//                   <Link
//                     to={"/contact"}
//                     className="gold-btn"
//                     data-aos="fade"
//                     data-aos-duration="600"
//                     data-aos-anchor-placement="bottom-bottom"
//                   >
//                     <span className="d-block">“ Launch Your SaaS Now ”</span>{" "}
//                     <i className="bi bi-arrow-right"></i>
//                   </Link>

//                   <Link
//                     to={"/digitalmarketing"}
//                     className="gold-btn"
//                     // data-aos="fade"
//                     data-aos-duration="600"
//                     data-aos-anchor-placement="bottom-bottom"
//                   >
//                     <span className="d-block">Know More</span>{" "}
//                     <i className="bi bi-arrow-right"></i>
//                   </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div
//               className="mt-5 flex flex-col min-h-screen p-5 text-white"
//               id="micro"
//             >
//               <div className="my-5 text-white softtest mb-5" id="softtest">
//                 {/* <div className="p-5"> */}
//                   <div className=" position-relative z-3">
//                     <h1
//                       className="primary-header mb-4"
//                       data-aos="fade-up"
//                       data-aos-duration="600"
//                       data-aos-anchor-placement="bottom-bottom"
//                     >
//                       Microservices Architecture & Engineering
//                     </h1>
//                     <div className="row align-items-center">
//                       <div className="col-md-8">
//                         <h4
//                           className=" mb-4"
//                           data-aos="fade-up"
//                           data-aos-duration="600"
//                           data-aos-anchor-placement="bottom-bottom"
//                         >
//                           Engineered for Modularity. Built for Scale
//                         </h4>
//                         <p
//                           className="primary-text mb-4"
//                           data-aos="fade-up"
//                           data-aos-duration="600"
//                           data-aos-anchor-placement="bottom-bottom"
//                         >
//                           We design, build, and manage microservices that enable rapid scaling, resilience, and agility for distributed systems — without the chaos.
//                         </p>
//                       </div>
//                       <div className="col-md-4">
//                         <img
//                           src={bug}
//                           className="w-100 animatedimg"
//                           alt="service"
//                           data-aos="zoom-in"
//                           data-aos-duration="600"
//                           data-aos-anchor-placement="bottom-bottom"
//                         />
//                       </div>
//                     </div>

//                     {/* Add bullet points here */}
//                     <p
//                       className="primary-text mt-4 mb-5 text-white"
//                       data-aos="fade-up"
//                       data-aos-duration="600"
//                     >
//                       <p className="mb-2">
//                       ⚡ Event-Driven Microservices with Kafka
//                       </p>
//                       <p className="mb-2">
//                       🔀 API Gateway & Service Mesh (Istio/Linkerd)
//                       </p>
//                       <p className="mb-2">🔐 Secure, Isolated Deployments</p>
//                       <p className="mb-2">
//                         🏗️ Monolith-to-Microservices Migration Experts
//                       </p>
//                     </p>

//                     {/* <h1 className='text-center primary-header mb-5' data-aos='fade-up' data-aos-duration='600' data-aos-anchor-placement="bottom-bottom">Software Testing Life Cycle</h1> */}
//                     {/* Rest of the content remains unchanged */}

//                     {/* At the end, right before the Link component */}
//                     {/* <Link
//                       to={"/micro-services"}
//                       className="gold-btn"
//                       data-aos="fade"
//                       data-aos-duration="600"
//                       data-aos-anchor-placement="bottom-bottom"
//                     >
//                       <span className="d-block">Know More</span>{" "}
//                       <i className="bi bi-arrow-right"></i>
//                     </Link> */}
//                      <div className="d-flex justify-content-center gap-3">
//                   <Link
//                     to={"/contact"}
//                     className="gold-btn"
//                     data-aos="fade"
//                     data-aos-duration="600"
//                     data-aos-anchor-placement="bottom-bottom"
//                   >
//                     <span className="d-block">“ Launch Your SaaS Now ”</span>{" "}
//                     <i className="bi bi-arrow-right"></i>
//                   </Link>

//                   <Link
//                     to={"/micro-services"}
//                     className="gold-btn"
//                     // data-aos="fade"
//                     data-aos-duration="600"
//                     data-aos-anchor-placement="bottom-bottom"
//                   >
//                     <span className="d-block">Know More</span>{" "}
//                     <i className="bi bi-arrow-right"></i>
//                   </Link>
//                   </div>

//                   </div>
//                 </div>
//               </div>
//             {/* </div> */}
//           </div>

//           <div
//             className={`col-md-4 vh-100 bg-axess-gold-2 position-fixed end-0 second-nav ${
//               nav && "is-active"
//             }`}
//           >
//             {/* <div className='d-md-none d-flex justify-content-between align-items-center bg-white px-2'>
//                             <Link to={'/'} className='text-decoration-none'>
//                                 <img src={logo} alt="logo" className='img-fluid logo p-2' /></Link>
//                             <button
//                                 className={`shadow-none border-0 hamburger hamburger--spring-r ${nav && 'is-active'} d-block d-md-none mt-2`}
//                                 type="button" onClick={() => setNav(!nav)}>
//                                 <span className="hamburger-box text-danger">
//                                     <span className="hamburger-inner text-danger"></span>
//                                 </span>
//                             </button>
//                         </div> */}
//             <div className="services-right-side d-flex h-100 mt-5 align-items-end flex-column position-relative">
//               <button
//                 data-aos="fade-left"
//                 className="service-nav mt-5"
//                 data-axess-target="softdev"
//                 onClick={(e) => {
//                   scrollTop("softdev", e);
//                 }}
//               >
//                 <span>Software Development </span>
//               </button>
//               {/* <button
//                 data-aos="fade-left"
//                 className="service-nav "
//                 data-axess-target="softtest"
//                 onClick={(e) => {
//                   scrollTop("softtest", e);
//                 }}
//               >
//                 <span>SaaS Product Development</span>
//               </button> */}

//               {/* <button
//                 data-aos="fade-left"
//                 className="service-nav"
//                 data-axess-target="webdev"
//                 onClick={(e) => {
//                   scrollTop("webdev", e);
//                 }}
//               >
//                 <span>AI & ML Engineering </span>
//               </button> */}
              
//               <button
//                 data-aos="fade-left"
//                 className="service-nav"
//                 data-axess-target="digi"
//                 onClick={(e) => {
//                   scrollTop("digi", e);
//                 }}
//               >
//                 <span>DevOps, Cloud & SRE</span>
//               </button>
//               <button
//                 data-aos="fade-left"
//                 className="service-nav"
//                 data-axess-target="micro"
//                 onClick={(e) => {
//                   scrollTop("micro", e);
//                 }}
//               >
//                 <span>Microservices Architecture and Engineering</span>
//               </button>
              
//               {/* <Link to="/" className="service-hover-nav" data-aos="fade">
//                 <span>Home</span>
//               </Link>
//               <Link
//                 to="/ourworks"
//                 className="service-hover-nav two"
//                 data-aos="fade"
//               >
//                 <span>Industries</span>
//               </Link>
//               <Link
//                 to="/contact"
//                 className="service-hover-nav three"
//                 data-aos="fade"
//               >
//                 <span>Contact</span>
//               </Link> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// }

// export default Services;
import React, { useEffect, useState, useCallback, useMemo } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
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
import saasp from '../assets/saasp.png';
import csd from "../assets/csd.png";
import micro from "../assets/micro.png";
import Navbar from "../components/Navbar";
import ServicesNav from "../components/ServicesNav";

// Constants for better maintainability
const LOADING_DURATION = 2000;
const SCROLL_OFFSET = 100;
const SECTIONS_CONFIG = [
  { id: "softdev", label: "Software Development" },
  { id: "digi", label: "DevOps, Cloud & SRE" },
  { id: "micro", label: "Microservices Architecture and Engineering" }
];

function Services() {
  const [nav, setNav] = useState(false);
  const [popup, setPopup] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  
  const navigate = useNavigate();
  const location = useLocation();

  // Memoized sections data for better performance
  const sectionsData = useMemo(() => [
    {
      id: "softdev",
      title: "Software Development",
      subtitle: "We Don't Just Build Software — We Orchestrate Digital Masterpieces.",
      description: "Think of us as your tech orchestra — with frontend, backend, DevOps, and AI playing in sync.",
      fullDescription: "We replace scattered teams and misaligned timelines with a full-stack symphony that moves fast, builds smart, and scales right. Let go of the chaos. Let us harmonize your innovation.",
      image: csd,
      features: [
        "⚡ Rapid MVP Prototyping",
        "🌐 Web and Mobile Apps", 
        "🧩 API Integrations & Microservices",
        "☁️ Cloud-native Development"
      ],
      ctaText: "Let's Build Your Digital Symphony",
      learnMoreLink: "/development"
    },
    {
      id: "digi", 
      title: "DevOps, Cloud & SRE",
      subtitle: "Modern Cloud Engineering Built to Scale, Secure, and Ship Fast.",
      description: "From CI/CD to serverless multicloud deployment, we help you build infrastructure that is automated, resilient, and ready for rapid innovation.",
      image: cloud,
      features: [
        "🛠️ End-to-End CI/CD & GitOps Deployments",
        "🐳 Kubernetes & Container Orchestration",
        "☁️ Certified AWS, Azure, GCP Engineers", 
        "🌐 Serverless & Multi-Region Cloud Scaling"
      ],
      ctaText: "Launch Your SaaS Now",
      learnMoreLink: "/digitalmarketing"
    },
    {
      id: "micro",
      title: "Microservices Architecture & Engineering", 
      subtitle: "Engineered for Modularity. Built for Scale",
      description: "We design, build, and manage microservices that enable rapid scaling, resilience, and agility for distributed systems — without the chaos.",
      image: bug,
      features: [
        "⚡ Event-Driven Microservices with Kafka",
        "🔀 API Gateway & Service Mesh (Istio/Linkerd)",
        "🔐 Secure, Isolated Deployments",
        "🏗️ Monolith-to-Microservices Migration Experts"
      ],
      ctaText: "Launch Your SaaS Now", 
      learnMoreLink: "/micro-services"
    }
  ], []);

  // Handle loading screen with cleanup
  useEffect(() => {
    const timer = setTimeout(() => {
      setPopup(false);
      const body = document.querySelector("body");
      const layout = document.querySelector(".layer-one");
      
      if (layout && body) {
        layout.style.display = "none";
        body.style.overflow = "";
        AOS.refresh();
      }
    }, LOADING_DURATION);

    return () => clearTimeout(timer);
  }, []);

  // Handle body overflow based on route
  useEffect(() => {
    const body = document.querySelector("body");
    if (!body) return;

    if (location.pathname === "/services") {
      window.scrollTo(0, 0);
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }

    // Cleanup on unmount
    return () => {
      body.style.overflow = "auto";
    };
  }, [location.pathname]);

  // Optimized scroll handler with throttling
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY + SCROLL_OFFSET;
    let newActiveSection = "";

    for (let i = 0; i < sectionsData.length; i++) {
      const section = sectionsData[i];
      const element = document.getElementById(section.id);
      
      if (!element) continue;

      const currentTop = element.offsetTop;
      const nextSection = sectionsData[i + 1];
      const nextTop = nextSection ? 
        document.getElementById(nextSection.id)?.offsetTop || Infinity : 
        Infinity;

      if (scrollY >= currentTop && scrollY < nextTop) {
        newActiveSection = section.id;
        break;
      }
    }

    if (newActiveSection !== activeSection) {
      setActiveSection(newActiveSection);
      
      // Update navigation states
      sectionsData.forEach(section => {
        const navElement = document.querySelector(`.service-nav[data-axess-target="${section.id}"]`);
        const sectionElement = document.getElementById(section.id);
        
        if (navElement && sectionElement) {
          if (section.id === newActiveSection) {
            navElement.classList.add("active");
            sectionElement.classList.add("active");
          } else {
            navElement.classList.remove("active");
            sectionElement.classList.remove("active");
          }
        }
      });
    }
  }, [activeSection, sectionsData]);

  // Throttled scroll event listener
  useEffect(() => {
    let timeoutId = null;
    
    const throttledHandleScroll = () => {
      if (timeoutId === null) {
        timeoutId = setTimeout(() => {
          handleScroll();
          timeoutId = null;
        }, 16); // ~60fps
      }
    };

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [handleScroll]);

  // Smooth scroll to section
  const scrollToSection = useCallback((sectionId, event) => {
    setNav(false);
    const element = document.getElementById(sectionId);
    
    if (element) {
      const targetPosition = element.offsetTop;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });

      // Update active states immediately for better UX
      const allNavs = document.querySelectorAll(".service-nav");
      allNavs.forEach(nav => nav.classList.remove("active"));
      event.currentTarget.classList.add("active");
    }
  }, []);

  // Close mobile nav when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (nav && !event.target.closest('.second-nav') && !event.target.closest('.hamburger')) {
        setNav(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [nav]);

  // Render service section component
  const ServiceSection = ({ section, index }) => (
    <div className={`my-5 text-white ${index === 0 ? 'softtest mb-5' : index === 1 ? 'mt-5 roller-container digi' : 'mt-5 flex flex-col min-h-screen'}`} id={section.id}>
      <div className="p-5">
        <div className="position-relative z-3">
          <h1
            className="primary-header mb-4"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-anchor-placement="bottom-bottom"
          >
            {section.title}
          </h1>
          
          <div className="row align-items-center">
            <div className="col-md-8">
              <h4
                className="mb-4"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-anchor-placement="bottom-bottom"
              >
                {section.subtitle}
              </h4>
              
              {section.id === "softdev" && (
                <h4
                  className="primary-text mb-3"
                  data-aos="fade-up"
                  data-aos-duration="300"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  Why juggle multiple vendors for UI, backend, and deployment?
                </h4>
              )}
              
              <p
                className="primary-text mb-4"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-anchor-placement="bottom-bottom"
              >
                {section.description}
                {section.fullDescription && (
                  <>
                    <br /><br />
                    {section.fullDescription}
                  </>
                )}
              </p>
            </div>
            
            <div className="col-md-4">
              <img
                src={section.image}
                className="w-100 animatedimg"
                alt={section.title}
                data-aos="zoom-in"
                data-aos-duration="600"
                data-aos-anchor-placement="bottom-bottom"
              />
            </div>
          </div>

          {/* Features list */}
          <div
            className="primary-text mt-4 mb-5 text-white"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            {section.features.map((feature, idx) => (
              <p key={idx} className="mb-2">{feature}</p>
            ))}
          </div>

          {/* Action buttons */}
          <div className="d-flex justify-content-center gap-3">
            <Link
              to="/contact"
              className="gold-btn"
              data-aos="fade"
              data-aos-duration="600"
              data-aos-anchor-placement="bottom-bottom"
            >
              <span className="d-block">"{section.ctaText}"</span>
              <i className="bi bi-arrow-right"></i>
            </Link>

            <Link
              to={section.learnMoreLink}
              className="gold-btn"
              data-aos-duration="600"
              data-aos-anchor-placement="bottom-bottom"
            >
              <span className="d-block">Know More</span>
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <ServicesNav />
      <div className="services">
        {/* Loading Screen */}
        {popup && (
          <div className="layer-one">
            <div className="row">
              <div className="col-md-7 vh-100 bg-axess-gold-3 one d-none d-md-block">
                <div className="d-flex vh-100 justify-content-center align-items-center">
                  {/* Loading animation placeholder */}
                </div>
              </div>
              <div className="col-md-5">
                <p className="popup-letters two">
                  {"loading".split("").map((letter, index) => (
                    <span key={index}>{letter}</span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="layer-two min-vh-100">
          {/* Mobile Navigation Toggle */}
          <div className="fixed-nav d-block d-md-none">
            <button
              className={`shadow-none border-0 hamburger hamburger--spring-r ${nav ? "is-active" : ""}`}
              type="button"
              onClick={() => setNav(!nav)}
              aria-label="Toggle navigation"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>

          <div className="row gx-0">
            {/* Main Content Area */}
            <div className="col-md-8 bg-green-1" id="scroller">
              {/* Hero Section */}
              <div className="vh-100 py-3 px-4 p-md-5">
                <div className="d-flex flex-column justify-content-center h-100">
                  <div
                    className="d-flex justify-content-between align-items-center"
                    data-aos="fade-down"
                  >
                    {/* Logo/Navigation can be added here */}
                  </div>
                  
                  <div className="pattern d-none"></div>
                  
                  <h1 
                    className='display-3 col-md-10 fw-bold text-white' 
                    data-aos="fade-up" 
                    data-aos-duration='700'
                  >
                    The <span className='gold-text-2'>
                      <Link to={"/"} className="gold-text-2 text-decoration-none">
                        Devnio
                      </Link>
                    </span> Services
                  </h1>
                  
                  <div
                    data-aos="fade-up"
                    data-aos-duration="700"
                    data-aos-anchor-placement="bottom-bottom"
                  >
                    <h2 className="text-white m-0 col-xxl-8 col-lg-10">
                      Code with <span className="gold-text-2">Confidence</span>,
                      <br /> Click with <span className="gold-text-2">Precision</span>,
                      <br /> Convert with <span className="gold-text-2">Conviction</span>: 
                      Partner with Us for <span className="gold-text-2">Digital Mastery</span>
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

              {/* Service Sections */}
              {sectionsData.map((section, index) => (
                <ServiceSection key={section.id} section={section} index={index} />
              ))}
            </div>

            {/* Navigation Sidebar */}
            <div
              className={`col-md-4 vh-100 bg-axess-gold-2 position-fixed end-0 second-nav ${nav ? "is-active" : ""}`}
            >
              <div className="services-right-side d-flex h-100 mt-5 align-items-end flex-column position-relative">
                {SECTIONS_CONFIG.map((section, index) => (
                  <button
                    key={section.id}
                    data-aos="fade-left"
                    className={`service-nav ${activeSection === section.id ? "active" : ""}`}
                    data-axess-target={section.id}
                    onClick={(e) => scrollToSection(section.id, e)}
                  >
                    <span>{section.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;