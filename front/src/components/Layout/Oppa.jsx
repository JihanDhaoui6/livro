import React from 'react'
import blanc from '../../assets/homepage/honeshop.jpg'
import rose from '../../assets/homepage/Books (2).jpg'
import gris from '../../assets/homepage/r.jpg'
import { Link } from 'react-router-dom';
import styles from '../../styles/style';
const oppa = () => {
  return (
<>
{/* hero section */}
<section className='bg-[#ffffff]  bg-no-repeat bg-center bg-cover w-full h-[100px] pt-[60px] 2xl:h-[800px] '>
  <div className='container'>
    <div className='flex flex-col lg:flex-row gpa-[90px] items-center justify-between'>
{/* hero content */}
<div>
  <div className='lg:w-[570px] ml-[69px]'>
    <h1 className='text-[36px] leading-[46px] text-headingColor font-[600] md:text-[60px] md:leading-[70px] '>Improve your Theory of mind.</h1>
    <p className='text-[22px] leading-[30px] font-[600] text-[#f05954b9] mt-[18px]'>Today a Reader,<br /> Tomorrow a Leader.</p>
 <p className='text-[#666] '>Live _ Read _ Enjoy</p>
 <Link to="/livres" className="inline-block">
            <div className={`${styles.button} mt-5`}>
              <span className="text-[#fff] font-[Poppins] text-[18px]">
                Discover Now
              </span>
            </div>
          </Link>
 </div>
<div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px] ml-24'>
<div>
  <h2 className='text-[38px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-black '>
+50
  </h2>
  <span className='w-[100px] h-2 bg-yellow-400 rounded-full block mt-[-14px]  '></span>
<p className='text-[#2f1515]'>Books</p>
</div>


<div>
  <h2 className='text-[38px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-black '>
+20
  </h2>
  <span className='w-[100px] h-2 bg-yellow-400 rounded-full block mt-[-14px]  '></span>
<p className='text-[#a55959]'>Seller</p>
</div>



<div>
  <h2 className='text-[38px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-black '>
+10
  </h2>
  <span className='w-[100px] h-2 bg-yellow-400 rounded-full block mt-[-14px]  '></span>
<p className='text-[#ef3636]'>events</p>
</div>
</div>


</div>


{/* HERO CONETENT */}
<div className='flex gap-[30px] justify-end mt-1'>
  <div className='mt-[30%]'>
    <div className='border border-white-500 rounded-full'>
      <img src={blanc} alt="" className='w-[30vh] h-[30vh] rounded-full '/>
    </div>
  </div>
  <div className='mt-[30px]'>
    <div className='border border-white-500 rounded-full'>
      <img src={rose} alt="" className='w-[30vh] h-[30vh] rounded-full '/>
    </div><br />
    <div className='border border-none'>
      <img src={gris} alt="" className='w-[30vh] h-[30vh] rounded-full '/>
    </div>
  </div>
</div>





    </div>
  </div>

</section>
</>

  )
}

export default oppa

