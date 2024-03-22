interface TrendingShowProps {
  id?: number;
  title: string;
  trendingRank: number;
  imgUrl: string;
  children: string;
  category: string;
  publishedOn: string;
}

const TrendingShow: React.FC<TrendingShowProps> = ({
  title,
  trendingRank,
  imgUrl,
  category,
  publishedOn,
  children,
}) => {
  return (
    <div className="card">
      <img src={imgUrl} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <span className="badge rounded-pill text-bg-info">
          Trending at #{trendingRank}
        </span>
        <p className="card-text">{children}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{category}</li>
        <li className="list-group-item">Published {publishedOn}</li>
      </ul>
      <div className="card-body">
        <a className="btn btn-success">Add To WatchList</a>
      </div>
    </div>
  );
};

export default TrendingShow;
