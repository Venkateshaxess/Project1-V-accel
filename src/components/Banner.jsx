    // import React, { useEffect } from 'react';
    // import { Link, useLocation } from 'react-router-dom';


    // export default function Banner({ h1, h2, h3 }) {
    //     useEffect(() => {
    //         const banner = document.querySelector('.hero-banner')
    //         const handleScroll = () => {
    //             if(window.innerWidth >  992){
    //                 if (window.scrollY > 0 && window.scrollY < 500) {
    //                     banner.style.backgroundSize = `${100 + (window.scrollY/20)}%`
    //                 }
    //             }else{
    //                 if (window.scrollY > 0) {
    //                     banner.style.backgroundSize = `${150 + (window.scrollY/10)}%`
    //                 }
    //             }
    //         }

    //         window.addEventListener('scroll', handleScroll)
    //         return () => {
    //             window.removeEventListener('scroll', handleScroll)
    //         }
    //     }, [])
    //     const location = useLocation();
    //     const isContactPage = location.pathname === '/contact';

    //     return (
    //         <div className='hero-banner hero-2 mt-5' data-aos='fade'>
    //             <div className='container text-center green-text'>
    //                 <p className="bg-img-2 mb-5 mx-auto" data-aos='fade-up' data-aos-duration='400'>{h1}</p>
    //                 <h1 className={`secondary-header mb-3 ${isContactPage?'mb-5 pb-5':''}`} data-aos='fade-up' data-aos-duration='600'>{h2}</h1>
    //                 <p className='mb-0 secondary-text mb-3' data-aos='fade-up' data-aos-duration='700'>{h3}</p>
    //                 {/* {isContactPage ? null : (
    //                     <Link to={"/contact"} className='text-decoration-none'>
    //                         <button className='gold-btn green-btn m-5 mx-auto' data-aos='zoom-out' data-aos-duration='600'>
    //                             <span className='d-block'>Connect with us</span> <i className="bi bi-arrow-right"></i>
    //                         </button>
    //                     </Link>
    //                 )} */}
    //             </div>
    //         </div>
    //     );
    // }

    import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Banner() {
  useEffect(() => {
    const banner = document.querySelector('.hero-banner');
    const handleScroll = () => {
      if (window.innerWidth > 992) {
        if (window.scrollY > 0 && window.scrollY < 500) {
          banner.style.backgroundSize = `${100 + window.scrollY / 20}%`;
        }
      } else {
        if (window.scrollY > 0) {
          banner.style.backgroundSize = `${150 + window.scrollY / 10}%`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
    <div className="hero-banner hero-2 mt-5" data-aos="fade">
       <div className='container text-center green-text'>
                     <p className="bg-img-2 mb-3 mx-auto" data-aos='fade-up' data-aos-duration='400'>Industries

</p>
                     <h1 className={`secondary-header mb-5`} data-aos='fade-up' data-aos-duration='600'>Transforming Industries to Become Smarter and Safer</h1>
                     {/* <p className='mb-0 secondary-text mb-3' data-aos='fade-up' data-aos-duration='700'>{h3}</p> */}
                         {/* <Link to={"/contact"} className='text-decoration-none'>
                             <button className='gold-btn green-btn m-5 mx-auto' data-aos='zoom-out' data-aos-duration='600'>s
                                 <span className='d-block'>Connect with us</span> <i className="bi bi-arrow-right"></i>
                             </button>
                         </Link> */}
                 </div>
    </div>
     <div className="bg-green-1 text-white p-1">
                <div className="container">
                      <div className="row align-items-center g-5 py-5">
                        <div className="col-md-4">
                            <p className='bg-img-2' data-aos = 'fade-up'>Industries</p>
                            <h1 className='secondary-header' data-aos='fade-up'>Transforming Industries to Become Smarter and Safer</h1>
                            <p className='secondary-text' data-aos='fade-up' data-aos-duration='600'>At Devnio, We Tackle Some of the World's Biggest Challenges by Building Great Digital Products.</p>
                        </div>
                        <div className="col-md-8 text-white">
                            <div className="row gy-3">
                                <div className="col-6 col-md-5 col-lg-3">
                                    <div className="industries-card" data-aos='zoom-out'>
                                    <i className="bi bi-bank2 fs-3" style={{"color":"#b5c6c4"}}></i>
                                        {/* <img src={fintech} className='mb-2' alt="https://maticz.com/assets/images/home/fintech.webp" /> */}
                                        <p className='secondary-text mb-0'>Fintech</p>
                                    </div>
                                </div>
                                <div className="col-6 col-md-5 col-lg-3">
                                    <div className="industries-card" data-aos='zoom-out' data-aos-duration='500'>
                                    <i className="bi bi-lungs-fill fs-3" style={{"color":"#b5c6c4"}}></i>
                                        {/* <img src={healthcare} className='mb-2' alt="https://maticz.com/assets/images/home/healthcare.webp" /> */}
                                        <p className='secondary-text mb-0'>HealthCare</p>
                                    </div>
                                </div>
                                <div className="col-6 col-md-5 col-lg-3">
                                    <div className="industries-card" data-aos='zoom-out' data-aos-duration='500'>
                                    <i className="bi bi-backpack3 fs-3" style={{"color":"#b5c6c4"}}></i>
                                        {/* <img src={education} className='mb-2' alt="https://maticz.com/assets/images/home/graduation-cap.webp" /> */}
                                        <p className='secondary-text mb-0'>Education</p>
                                    </div>
                                </div>
                                <div className="col-6 col-md-5 col-lg-3">
                                    <div className="industries-card" data-aos='zoom-out' data-aos-duration='500'>
                                    <i className="bi bi-cash-coin fs-3" style={{"color":"#b5c6c4"}}></i>
                                        {/* <img src={insurance} className='mb-2' alt="https://maticz.com/assets/images/home/life-insurance.webp" /> */}
                                        <p className='secondary-text mb-0'>Insurance</p>
                                    </div>
                                </div>
                                <div className="col-6 col-md-5 col-lg-3">
                                    <div className="industries-card" data-aos='zoom-out' data-aos-duration='500'>
                                    <i className="bi bi-shop fs-3" style={{"color":"#b5c6c4"}}></i>
                                        {/* <img src={restaurant} className='mb-2' alt="https://maticz.com/assets/images/home/fintech.webp" /> */}
                                        <p className='secondary-text mb-0'>Restaurant</p>
                                    </div>
                                </div>
                                <div className="col-6 col-md-5 col-lg-3">
                                    <div className="industries-card" data-aos='zoom-out' data-aos-duration='500'>
                                    <i className="bi bi-cart-plus fs-3" style={{"color":"#b5c6c4"}}></i>
                                        {/* <img src={shopping} className='mb-2' alt="https://maticz.com/assets/images/home/shopping.webp" /> */}
                                        <p className='secondary-text mb-0'>Shopping</p>
                                    </div>
                                </div>
                                <div className="col-6 col-md-5 col-lg-3">
                                    <div className="industries-card" data-aos='zoom-out' data-aos-duration='500'>
                                    <i className="bi bi-building-fill-gear fs-3" style={{"color":"#b5c6c4"}}></i>
                                        {/* <img src={manufacture} className='mb-2' alt="https://maticz.com/assets/images/home/manufacture.webp" /> */}
                                        <p className='secondary-text mb-0'>Manufacturing</p>
                                    </div>
                                </div>
                                <div className="col-6 col-md-5 col-lg-3">
                                    <div className="industries-card" data-aos='zoom-out' data-aos-duration='500'>
                                    <i className="bi bi-gear-wide-connected fs-3" style={{"color":"#b5c6c4"}}></i>
                                       
                                        {/* <img src={supplychain} className='mb-2' alt="https://maticz.com/assets/images/home/supply-chain.webp" /> */}
                                        <p className='secondary-text mb-0'>Supply Chain</p>
                                    </div>
                                </div>
                                <div className="col-6 col-md-5 col-lg-3">
                                    <div className="industries-card" data-aos='zoom-out' data-aos-duration='500'>
                                    <i className="bi bi-truck fs-3" style={{"color":"#b5c6c4"}}></i>
                                        {/* <img src={logistics} className='mb-2' alt="https://maticz.com/assets/images/home/logistics.webp" /> */}
                                        <p className='secondary-text mb-0'>Logistics</p>
                                    </div>
                                </div>
                                <div className="col-6 col-md-5 col-lg-3">
                                    <div className="industries-card" data-aos='zoom-out' data-aos-duration='500'>
                                    <i className="bi bi-dice-5 fs-3" style={{"color":"#b5c6c4"}}></i>
                                        {/* <img src={entertaining} className='mb-2' alt="https://maticz.com/assets/images/home/entertaining.webp" /> */}
                                        <p className='secondary-text mb-0'>Entertainment</p>
                                    </div>
                                </div>
                                <div className="col-6 col-md-5 col-lg-3">
                                    <div className="industries-card" data-aos='zoom-out' data-aos-duration='500'>
                                    <i className="bi bi-buildings fs-3" style={{"color":"#b5c6c4"}}></i>
                                        {/* <img src={realestate} className='mb-2' alt="https://maticz.com/assets/images/home/real-estate.webp" /> */}
                                        <p className='secondary-text mb-0'>Real Estate</p>
                                    </div>
                                </div>
                                <div className="col-6 col-md-5 col-lg-3">
                                    <div className="industries-card" data-aos='zoom-out' data-aos-duration='500'>
                                    <i className="bi bi-hand-thumbs-up fs-3" style={{"color":"#b5c6c4"}}></i>
                                        {/* <img src={socialmedia} className='mb-2' alt="https://maticz.com/assets/images/home/social-media.webp" /> */}
                                        <p className='secondary-text mb-0'>Social Networking</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  );
}

// const industriesList = [
//   { name: 'Fintech', icon: 'bi-bank2' },
//   { name: 'HealthCare', icon: 'bi-lungs-fill' },
//   { name: 'Education', icon: 'bi-backpack3' },
//   { name: 'Insurance', icon: 'bi-cash-coin' },
//   { name: 'Restaurant', icon: 'bi-shop' },
//   { name: 'Shopping', icon: 'bi-cart-plus' },
//   { name: 'Manufacturing', icon: 'bi-building-fill-gear' },
//   { name: 'Supply Chain', icon: 'bi-gear-wide-connected' },
//   { name: 'Logistics', icon: 'bi-truck' },
//   { name: 'Entertainment', icon: 'bi-dice-5' },
//   { name: 'Real Estate', icon: 'bi-buildings' },
//   { name: 'Social Networking', icon: 'bi-hand-thumbs-up' },
// ];

