// CreateTeam.tsx
import React, { useState } from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  useNotify,
  useRedirect,
} from "react-admin";

const CreateTeam = (props: any) => {
  const notify = useNotify();
  const redirect = useRedirect();

  const onSuccess = () => {
    notify("班组创建成功", { type: "success" });
    redirect("/personnel/team");
  };

  const onFailure = (error: any) => {
    notify(`创建班组失败: ${error.message}`, { type: "error" });
  };

  return (
    <Create {...props} onSuccess={onSuccess} onFailure={onFailure}>
      <SimpleForm>
        <TextInput source="team_name" label="班组名称" />
      </SimpleForm>
    </Create>
  );
};

export default CreateTeam;
