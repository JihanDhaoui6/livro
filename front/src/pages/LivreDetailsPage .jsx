import React, { useEffect, useState } from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import LivreDetails from '../components/Book/LivreDetails';
import { useParams, useSearchParams } from 'react-router-dom';
import SuggestedBook from '../components/Book/SuggestedBook';
import { useSelector } from 'react-redux';


const LivreDetailsPage = () => {
  
  const { allBooks } = useSelector((state) => state.book);
  const { id } = useParams();
  const {allEvents} = useSelector((state) => state.events);  

  const [searchParams] = useSearchParams();

  const eventData = searchParams.get("isEvent");

  const [data, setData] = useState(null);
 


  useEffect(() => {
    if(eventData !== null){
const data = allEvents && allEvents.find((i) => i._id === id);
setData(data);
    }else{
  const data = allBooks && allBooks.find((i) => i._id === id);
  setData(data);
    }
  //  /const data = allBooks && allBooks.find((i) => i._id === id);
  
  }, [allBooks, allEvents]);

 

  return (
    <div>
      <Header />
      <LivreDetails data={data} />
      {/* {
        data && <SuggestedBook data={data}/>
      } */}
       {
        !eventData && (
          <>
          {data && <SuggestedBook data={data}/>}
          </>
        )
      } 
      <Footer />
    </div>
  );
};


export default LivreDetailsPage;











// import React, { useEffect, useState } from 'react';
// import Header from '../components/Layout/Header';
// import Footer from '../components/Layout/Footer';
// import LivreDetails from '../components/Book/LivreDetails';
// import { useParams } from 'react-router-dom';
// import { livreData } from '../static/data';
// import SuggestedBook from '../components/Book/SuggestedBook';
// import { useSelector } from 'react-redux';


// const LivreDetailsPage = () => {
//   const {allBooks} =useSelector((stata)=>state.book);
//   const { name } = useParams();
//   const [data, setData] = useState(null);
//   const livreName = name.replace(/-/g," ");
// console.log(name);
//   useEffect(() => {
//     const bookData = livreData.find((i) => i.name === livreName);
//     setData(bookData);
//   }, [livreName]);

 

//   return (
//     <div>
//       <Header />
//       <LivreDetails data={data} />
//       {
//         data && <SuggestedBook data={data}/>
//       }
//       <Footer />
//     </div>
//   );
// };


// export default LivreDetailsPage;










// import React, { useEffect, useState } from 'react';
// import Header from '../components/Layout/Header';
// import Footer from '../components/Layout/Footer';
// import LivreDetails from '../components/Book/LivreDetails';
// import { useParams } from 'react-router-dom';
// import { livreData } from '../static/data';
// import SuggestedBook from '../components/Book/SuggestedBook';
// import { useSelector } from 'react-redux';


// const LivreDetailsPage = () => {
//   const { allBooks } = useSelector((state) => state.book);


//   const { name } = useParams();
//   const [data, setData] = useState(null);
//   const livreName = name.replace(/-/g," ");


//   useEffect(() => {
//     const data = allBooks.find((i) => allBooks.name === livreName);
//     setData(data);
//   }, []);

 

//   return (
//     <div>
//       <Header />
//       <LivreDetails data={data} />
//       {
//         data && <SuggestedBook data={data}/>
//       }
//       <Footer />
//     </div>
//   );
// };


// export default LivreDetailsPage;










// // import React, { useEffect, useState } from 'react';
// // import Header from '../components/Layout/Header';
// // import Footer from '../components/Layout/Footer';
// // import LivreDetails from '../components/Book/LivreDetails';
// // import { useParams } from 'react-router-dom';
// // import { livreData } from '../static/data';
// // import SuggestedBook from '../components/Book/SuggestedBook';
// // import { useSelector } from 'react-redux';


// // const LivreDetailsPage = () => {
// //   const {allBooks} =useSelector((stata)=>state.book);
// //   const { name } = useParams();
// //   const [data, setData] = useState(null);
// //   const livreName = name.replace(/-/g," ");
// // console.log(name);
// //   useEffect(() => {
// //     const bookData = livreData.find((i) => i.name === livreName);
// //     setData(bookData);
// //   }, [livreName]);

 

// //   return (
// //     <div>
// //       <Header />
// //       <LivreDetails data={data} />
// //       {
// //         data && <SuggestedBook data={data}/>
// //       }
// //       <Footer />
// //     </div>
// //   );
// // };


// // export default LivreDetailsPage;

