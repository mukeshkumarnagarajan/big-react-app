import { useState } from "react";

interface IShow {
  id: number;
  title: string;
  thumbnailUrl: string;
  category: string;
  publishedOn: string;
  description: string;
}

const RecommendedShowList: React.FC = () => {
  const [shows] = useState<IShow[]>([
    {
      id: 66456364,
      title: "PlanetEarth II",
      thumbnailUrl:
        "https://placehold.co/400x300/00ffff/000?text=PlanetEarth-II",
      category: "Infotainment",
      publishedOn: "1 day ago",
      description: "BBC Earth's documentary lorem ipsum something ....",
    },
    {
      id: 6547456756,
      title: "Random Movie",
      thumbnailUrl: "https://placehold.co/400x300/ff00ff/000?text=RandomMovie",
      category: "Infotainment",
      publishedOn: "4 days ago",
      description: "Random show ipsum something sdg s sd....",
    },
    {
      id: 3452354,
      title: "Ronaldo - The Legend",
      thumbnailUrl:
        "https://placehold.co/400x300/cfcfcf/000?text=Ronaldo-TheLegend",
      category: "Sports",
      publishedOn: "1 year ago",
      description: "a show on legendary footballer Ronaldo...",
    },
  ]);

  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <img src="" className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">Movie Name</h5>
              <p className="card-text">Description</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Category</li>
              <li className="list-group-item">Published</li>
            </ul>
            <div className="card-body">
              <a className="btn btn-success">Add To WatchList</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedShowList;
