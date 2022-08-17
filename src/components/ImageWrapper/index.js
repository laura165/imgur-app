import React from "react";
import style from "./index.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function ImageContent({ imageData }) {
  const mainData = imageData.images ? imageData.images[0] : imageData;
  const isVideo = mainData.type === "video/mp4";
  return (
    <Link to={`/singlePost/${mainData.id}`}>
      <div className={`${style.elementsWrapper}`}>
        <div className={`${style.cardContainer}`}>
          <div className={`${style.imageContainer}`}>
            {isVideo ? (
              <video
                className={`${style.image}`}
                // autoplay="autoplay"
                muted="muted"
                loop="loop"
              >
                <source src={mainData.link} type="video/mp4" />
              </video>
            ) : (
              <img className={`${style.image}`} src={mainData.link} />
            )}
            <div className={`${style.imageInfo}`}>
              <div className={`${style.results}`}>
                <FontAwesomeIcon
                  icon="chevron-down"
                  className={style.iconsStyle}
                />
                <div className={`${style.numberResult}`}>{imageData.downs}</div>
              </div>
              <div className={`${style.results}`}>
                <FontAwesomeIcon
                  icon="chevron-up"
                  className={style.iconsStyle}
                />
                <div className={`${style.numberResult}`}>{imageData.ups}</div>
              </div>
              <div className={`${style.results}`}>
                <FontAwesomeIcon icon="eye" className={style.iconsStyle} />
                <div className={`${style.numberResult}`}>{imageData.views}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
