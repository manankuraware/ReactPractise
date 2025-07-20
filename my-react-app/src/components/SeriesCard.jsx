import React from "react";
import styles from "./Netflix.module.css";

const SeriesCard = ({ currEle }) => {
  // console.log(props);
  // destructuring 1
  // const { currEle } = props;

  // destructuriing 2
  // when using const SeriesCard = (props) => {
  // const { img_url, name, rating, description, genre, watch_url } =
  //   props.currEle;

  // destructuriing 3
  const { img_url, name, rating, description, genre, watch_url } = currEle;

  // without destructuring
  // return (
  //   <div className="card-itms">
  //     <div className="card-img">
  //       <img
  //         src={props.currEle.img_url}
  //         alt={props.currEle.name}
  //         height="40%"
  //         width="40%"
  //       />
  //     </div>
  //     <h2 className="card-Name">{props.currEle.name}</h2>
  //     <h3 className="card-Rating">{props.currEle.rating}</h3>
  //     <p className="card-Summary">{props.currEle.description}</p>
  //     <p className="card-Genre">{props.currEle.genre}</p>
  //     <a href={props.currEle.watch_url} className="card-button">
  //       Watch Now
  //     </a>
  //   </div>
  // );

  // with destructuruing method 1
  // return (
  //   <div className="card-itms">
  //     <div className="card-img">
  //       <img
  //         src={currEle.img_url}
  //         alt={currEle.name}
  //         height="40%"
  //         width="40%"
  //       />
  //     </div>
  //     <h2 className="card-Name">{currEle.name}</h2>
  //     <h3 className="card-Rating">{currEle.rating}</h3>
  //     <p className="card-Summary">{currEle.description}</p>
  //     <p className="card-Genre">{currEle.genre}</p>
  //     <a href={currEle.watch_url} className="card-button">
  //       Watch Now
  //     </a>
  //   </div>
  // );

  // with destructuruing method 2
  return (
    <div className={styles.cardItms}>
      <div className={styles.cardImg}>
        <img src={img_url} alt={name} height="40%" width="40%" />
      </div>
      <h2 className="card-Name">{name}</h2>
      <h3 className="card-Rating">
        Rating is:
        <span
          className={rating >= 8 ? `${styles.superhit}` : `${styles.Average}`}
        >
          {rating}
        </span>
      </h3>
      <p className={styles["card-Summary"]}>{description}</p>
      <p className="card-Genre">{genre}</p>
      <a href={watch_url} className="card-button">
        Watch Now
      </a>
    </div>
  );
};

export default SeriesCard;
