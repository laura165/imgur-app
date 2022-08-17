import React from "react";
import style from "./index.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import ImageWrapper from "../ImageWrapper";
import DropDown from "../DropdownComponent";
import axios from "axios";
import { useEffect, useState } from "react";
// sort parameters
const SORT_OPTIONS = [
  { name: "Viral", key: "viral" },
  { name: "Top", key: "top" },
  { name: "Time", key: "time" },
];
// section parameters
const SECTION_OPTIONS = [
  { name: "Hot", key: "hot" },
  { name: "Top", key: "topSection" },
  { name: "User", key: "user" },
];
// window parameters
const WINDOW_OPTIONS = [
  { name: "Day", key: "day" },
  { name: "Week", key: "week" },
  { name: "Month", key: "month" },
  { name: "Year", key: "year" },
  { name: "All", key: "all" },
];

export default function ImageContent() {
  const [section, setSection] = useState(SECTION_OPTIONS[0]);
  const [sort, setSort] = useState(SORT_OPTIONS[0]);
  const [window, setWindow] = useState(WINDOW_OPTIONS[0]);
  const [images, setImages] = useState([]);
  const [checked, setChecked] = useState(false);
  // handles toggling between states to exclude/include viralimages onChange of checkbox
  const handleToggle = () => {
    setChecked(!checked);
  };
  useEffect(() => {
    axios
      .get(
        `https://api.imgur.com/3/gallery/${section.key}/${sort.key}/${window.key}`,
        {
          params: {
            showViral: checked,
            mature: false,
            album_previews: false,
          },
          headers: {
            Authorization: "Client-ID b89d1d815e5d70c",
          },
        }
      )
      .then((response) => {
        setImages(response.data.data);
      });
  }, [section.key, sort.key, window.key, checked]);

  return (
    <>
      <div className={`${style.container} container`}>
        <div className={`row`}>
          <div className={`col-lg-3 col-md-3 col-sm-3 col-3`}>
            <DropDown
              options={WINDOW_OPTIONS}
              selectedOption={window}
              onOptionChange={setWindow}
            />
          </div>
          <div className={`col-lg-3 col-md-3 col-sm-3 col-3`}>
            <DropDown
              options={SECTION_OPTIONS}
              selectedOption={section}
              onOptionChange={setSection}
            />
          </div>
          <div className={`col-lg-3 col-md-2 col-sm-3 col-3`}>
            <DropDown
              options={SORT_OPTIONS}
              selectedOption={sort}
              onOptionChange={setSort}
            />
          </div>
          <div className={`col-lg-3 ${style.wrap} col-md-2 col-sm-1 col-1`}>
            <div className={`${style.chechBoxWrapper}`}>
              <input type="checkbox" name="checkbox" onChange={handleToggle} />
            </div>
          </div>
        </div>
        <div className={`row`}>
          {images.map((data) => (
            <div className={`col-lg-3 col-md-4 col-sm-12 col-12`} key={data.id}>
              <ImageWrapper imageData={data} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
