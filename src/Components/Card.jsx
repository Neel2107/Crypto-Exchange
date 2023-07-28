import { useState } from 'react';
import 'animate.css';
const Card = () => {
    const [amountTokenA, setAmountTokenA] = useState(1000); // Amount of token A (Bitcoin)
    const [amountTokenB, setAmountTokenB] = useState(7.8545); // Amount of token B (Ethereum)
    const [desiredPrice, setDesiredPrice] = useState(25000); // The desired price in dollars
  
    // Mock data for token A (Bitcoin) and token B (Ethereum) prices
    const bitcoinPrice = 29309; // Dollars per 1 Bitcoin
    const ethereumPrice = 1875; // Dollars per 1 Ethereum
  
    // Function to handle the swap button click
    const handleSwap = () => {
      // Swap the amounts of token A and token B
      setAmountTokenA(amountTokenB);
      setAmountTokenB(1000); // Set to the initial amount of token A (Bitcoin)
  
      // Calculate and update the new amount of token B based on the desired price
      const amountB = (amountTokenB * ethereumPrice) / desiredPrice;
      setAmountTokenB(amountB.toFixed(4)); // Rounding to 4 decimal places
    };
  
    // Function to calculate the amount of token B to be received after the swap
    const calculateTokenBAmount = () => {
      return (amountTokenA * bitcoinPrice) / desiredPrice;
    };
  
    // Update the calculated amount of token B whenever the desired price changes
    const updateTokenBAmount = () => {
      const amountB = calculateTokenBAmount();
      setAmountTokenB(amountB.toFixed(4)); // Rounding to 4 decimal places
    };
  return (
    <div className="card animate__animated  animate__backInDown ">
      <div className="titleLine">
        <div className="leftTitle">
         <img className="ham" src="./ham.png" alt="" />
          <span className="trade">Trade</span>
        </div>
       <img className="closeBtn" src="./close.png" alt="" />
      </div>
      <div className="bothToken">
        <div className="firstToken">
            <div className="upperPart">
                <span>FROM</span>
            </div>
            <div className="lowerPart">
                <div className="tokenLeft">
                    <img className="coinImg" src="./bitcoin.png" alt="coinIcon" />
                    <span className="coinName">BITCOIN</span>
                  <img className="downIcon" src="./down.png" alt="" />
                </div>
            <div className="tokenRight">
                <span className="totalAmount">{amountTokenA}</span>
                <span className="coinValue">(~${(amountTokenA * bitcoinPrice).toFixed(2)})</span>
            </div>
            </div>
        </div>
        <span className="replaceIcon"  onClick={handleSwap}>
            
                <img className="swapIcon" src="swap.png" alt="" />
         
        </span>
        <div className="firstToken">
            <div className="upperPart">
                <span>TO</span>
            </div>
            <div className="lowerPart">
                <div className="tokenLeft">
                    <img className="coinImg" src="./eth.png" alt="coinIcon" />
                    <span className="coinName">ETH.</span>
                  <img className="downIcon" src="./down.png" alt="" />
                </div>
            <div className="tokenRight">
            <span className="totalAmount">{amountTokenB}</span>
                <span className="coinValue">(~${(amountTokenB * ethereumPrice).toFixed(2)})</span>
            </div>
            </div>
        </div>
      </div>
      <div className="extraText">
        <div className="texts">
            <div className="leftText">
            <div className="lightext">Slippage Tolerance</div>
        <img className="infoIcon" src="./info.png" alt="" />
            </div>
            <div>0.50%</div>

        </div> 
        <div className="texts">
            <div className="leftText">

            <div className="lightext">Swapping Through</div>
            <img className="infoIcon" src="./info.png" alt="" />
            </div>
            <div>CTH Pool</div>

        </div> <div className="texts ">
            <div className="leftText">

            <div className="lightext">Minimum Received</div>
            <img className="infoIcon" src="./info.png" alt="" />

            </div>
            <div>7.75006 WETH</div>

        </div> <div className="texts ">
            <div className="leftText">
            <div className="blueText">Price Impact Warning</div>
            <img className="infoIcon" src="./info.png" alt="" />

            </div>
            <div className="blueText">-0.03%</div>

        </div>

      </div>
      <div className="button">
        <button className="tradeBtn" onClick={updateTokenBAmount}>
          <span className="btnText">Trade</span>
        </button>
      </div>
    </div>
  );
};

export default Card;
