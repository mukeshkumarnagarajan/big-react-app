import TrendingShow from "./TrendingShow";

const TrendingShowList: React.FC = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          <TrendingShow />
        </div>
        <div className="col-md-3">
          <TrendingShow />
        </div>
        <div className="col-md-3">
          <TrendingShow />
        </div>
        <div className="col-md-3">
          <TrendingShow />
        </div>
      </div>
    </div>
  );
};

export default TrendingShowList;
