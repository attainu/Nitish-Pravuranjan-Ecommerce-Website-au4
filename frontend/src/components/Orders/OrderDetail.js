import React from 'react';
export default (props) => {
  if (props.cartItems) {
    return props.cartItems.map((item) => {
      let { name, productPic, price, count, total } = item;
      return (
        <div className='row my-1 text-capitalize text-center'>
          <div className='col-10 mx-auto col-lg-2'>
            <img
              src={productPic[0].img}
              style={{ width: '5rem', height: '5rem' }}
              className='img-fluid'
              alt=''
            />
          </div>
          <div className='col-10 mx-auto col-lg-2 '>
            <span className='d-lg-none'>product :</span> {name}
          </div>
          <div className='col-10 mx-auto col-lg-2 '>
            <strong>
              <span className='d-lg-none'>price :</span> ${price}
            </strong>
          </div>
          <div className='col-10 mx-auto col-lg-2 '>
            <strong>
              <span className='d-lg-none'>count :</span> {count}
            </strong>
          </div>
          <div className='col-10 mx-auto col-lg-2 '>
            <strong>item total : ${total} </strong>
          </div>
        </div>
      );
    });
  } else {
    return null;
  }
};
