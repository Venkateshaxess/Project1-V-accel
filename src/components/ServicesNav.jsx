// // // import React, { useState, useEffect, useContext } from 'react';
// // // import { NavLink, Link, Outlet, useNavigate } from 'react-router-dom';
// // // import Home from '../pages/Home';
// // // import logo from '../assets/images/logo/logo.png';
// // // import '../assets/css/hamburgers/hamburgers.scss';
// // // import { userContext } from '../store/Store';
// // // import vlogo from '../assets/image.png';

// // // function Navbar() {
// // //   const [fixed, setFixed] = useState(false);
// // //   const [nav, setNav] = useState(false);
// // //   const [value, setValue] = useContext(userContext);


// // //   let navigation = useNavigate();

// // //   const handleOutsideClick = (event) => {
// // //     const navbar = document.getElementById('navbarSupportedContent');
// // //     const isClickInsideNavbar = navbar.contains(event.target);

// // //     if (!isClickInsideNavbar && navbar.classList.contains('show')) {
// // //       navbar.classList.remove('show');
// // //       setNav(false);
// // //     }
// // //   };

// // //   const handleScroll = () => {
// // //     if (window.scrollY > 100 && window.scrollY < 800) {
// // //       setFixed('fixed-1');
// // //     } else if (window.scrollY > 800) {
// // //       setFixed('fixed-2');
// // //     } else {
// // //       setFixed(false);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     window.addEventListener('scroll', handleScroll);
// // //     document.addEventListener('click', handleOutsideClick);

// // //     return () => {
// // //       document.removeEventListener('click', handleOutsideClick);
// // //       window.removeEventListener('scroll', handleScroll);
// // //     };
// // //   }, []);

// // //   useEffect(() => {
// // //     setNav(false);
// // //   }, [navigation]);




// // //   return (
// // //     <div className='positon-relative sticky-top'>
// // //       {/* Upper Navigation */}
// // //       <div className='d-flex py-0 py-lg-3 justify-content-between bg-white justify-content-lg-around align-items-center upper-nav border-bottom container-fluid flex-wrap' data-aos='fade-down' data-aos-duration='500'>
// // //         {/* <div className='d-flex share order-2 order-lg-1 '>
// // //           <Link to={'https://www.facebook.com/profile.php?id=61556380648787'} target='_blank'><i className="bi bi-facebook text-primary fs-6"></i></Link>
// // //           <Link to={'https://www.instagram.com/axesstech/'} target='_blank'><i className="bi bi-instagram text-danger fs-6"></i></Link>
// // //           <Link><i className="bi bi-whatsapp text-success fs-6"></i></Link>
// // //         </div> */}
// // //          {/* <NavLink to='/' className='d-none d-lg-flex justify-content-center col-12 col-lg-4  order-1 order-lg-2'>
// // //           <p> Axess</p>
// // //          <img style={{ width: '50px',height: '110px' }} src={vlogo} alt="" /> 
// // //           <p>Technology</p>
// // //         </NavLink>  */}
        
// // //         {/* <NavLink 
// // //   to='/' 
// // //   className='d-none d-lg-flex align-items-center justify-content-center col-12 col-lg-4 order-1 order-lg-2'
// // // >
// // //   <div className="d-flex align-items-center" style={{ gap: '20px' }}>
// // //     <p className="mb-0" style={{ fontSize: '48px', fontWeight: '700', whiteSpace: 'nowrap', letterSpacing: '4px',color:'#1f4051' }}>
// // //       V
// // //       <span 
// // //       style={{ fontFamily: 'Arial, sans-serif', fontWeight: '500', margin: '0 10px' }}
// // //     >
// // //       -
// // //     </span>
// // //     Accel
// // //     </p>
// // //     <img 
// // //       src={vlogo} 
// // //       alt="Logo" 
// // //       style={{ width: '80px', height: '110px', objectFit: 'contain' }} 
// // //     />
// // //     <p className="mb-0" style={{ fontSize: '48px', fontWeight: '700', whiteSpace: 'nowrap', letterSpacing: '4px',color:'#1f4051' }}>
// // //       AI Dynamics
// // //     </p>
// // //   </div>
// // // </NavLink> */}

// // // <div className="container-fluid px-4">
// // //   <div className="row align-items-center">
// // //     {/* Logo at top left */}
// // //     <div className="col-6 col-lg-2 d-none d-lg-flex justify-content-start align-items-center">
// // //       <Link to='/' className="navbar-brand">
// // //         <img src={vlogo} alt="" style={{ width: '100px', height: '110px', objectFit: 'contain'}} />
// // //       </Link>
// // //   {/* <img 
// // //     src={vlogo} 
// // //     alt="Logo" 
// // //     style={{ width: '100px', height: '110px', objectFit: 'contain' }} 
// // //   /> */}

// // // </div>

// // //     {/* Centered heading */}

