"use client";

import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import dataProvider from "@/dataProvider";

const AdminPage = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="staff" list={ListGuesser} edit={EditGuesser} />
  </Admin>
);

export default AdminPage;
