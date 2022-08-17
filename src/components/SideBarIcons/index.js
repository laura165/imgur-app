import React from "react";
import style from "./index.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImageWrapper from "../ImageWrapper";

import { Link } from "react-router-dom";

export default function SinglePost({ dataIcons }) {
  return (
    <div className={`${style.iconsWrapper}`}>
      <div className={`${style.backButton}`}>
        {/* path for the home index */}
        <Link to="/">
          <FontAwesomeIcon icon="arrow-left" className={style.iconsStyleLeft} />
        </Link>
      </div>
      <div className={`${style.results}`}>
        <FontAwesomeIcon icon="chevron-up" className={style.iconsStyle} />
      </div>
      <div className={`${style.numberResult}`}>{dataIcons.size}</div>
      <div className={`${style.results}`}>
        <FontAwesomeIcon icon="chevron-down" className={style.iconsStyle} />
      </div>
      <div className={`${style.results}`}>
        <FontAwesomeIcon icon="eye" className={style.eyeStyle} />
        <div className={`${style.numberResult}`}>{dataIcons.views}</div>
      </div>
    </div>
  );
}