// // //     {/* <div className="col-12 col-lg-8 d-none d-lg-flex justify-content-center">
// // //   <div className="d-flex align-items-center">
// // //     <p className="mb-0" style={{ fontSize: '48px', fontWeight: '700', whiteSpace: 'nowrap', letterSpacing: '4px', color: '#1f4051' }}>
// // //       V<span style={{ fontFamily: 'Arial, sans-serif', fontWeight: '500' }}>-</span>Accel AI Dynamics
// // //     </p>
// // //   </div>
// // // </div> */}
// // // {/* <div className="col-lg-8 d-none d-lg-flex justify-content-center">
// // //   <div className="d-flex align-items-center">
// // //     <p className="mb-0" style={{ fontSize: '48px', fontWeight: '700', whiteSpace: 'nowrap', letterSpacing: '4px', color: '#1f4051' }}>
// // //       V<span style={{ fontFamily: 'Arial, sans-serif', fontWeight: '500' }}>-</span>Accel AI Dynamics
// // //     </p>
// // //   </div>
// // // </div> */}

// // // <div className="col-lg-8 d-none d-lg-flex justify-content-center">
// // //   <div className="d-flex flex-column align-items-center justify-content-center text-center">
// // //     <p style={{ fontSize: '52px', fontWeight: '900', whiteSpace: 'nowrap', letterSpacing: '4px', color: '#1f4051' }}>
// // //       <span style={{ fontFamily: 'Arial, sans-serif', fontWeight: '500' }}></span>Devnivo
// // //     </p>
// // //     <p className="fs-2 mb-0 "></p>
// // //   </div>
// // // </div>


   

// // //    {/* <div className="col-12 col-lg-8 d-flex justify-content-center">
// // //   <div className="d-flex align-items-center">
// // //     <p className="mb-0" style={{ fontSize: '48px', fontWeight: '700', whiteSpace: 'nowrap', letterSpacing: '4px', color: '#1f4051' }}>
// // //       V<span style={{ fontFamily: 'Arial, sans-serif', fontWeight: '500' }}>-</span>Accel AI Dynamics
// // //     </p>
// // //   </div>
// // // </div> */}


// // //     {/* Empty column for spacing/alignment on larger screens */}
// // //     <div className="col-lg-2 d-none d-lg-block"></div>
// // //   </div>
// // // </div>

// // //         {/* <div className='order-3 order-lg-3'> */}
// // //           {/* <NavLink to={'/login'} className='gold-btn px-4'>
// // //             <span className='d-block green-text-1'>Login</span>
// // //           </NavLink> */}
// // //         {/* </div> */}
// // //       </div>

// // //       {/* Main Navigation */}
// // //       <div>
// // //         <nav className={`navbar position-absolute w-100 navbar-expand-lg bg-body-tertiary p-0 position-relative z-3 ${fixed === 'fixed-1' ? 'fixed-1' : ''} ${fixed === 'fixed-2' ? 'fixed-1 fixed-2' : ''}`}>
// // //           <div className="container-fluid">
// // //             <div className="d-lg-none d-flex justify-content-between align-items-center w-100 py-2 align-items-end upper-nav">
// // //               <Link to='/' className="navbar-brand col-1">
// // //                 <img src={vlogo} alt="" />
// // //               </Link>
// // //               <p className="secondary-text m-0 text-center" onClick={()=>navigation("/")}>Devnio</p>
// // //               <button
// // //                 className={`navbar-toggler shadow-none border-0 hamburger hamburger--spring-r ${nav && 'is-active'}`}
// // //                 type="button"
// // //                 data-bs-toggle="collapse"
// // //                 data-bs-target="#navbarSupportedContent"
// // //                 aria-controls="navbarSupportedContent"
// // //                 aria-expanded="false"
// // //                 aria-label="Toggle navigation" onClick={() => setNav(!nav)}>
// // //                 <span className="hamburger-box">
// // //                   <span className="hamburger-inner"></span>
// // //                 </span>
// // //               </button>
// // //             </div>
// // //             <div className="collapse navbar-collapse" id="navbarSupportedContent">
// // //               <ul className="navbar-nav align-items-center mx-auto mb-2 mb-lg-0" data-aos='fade-up'>
// // //                 <li className="nav-item">
// // //                   <NavLink to={'/'} activeclassname="active" className="nav-link navhover" aria-current="page" >
// // //                     Home
// // //                   </NavLink>
// // //                 </li>
// // //                 <li className="nav-item">
// // //                   <NavLink to={"/about"} activeclassname="active" className="nav-link navhover" >
// // //                     Team
// // //                   </NavLink>
// // //                 </li>

