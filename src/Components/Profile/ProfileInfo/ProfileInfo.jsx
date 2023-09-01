import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../Common/Preloader/Preloader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }
  return (
    <div>
      <div>
        <img
          alt="sea"
          src="https://fs.tonkosti.ru/sized/c1600x600/3q/3r/3q3r3fgg4544os4c440gkskgg.jpg"
        />
      </div>
    <div className={s.descriptionBlock}>
      <img src={props.profile.photos.large} />
      ava + description
      </div>
    </div>
  );
}

export default ProfileInfo;