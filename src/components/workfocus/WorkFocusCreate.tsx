import React from "react";
import { Create, SimpleForm, TextInput, DateInput, useRedirect, useNotify } from "react-admin";
import { useDataProvider } from 'react-admin';

const WorkFocusCreate = () => {
  const redirect = useRedirect();
  const notify = useNotify();
  const dataProvider = useDataProvider();

  const handleSuccess = async (data: any) => {
    try {
      await dataProvider.create('workFocus', { data });
      notify('提交成功');
      redirect('list', 'workFocus');
    } catch (error) {
      notify('提交失败');
    }
  };

  return (
    <Create>
      <SimpleForm onSubmit={handleSuccess}>
        <DateInput source="focus_date" label="日期" />
        <TextInput source="content" label="内容" />
      </SimpleForm>
    </Create>
  );
};

export default WorkFocusCreate;
