
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import styles from '../../styles/style'
import EventCard from "./EventCard";

const Events = () => {
  const {allEvents,isLoading} = useSelector((state) => state.events);  
   console.log(allEvents);

  
  return (
    <div>
     {
      !isLoading && (
        <div className={`${styles.section}`}>
      <div className={`${styles.heading}`}>
        <h1>Popular Events</h1>
      </div>
      <div className="w-full grid">
  {allEvents && allEvents.length > 0 ? (
    <EventCard data={allEvents[allEvents.length - 1]} />
  ) : (
    <h4>No Events have!</h4>
  )}
</div>
      {/* <div className="w-full grid">
         {
          allEvents.length !== 0 && (
            <EventCard data={allEvents && allEvents[5]} />
          )
         }
         <h4>{
           allEvents?.length === 0 && (
            'No Events have!'
           )
          }

         </h4>
      </div> */}
     
    </div>
      )
     }
  </div>
  )
}

export default Events

















// import React, { useEffect } from 'react'
// import styles from '../../styles/style'
// import EventCard from "./EventCard"
// import { useSelector } from 'react-redux'
// const Events = () => {
  
//   const {allEvents} = useSelector((state) => state.events);  
//   return (
//     <div>
    
//     <div className={`${styles.section}`}>
//       <div className={`${styles.heading}`}>
//         <h1>Best Events</h1>
//       </div>

      
//       <div className="w-full grid">
//           {allEvents && allEvents.length !== 0 ? (
//             <EventCard data={allEvents[0]} />
//           ) : (
//             <h4>No Events available!</h4>
//           )}
//         </div>
//       {/* <div className="w-full grid">
//          {
//           allEvents.length !== 0 && (
//             <EventCard data={allEvents && allEvents[0]} />
//           )
//          }
//          <h4>{
//            allEvents?.length === 0 && (
//             'No Events have!'
//            )
//           }

//          </h4>
//       </div> */}
     
//     </div>

//           {/* <div className={`${styles.section}`}>
//         <div className={`${styles.heading}`}>
//           <h1>Popular Events</h1>
//         </div>
//         <div className='w-full grid '>
//             <EventCard />
//         </div>
//       </div> */}
     
//     </div>
//   )
// }

// export default Events