// // //                 <li className="nav-item position-relative">
// // //                   {/* <Link to="#" className="nav-link navhover">
// // //                     Services
// // //                   </Link> */}
// // //                   <NavLink
// // //   to="/services"
// // //   className="nav-link navhover"
// // //   end // 👈 forces active only when path matches exactly '/services'
// // // >
// // //   Services
// // // </NavLink>
// // //                   <div className="drop">
// // //                     <div className='nav-item'>
// // //                       <NavLink to={'/services'} activeclassname="active"  className="nav-link navhover" aria-current="page" >All Services</NavLink>
// // //                     </div>
// // //                     <div className='nav-item'>
// // //                       <NavLink to={'/development'} activeclassname="active" className="nav-link navhover" aria-current="page" > Custom Software Development</NavLink>
// // //                     </div>
// // //                     <div className='nav-item'>
// // //                       <NavLink to={'/testing'} activeclassname="active" className="nav-link navhover" aria-current="page" >SaaS Product Development</NavLink>
// // //                     </div>
// // //                     <div className='nav-item'>
// // //                       <NavLink to={'/webdevelopment'} activeclassname="active" className="nav-link navhover" aria-current="page" >AI & ML Engineering</NavLink>
// // //                     </div>
// // //                     <div className='nav-item'>
// // //                       <NavLink to={'/digitalmarketing'} activeclassname="active" className="nav-link navhover" aria-current="page" >DevOps & Cloud Engineering</NavLink>
// // //                     </div>
// // //                     <div className='nav-item'>
// // //                       <NavLink to={'/micro-services'} activeclassname="active" className="nav-link navhover" aria-current="page" >Microservices Architecture & Engineering</NavLink>
// // //                     </div>
// // //                   </div>
// // //                 </li>
// // //                 <li className="nav-item">
// // //                   <NavLink to={"/ourworks"} activeclassname="active" className="nav-link navhover" >
// // //                     Our works
// // //                   </NavLink>
// // //                 </li>
                
// // //                 {/* <li className="nav-item position-relative">
// // //                   <Link className="nav-link navhover" >
// // //                     Pricing
// // //                   </Link>
// // //                   <div className="drop pricing">  
// // //                     <div className='nav-item'>
// // //                       <Link to={'/development'} activeclassname="active" className="nav-link navhover" aria-current="page" onClick={() => setValue(true)}>Software Development Pricing</Link>
// // //                     </div>
// // //                     <div className='nav-item'>
// // //                       <Link to={'/testing'} activeclassname="active" className="nav-link navhover" aria-current="page" onClick={() => setValue(true)}>Software Testing Pricing</Link>
// // //                     </div>
// // //                     <div className='nav-item'>
// // //                       <Link to={'/webdevelopment'} activeclassname="active" className="nav-link navhover" aria-current="page" onClick={() => setValue(true)}>Web Development Pricing</Link>
// // //                     </div>
// // //                     <div className='nav-item'>
// // //                       <Link to={'/digitalmarketing'} activeclassname="active" className="nav-link navhover" aria-current="page" onClick={() => setValue(true)}>Digital Marketing Pricing</Link>
// // //                     </div>
// // //                   </div>
// // //                 </li> */}
// // //                 <li className="nav-item">
// // //                   <NavLink to={"/contact"} activeclassname="active" className="nav-link navhover" >
// // //                     Contact
// // //                   </NavLink>
// // //                 </li>
// // //                 {/* <li className="nav-item">
// // //                                     <NavLink to={"/collaborate"} activeclassname="active" className="nav-link" >
// // //                                         Collaborate with us
// // //                                     </NavLink>
// // //                                 </li> */}
// // //               </ul>
// // //             </div>
// // //           </div>
// // //         </nav>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default Navbar;

// // import React, { useState, useEffect, useContext } from 'react';
// // import { NavLink, Link, useNavigate } from 'react-router-dom';
// // import logo from '../assets/image.png';
// // import vlogo from '../assets/images/Group 14.svg';
// // import '../assets/css/hamburgers/hamburgers.scss';
// // import { userContext } from '../store/Store';

// // function Navbar() {
// //   const [fixed, setFixed] = useState(false);
// //   const [nav, setNav] = useState(false);
// //   const [value, setValue] = useContext(userContext);
// //   const navigation = useNavigate();

// //   const handleOutsideClick = (event) => {
// //     const navbar = document.getElementById('navbarSupportedContent');
// //     if (!navbar.contains(event.target) && navbar.classList.contains('show')) {
// //       navbar.classList.remove('show');
// //       setNav(false);
// //     }
// //   };

// //   const handleScroll = () => {
// //     if (window.scrollY > 100 && window.scrollY < 800) {
// //       setFixed('fixed-1');
// //     } else if (window.scrollY > 800) {
// //       setFixed('fixed-1 fixed-2');
// //     } else {
// //       setFixed(false);
// //     }
// //   };

// //   useEffect(() => {
// //     window.addEventListener('scroll', handleScroll);
// //     document.addEventListener('click', handleOutsideClick);
// //     return () => {
// //       document.removeEventListener('click', handleOutsideClick);
// //       window.removeEventListener('scroll', handleScroll);
// //     };
// //   }, []);

// //   useEffect(() => {
// //     setNav(false);
// //   }, [navigation]);

// //   return (
// //     <div>
// //       {/* Upper Bar with Large Logo and Brand */}
// //       <div className='d-none d-lg-flex justify-content-between align-items-center border-bottom px-3' style={{ height: '120px' }}>
// //         <div className="d-flex align-items-center">
// //           <Link to='/' className="navbar-brand m-0 p-0">
// //             <img
// //               src={logo}
// //               alt="Logo"
// //               style={{
// //                 height: '160px', // Bigger desktop logo
// //                 objectFit: 'contain',
// //               }}
// //             />
// //           </Link>
// //         </div>

