import React, { useState, useEffect } from "react";
import twitterLogo from "./assets/twitter-logo.svg";

import blue from "./assets/blue_bot.png";
import green from "./assets/green_bot.png";
import pink from "./assets/pink_bot.png";
import rainbow from "./assets/rainbow_bot.png";
import gray from "./assets/gray_bot.png";

import "./App.css";

// Constants
const BOTS = [blue, green, pink, rainbow, gray];
const TWITTER_HANDLE = "_buildspace";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {
  const [currentAccount, setCurrentAccount] = useState(null);

  const checkIfWalletIsConnected = async () => {
    /*
     * First make sure we have access to window.ethereum
     */
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have MetaMask!");

      return;
    } else {
      try {
        const accounts = await ethereum.request({ method: "eth_accounts" });
        console.log(accounts);
        if (accounts.length !== 0) {
          const account = accounts[0];
          console.log("Found an authorized account:", account);
          setCurrentAccount(account);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);
  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <p className="header gradient-text">PBOTS WAR</p>
        </div>

        <div className="bots">
          {BOTS.map((bot, index) => {
            return (
              <div
                key={index}
                className="main-bg-image"
                style={{
                  backgroundImage: bot,
                }}
              >
                <img src={bot} alt="" />
              </div>
            );
          })}
        </div>
        {/* <p className="sub-text">Team up to protect the Metaverse!</p> */}
        {/* <div className="connect-wallet-container">
          <img
            src="https://64.media.tumblr.com/tumblr_mbia5vdmRd1r1mkubo1_500.gifv"
            alt="Monty Python Gif"
          />
        </div> */}
        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built with @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
};

export default App;
