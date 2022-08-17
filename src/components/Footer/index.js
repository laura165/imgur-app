import React from "react";
import style from "./index.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function ImageContent() {
  return (
    <div className={style.footerWrapper}>
      <div className={`${style.footerContainer}`}>
        <div className={style.footerLogo}>
          <FontAwesomeIcon
            icon="hand-point-down"
            className={style.iconsStyle}
          />
        </div>
        <div className={style.copyright}>@2022 Company, Inc</div>
      </div>
    </div>
  );
}