// //         <div className="text-center">
// //           <p style={{
// //             fontSize: '72px',
// //             fontWeight: '900',
// //             color: '#1f4051',
// //             margin: 0,
// //             letterSpacing: '4px',
// //           }}>
// //             Devnivo
// //           </p>
// //         </div>

// //         <div style={{ width: '160px' }} /> {/* Spacer for alignment */}
// //       </div>

// //       {/* Main Navigation */}
// //       <nav className={`navbar navbar-expand-lg bg-body-tertiary px-2 ${fixed || ''}`} style={{ minHeight: '50px' }}>
// //         <div className="container-fluid px-0">

// //           {/* Mobile Header */}
// //           <div className="d-lg-none d-flex justify-content-between align-items-center w-100" style={{ height: '60px' }}>
// //             <Link to='/' className="navbar-brand m-0 p-0">
// //               <img src={vlogo} alt="Mobile Logo" style={{ height: '100px' }} /> {/* Increased mobile logo */}
// //             </Link>
// //             <p
// //               className="m-0 fw-bold"
// //               onClick={() => navigation("/")}
// //               style={{
// //                 fontSize: '32px',
// //                 fontWeight: '700',
// //                 color: '#1f4051',
// //               }}
// //             >
// //               Devnivo
// //             </p>
// //             <button
// //               className={`navbar-toggler border-0 hamburger hamburger--spring-r ${nav ? 'is-active' : ''}`}
// //               type="button"
// //               data-bs-toggle="collapse"
// //               data-bs-target="#navbarSupportedContent"
// //               aria-controls="navbarSupportedContent"
// //               aria-expanded="false"
// //               aria-label="Toggle navigation"
// //               onClick={() => setNav(!nav)}
// //             >
// //               <span className="hamburger-box">
// //                 <span className="hamburger-inner"></span>
// //               </span>
// //             </button>
// //           </div>

// //           {/* Navigation Links */}
// //           <div className="collapse navbar-collapse" id="navbarSupportedContent">
// //             <ul className="navbar-nav mx-auto d-flex align-items-center mb-0" style={{ gap: '14px' }}>
// //               <li className="nav-item">
// //                 <NavLink to='/' className="nav-link navhover px-2">Home</NavLink>
// //               </li>
// //               <li className="nav-item">
// //                 <NavLink to="/about" className="nav-link navhover px-2">Team</NavLink>
// //               </li>
// //               <li className="nav-item position-relative">
// //                 <NavLink to='/services' className="nav-link navhover px-2" onClick={() => setValue(true)}>Services</NavLink>
// //                 <div className="drop">
// //                   <NavLink to='/services' className="nav-link navhover">All Services</NavLink>
// //                   <NavLink to='/development' className="nav-link navhover">Custom Software Development</NavLink>
// //                   <NavLink to='/testing' className="nav-link navhover">SaaS Product Development</NavLink>
// //                   <NavLink to='/webdevelopment' className="nav-link navhover">AI & ML Engineering</NavLink>
// //                   <NavLink to='/digitalmarketing' className="nav-link navhover">DevOps & Cloud Engineering</NavLink>
// //                   <NavLink to='/micro-services' className="nav-link navhover">Microservices Architecture</NavLink>
// //                 </div>
// //               </li>
// //               <li className="nav-item">
// //                 <NavLink to="/ourworks" className="nav-link navhover px-2">Our Works</NavLink>
// //               </li>
// //               <li className="nav-item">
// //                 <NavLink to="/contact" className="nav-link navhover px-2">Contact</NavLink>
// //               </li>
// //             </ul>
// //           </div>

// //         </div>
// //       </nav>
// //     </div>
// //   );
// // }

// // export default Navbar;
// // import React, { useState, useEffect, useContext } from 'react';
// // import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
// // import logo from '../assets/image.png';
// // import vlogo from '../assets/images/Group 14.svg';
// // import '../assets/css/hamburgers/hamburgers.scss';
// // import { userContext } from '../store/Store';

// // function Navbar() {
// //   const [fixed, setFixed] = useState('');
// //   const [nav, setNav] = useState(false);
// //   const [value, setValue] = useContext(userContext);
// //   const navigate = useNavigate();
// //   const location = useLocation();

// //   const handleOutsideClick = (event) => {
// //     const navbar = document.getElementById('navbarSupportedContent');
// //     if (navbar && !navbar.contains(event.target) && navbar.classList.contains('show')) {
// //       navbar.classList.remove('show');
// //       setNav(false);
// //     }
// //   };

// //   const handleScroll = () => {
// //     if (window.scrollY > 100 && window.scrollY < 800) {
// //       setFixed('fixed-1');
// //     } else if (window.scrollY >= 800) {
// //       setFixed('fixed-1 fixed-2');
// //     } else {
// //       setFixed('');
// //     }
// //   };

