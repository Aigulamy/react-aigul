import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          alt="sea"
          src="https://fs.tonkosti.ru/sized/c1600x600/3q/3r/3q3r3fgg4544os4c440gkskgg.jpg"
        />
      </div>
    <div className={s.descriptionBlock}>ava + description</div>
    </div>
  );
}

export default ProfileInfo;