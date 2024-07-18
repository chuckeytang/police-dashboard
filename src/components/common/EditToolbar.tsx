import React from "react";
import { Toolbar, SaveButton } from "react-admin";

const EditToolbar = (props: any) => (
  <Toolbar {...props}>
    <SaveButton />
  </Toolbar>
);

export default EditToolbar;
