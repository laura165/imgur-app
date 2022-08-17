import React from "react";
import style from "./index.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function ImageContent() {
  return (
    <div className={`container-full`}>
      <div className={`row`}>
        <div className={`col-12`}>
          <div className={`${style.navBarContainer} `}>
            <Link to="/">
              <div className={`${style.navLogo}`}>
                <FontAwesomeIcon
                  icon="hand-point-down"
                  className={style.iconsStyle}
                />
                <div className={style.logo}>Superly</div>
              </div>
            </Link>
            <div className={`${style.navLinks}`}>
              {/* <Link to="/">
                <div className={style.links}>Home</div>
              </Link>
              <Link to="/singlePost">
                <div className={style.links}>Post</div>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
