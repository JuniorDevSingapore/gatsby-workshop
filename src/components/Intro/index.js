import React from "react";
import config from "../../../data/SiteConfig";
import s from "./s.module.scss";

function Bio() {
  return (
    <div className={s.intro}>
      <div className={s.pre}>
        <a href="http://juniordev.sg">JuniorDev SG</a>
        {' '}
Gatsby builders'
        community.
      </div>
    </div>
  );
}

export default Bio;
