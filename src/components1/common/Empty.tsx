import { Box, Typography } from "@mui/material";

const CustomEmpty = () => (
  <Box textAlign="center" m={2}>
    <Typography variant="h5" gutterBottom>
      自定义消息
    </Typography>
    <Typography variant="body1">这里是没有数据时显示的自定义内容。</Typography>
  </Box>
);

export default CustomEmpty;