// //   useEffect(() => {
// //     window.addEventListener('scroll', handleScroll);
// //     document.addEventListener('click', handleOutsideClick);
// //     return () => {
// //       window.removeEventListener('scroll', handleScroll);
// //       document.removeEventListener('click', handleOutsideClick);
// //     };
// //   }, []);

// //   useEffect(() => {
// //     // Close nav menu on route change
// //     setNav(false);
// //   }, [location]);

// //   return (
// //     <div>
// //       {/* Upper Bar with Large Logo */}
// //       <div
// //         className="d-none d-lg-flex justify-content-between align-items-center border-bottom px-3"
// //         style={{ height: '100px' }}
// //       >
// //         <div className="d-flex align-items-center">
// //           <Link to="/" className="navbar-brand m-0 p-0">
// //             <img
// //               src={logo}
// //               alt="Logo"
// //               style={{
// //                 height: '90px', // BIG LOGO size as you wanted
// //                 objectFit: 'contain',
// //               }}
// //             />
// //           </Link>
// //         </div>

// //         <div className="text-center">
// //           <p
// //             style={{
// //               fontSize: '40px', // font size as you wanted
// //               fontWeight: '900',
// //               color: '#1f4051',
// //               margin: 0,
// //               letterSpacing: '2px',
// //             }}
// //           >
// //             Devnivo
// //           </p>
// //         </div>

// //         <div style={{ width: '90px' }} /> {/* Spacer */}
// //       </div>

// //       {/* Main Navigation */}
// //       <nav className={`navbar navbar-expand-lg bg-body-tertiary px-2 ${fixed}`} style={{ minHeight: '45px' }}>
// //         <div className="container-fluid px-0">
// //           {/* Mobile Header */}
// //           <div className="d-lg-none d-flex justify-content-between align-items-center w-100" style={{ height: '55px' }}>
// //             <Link to="/" className="navbar-brand m-0 p-0">
// //               <img src={vlogo} alt="Mobile Logo" style={{ height: '40px' }} /> {/* mobile logo size as you wanted */}
// //             </Link>
// //             <p className="m-0 fw-bold" onClick={() => navigate('/')}>
// //               Devnivo
// //             </p>
// //             <button
// //               className={`navbar-toggler border-0 hamburger hamburger--spring-r ${nav ? 'is-active' : ''}`}
// //               type="button"
// //               data-bs-toggle="collapse"
// //               data-bs-target="#navbarSupportedContent"
// //               aria-controls="navbarSupportedContent"
// //               aria-expanded={nav ? 'true' : 'false'}
// //               aria-label="Toggle navigation"
// //               onClick={() => setNav(!nav)}
// //             >
// //               <span className="hamburger-box">
// //                 <span className="hamburger-inner"></span>
// //               </span>
// //             </button>
// //           </div>

// //           {/* Navigation Links */}
// //           <div className={`collapse navbar-collapse ${nav ? 'show' : ''}`} id="navbarSupportedContent">
// //             <ul className="navbar-nav mx-auto d-flex align-items-center mb-0" style={{ gap: '14px' }}>
// //               <li className="nav-item">
// //                 <NavLink to="/" className="nav-link navhover px-2">
// //                   Home
// //                 </NavLink>
// //               </li>
// //               <li className="nav-item">
// //                 <NavLink to="/about" className="nav-link navhover px-2">
// //                   Team
// //                 </NavLink>
// //               </li>
// //               <li className="nav-item position-relative">
// //                 <NavLink to="/services" className="nav-link navhover px-2" onClick={() => setValue(true)}>
// //                   Services
// //                 </NavLink>
// //                 <div className="drop">
// //                   <NavLink to="/services" className="nav-link navhover">
// //                     All Services
// //                   </NavLink>
// //                   <NavLink to="/development" className="nav-link navhover">
// //                     Custom Software Development
// //                   </NavLink>
// //                   <NavLink to="/testing" className="nav-link navhover">
// //                     SaaS Product Development
// //                   </NavLink>
// //                   <NavLink to="/webdevelopment" className="nav-link navhover">
// //                     AI & ML Engineering
// //                   </NavLink>
// //                   <NavLink to="/digitalmarketing" className="nav-link navhover">
// //                     DevOps & Cloud Engineering
// //                   </NavLink>
// //                   <NavLink to="/micro-services" className="nav-link navhover">
// //                     Microservices Architecture
// //                   </NavLink>
// //                 </div>
// //               </li>
// //               <li className="nav-item">
// //                 <NavLink to="/ourworks" className="nav-link navhover px-2">
// //                   Our works
// //                 </NavLink>
// //               </li>
// //               <li className="nav-item">
// //                 <NavLink to="/contact" className="nav-link navhover px-2">
// //                   Contact
// //                 </NavLink>
// //               </li>
// //             </ul>
// //           </div>
// //         </div>
// //       </nav>
// //     </div>
// //   );
// // }

