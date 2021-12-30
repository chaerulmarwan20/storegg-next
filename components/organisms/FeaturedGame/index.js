import { useState, useCallback, useEffect } from "react";
import GameItem from "../../molecules/GameItem";
import { getFeaturedGame } from "../../../services/player";

const FeaturedGame = () => {
  const apiImg = process.env.NEXT_PUBLIC_IMG;

  const [gameList, setGameList] = useState([]);

  const getFeatureGameList = useCallback(async () => {
    const data = await getFeaturedGame();
    setGameList(data.slice(0, 5));
  }, [getFeaturedGame]);

  useEffect(() => getFeatureGameList(), []);

  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br /> Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          {gameList.map((item) => {
            return (
              <GameItem
                id={item._id}
                thumbnail={`${apiImg}/${item.thumbnail}`}
                title={item.name}
                category={item.category.name}
                key={item._id}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGame;
