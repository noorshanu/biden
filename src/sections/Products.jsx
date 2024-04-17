import React from "react";

function Products() {
  return (
    <section className=" bg-[#ab3435] py-4 px-6">
      <div className=" container-wrapper">
        <div className=" flex justify-between items-center flex-col sm:flex-row">
          <div>
            <img src="images/img1.png" alt="" className=" rounded-full h-[350px] w-auto" />
          </div>

          <div className=" flex justify-center  flex-col">
            <h2 className=" text-3xl asul-bold text-center">Get Ready to Stake,President NFTs and MEV Bot</h2>

            <button className=" bg-[#ab3435] rounded-full text-2xl py-2 px-6  ">Coming Soon</button>
          </div>

          <div>
            <img src="images/img2.png" alt="" className="rounded-full h-[350px] w-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
