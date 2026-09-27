import React from "react";
import styles from "../../../styles/style";
import { livreData } from "../../../static/data";
import LivreCard from "../LivreCard/LivreCard";
import { useSelector } from "react-redux";

const FeaturedBook = () => {
  const {allBooks} = useSelector((state)=> state.book);
  return (
    <div>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1>Featured Books  </h1>
        </div>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
          {allBooks &&
            allBooks.map((i, index) => <LivreCard data={i} key={index} />)}
        </div>
      </div>
    </div>
  );
};

export default FeaturedBook;




// import React from "react";
// import styles from "../../../styles/style";

// import LivreCard from "../LivreCard/LivreCard";
// import { useSelector } from "react-redux";

// const FeaturedBook = () => {
//   const{book} = useSelector((state) =>state.book);
//   return (
//     <div>
//       <div className={`${styles.section}`}>
//         <div className={`${styles.heading}`}>
//           <h1>Featured Books hgg</h1>
//         </div>
//         <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
//           {book &&
//            book.map((i, index) => <LivreCard data={i} key={index} />)}
       
          
// </div> 
//       </div>
//     </div>
//   );
// };

// export default FeaturedBook;
