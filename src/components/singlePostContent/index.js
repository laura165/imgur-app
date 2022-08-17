import React, { useState, useEffect } from "react";
import style from "./index.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImageWrapper from "../ImageWrapper";
import SideBarIcons from "../SideBarIcons";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function SinglePost() {
  // gets params this makes it possible that we can access singlePage with path singlePage/id
  const params = useParams();
  // state too gather the response fromt the api
  const [singleData, setSingleData] = useState([]);
  console.log(singleData);
  const isVideo = singleData.type === "video/mp4";
  console.log(singleData);
  useEffect(() => {
    axios
      .get(`https://api.imgur.com/3/image/${params.imageId}`, {
        headers: {
          Authorization: "Client-ID b89d1d815e5d70c",
        },
      })
      .then((response) => {
        setSingleData(response.data.data);
      });
  }, []);

  return (
    <div className={`${style.container} container`}>
      <div className={`row`}>
        <div className={` col-lg-1 col-md-1 col-sm-1`}>
          {/* sideBarIcons component */}
          <SideBarIcons dataIcons={singleData} />
        </div>
        <div className={` col-lg-8 col-md-8 col-sm-11 `}>
          <div className={`${style.postWrapper}`}>
            {isVideo ? (
              <video
                className={`${style.videoStyle}`}
                // autoplay="autoplay"
                muted="muted"
                loop="loop"
              >
                <source src={singleData.link} type="video/mp4" />
              </video>
            ) : (
              <img className={`${style.image}`} src={singleData.link} />
            )}
          </div>
          {singleData.title !== null ? (
            <div className={`${style.imageTitle}`}>{singleData.title}</div>
          ) : null}
          {singleData.description !== null ? (
            <div className={`${style.imageDesc}`}>{singleData.description}</div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