// // // export default Navbar;
// // import React, { useState, useEffect, useContext } from 'react';
// // import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
// // import logo from '../assets/image.png';
// // import vlogo from '../assets/images/Group 14.svg';
// // import '../assets/css/hamburgers/hamburgers.scss';
// // import { userContext } from '../store/Store';

// // function Navbar() {
// //   const [fixed, setFixed] = useState('');
// //   const [nav, setNav] = useState(false);
// //   const [value, setValue] = useContext(userContext);
// //   const navigate = useNavigate();
// //   const location = useLocation();

// //   const handleOutsideClick = (event) => {
// //     const navbar = document.getElementById('navbarSupportedContent');
// //     if (navbar && !navbar.contains(event.target) && navbar.classList.contains('show')) {
// //       navbar.classList.remove('show');
// //       setNav(false);
// //     }
// //   };

// //   const handleScroll = () => {
// //     if (window.scrollY > 100 && window.scrollY < 800) {
// //       setFixed('fixed-1');
// //     } else if (window.scrollY >= 800) {
// //       setFixed('fixed-1 fixed-2');
// //     } else {
// //       setFixed('');
// //     }
// //   };

// //   useEffect(() => {
// //     window.addEventListener('scroll', handleScroll);
// //     document.addEventListener('click', handleOutsideClick);
// //     return () => {
// //       window.removeEventListener('scroll', handleScroll);
// //       document.removeEventListener('click', handleOutsideClick);
// //     };
// //   }, []);

// //   useEffect(() => {
// //     // Close nav menu on route change
// //     setNav(false);
// //   }, [location]);

// //   return (
// //     <div>
// //       {/* Upper Bar with Large Logo */}
// //       <div
// //         className="d-none d-lg-flex justify-content-between align-items-center border-bottom px-3"
// //         style={{ height: '140px' }}  // increased height for bigger logo and text
// //       >
// //         <div className="d-flex align-items-center">
// //           <Link to="/" className="navbar-brand m-0 p-0">
// //             <img
// //               src={logo}
// //               alt="Logo"
// //               style={{
// //                 height: '150px',  // bigger logo height
// //                 objectFit: 'contain',
// //               }}
// //             />
// //           </Link>
// //         </div>

// //         <div className="text-center">
// //           <p
// //             style={{
// //               fontSize: '70px',  // bigger font size
// //               fontWeight: '900',
// //               color: '#1f4051',
// //               margin: 0,
// //               letterSpacing: '2px',
// //             }}
// //           >
// //             Devnivo
// //           </p>
// //         </div>

// //         <div style={{ width: '90px' }} /> {/* Spacer */}
// //       </div>

// //       {/* Main Navigation */}
// //       <nav className={`navbar navbar-expand-lg bg-body-tertiary px-2 ${fixed}`} style={{ minHeight: '45px' }}>
// //         <div className="container-fluid px-0">
// //           {/* Mobile Header */}
// //           <div className="d-lg-none d-flex justify-content-between align-items-center w-100" style={{ height: '55px' }}>
// //             <Link to="/" className="navbar-brand m-0 p-0">
// //               <img src={vlogo} alt="Mobile Logo" style={{ height: '40px' }} /> {/* mobile logo size */}
// //             </Link>
// //             <p className="m-0 fw-bold" onClick={() => navigate('/')}>
// //               Devnivo
// //             </p>
// //             <button
// //               className={`navbar-toggler border-0 hamburger hamburger--spring-r ${nav ? 'is-active' : ''}`}
// //               type="button"
// //               data-bs-toggle="collapse"
// //               data-bs-target="#navbarSupportedContent"
// //               aria-controls="navbarSupportedContent"
// //               aria-expanded={nav ? 'true' : 'false'}
// //               aria-label="Toggle navigation"
// //               onClick={() => setNav(!nav)}
// //             >
// //               <span className="hamburger-box">
// //                 <span className="hamburger-inner"></span>
// //               </span>
// //             </button>
// //           </div>

// //           {/* Navigation Links */}
// //           <div className={`collapse navbar-collapse ${nav ? 'show' : ''}`} id="navbarSupportedContent">
// //             <ul className="navbar-nav mx-auto d-flex align-items-center mb-0" style={{ gap: '14px' }}>
// //               <li className="nav-item">
// //                 <NavLink to="/" className="nav-link navhover px-2">
// //                   Home
// //                 </NavLink>
// //               </li>
// //               <li className="nav-item">
// //                 <NavLink to="/about" className="nav-link navhover px-2">
// //                   Team
// //                 </NavLink>
// //               </li>
// //               <li className="nav-item position-relative">
// //                 <NavLink to="/services" className="nav-link navhover px-2" onClick={() => setValue(true)}>
// //                   Services
// //                 </NavLink>
// //                 <div className="drop">
// //                   <NavLink to="/services" className="nav-link navhover">
// //                     All Services
// //                   </NavLink>
// //                   <NavLink to="/development" className="nav-link navhover">
// //                     Custom Software Development
// //                   </NavLink>
// //                   <NavLink to="/testing" className="nav-link navhover">
// //                     SaaS Product Development
// //                   </NavLink>
// //                   <NavLink to="/webdevelopment" className="nav-link navhover">
// //                     AI & ML Engineering
// //                   </NavLink>
// //                   <NavLink to="/digitalmarketing" className="nav-link navhover">
// //                     DevOps & Cloud Engineering
// //                   </NavLink>
// //                   <NavLink to="/micro-services" className="nav-link navhover">
// //                     Microservices Architecture
// //                   </NavLink>
// //                 </div>
// //               </li>
// //               <li className="nav-item">
// //                 <NavLink to="/ourworks" className="nav-link navhover px-2">
// //                   Our works
// //                 </NavLink>
// //               </li>
// //               <li className="nav-item">
// //                 <NavLink to="/contact" className="nav-link navhover px-2">
// //                   Contact
// //                 </NavLink>
// //               </li>
// //             </ul>
// //           </div>
// //         </div>
// //       </nav>
// //     </div>
// //   );
// // }

