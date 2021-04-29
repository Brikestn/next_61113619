import React from "react";
import CardShop from "../../components/product";
function index(props) {
  return (
    <>
      <div class="main">
        <div class="shop_top">
          <div class="container">
            <div class="row">
              <center>
                <h1>หนังสือเตรียมสอบ</h1>
              </center>
            </div>
            <hr></hr>
            <br></br>
            <div class="row shop_box-top">
              <div className="row">
                {/* card one */}
                {props.data.map((data) => (
                  <CardShop data={data} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
