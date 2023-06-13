import React, { useState } from 'react';
import '../App.css';
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger';

const RealiseProject = () => {
    const [counterOn, setCounterOn] = useState(false);

  return (
    <div className='RealiseProject  d-flex container mt-5'>
       <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
            <div className='main-info  text-center '>
                <h2 className='mt-3'><b>Realised Project<span className='green'>.</span></b></h2>
                <h6 className='mt-3 mb-5'>After subscribing you will recieved automatically all news about our features.</h6>
                <div className='countUp row row-cols-1 row-cols-sm-2 row-cols-md-4'>
                    <div class="my-2">
                        <h1 style={{color:'#01a124',}}>
                            {counterOn && <CountUp start={0} end={15} duration={2} delay={0} />}
                            +
                        </h1>
                        <h6>Years of Experience</h6>
                    </div>
                    <div class="my-2">
                        <h1 style={{color:'#01a124',}}>
                            {counterOn && <CountUp start={0} end={70} duration={2} delay={0} />}
                            +
                        </h1>
                        <h6>Farms</h6>
                    </div>
                    <div class="my-2">
                        <h1 style={{color:'#01a124',}}>
                            {counterOn && <CountUp start={0} end={500} duration={2} delay={0} />}
                            +
                        </h1>
                        <h6>Intrants</h6>
                    </div>
                    <div class="my-2">
                        <h1 style={{color:'#01a124',}}>
                            {counterOn && <CountUp start={0} end={25} duration={2} delay={0} />}
                        </h1>
                        <h6>Trusted company</h6>
                    </div>
                </div>                
            </div>
       </ScrollTrigger>
    </div>
  )
}

export default RealiseProject;