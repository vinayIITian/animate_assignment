import { useState, useEffect, useRef } from 'react'
import './App.css'

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [activeItem, setActiveItem] = useState('All');
  AOS.init();
  const imgs = [
    {
      id: 1,
      imgsrc: "https://emote.agency/wp-content/uploads/2024/02/Cover-5-1200x1016.png",
      imgtext: "Skipsolabs"
    },
    {
      id: 2,
      imgsrc: "https://emote.agency/wp-content/uploads/2024/02/Cover-3-1200x1016.png",
      imgtext: "Immplify"
    },
    {
      id: 3,
      imgsrc: "https://emote.agency/wp-content/uploads/2024/02/Cover-2-1200x1016.png",
      imgtext: "MetaPastry"
    },
    {
      id: 4,
      imgsrc: "https://emote.agency/wp-content/uploads/2024/02/Cover-5-1200x1016.png",
      imgtext: "Skipsolabs"
    },
    {
      id: 5,
      imgsrc: "https://emote.agency/wp-content/uploads/2024/02/Cover-3-1200x1016.png",
      imgtext: "Immplify"
    },
    {
      id: 6,
      imgsrc: "https://emote.agency/wp-content/uploads/2024/02/Cover-2-1200x1016.png",
      imgtext: "MetaPastry"
    },
    {
      id: 7,
      imgsrc: "https://emote.agency/wp-content/uploads/2024/02/Cover-5-1200x1016.png",
      imgtext: "Skipsolabs",
    },
    {
      id: 8,
      imgsrc: "https://emote.agency/wp-content/uploads/2024/02/Cover-3-1200x1016.png",
      imgtext: "Immplify"
    },
    {
      id: 9,
      imgsrc: "https://emote.agency/wp-content/uploads/2024/02/Cover-2-1200x1016.png",
      imgtext: "MetaPastry"
    },
    {
      id: 10,
      imgsrc: "https://emote.agency/wp-content/uploads/2024/02/Cover-3-1200x1016.png",
      imgtext: "Skipsolabs"
    },
    {
      id: 11,
      imgsrc: "https://emote.agency/wp-content/uploads/2024/02/Cover-2-1200x1016.png",
      imgtext: "Immplify"
    }
  ]

  const navigationItems = [
    { id: 1, label: 'All', count: 11 },
    { id: 2, label: 'Web Design', count: 5 },
    { id: 3, label: 'Mobile App', count: 4 },
    { id: 4, label: 'Branding', count: 2 },
  ];

  const parentTopRef = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);
  const [hasRun, setHasRun] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const parentRect = parentTopRef.current.getBoundingClientRect();
      if (parentRect.top < 300 && !hasRun) {
        setHasRun(true);
      }
    };
    if (!hasRun) {
      document.addEventListener('scroll', handleScroll);
    }
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [hasRun]);

  return (
    <>
      <article className='w-[100vw]'>

        <div className='w-[100vw] h-[20rem] mlg:pl-40 pl-10 pt-56 '>

          <h1 className='text-rotate font-bold ssm:text-8xl text-5xl' style={{ padding: "0 20px" }}>
            Some of our finest work
          </h1>
        </div>

        <div className='mlg:pl-40 pl-10 ssm:pt-48 pt-12' data-aos="fade-left" data-aos-duration="1000">
          <nav className='list-none flex mlg:flex-row flex-col gap-x-12 text-2xl cursor-pointer'>
            {navigationItems.map(item => (
              <div key={item.id} className='flex mlg:flex-col  items-center gap-y-3'>
                <div className={`w-3 h-3 rounded-3xl bg-violet-800 transition-opacity duration-300 mlg:block hidden ${activeItem === item.label ? 'opacity-100' : 'opacity-0'}`}></div>
                <li className={`Li${item.id} text-stone-400 hover:text-slate-800 transition-colors duration-300 ${activeItem === item.label ? 'active' : ''}`} onClick={() => setActiveItem(item.label)}>{item.label}</li>
                <svg stroke="#000000" stroke-width="1" className={`hoverByLi${item.id} text-line transition-opacity duration-50 ${activeItem === item.label ? 'opacity-100 animate' : 'opacity-0'}`} width="80"><text x="50%" dominant-baseline="middle" text-anchor="middle" y="50%">{item.count}</text></svg>
              </div>
            ))}
          </nav>
        </div>
      </article>

      <div className='grid grid-cols-2 xs:grid-cols-1 md:grid-cols-2 gap-x-16 justify-items-center mt-20' style={{ padding: "0 10vw" }}>
        {imgs.map((img, index) => (
          <>
            <div key={img.id} className=' flex flex-col '>
              <div className={`mlg:w-[35vw] mlg:h-[25vw] w-[75vw] h-[53vw] overflow-hidden scalingDiv cursor-pointer ${index % 2 === 1 ? 'second-column' : ''}`}>
                <img src={img.imgsrc} alt={`Image ${img.id}`} className='scalingImage translateImg object-cover w-full h-full' />
              </div>
              <span className='w-[30%] pt-12 font-semibold text-2xl hover-text'>{img.imgtext}</span>
            </div>
          </>
        ))}
      </div>

      <div className='h-[100vh] flex items-center justify-center'>
        <button className='relative flex items-center justify-center font-semibold w-[11rem] h-[11rem] border-2 border-solid rounded-full cursor-pointer view-more-container hover:text-slate-400 transition-colors duration-300'>
          View More
          <div className='orbiting-circle'></div>
        </button>
      </div>

      <div ref={parentTopRef} className=' lg:min-h-[100vh] min-h-[60rem] flex flex-row justify-center items-center'>
        <div className="flex items-center lg:flex-row flex-col justify-center absolute">
          <div ref={div1Ref} className={` h-[21.072rem] w-[21.072rem] lg:h-[32rem] lg:w-[32rem] bg-[#1f1d1d] rounded-full relative font-medium lg:font-bold mix-blend-darken z-30 ${hasRun ? 'zoomIn' : 'scale0'} ${hasRun ? 'newCircle1Position ' : ' circle1Position'}`}>
            <span className={`w-[80%] relative text-3xl lg:text-5xl text-[#ffffff]  mix-blend-exclusion z-10 ${hasRun ? 'translateText1' : 'posi-Text1'}`} >Ready for magic?</span><br></br>
            <span className={`w-[80%] relative text-4xl lg:text-5xl text-[#ffffff]  mix-blend-exclusion z-10 ${hasRun ? 'translateText2' : 'posi-Text2'}`}>Drop us a line!</span>
          </div>
          <div ref={div2Ref} className={`h-[17rem] w-[17rem] lg:h-[25.375rem] lg:w-[25.375rem] bg-transparent border-[rgb(31,29,29)] border-solid border-[1px] rounded-full relative scale0 lg:left-[5%] lg:top-[0] top-[-11rem] z-2 ${hasRun ? 'zoomIn2 scale1' : 'scale0'}`}></div>
          <div ref={div3Ref} className={`h-[10.45rem] w-[10.45rem] lg:h-[15.625rem] lg:w-[16.125rem] bg-transparent border-[rgb(176,176,176)] border-solid border-2 rounded-full scale0 relative lg:left-[0%] lg:top-[0] top-[-15rem] ${hasRun ? 'zoomIn3 scale1' : 'scale0'}`}></div>
          <div ref={div4Ref} className={`h-[7.2rem] w-[7.2rem] lg:h-[11.1625rem] lg:w-[11.1625rem] bg-transparent border-brown border-solid border-2 rounded-full relative scale0 lg:left-[-6%] lg:top-[0] top-[-18rem] ${hasRun ? 'zoomIn4 scale1' : 'scale0'}`}></div>
        </div>
      </div>
    </>
  )
}

export default App