// // export default Navbar;
// import React, { useState, useEffect, useContext } from 'react';
// import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
// import logo from '../assets/image.png';
// import vlogo from '../assets/images/Group 14.svg';
// import '../assets/css/hamburgers/hamburgers.scss';
// import { userContext } from '../store/Store';

// function Navbar() {
//   const [fixed, setFixed] = useState('');
//   const [nav, setNav] = useState(false);
//   const [value, setValue] = useContext(userContext);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const handleOutsideClick = (event) => {
//     const navbar = document.getElementById('navbarSupportedContent');
//     if (navbar && !navbar.contains(event.target) && navbar.classList.contains('show')) {
//       navbar.classList.remove('show');
//       setNav(false);
//     }
//   };

//   const handleScroll = () => {
//     if (window.scrollY > 100 && window.scrollY < 800) {
//       setFixed('fixed-1');
//     } else if (window.scrollY >= 800) {
//       setFixed('fixed-1 fixed-2');
//     } else {
//       setFixed('');
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     document.addEventListener('click', handleOutsideClick);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       document.removeEventListener('click', handleOutsideClick);
//     };
//   }, []);

//   useEffect(() => {
//     setNav(false);
//   }, [location]);

//   return (
//     <div>
//       {/* Upper Bar with Large Logo */}
//       <div
//         className="d-none d-lg-flex justify-content-between align-items-center border-bottom px-3"
//         style={{ height: '140px' }}
//       >
//         <div className="d-flex align-items-center">
//           <Link to="/" className="navbar-brand m-0 p-0">
//             <img
//               src={logo}
//               alt="Logo"
//               style={{
//                 height: '150px',
//                 objectFit: 'contain',
//               }}
//             />
//           </Link>
//         </div>

//         <div className="text-center">
//           <p
//             style={{
//               fontSize: '70px',
//               fontWeight: '900',
//               color: '#1f4051',
//               margin: 0,
//               letterSpacing: '2px',
//             }}
//           >
//             Devnivo
//           </p>
//         </div>

//         <div style={{ width: '90px' }} />
//       </div>

//       {/* Main Navigation */}
//       <nav
//         className={`navbar navbar-expand-lg bg-body-tertiary px-2 ${fixed}`}
//         style={{ minHeight: '45px' }}
//       >
//         <div className="container-fluid px-0">
//           {/* Mobile Header */}
//           <div
//             className="d-lg-none d-flex justify-content-between align-items-center w-100"
//             style={{ height: '55px' }}
//           >
//             <Link to="/" className="navbar-brand m-0 p-0">
//               <img src={logo} alt="Mobile Logo" style={{ height: '40px' }} />
//             </Link>
//             <p className="m-0 fw-bold" onClick={() => navigate('/')}>
//               Devnivo
//             </p>
//             <button
//               className={`navbar-toggler border-0 hamburger hamburger--spring-r ${nav ? 'is-active' : ''}`}
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarSupportedContent"
//               aria-controls="navbarSupportedContent"
//               aria-expanded={nav ? 'true' : 'false'}
//               aria-label="Toggle navigation"
//               onClick={() => setNav(!nav)}
//             >
//               <span className="hamburger-box">
//                 <span className="hamburger-inner"></span>
//               </span>
//             </button>
//           </div>

//           {/* Navigation Links */}
//           <div
//             className={`collapse navbar-collapse ${nav ? 'show' : ''}`}
//             id="navbarSupportedContent"
//           >
//             <ul
//               className="navbar-nav mx-auto d-flex align-items-center mb-0"
//               style={{ gap: '14px' }}
//             >
//               <li className="nav-item">
//                 <NavLink to="/" className="nav-link navhover px-2">
//                   Home
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink to="/about" className="nav-link navhover px-2">
//                   Team
//                 </NavLink>
//               </li>
//               <li className="nav-item position-relative">
//                 <NavLink
//                   to="/services"
//                   className="nav-link navhover px-2"
//                   onClick={() => setValue(true)}
//                 >
//                   Services
//                 </NavLink>
//                 <div className="drop">
//                   <NavLink to="/services" className="nav-link navhover">
//                     All Services
//                   </NavLink>
//                   <NavLink to="/development" className="nav-link navhover">
//                     Custom Software Development
//                   </NavLink>
//                   <NavLink to="/testing" className="nav-link navhover">
//                     SaaS Product Development
//                   </NavLink>
//                   <NavLink to="/webdevelopment" className="nav-link navhover">
//                     AI & ML Engineering
//                   </NavLink>
//                   <NavLink to="/digitalmarketing" className="nav-link navhover">
//                     DevOps & Cloud Engineering
//                   </NavLink>
//                   <NavLink to="/micro-services" className="nav-link navhover">
//                     Microservices Architecture
//                   </NavLink>
//                 </div>
//               </li>
//               <li className="nav-item">
//                 <NavLink to="/ourworks" className="nav-link navhover px-2">
//                   Our works
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink to="/contact" className="nav-link navhover px-2">
//                   Contact
//                 </NavLink>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;

