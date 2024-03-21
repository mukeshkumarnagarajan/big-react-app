import LatestShow from "./LatestShow";
import TrendingShowList from "./TrendingShowList";

const NetflixPage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to Netflix App!</h1>
      <h2>Latest Shows | Props Demo</h2>

      <div className="row">
        <div className="col-md-3">
          <LatestShow
            title="Spiderman"
            imgUrl="https://placehold.co/300x220/orange/white?font=raleway&text=Spiderman"
            category="Action"
            publishedOn="a few days ago"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </LatestShow>
        </div>
        <div className="col-md-3">
          <LatestShow
            title="Superman"
            imgUrl="https://placehold.co/300x220/orange/white?font=raleway&text=Superman"
            category="Action"
            publishedOn="a few days ago"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </LatestShow>
        </div>
        <div className="col-md-3">
          <LatestShow
            title="Ironman"
            imgUrl="https://placehold.co/300x220/orange/white?font=raleway&text=Ironman"
            category="Action"
            publishedOn="a few days ago"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </LatestShow>
        </div>
        <div className="col-md-3">
          <LatestShow
            title="Batman"
            imgUrl="https://placehold.co/300x220/orange/white?font=raleway&text=Batman"
            category="Action"
            publishedOn="a few days ago"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </LatestShow>
        </div>
      </div>

      <hr />
      <h2>Trending Shows | Props, States and demo</h2>
      <TrendingShowList/>
    </div>
  );
};

export default NetflixPage;
