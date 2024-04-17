import React from "react";

function Navbar() {
  return (
    <section className=" py-1 bg-[#ab3435]">
      <nav className=" flex justify-between container-wrapper items-center">
        <div className=" flex items-center gap-1">
          <img src="images/logo2.png" alt="" className=" h-[80px]" />
          <h2 className="asul-bold text-xl sm:text-3xl">Biden</h2>
        </div>

        <div>
          <a
            href="https://www.dextools.io/app/en/solana/pair-explorer/35eRfsbvDtykmwgqbtWrK9UN2L6r5JV8HSfpTWH4Wooh?t=1713381799597"
            target="_blank"
            className="bg-[#344cab] rounded-full text-base sm:text-2xl py-2 px-6 font-bold asul-bold  border-2 border-black"
          >
            Buy Now
          </a>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
