// import React from 'react'
// import styles from '../../styles/style'
// import LibrarieInfo from "../../components/Library/LibraryInfo";
// import LibrarieProfileData from "../../components/Library/LibrarieProfilData";

// const ShopPreviewPage = () => {
//   return (
//     <div className={`${styles.section} bg-[#f5f5f5]`}>
//          <div className="w-full 800px:flex py-10 justify-between">
//           <div className="800px:w-[25%] bg-[#fff] rounded-[4px] shadow-sm 800px:overflow-y-scroll 800px:h-[90vh] 800px:sticky top-10 left-0 z-10">
//             <LibrarieInfo isOwner={false} />
//           </div>
//           <div className="800px:w-[72%] mt-5 800px:mt-['unset'] rounded-[4px]">
//             <LibrarieProfileData isOwner={false} />
//           </div>
//          </div>
//     </div>
//   )
// }

// export default ShopPreviewPage


import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from '../../styles/style';
import LibrarieInfo from '../../components/Library/LibraryInfo';
import LibrarieProfileData from '../../components/Library/LibrarieProfilData';

const ShopPreviewPage = () => {
  const { role } = useSelector((state) => state.user);

 

  return (
    <div className={`${styles.section} bg-[#f5f5f5]`}>
      <div className="w-full 800px:flex py-10 justify-between">
        <div className="800px:w-[25%] bg-[#fff] rounded-[4px] shadow-sm 800px:overflow-y-scroll 800px:h-[90vh] 800px:sticky top-10 left-0 z-10">
          <LibrarieInfo isOwner={false} />
        </div>
        <div className="800px:w-[72%] mt-5 800px:mt-['unset'] rounded-[4px]">
          <LibrarieProfileData isOwner={false} />
        </div>
      </div>
    </div>
  );
};

export default ShopPreviewPage;
