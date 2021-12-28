import Link from "next/link";
import Image from "next/image";
import propTypes from "prop-types";

const GameItem = (props) => {
  const { thumbnail, title, category } = props;

  return (
    <div className="featured-game-card position-relative">
      <Link href="/detail">
        <a>
          <div className="blur-sharp">
            <Image
              src={thumbnail}
              width={205}
              height={270}
              className="thumbnail"
              alt="Thumbnail"
            />
          </div>
          <div className="cover position-absolute bottom-0 m-32">
            <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
              <div className="game-icon mx-auto">
                <Image
                  src="/icon/console.svg"
                  width={54}
                  height={36}
                  alt="Console"
                />
              </div>
              <div>
                <p className="fw-semibold text-white text-xl m-0">{title}</p>
                <p className="fw-light text-white m-0">{category}</p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

GameItem.propTypes = {
  thumbnail: propTypes.oneOf([
    "/img/Thumbnail-1.png",
    "/img/Thumbnail-2.png",
    "/img/Thumbnail-3.png",
    "/img/Thumbnail-4.png",
    "/img/Thumbnail-5.png",
  ]).isRequired,
  title: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
};

export default GameItem;
