import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrdersOfUser } from '../../redux/actions/order';
import { useParams } from 'react-router-dom';

const TrackOrder = () => {
    const { user} = useSelector((state) => state.user);
    const {orders} = useSelector((state)=>state.order);
      const dispatch = useDispatch();

      const { id } = useParams();
      useEffect(() => {
        dispatch(getAllOrdersOfUser(user._id));
      }, [dispatch]);
      const data = orders && orders.find((item) => item._id === id);
    

    
  return (
    <div>
      {
        data && data?.status === "processing" ? (
          <div className='w-full h-[80vh]  flex justify-center items-center'>
                  <h1 className='text-center text-[20px] '>Your order is processing in library</h1>
          </div>
        ):(
           data.status === "Transferred to delivery service"? (
            <div className='w-full h-[80vh]  flex justify-center items-center'>
            <h1 className='text-center text-[20px] '>Your order is Transferred to delivery service </h1>
            </div>

           ):(data?.status === "Shipping" ? (
            <div className='w-full h-[80vh]  flex justify-center items-center'>
            <h1 className='text-center text-[20px] '>Your order is Comming with our delivery Company </h1>
            </div>
           ):(
            data?.status === "Received" ?(
                <div className='w-full h-[80vh]  flex justify-center items-center'>
            <h1 className='text-center text-[20px] '>Your order is Received </h1>
            </div>
            ):(
                data?.status === "On the way" ?(
                    <div className='w-full h-[80vh]  flex justify-center items-center'>
            <h1 className='text-center text-[20px] '>Your order in the delivery service</h1>
            </div>
                ):(
                    data?.status === "Delivered" ? (
                        <div className='w-full h-[80vh]  flex justify-center items-center'>
            <h1 className='text-center text-[20px] '>Your order is delivered</h1>
            </div>
                    ):(
                        null
                    )
                )
            )
           )

           )
        )
      }
    </div>
  )
}

export default TrackOrder
