interface IShow {
  id: number;
  title: string;
  thumbnailUrl: string;
  category: string;
  publishedOn: string;
  description: string;
  isInWatchlist: boolean;
}

interface IRecommendedshow {
  show: IShow;
  index: number;
  handleManageWatchlist: Function;
}

const RecommendedShow: React.FC<IRecommendedshow> = ({
  show,
  index,
  handleManageWatchlist,
}) => {
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
};

export default RecommendedShow;
