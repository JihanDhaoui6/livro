// import React from 'react'
// import Header from '../components/Layout/Header'
// import EventCard from '../components/Events/EventCard'
// import { useSelector } from 'react-redux';

// const AboutPage = () => {
//   const { allEvents } = useSelector((state) => state.events);
//   return (
//     <div>
//       <Header activation={2} />
//       <h1 className='w-full lg:[w-50%] flex flex-col justify-center items-center mt-4 text-[30px] font-Roboto text-[#7ddd6c]'>best promotion you can find</h1>
//       <div className='w-full grid'>
//       <EventCard active={true} data={allEvents && allEvents[0]}/>
//       </div>
//     </div>
//   )
// }

// export default AboutPage

import React from 'react';
import Header from '../components/Layout/Header';
import EventCard from '../components/Events/EventCard';
import { useSelector } from 'react-redux';

const AboutPage = () => {
  const { allEvents } = useSelector((state) => state.events);

  return (
    <div>
      <Header activation={2} />
      <h1 className='w-full lg:w-1/2 flex flex-col justify-center items-center mt-4 text-3xl font-Roboto text-green-500'>
        Best promotions you can find
      </h1>
      <div className='w-full mt-4'>
        {allEvents && allEvents.length > 0 ? (
          allEvents.map((event, index) => (
            <div key={index} className="mb-4">
              <EventCard active={true} data={event} />
            </div>
          ))
        ) : (
          <h4 className="text-center">No Events available!</h4>
        )}
      </div>
    </div>
  );
};

export default AboutPage;

