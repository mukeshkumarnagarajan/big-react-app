import { useState } from "react";

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

  const handleManageWatchlist = (index: number) => {
    const duplicateShows = [...shows];
    duplicateShows[index].isInWatchlist = !duplicateShows[index].isInWatchlist;
    setShows(duplicateShows);
  };

  return (
    <div>
      <div className="row">
        {/* lists a.k.a looping*/}

        {shows.map((show, index) => {
          console.log(show);
          return (
            <div className="col-md-3" key={show.id}>
              <div className="card">
                <img src={show.thumbnailUrl} className="card-img-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title">{show.title}</h5>
                  <p className="card-text">{show.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">{show.category}</li>
                  <li className="list-group-item">{show.publishedOn}</li>
                </ul>
                <div className="card-body">
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      handleManageWatchlist(index);
                    }}
                  >
                    {show.isInWatchlist ? "In Watchlist" : "Add to watchlist"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecommendedShowList;
