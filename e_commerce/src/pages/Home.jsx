import React from "react";
import Poster from "../components/Poster";
import LatestCollection from "../components/LatestCollection";
import PolicySec from "../components/PolicySec";
import Subscription from "../components/Subscription";

const Home = () => {
  return (
    <div className="pb-20">
      <Poster />
      <LatestCollection />
      <PolicySec />
      <Subscription />
    </div>
  );
};

export default Home;
