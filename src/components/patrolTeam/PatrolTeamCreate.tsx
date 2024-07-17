import React, { useState } from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  useNotify,
  useRedirect,
} from "react-admin";

const CreatePatrolTeam = (props: any) => {
  const notify = useNotify();
  const redirect = useRedirect();

  const onSuccess = () => {
    notify("巡逻组创建成功", { type: "success" });
    redirect("/vehicle/patrolTeam");
  };

  const onFailure = (error: any) => {
    notify(`创建巡逻组失败: ${error.message}`, { type: "error" });
  };

  return (
    <Create {...props} onSuccess={onSuccess} onFailure={onFailure}>
      <SimpleForm>
        <TextInput source="team_name" label="巡逻组名称" />
      </SimpleForm>
    </Create>
  );
};

export default CreatePatrolTeam;
