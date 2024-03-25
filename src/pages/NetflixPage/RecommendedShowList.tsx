import { useState } from "react";
import RecommendedShow from "./RecommendedShow";

interface IShow {
  id: number;
  title: string;
  thumbnailUrl: string;
  category: string;
  publishedOn: string;
  description: string;
  isInWatchlist: boolean;
}

const RecommendedShowList: React.FC = () => {
  const [shows, setShows] = useState<IShow[]>([
    {
      id: 66456364,
      title: "PlanetEarth II",
      thumbnailUrl:
        "https://placehold.co/300x220/orange/white?font=raleway&text=PlanetEarth II",
      category: "Infotainment",
      publishedOn: "1 day ago",
      description: "BBC Earth's documentary lorem ipsum something ....",
      isInWatchlist: false,
    },
    {
      id: 6547456756,
      title: "Random Movie",
      thumbnailUrl:
        "https://placehold.co/300x220/orange/white?font=raleway&text=Random Movie",
      category: "Infotainment",
      publishedOn: "4 days ago",
      description: "Random show ipsum something sdg s sd....",
      isInWatchlist: false,
    },
    {
      id: 3452354,
      title: "Ronaldo - The Legend",
      thumbnailUrl:
        "https://placehold.co/300x220/orange/white?font=raleway&text=Ronaldo - The Legend",
      category: "Sports",
      publishedOn: "1 year ago",
      description: "a show on legendary footballer Ronaldo...",
      isInWatchlist: false,
    },
    {
      id: 243423,
      title: "Superman",
      thumbnailUrl:
        "https://placehold.co/300x220/orange/white?font=raleway&text=Superman",
      category: "Sports",
      publishedOn: "1 year ago",
      description: "a show on legendary footballer Ronaldo...",
      isInWatchlist: false,
    },
  ]);

  if (shows && shows.length == 0) {
    return (
      <div className="alert alert-warning" role="alert">
        No recommended videos found! Try watching more videos to recommend based
        on your interest!
      </div>
    );
  }

  const handleManageWatchlist:Function = (index: number) => {
    const duplicateShows = [...shows];
    duplicateShows[index].isInWatchlist = !duplicateShows[index].isInWatchlist;
    setShows(duplicateShows);
  };

  return (
      <div className="row">
        {shows.map((show: IShow, index: number) => {
          return (
            <RecommendedShow
              show={show}
              index={index}
              handleManageWatchlist={handleManageWatchlist}
            ></RecommendedShow>
          );
        })}
      </div>
  );
};

export default RecommendedShowList;
