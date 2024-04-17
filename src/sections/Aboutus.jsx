import React from "react";

function Aboutus() {
  return (
    <section className=" py-4">
      <div className=" container-wrapper">
        <div className=" flex justify-between items-center gap-2 flex-col sm:flex-row">
          <div className=" w-full">
            <img
              src="images/about.png"
              alt=""
              className=" h-auto sm:h-[490px] rounded-xl"
            />
          </div>

          <div className=" max-w-2xl">
            <h1 className=" asul-bold text-4xl py-4">About us</h1>

            <p className=" text-lg py-2">
              Get ready for the ultimate crypto adventure with Baby Trump Meme
              Coin on Solana! Imagine the iconic figure of President Donald
              Trump, but cuter, funnier, and a tad more...babyish! This little
              fella is here to shake up the crypto world with his winning
              nature, presidential skills, and irresistible charm. Who needs
              boring coins when your wallet can make you giggle?
            </p>

            <p className=" text-lg py-2">
            Let's bring laughter, creativity, and a hint of political satire to the Solana world.
            </p>

      

            <p className=" text-lg py-2">
              Join us on our journey to make sol great again! Whether you're
              a seasoned investor, a blockchain enthusiast, or simply someone
              who enjoys a good laugh, there's a place for you in the Baby Trump
              movement. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutus;
