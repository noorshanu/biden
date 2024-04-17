import React from "react";
import { FaTelegram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

function Joinclub() {
  return (
    <section className=" py-12">
      <div className=" container-wrapper">
        <div>
          <h1 className="asul-bold text-3xl font-semibold py-4 text-center">
            Join the Movement
          </h1>

          <p className=" text-center text-xl py-4">
            Ready to embrace the Baby Trump spirit? Here's how you can get
            involved:
          </p>
        </div>

        <div className=" flex justify-between items-center gap-4 flex-col sm:flex-row">
          <div className=" rounded-lg border-2 border-white p-4 bg-[#ab3435]">
            <h2 className=" text-2xl py-3 asul-bold">Follow Us</h2>

            <p className=" text-lg py-4">
              Stay updated on the latest news, memes, and developments by
              following us on social media. Join our vibrant community on
              Twitter, Instagram, and Discord.
            </p>

            <div className=" flex justify-center gap-4 items-center">
              <a href="https://t.me/babytrumpso" target="_blank" className=" text-lg ">
                <FaTelegram />
              </a>

              <a href="https://twitter.com/BabyTrumphh" target="_blank" className=" text-lg">
                <FaSquareXTwitter />
              </a>
            </div>
          </div>

          <div className=" rounded-lg border-2 border-white p-4 bg-[#ab3435]">
            <h2 className=" text-2xl py-3 asul-bold">Spread the word</h2>

            <p className=" text-lg py-4">
              Share the laughter and spread the message of Baby Trump with your
              friends, family, and fellow Meme coin enthusiasts. The more, the
              merrier!
            </p>

            <div className=" flex justify-center gap-4 items-center my-3"></div>
          </div>

          <div className=" rounded-lg border-2 border-white p-4 bg-[#ab3435]">
            <h2 className=" text-2xl py-3 asul-bold">Create and Collaborate</h2>

            <p className=" text-lg py-4">
              Have a knack for memes or a brilliant idea for a Meme coin project?
              We welcome creators, developers, and dreamers of all backgrounds
              to collaborate with us and bring their vision to life.
            </p>

            <div className=" flex justify-center gap-4 items-center my-3"></div>
          </div>

          <div className=" rounded-lg border-2 border-white p-4 bg-[#ab3435]">
            <h2 className=" text-2xl py-3 asul-bold">Stay Informed</h2>

            <p className=" text-lg py-4">
              Educate yourself about Meme coincurrencies, blockchain technology,
              and the latest trends in the Meme coin space. Knowledge is power, and
              we're here to empower you every step of the way.
            </p>

            <div className=" flex justify-center gap-4 items-center my-3"></div>
          </div>
        </div>

        <p className=" py-4 text-center">
        Let's bring laughter, creativity, and a hint of political satire to the Solana world!
        </p>
      </div>
    </section>
  );
}

export default Joinclub;
