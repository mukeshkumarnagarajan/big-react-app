import { useState } from "react";
import TrendingShow from "./TrendingShow";
// import TrendingShow from "./TrendingShow";

const TrendingShowList: React.FC = () => {
  const [resolution, setResolution] = useState("HD");

  const [shows] = useState([
    {
      id: 1231,
      title: "Spiderman",
      trendingRank: 1,
      imgUrl:
        "https://placehold.co/300x220/orange/white?font=raleway&text=Spiderman",
      category: "Action",
      publishedOn: "a few days ago",
      description: "Classic Entertainer",
    },
    {
      id: 1231,
      title: "Superman",
      trendingRank: 2,
      imgUrl:
        "https://placehold.co/300x220/orange/white?font=raleway&text=Superman",
      category: "Action",
      publishedOn: "a few days ago",
      description: "Classic Entertainer",
    },
    {
      id: 1231,
      title: "Batman",
      trendingRank: 3,
      imgUrl:
        "https://placehold.co/300x220/orange/white?font=raleway&text=Batman",
      category: "Action",
      publishedOn: "a few days ago",
      description: "Classic Entertainer",
    },
    {
      id: 1231,
      title: "Ironman",
      trendingRank: 4,
      imgUrl:
        "https://placehold.co/300x220/orange/white?font=raleway&text=Ironman",
      category: "Action",
      publishedOn: "a few days ago",
      description: "Classic Entertainer",
    },
  ]);

  const handleSwitchResolution = () => {
    setResolution("4K");
  };

  return (
    <div>
      <div className="row">
        <h3>
          Enjoy watching the shows in {resolution} |{" "}
          <button
            className="btn btn-sm btn-warning"
            onClick={handleSwitchResolution}
          >
            Switch to {resolution === "HD" ? "4K" : "HD"}
          </button>
        </h3>
        <div className="col-md-3">
          <TrendingShow
            title={shows[0].title}
            trendingRank={shows[0].trendingRank}
            imgUrl={shows[0].imgUrl}
            category={shows[0].category}
            publishedOn={shows[0].publishedOn}
          >
            {shows[0].description}
          </TrendingShow>
        </div>
        <div className="col-md-3">
          <TrendingShow
            title={shows[1].title}
            trendingRank={shows[1].trendingRank}
            imgUrl={shows[1].imgUrl}
            category={shows[1].category}
            publishedOn={shows[1].publishedOn}
          >
            {shows[1].description}
          </TrendingShow>
        </div>
        <div className="col-md-3">
          <TrendingShow
            title={shows[2].title}
            trendingRank={shows[2].trendingRank}
            imgUrl={shows[2].imgUrl}
            category={shows[2].category}
            publishedOn={shows[2].publishedOn}
          >
            {shows[2].description}
          </TrendingShow>
        </div>
        <div className="col-md-3">
          <TrendingShow
            title={shows[3].title}
            trendingRank={shows[3].trendingRank}
            imgUrl={shows[3].imgUrl}
            category={shows[3].category}
            publishedOn={shows[3].publishedOn}
          >
            {shows[3].description}
          </TrendingShow>
        </div>
      </div>
    </div>
  );
};

export default TrendingShowList;
