import { Typography } from "@mui/material";
import {
  AppBar,
  TitlePortal,
  useResourceContext,
  useTranslate,
} from "react-admin";

export const CustomTitle = (title: any) => {
  const translate = useTranslate();
  const resource = useResourceContext();

  return (
    <Typography variant="h6" color="inherit">
      {translate(`resources.${resource}.name`, { smart_count: 1 }) || title}
    </Typography>
  );
};

export const CustomAppBar = (props: any) => (
  <AppBar {...props}>
    <TitlePortal>
      <CustomTitle title={undefined} />
    </TitlePortal>
  </AppBar>
);
