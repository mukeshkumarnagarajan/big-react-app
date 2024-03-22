import { useState } from "react";
// import TrendingShow from "./TrendingShow";

const TrendingShowList: React.FC = () => {
  console.log("executing");
  const [resolution, setResolution] = useState("HD");

  const handleSwitchResolution = () => {
    setResolution("4K");
  };

  return (
    <div>
      <div className="row">
        <h3>
          Enjoy watching the shows in {resolution} | {" "}
          <button
            className="btn btn-sm btn-warning"
            onClick={handleSwitchResolution}
          >
            Switch to 4K
          </button>
        </h3>
        <div className="col-md-3">{/* <TrendingShow /> */}</div>
        <div className="col-md-3">{/* <TrendingShow /> */}</div>
        <div className="col-md-3">{/* <TrendingShow /> */}</div>
        <div className="col-md-3">{/* <TrendingShow /> */}</div>
      </div>
    </div>
  );
};

export default TrendingShowList;
