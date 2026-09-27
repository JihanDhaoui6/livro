// import React, { useEffect, useState } from 'react'
// import { livreData } from '../../static/data';
// import styles from '../../styles/style';
// import LivreCard from '../Route/LivreCard/LivreCard';
// import { useSelector } from 'react-redux';

// const SuggestedBook = ({data}) => {
//     // const [books, setBooks] = useState(null);
//     const [dta, setDta] = useState([{}])
   
//     useEffect(()=>{
//         fetch("/books").then(
//             res => res.json()
//         ).then(
//             data =>{
//                 setDta(data)
//                 console.log(dta);
//             }
//         )
//     },[])



// const {allBooks} = useSelector((state) =>state.book)
// const[bookData, setBookData] = useState();

//     useEffect(() =>{
//         const d = allBooks && allBooks.filter((i) =>i.category === data.category)
//         setBookData(d)
//     },[])
//   return (
    
//     <div>
       
//         {
//             data ?(
//                 <div className={`p-4 ${styles.section}`}>
//                 <h2    className={`${styles.heading} text-[25px] font-[500] border-b mb-5`}>
//                         Related Books
//                     </h2>
//                     <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
//              {
//                         bookData && bookData.map((i, index) =>(
//                             <LivreCard data={i} key={index} />
//                         ))
//                     }
//                     </div>
//                 </div>
//             ):null
//         }
       
//     </div>
//   )
// }

// export default SuggestedBook;





// SuggestedBook.jsx
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchRecommendations } from '../../redux/actions/bookReducer';

// const SuggestedBook = () => {
//   const [bookTitle, setBookTitle] = useState('');
//   const dispatch = useDispatch();
//   const recommender = useSelector((state) => state.recommender);
//   const error = useSelector((state) => state.error);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     dispatch(fetchRecommendations(bookTitle));
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={bookTitle} onChange={(e) => setBookTitle(e.target.value)} />
//         <button type="submit">Get Recommendations</button>
//       </form>
//       {error && <div>There was an error fetching the recommendations!</div>}
//       <div>
//         <h2>Recommendations:</h2>
//         <ul>
//           {recommender.map((book, index) => (
//             <li key={index}>{book}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default SuggestedBook;




// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [bookTitle, setBookTitle] = useState('');
//   const [recommendations, setRecommendations] = useState([]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/api/v1/recommended-books', { bookTitle });
//       setRecommendations(response.data.recommendedBooks);
//     } catch (error) {
//       console.error("There was an error fetching the recommendations!", error);
//     }
//   };

//   return (
//     <div>
//       <h1>Book Recommendation System</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Book Title:
//           <input type="text" value={bookTitle} onChange={(e) => setBookTitle(e.target.value)} />
//         </label>
//         <button type="submit">Get Recommendations</button>
//       </form>
//       {recommendations.length > 0 && (
//         <div>
//           <h2>Recommendations:</h2>
//           <ul>
//             {recommendations.map((rec, index) => (
//               <li key={index}>{rec}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [bookTitle, setBookTitle] = useState('');
//   const [recommendations, setRecommendations] = useState([]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/v1/recommended-books', { bookTitle });
//       setRecommendations(response.data.recommendedBooks);
//     } catch (error) {
//       console.error("There was an error fetching the recommendations!", error);
//     }
//   };

//   return (
//     <div>
//       <h1>Book Recommendation System</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Book Title:
//           <input type="text" value={bookTitle} onChange={(e) => setBookTitle(e.target.value)} />
//         </label>
//         <button type="submit">Get Recommendations</button>
//       </form>
//       {recommendations.length > 0 && (
//         <div>
//           <h2>Recommendations:</h2>
//           <ul>
//             {recommendations.map((rec, index) => (
//               <li key={index}>{rec}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }





// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [bookTitle, setBookTitle] = useState('');
//   const [recommendations, setRecommendations] = useState([]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/v1/recommended-books', { bookTitle });
//       setRecommendations(response.data.recommendedBooks);
//     } catch (error) {
//       console.error("There was an error fetching the recommendations!", error);
//     }
//   };

//   return (
//     <div>
//       <h1>Book Recommendation System</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Book Title:
//           <input type="text" value={bookTitle} onChange={(e) => setBookTitle(e.target.value)} />
//         </label>
//         <button type="submit">Get Recommendations</button>
//       </form>
//       {recommendations.length > 0 && (
//         <div>
//           <h2>Recommendations:</h2>
//           <ul>
//             {recommendations.map((rec, index) => (
//               <li key={index}>{rec}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;





















import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from '../../styles/style';
import LivreCard from '../Route/LivreCard/LivreCard';

const SuggestedBook = ({ data }) => {
    const { allBooks } = useSelector((state) => state.book);
    const [bookData, setBookData] = useState([]);

    useEffect(() => {
        if (allBooks && allBooks.length > 0) {
            const filteredBooks = allBooks.filter((book) => book.category === data.category && book._id !== data._id);
            setBookData(filteredBooks);
        }
    }, [allBooks, data]);

    return (
        <div>
            {data && (
                <div className={`p-4 ${styles.section}`}>
                    <h2 className={`${styles.heading} text-[25px] font-[500] border-b mb-5`}>
                        Recommended Books
                    </h2>
                    <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
                        {bookData.map((book, index) => (
                            <LivreCard data={book} key={index} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SuggestedBook;
