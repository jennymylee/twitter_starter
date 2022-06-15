import * as React from "react";
import "./AvatarIcon.css";
import { Avatar } from "@mui/material";

export default function AvatarIcon() {
  return (
    <span className="avatar-icon fa-stack">
      {/* <i className="fas fa-circle fa-stack-2x"> */}
      {/* <i className="fas fa-user fa-stack-1x"></i> */}
      <Avatar
        src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/wfsonfv0p92plryzwijf"
        sx={{ width: 36, height: 36 }}
      />
      {/* </i> */}
    </span>
  );
}
