// import React from 'react'
// import boy from '../assets/reading (2).jpg'
// import { Link } from 'react-router-dom'
// import styles from '../styles/style'
// const HeroLibrariePage = () => {
//   return (
//     <div 
    
//     className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex} !bg-white`}>
//       <div className='max-w-[1480px]   m-auto grid grid-cols-2'>
//         <div className=''>
//         <p className='py-2 text-2xl text-[#eda674] font-medium '>Improve your theory of mind.</p>
//         <h1 className='md:text-6xl text-5xl font-semibold '>today a reader Tomorrow LEADER.</h1>
//         <p className='py-2 text-lg text-gray-500 '>Live _ Read _ Enjoy</p>
//         <Link to="/livres" className="inline-block">
//             <div className={`${styles.button} mt-5`}>
//                  <span className="text-[#fff] font-[Poppins] text-[18px]">
//                     Discover Now
//                  </span>
//             </div>
//         </Link>
//         </div>
//         <div className=''>
          
//         <img src={boy} alt=""
//         className='m-[60px] h-[50vh] w-[30vh]'
//         />

//         </div>

//       </div>
//     </div>
//   )
// }








// import React from 'react';
// import boy from '../assets/reading (2).jpg';
// import { Link } from 'react-router-dom';
// import styles from '../styles/style';

// const HeroLibrariePage = () => {
//   return (
//     <div className={`relative min-h-[50vh] 600px:min-h-[60vh] w-full bg-no-repeat ${styles.noramlFlex} !bg-white`}>
//       <div className='max-w-[900px] m-auto flex items-center justify-between'>
//         {/* Description */}
//         <div className='w-[40%]'>
//           <p className='py-2 text-2xl text-[#eda674] font-medium'>Improve your theory of mind.</p>
//           <h1 className='md:text-4xl text-3xl font-semibold'>Today a reader, Tomorrow a leader.</h1>
//           <p className='py-2 text-lg text-gray-500'>Live _ Read _ Enjoy</p>
//           <Link to="/livres" className="inline-block">
//             <div className={`${styles.button} mt-5`}>
//               <span className="text-[#fff] font-[Poppins] text-[18px]">
//                 Discover Now
//               </span>
//             </div>
//           </Link>
//         </div>
//         {/* Image */}
//         <div className="rounded-full bg-gray-300 w-[60%] h-[60%] absolute " />
//         <div className='w-[40%] h-[50%] relative'>
//           <img src={boy} alt="" className='h-full w-full object-cover rounded-xl z-10' />
          
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HeroLibrariePage;











import React from 'react';
import boy from '../assets/homepage/honeshop.jpg';
import { Link } from 'react-router-dom';
import styles from '../styles/style';

const HeroLibrariePage = () => {
  return (
    <div className={`relative min-h-[50vh] 600px:min-h-[60vh] w-full bg-no-repeat ${styles.noramlFlex} !bg-white`}>
      <div className='max-w-[900px] m-auto flex items-center justify-between'>
       
        <div className='w-[40%]'>
          <p className='py-2 text-2xl text-[#eda674] font-medium'>Improve your theory of mind.</p>
          <h1 className='md:text-4xl text-3xl font-semibold'>Today a reader, Tomorrow a leader.</h1>
          <p className='py-2 text-lg text-gray-500'>Live _ Read _ Enjoy</p>
          <Link to="/livres" className="inline-block">
            <div className={`${styles.button} mt-5`}>
              <span className="text-[#fff] font-[Poppins] text-[18px]">
                Discover Now
              </span>
            </div>
          </Link>
        </div>
        {/* Image */}
        <br/> 
        <div className='w-[40%] h-[50%]'>
          <img src={boy} alt="" className='h-full w-full object-cover rounded-xl ' />
        </div>
      </div>
    </div>
  );
}

export default HeroLibrariePage;







// cerculaire
// import React from 'react';
// import boy from '../assets/reading (2).jpg';
// import { Link } from 'react-router-dom';
// import styles from '../styles/style';

// const HeroLibrariePage = () => {
//   return (
//     <div className={`relative min-h-[50vh] 600px:min-h-[60vh] w-full bg-no-repeat ${styles.noramlFlex} !bg-white`}>
//       <div className='max-w-[900px] m-auto flex items-center justify-between'>
//         <div className='w-[40%]'>
//           <p className='py-2 text-2xl text-[#eda674] font-medium'>Improve your theory of mind.</p>
//           <h1 className='md:text-4xl text-3xl font-semibold'>Today a reader, Tomorrow a leader.</h1>
//           <p className='py-2 text-lg text-gray-500'>Live _ Read _ Enjoy</p>
//           <Link to="/livres" className="inline-block">
//             <div className={`${styles.button} mt-5`}>
//               <span className="text-[#fff] font-[Poppins] text-[18px]">
//                 Discover Now
//               </span>
//             </div>
//           </Link>
//         </div>
//         {/* Images circulaires */}
//         <div className='w-[40%] h-[50%] flex justify-between items-center'>
//           {/* Image 1 */}
//           <div className='w-20 h-20 rounded-full overflow-hidden'>
//             <img src={boy} alt="" className='h-full w-full object-cover rounded-full' />
//           </div>
//           {/* Image 2 */}
//           <div className='w-24 h-24 rounded-full overflow-hidden'>
//             <img src={boy} alt="" className='h-full w-full object-cover rounded-full' />
//           </div>
//           {/* Image 3 */}
//           <div className='w-28 h-28 rounded-full overflow-hidden'>
//             <img src={boy} alt="" className='h-full w-full object-cover rounded-full' />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HeroLibrariePage;
