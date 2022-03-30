import * as React from "react";

function ProfileImg(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={100} height={100} fill="none" {...props}>
      <g clipPath="url(#prefix__clip0_1364_3542)">
        <rect width={100} height={100} rx={50} fill="#000" />
        <ellipse cx={50} cy={95} rx={50} ry={28} fill="#F1F1F1" />
        <circle cx={50} cy={39} r={20} fill="#F1F1F1" />
      </g>
      <defs>
        <clipPath id="prefix__clip0_1364_3542">
          <rect width={100} height={100} rx={50} fill="#fff" />
        </clipPath>
      </defs>
    </svg>
  );
}

const MemoProfileImg = React.memo(ProfileImg);
export default MemoProfileImg;
