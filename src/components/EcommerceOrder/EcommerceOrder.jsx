import React from 'react'
import UserList from '../Chat/UserList'
import OrderList from './OrderList'

const EcommerceOrder = () => {
  return (
    <> 
    <div className='mt-2' style={{display:'flex',justifyContent:'space-between',columnGap:'10px' }}>
       <div className="col-3">
          <UserList/>
       </div>
       <div className="col-9">
         <OrderList/>
       </div>
     </div>
    </>
  )
}

export default EcommerceOrder