import React, { useState, useEffect, useContext } from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/image.png';
import '../assets/css/hamburgers/hamburgers.scss';
import { userContext } from '../store/Store';

function Navbar() {
  const [fixed, setFixed] = useState('');
  const [nav, setNav] = useState(false);
  const [value, setValue] = useContext(userContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleOutsideClick = (event) => {
    const navbar = document.getElementById('navbarSupportedContent');
    if (navbar && !navbar.contains(event.target) && navbar.classList.contains('show')) {
      navbar.classList.remove('show');
      setNav(false);
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 100 && window.scrollY < 800) {
      setFixed('fixed-1');
    } else if (window.scrollY >= 800) {
      setFixed('fixed-1 fixed-2');
    } else {
      setFixed('');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleOutsideClick);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    setNav(false);
  }, [location]);

  return (
    <div>
      {/* Upper Bar with Large Logo */}
      <div
        className="d-none d-lg-flex justify-content-between align-items-center border-bottom px-3"
        style={{ height: '140px' }}
      >
        <div className="d-flex align-items-center">
          <Link to="/" className="navbar-brand m-0 p-0">
            <img
              src={logo}
              alt="Logo"
              style={{
                height: '150px',
                objectFit: 'contain',
              }}
            />
          </Link>
        </div>

        <div className="text-center">
          <p
            style={{
              fontSize: '70px',
              fontWeight: '900',
              color: '#1f4051',
              margin: 0,
              letterSpacing: '2px',
            }}
          >
            Devnivo
          </p>
        </div>

        <div style={{ width: '90px' }} /> {/* Spacer */}
      </div>

      {/* Main Navigation */}
      <nav
        className={`navbar navbar-expand-lg bg-body-tertiary px-2 ${fixed}`}
        style={{
          minHeight: '45px',
          zIndex: 1000,
          position: 'relative',
        }}
      >
        <div className="container-fluid px-0">
          {/* Mobile Header */}
          <div
            className="d-lg-none d-flex justify-content-between align-items-center w-100"
            style={{ height: '55px' }}
          >
            <Link to="/" className="navbar-brand m-0 p-0">
              <img src={logo} alt="Mobile Logo" style={{ height: '70px' }} />
            </Link>
            <h4 className="text-size-lg fw-bold" onClick={() => navigate('/')}>
              Devnivo
            </h4>
            <button
              className={`navbar-toggler border-0 hamburger hamburger--spring-r ${nav ? 'is-active' : ''}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded={nav ? 'true' : 'false'}
              aria-label="Toggle navigation"
              onClick={() => setNav(!nav)}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>

          {/* Navigation Links */}
          <div
            className={`collapse navbar-collapse ${nav ? 'show' : ''}`}
            id="navbarSupportedContent"
            style={{
              position: 'relative',
              zIndex: 1,
            }}
          >
            <ul
              className="navbar-nav mx-auto d-flex align-items-center mb-0"
              style={{ gap: '14px' }}
            >
              <li className="nav-item">
                <NavLink to="/" className="nav-link navhover px-2">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link navhover px-2">
                  Team
                </NavLink>
              </li>
              <li className="nav-item position-relative">
                <NavLink
                  to="/services"
                  className="nav-link navhover px-2"
                  onClick={() => setValue(true)}
                >
                  Services
                </NavLink>
                <div className="drop">
                  <NavLink to="/services" className="nav-link navhover">
                    All Services
                  </NavLink>
                  <NavLink to="/development" className="nav-link navhover">
                    Custom Software Development
                  </NavLink>
                  <NavLink to="/testing" className="nav-link navhover">
                    SaaS Product Development
                  </NavLink>
                  <NavLink to="/webdevelopment" className="nav-link navhover">
                    AI & ML Engineering
                  </NavLink>
                  <NavLink to="/digitalmarketing" className="nav-link navhover">
                    DevOps & Cloud Engineering
                  </NavLink>
                  <NavLink to="/micro-services" className="nav-link navhover">
                    Microservices Architecture
                  </NavLink>
                </div>
              </li>
              <li className="nav-item">
                <NavLink to="/ourworks" className="nav-link navhover px-2">
                  Our works
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link navhover px-2">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
