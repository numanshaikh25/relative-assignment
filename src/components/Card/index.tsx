import React from "react";
import btc from "../../assets/img/btc.png";
import bnb from "../../assets/img/busd.png";
import eth from "../../assets/img/eth.png";
import sol from "../../assets/img/sol.png";
import RoundedContainer from "../common/RoundedContainer";
import Text from "../common/Text";
interface Props {
  logo: any;
  name: string;
  price: string;
  fluctuation: string;
  positive: boolean;
  tvl: string;
  popular_pairs: any;
}
function Card({ logo, name, price, fluctuation, positive, tvl, popular_pairs }: Props) {
  return (
    <div className="card">
      <div className="circle">
        <div
          style={{
            width: "6.25rem",
            height: "6.25rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
          }}
        >
          <img style={{ width: "3.115rem" }} src={logo} alt="" />
        </div>
      </div>
      <div className="top-container">
        <div className="c left"></div>
        <div className="c mid"></div>
        <div className="c right"></div>
      </div>
      <div className="bottom-container">
        <Text txt={name} color="#737BAE" first={true} />
        <RoundedContainer content={price} subContent={fluctuation} positive={positive} width="15.125rem" />
        <Text txt="Price" color="#5A5F7D" first={false} />
        <RoundedContainer content={tvl} subContent="" positive={positive} width="15.125rem" />
        <Text txt="TVL" color="#5A5F7D" first={false} />

        <div className="popular-pair-container rounded-full">
          <img style={{ height: "1.375rem" }} src={popular_pairs.one} alt="" />
          <img style={{ height: "1.375rem" }} src={popular_pairs.two} alt="" />
          <img style={{ height: "1.375rem" }} src={popular_pairs.three} alt="" />
        </div>
        <Text txt="Popular pairs" color="#5A5F7D" first={false} />
      </div>
    </div>
  );
}

export default Card;
