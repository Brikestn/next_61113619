import React from "react";

function index(props) {
  const { data } = props;
  return (
    <>
      <div class="col-md-3 shop_box">
        <a href="single.html">
          <center>
            <img
              src={data.product_img}
              class="img-responsive"
              alt=""
              style={{ height: 200 }}
            />
          </center>
          <br />
          <span class="new-box">
            <span class="new-label">New</span>
          </span>
          <div class="shop_desc">
            <h3 style={{ height: 75 }}>
              <a href="#">{data.product_name}</a>
            </h3>
            <p>{data.author} </p>
            <span class="actual">฿{data.product_price}</span>
            <br />
            <ul class="buttons">
              <li class="cart">
                <a href="#">Add To Cart</a>
              </li>
              <li class="shop_btn">
                <a href="#">Read More</a>
              </li>
              <div class="clear"> </div>
            </ul>
          </div>
        </a>
        <hr></hr>
        <br></br>
      </div>
    </>
  );
}

export default index;
