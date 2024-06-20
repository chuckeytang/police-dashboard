import * as React from "react";
import { Container, Grid, Paper, Typography, Box, Button, List, ListItem, ListItemText,Table,TableBody,TableHead,TableCell,TableRow, 
  TableContainer,Select,FormControl,InputLabel,MenuItem, 
  colors} from "@mui/material";
import { PiPoliceCarFill } from "react-icons/pi";
import { GrSchedule } from "react-icons/gr";
import { HiMiniBuildingLibrary } from "react-icons/hi2";
import { motion } from 'framer-motion';
import 'animate.css';


const Dashboard = () => {
  return (
    <Container sx={{padding: 0, margin: 0, position: "relative", }}>
      {/* 背景层 */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "#001f3f", // 夜蓝色
          zIndex: -1, // 设置较低的 zIndex 确保背景在最底层
        }}
      />

          <Grid container spacing={2} sx={{ zIndex: 3, padding: 2 }}>
          <Grid item xs={4}>
          {/* 勤务管理 */}
          <Paper className="animate__animated animate__zoomInLeft" sx={{ p: 2, display: "flex", flexDirection: "column", mt: 2, backgroundColor: "#003366", boxShadow: "none", border: "2px solid #1e3a8a", color: "white", width: "100%", marginLeft: 1,zIndex: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h6">勤务管理</Typography>
            <Typography sx={{ ml: 2, fontSize: '1rem' }}>今日备勤等级:</Typography>
            <Button variant="contained" color="primary" sx={{ ml: 'auto' }}>
              编辑
            </Button>
          </Box>

          <TableContainer component={Paper} sx={{ backgroundColor: 'transparent', marginTop: '20px', overflow: 'hidden', minWidth: '100%', boxShadow: "none",zIndex: 3 }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ borderBottom: 'none', padding: '4px', color: 'lightblue', textOverflow: 'ellipsis', maxWidth: '80px', minWidth: '50px', whiteSpace: 'nowrap', overflow: 'hidden' }}>值班领导</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px', color: 'white', textOverflow: 'ellipsis', maxWidth: '140px', minWidth: '140px', whiteSpace: 'nowrap', overflow: 'hidden' }}>张三 154344341233</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px', color: 'white', textOverflow: 'ellipsis', maxWidth: '140px', minWidth: '140px', whiteSpace: 'nowrap', overflow: 'hidden' }}>李三 15434434123</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{ borderBottom: 'none', padding: '4px', color: 'lightblue', textOverflow: 'ellipsis', maxWidth: '80px', minWidth: '50px', whiteSpace: 'nowrap', overflow: 'hidden' }}>值班员</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px', color: 'white', textOverflow: 'ellipsis', maxWidth: '140px', minWidth: '140px', whiteSpace: 'nowrap', overflow: 'hidden' }}>张四 154344341233</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px', color: 'white', textOverflow: 'ellipsis', maxWidth: '140px', minWidth: '140px', whiteSpace: 'nowrap', overflow: 'hidden' }}>李四 15434434123</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ borderBottom: 'none', padding: '4px', color: 'lightblue', textOverflow: 'ellipsis', maxWidth: '80px', minWidth: '50px', whiteSpace: 'nowrap', overflow: 'hidden' }}>值班员</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px', color: 'white', textOverflow: 'ellipsis', maxWidth: '140px', minWidth: '140px', whiteSpace: 'nowrap', overflow: 'hidden' }}>张五 154344341233</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px', color: 'white', textOverflow: 'ellipsis', maxWidth: '140px', minWidth: '140px', whiteSpace: 'nowrap', overflow: 'hidden' }}>李五 15434434123</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ borderBottom: 'none', padding: '4px', color: 'lightblue', textOverflow: 'ellipsis', maxWidth: '80px', minWidth: '50px', whiteSpace: 'nowrap', overflow: 'hidden' }}>值班员</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px', color: 'white', textOverflow: 'ellipsis', maxWidth: '140px', minWidth: '140px', whiteSpace: 'nowrap', overflow: 'hidden' }}>张六 154344341233</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px', color: 'white', textOverflow: 'ellipsis', maxWidth: '140px', minWidth: '140px', whiteSpace: 'nowrap', overflow: 'hidden' }}>李六 15434434123</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ borderBottom: 'none', padding: '4px', color: 'lightblue', textOverflow: 'ellipsis', maxWidth: '80px', minWidth: '50px', whiteSpace: 'nowrap', overflow: 'hidden' }}>值班员</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px', color: 'white', textOverflow: 'ellipsis', maxWidth: '140px', minWidth: '140px', whiteSpace: 'nowrap', overflow: 'hidden' }}>张七 154344341233</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px', color: 'white', textOverflow: 'ellipsis', maxWidth: '140px', minWidth: '140px', whiteSpace: 'nowrap', overflow: 'hidden' }}>李七 15434434123</TableCell>
              </TableRow>
            </TableBody>
          </TableContainer>
        </Paper>

        {/* 街面巡逻 */}
        <Paper className="animate__animated animate__zoomInLeft" sx={{ p: 2, display: "flex", flexDirection: "column", mt: 2, backgroundColor: "#003366", boxShadow: "none", border: "2px solid #1e3a8a", color: "white", width: "100%", marginLeft: 1,zIndex: 3, }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h6">街面巡逻</Typography>
            <Typography sx={{ ml: 2, fontSize: '1rem' }}>今日备勤车辆:</Typography>
            <Button variant="contained" color="primary" sx={{ ml: 'auto' }}>
              编辑
            </Button>
          </Box>

          <TableContainer component={Paper} sx={{ backgroundColor: 'transparent', marginTop: '2px', overflow: 'hidden', minWidth: '100%', boxShadow: "none",zIndex: 3 }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ borderBottom: 'none', padding: '4px', color: 'white', textOverflow: 'ellipsis', maxWidth: '50px', minWidth: '50px', whiteSpace: 'nowrap', overflow: 'hidden' }}></TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px', color: 'white', textOverflow: 'ellipsis', maxWidth: '50px', minWidth: '50px', whiteSpace: 'nowrap', overflow: 'hidden' }}></TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px', color: 'lightblue', textOverflow: 'ellipsis', maxWidth: '80px', minWidth: '80px', whiteSpace: 'nowrap', overflow: 'hidden', fontSize: '1.2rem', textAlign: "center" }}>早</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px', color: 'lightblue', textOverflow: 'ellipsis', maxWidth: '80px', minWidth: '80px', whiteSpace: 'nowrap', overflow: 'hidden', fontSize: '1.2rem', textAlign: "center" }}>中</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px', color: 'lightblue', textOverflow: 'ellipsis', maxWidth: '80px', minWidth: '80px', whiteSpace: 'nowrap', overflow: 'hidden', fontSize: '1.2rem', textAlign: "center" }}>晚</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{ borderBottom: 'none', padding: '4px', color: 'white', textOverflow: 'ellipsis', maxWidth: '50px', minWidth: '50px', whiteSpace: 'nowrap', overflow: 'hidden' }}><PiPoliceCarFill fontSize={20} /></TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px', color: 'lightblue', textOverflow: 'ellipsis', maxWidth: '50px', minWidth: '50px', whiteSpace: 'nowrap', overflow: 'hidden' }}>0490</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px', color: 'white', textOverflow: 'ellipsis', maxWidth: '80px', minWidth: '80px', whiteSpace: 'nowrap', overflow: 'hidden', fontWeight: "bold", textAlign: "center" }}>张三 李四</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px', color: 'white', textOverflow: 'ellipsis', maxWidth: '80px', minWidth: '80px', whiteSpace: 'nowrap', overflow: 'hidden', fontWeight: "bold", textAlign: "center" }}>张三 李四</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px', color: 'white', textOverflow: 'ellipsis', maxWidth: '80px', minWidth: '80px', whiteSpace: 'nowrap', overflow: 'hidden', fontWeight: "bold", textAlign: "center" }}>张三 李四</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ borderBottom: 'none', padding: '4px', color: 'white', textOverflow: 'ellipsis', maxWidth: '50px', minWidth: '50px', whiteSpace: 'nowrap', overflow: 'hidden' }}><PiPoliceCarFill fontSize={20} /></TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px', color: 'lightblue', textOverflow: 'ellipsis', maxWidth: '50px', minWidth: '50px', whiteSpace: 'nowrap', overflow: 'hidden' }}>0490</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px', color: 'white', textOverflow: 'ellipsis', maxWidth: '80px', minWidth: '80px', whiteSpace: 'nowrap', overflow: 'hidden', fontWeight: "bold", textAlign: "center" }}>张三 李四</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px', color: 'white', textOverflow: 'ellipsis', maxWidth: '80px', minWidth: '80px', whiteSpace: 'nowrap', overflow: 'hidden', fontWeight: "bold", textAlign: "center" }}>张三 李四</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px', color: 'white', textOverflow: 'ellipsis', maxWidth: '80px', minWidth: '80px', whiteSpace: 'nowrap', overflow: 'hidden', fontWeight: "bold", textAlign: "center" }}>张三 李四</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ borderBottom: 'none', padding: '4px', color: 'white', textOverflow: 'ellipsis', maxWidth: '50px', minWidth: '50px', whiteSpace: 'nowrap', overflow: 'hidden' }}><PiPoliceCarFill fontSize={20} /></TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px', color: 'lightblue', textOverflow: 'ellipsis', maxWidth: '50px', minWidth: '50px', whiteSpace: 'nowrap', overflow: 'hidden' }}>0490</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px', color: 'white', textOverflow: 'ellipsis', maxWidth: '80px', minWidth: '80px', whiteSpace: 'nowrap', overflow: 'hidden', fontWeight: "bold", textAlign: "center" }}>张三 李四</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px', color: 'white', textOverflow: 'ellipsis', maxWidth: '80px', minWidth: '80px', whiteSpace: 'nowrap', overflow: 'hidden', fontWeight: "bold", textAlign: "center" }}>张三 李四</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px', color: 'white', textOverflow: 'ellipsis', maxWidth: '80px', minWidth: '80px', whiteSpace: 'nowrap', overflow: 'hidden', fontWeight: "bold", textAlign: "center" }}>张三 李四</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ borderBottom: 'none', padding: '4px', color: 'white', textOverflow: 'ellipsis', maxWidth: '50px', minWidth: '50px', whiteSpace: 'nowrap', overflow: 'hidden' }}><PiPoliceCarFill fontSize={20} /></TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px', color: 'lightblue', textOverflow: 'ellipsis', maxWidth: '50px', minWidth: '50px', whiteSpace: 'nowrap', overflow: 'hidden' }}>0490</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px', color: 'white', textOverflow: 'ellipsis', maxWidth: '80px', minWidth: '80px', whiteSpace: 'nowrap', overflow: 'hidden', fontWeight: "bold", textAlign: "center" }}>张三 李四</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px', color: 'white', textOverflow: 'ellipsis', maxWidth: '80px', minWidth: '80px', whiteSpace: 'nowrap', overflow: 'hidden', fontWeight: "bold", textAlign: "center" }}>张三 李四</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px', color: 'white', textOverflow: 'ellipsis', maxWidth: '80px', minWidth: '80px', whiteSpace: 'nowrap', overflow: 'hidden', fontWeight: "bold", textAlign: "center" }}>张三 李四</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ borderBottom: 'none', padding: '4px', color: 'white', textOverflow: 'ellipsis', maxWidth: '50px', minWidth: '50px', whiteSpace: 'nowrap', overflow: 'hidden' }}><PiPoliceCarFill fontSize={20} /></TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px', color: 'lightblue', textOverflow: 'ellipsis', maxWidth: '50px', minWidth: '50px', whiteSpace: 'nowrap', overflow: 'hidden' }}>0490</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px', color: 'white', textOverflow: 'ellipsis', maxWidth: '80px', minWidth: '80px', whiteSpace: 'nowrap', overflow: 'hidden', fontWeight: "bold", textAlign: "center" }}>张三 李四</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px', color: 'white', textOverflow: 'ellipsis', maxWidth: '80px', minWidth: '80px', whiteSpace: 'nowrap', overflow: 'hidden', fontWeight: "bold", textAlign: "center" }}>张三 李四</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px', color: 'white', textOverflow: 'ellipsis', maxWidth: '80px', minWidth: '80px', whiteSpace: 'nowrap', overflow: 'hidden', fontWeight: "bold", textAlign: "center" }}>张三 李四</TableCell>
              </TableRow>
            </TableBody>
          </TableContainer>
        </Paper>

        {/* 工作重点 */}
        <Paper className="animate__animated animate__zoomInLeft" sx={{ p: 2, display: "flex", flexDirection: "column", mt: 2, backgroundColor: "#003366", boxShadow: "none", border: "2px solid #1e3a8a", color: "white", width: "100%", marginLeft: 1,zIndex: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h6">工作重点</Typography>
            <Button variant="contained" color="primary" sx={{ ml: 'auto' }}>
              编辑
            </Button>
          </Box>

          <TableContainer component={Paper} sx={{ backgroundColor: 'transparent', marginTop: '2px', overflow: 'hidden', minWidth: '100%', boxShadow: "none",zIndex: 3}}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ borderBottom: 'none', padding: '4px', color: 'lightblue', textOverflow: 'ellipsis', maxWidth: '40px', minWidth: '40px', whiteSpace: 'nowrap', overflow: 'hidden' }}>序号</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px', color: 'lightblue', textOverflow: 'ellipsis', maxWidth: '90px', minWidth: '90px', whiteSpace: 'nowrap', overflow: 'hidden', textAlign: "center" }}>时间</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px', color: 'lightblue', textOverflow: 'ellipsis', maxWidth: '210px', minWidth: '210px', whiteSpace: 'nowrap', overflow: 'hidden' }}>工作内容</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{ borderBottom: 'none', padding: '4px', color: 'white', textOverflow: 'ellipsis', maxWidth: '40px', minWidth: '40px', whiteSpace: 'nowrap', overflow: 'hidden' }}>1</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px', color: 'white', textOverflow: 'ellipsis', maxWidth: '90px', minWidth: '90px', whiteSpace: 'nowrap', overflow: 'hidden', textAlign: "center" }}>2024-01-01</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px', color: 'white', textOverflow: 'ellipsis', maxWidth: '210px', minWidth: '210px', whiteSpace: 'nowrap', overflow: 'hidden' }}>定海社区晚上盗窃多发,需加派人手</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ borderBottom: 'none', padding: '4px', color: 'white', textOverflow: 'ellipsis', maxWidth: '40px', minWidth: '40px', whiteSpace: 'nowrap', overflow: 'hidden' }}>2</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px', color: 'white', textOverflow: 'ellipsis', maxWidth: '90px', minWidth: '90px', whiteSpace: 'nowrap', overflow: 'hidden', textAlign: "center" }}>2024-01-01</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px', color: 'white', textOverflow: 'ellipsis', maxWidth: '210px', minWidth: '210px', whiteSpace: 'nowrap', overflow: 'hidden' }}>定海社区晚上盗窃多发,需加派人手</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ borderBottom: 'none', padding: '4px', color: 'white', textOverflow: 'ellipsis', maxWidth: '40px', minWidth: '40px', whiteSpace: 'nowrap', overflow: 'hidden' }}>3</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px', color: 'white', textOverflow: 'ellipsis', maxWidth: '90px', minWidth: '90px', whiteSpace: 'nowrap', overflow: 'hidden', textAlign: "center" }}>2024-01-01</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px', color: 'white', textOverflow: 'ellipsis', maxWidth: '210px', minWidth: '210px', whiteSpace: 'nowrap', overflow: 'hidden' }}>定海社区晚上盗窃多发,需加派人手</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ borderBottom: 'none', padding: '4px', color: 'white', textOverflow: 'ellipsis', maxWidth: '40px', minWidth: '40px', whiteSpace: 'nowrap', overflow: 'hidden' }}>4</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px', color: 'white', textOverflow: 'ellipsis', maxWidth: '90px', minWidth: '90px', whiteSpace: 'nowrap', overflow: 'hidden', textAlign: "center" }}>2024-01-01</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px', color: 'white', textOverflow: 'ellipsis', maxWidth: '210px', minWidth: '210px', whiteSpace: 'nowrap', overflow: 'hidden' }}>定海社区晚上盗窃多发,需加派人手</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ borderBottom: 'none', padding: '4px', color: 'white', textOverflow: 'ellipsis', maxWidth: '40px', minWidth: '40px', whiteSpace: 'nowrap', overflow: 'hidden' }}>5</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px', color: 'white', textOverflow: 'ellipsis', maxWidth: '90px', minWidth: '90px', whiteSpace: 'nowrap', overflow: 'hidden', textAlign: "center" }}>2024-01-01</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px', color: 'white', textOverflow: 'ellipsis', maxWidth: '210px', minWidth: '210px', whiteSpace: 'nowrap', overflow: 'hidden' }}>定海社区晚上盗窃多发,需加派人手</TableCell>
              </TableRow>
            </TableBody>
          </TableContainer>
        </Paper>
        </Grid>

        <Grid item xs={8}>
             {/* 居中显示的文本 */}
            <Typography
            className="animate__animated animate__fadeIn " // 添加动画类
            variant="h4"
            sx={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translate(50%,50%)", // 调整文本位置到图片上方
              zIndex: 1, // 确保文本在图片之上
              color: "white", // 文本颜色为白色
            }}
          >
            定海派出所
          </Typography>
        <Box
         className="animate__animated animate__fadeIn"
          component="img"
          src="/source/bg.jpg" // 替换为你的图片URL
          alt="map"
          sx={{
            width: "100%", // 图片宽度，占容器的80%
            height: "100%", // 保持图片的原始比例
            maxWidth: "960px", // 最大宽度限制，避免图片过大
            maxHeight: "440px", // 最大高度限制，保持16:9比例
            borderRadius: 2, // 圆角
            zIndex: -1,
            boxShadow: "none",
          }}
          mt={4}
        >
      </Box>

      <Paper className="animate__animated animate__zoomInUp "
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: "35vh",
              backgroundColor: "#003366",
              boxShadow: "none",
              border: "2px solid #1e3a8a",
              color: "white",
              marginTop: 3
              
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="h6">警情分析</Typography>
              <Box sx={{ml:4}}>
              <FormControl sx={{ minWidth: 120,ml:"center", }} size="small" >
              <InputLabel id="select-label" sx={{ color: 'white' }}>警情类型</InputLabel>
              <Select labelId="select-label" label="选择选项"
              sx={{color: 'white','.MuiOutlinedInput-notchedOutline': { borderColor: 'white' },'.MuiSvgIcon-root': { color: 'white' },}}
              MenuProps={{PaperProps: {sx: {backgroundColor: "#003366",color: "black", },},}}>
                <MenuItem value={1}>警情分析</MenuItem>
                <MenuItem value={2}>Every Night</MenuItem>
                <MenuItem value={3}>Weeknights</MenuItem>
                <MenuItem value={4}>Weekends</MenuItem>
                <MenuItem value={5}>Weekly</MenuItem>
              </Select>
              </FormControl>
              </Box>
              <Button variant="contained" color="primary" sx={{ ml: 'auto' }}>
                编辑
              </Button>
            </Box>
            {/* Add your content here */}
            <TableContainer component={Paper} sx= {{ backgroundColor: 'transparent', marginTop: '10px',overflow: 'hidden',minWidth: '100%',boxShadow: "none",width: '100%',}}>
            <TableHead>
                <TableRow>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: '#7DF9FF',textOverflow: 'ellipsis', maxWidth: '16.4%', minWidth: '16.4%',whiteSpace: 'nowrap', overflow: 'hidden',paddingRight:'10px'}}>报警时间</TableCell>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: '#7DF9FF',textOverflow: 'ellipsis', maxWidth: '16.4%',minWidth: '16.4%', whiteSpace: 'nowrap', overflow: 'hidden',paddingRight:'10px'}}>警情类型</TableCell>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: '#7DF9FF',textOverflow: 'ellipsis', maxWidth: '23.8%',minWidth: '23.8%', whiteSpace: 'nowrap', overflow: 'hidden',textAlign:"auto",paddingRight:'10px'}}>案由</TableCell>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: '#7DF9FF',textOverflow: 'ellipsis', maxWidth: '26.8%',minWidth: '26.8%', whiteSpace: 'nowrap', overflow: 'hidden',textAlign:"auto",paddingRight:'10px'}}>详情</TableCell>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: '#7DF9FF',textOverflow: 'ellipsis', maxWidth: '16.4%',minWidth: '16.4%', whiteSpace: 'nowrap', overflow: 'hidden',textAlign:"center",paddingRight:'10px'}}>责任民警</TableCell>
                </TableRow>
              </TableHead>
            <TableBody>
            <TableRow>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: 'white',textOverflow: 'ellipsis', maxWidth: '16.4%', minWidth: '16.4%',whiteSpace: 'nowrap', overflow: 'hidden',paddingY:'4px',paddingRight:'10px' }}>2024-01-01</TableCell>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: 'white',textOverflow: 'ellipsis', maxWidth: '16.4%',minWidth: '16.4%', whiteSpace: 'nowrap', overflow: 'hidden',paddingY:'4px',paddingRight:'10px'}}>报警类</TableCell>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: 'white',textOverflow: 'ellipsis', maxWidth: '23.8%',minWidth: '23.8%', whiteSpace: 'nowrap', overflow: 'hidden',textAlign:"auto",paddingY:'4px' ,paddingRight:'10px'}}>侵犯人身安全</TableCell>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: 'white',textOverflow: 'ellipsis', maxWidth: '26.8%',minWidth: '26.8%', whiteSpace: 'nowrap', overflow: 'hidden',textAlign:"auto",paddingY:'4px',paddingRight:'10px' }}>A侵犯B人身安全,人身安全</TableCell>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: 'white',textOverflow: 'ellipsis', maxWidth: '16.4%',minWidth: '16.4%', whiteSpace: 'nowrap', overflow: 'hidden',textAlign:"center",paddingY:'4px' ,paddingRight:'10px'}}>张三</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: 'white',textOverflow: 'ellipsis', maxWidth: '16.4%', minWidth: '16.4%',whiteSpace: 'nowrap', overflow: 'hidden',paddingY:'4px',paddingRight:'10px' }}>2024-01-01</TableCell>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: 'white',textOverflow: 'ellipsis', maxWidth: '16.4%',minWidth: '16.4%', whiteSpace: 'nowrap', overflow: 'hidden',paddingY:'4px',paddingRight:'10px'}}>报警类</TableCell>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: 'white',textOverflow: 'ellipsis', maxWidth: '23.8%',minWidth: '23.8%', whiteSpace: 'nowrap', overflow: 'hidden',textAlign:"auto",paddingY:'4px',paddingRight:'10px' }}>侵犯人身安全</TableCell>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: 'white',textOverflow: 'ellipsis', maxWidth: '26.8%',minWidth: '26.8%', whiteSpace: 'nowrap', overflow: 'hidden',textAlign:"auto",paddingY:'4px',paddingRight:'10px' }}>A侵犯B人身安全,人身安全</TableCell>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: 'white',textOverflow: 'ellipsis', maxWidth: '16.4%',minWidth: '16.4%', whiteSpace: 'nowrap', overflow: 'hidden',textAlign:"center",paddingY:'4px' ,paddingRight:'10px'}}>张三</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: 'white',textOverflow: 'ellipsis', maxWidth: '16.4%', minWidth: '16.4%',whiteSpace: 'nowrap', overflow: 'hidden',paddingY:'4px' ,paddingRight:'10px'}}>2024-01-01</TableCell>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: 'white',textOverflow: 'ellipsis', maxWidth: '16.4%',minWidth: '16.4%', whiteSpace: 'nowrap', overflow: 'hidden',paddingY:'4px',paddingRight:'10px'}}>报警类</TableCell>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: 'white',textOverflow: 'ellipsis', maxWidth: '23.8%',minWidth: '23.8%', whiteSpace: 'nowrap', overflow: 'hidden',textAlign:"auto",paddingY:'4px' ,paddingRight:'10px'}}>侵犯人身安全</TableCell>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: 'white',textOverflow: 'ellipsis', maxWidth: '26.8%',minWidth: '26.8%', whiteSpace: 'nowrap', overflow: 'hidden',textAlign:"auto",paddingY:'4px',paddingRight:'10px' }}>A侵犯B人身安全,人身安全</TableCell>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: 'white',textOverflow: 'ellipsis', maxWidth: '16.4%',minWidth: '16.4%', whiteSpace: 'nowrap', overflow: 'hidden',textAlign:"center",paddingY:'4px' ,paddingRight:'10px'}}>张三</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: 'white',textOverflow: 'ellipsis', maxWidth: '16.4%', minWidth: '16.4%',whiteSpace: 'nowrap', overflow: 'hidden',paddingY:'4px' ,paddingRight:'10px'}}>2024-01-01</TableCell>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: 'white',textOverflow: 'ellipsis', maxWidth: '16.4%',minWidth: '16.4%', whiteSpace: 'nowrap', overflow: 'hidden',paddingY:'4px',paddingRight:'10px'}}>报警类</TableCell>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: 'white',textOverflow: 'ellipsis', maxWidth: '23.8%',minWidth: '23.8%', whiteSpace: 'nowrap', overflow: 'hidden',textAlign:"auto",paddingY:'4px',paddingRight:'10px' }}>侵犯人身安全</TableCell>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: 'white',textOverflow: 'ellipsis', maxWidth: '26.8%',minWidth: '26.8%', whiteSpace: 'nowrap', overflow: 'hidden',textAlign:"auto",paddingY:'4px',paddingRight:'10px' }}>A侵犯B人身安全,人身安全</TableCell>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: 'white',textOverflow: 'ellipsis', maxWidth: '16.4%',minWidth: '16.4%', whiteSpace: 'nowrap', overflow: 'hidden',textAlign:"center",paddingY:'4px',paddingRight:'10px'}}>张三</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: 'white',textOverflow: 'ellipsis', maxWidth: '16.4%', minWidth: '16.4%',whiteSpace: 'nowrap', overflow: 'hidden',paddingY:'4px' ,paddingRight:'10px'}}>2024-01-01</TableCell>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: 'white',textOverflow: 'ellipsis', maxWidth: '16.4%',minWidth: '16.4%', whiteSpace: 'nowrap', overflow: 'hidden',paddingY:'4px',paddingRight:'10px'}}>报警类</TableCell>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: 'white',textOverflow: 'ellipsis', maxWidth: '23.8%',minWidth: '23.8%', whiteSpace: 'nowrap', overflow: 'hidden',textAlign:"auto" ,paddingY:'4px',paddingRight:'10px'}}>侵犯人身安全</TableCell>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: 'white',textOverflow: 'ellipsis', maxWidth: '26.8%',minWidth: '26.8%', whiteSpace: 'nowrap', overflow: 'hidden',textAlign:"auto",paddingY:'4px' ,paddingRight:'10px'}}>A侵犯B人身安全,人身安全</TableCell>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: 'white',textOverflow: 'ellipsis', maxWidth: '16.4%',minWidth: '16.4%', whiteSpace: 'nowrap', overflow: 'hidden',textAlign:"center" ,paddingY:'4px',paddingRight:'10px'}}>张三</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: 'white',textOverflow: 'ellipsis', maxWidth: '16.4%', minWidth: '16.4%',whiteSpace: 'nowrap', overflow: 'hidden',paddingY:'4px',paddingRight:'10px' }}>2024-01-01</TableCell>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: 'white',textOverflow: 'ellipsis', maxWidth: '16.4%',minWidth: '16.4%', whiteSpace: 'nowrap', overflow: 'hidden',paddingY:'4px',paddingRight:'10px'}}>报警类</TableCell>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: 'white',textOverflow: 'ellipsis', maxWidth: '23.8%',minWidth: '23.8%', whiteSpace: 'nowrap', overflow: 'hidden',textAlign:"auto",paddingY:'4px',paddingRight:'10px' }}>侵犯人身安全</TableCell>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: 'white',textOverflow: 'ellipsis', maxWidth: '26.8%',minWidth: '26.8%', whiteSpace: 'nowrap', overflow: 'hidden',textAlign:"auto",paddingY:'4px',paddingRight:'10px' }}>A侵犯B人身安全,人身安全</TableCell>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: 'white',textOverflow: 'ellipsis', maxWidth: '16.4%',minWidth: '16.4%', whiteSpace: 'nowrap', overflow: 'hidden',textAlign:"center",paddingY:'4px',paddingRight:'10px' }}>张三</TableCell>
                </TableRow>
            </TableBody>
            </TableContainer>
            </Paper>
      </Grid>
      <Grid item xs={4.5}>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column", mt: 2 ,backgroundColor: "#003366",
          boxShadow: "none",border: "2px solid #1e3a8a",color: "white", height: "30vh",}}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="h6">近期勤务</Typography>
              <Button variant="contained" color="primary" sx={{ ml: 'auto' }}>
                编辑
              </Button>
            </Box>
            {/* Add your content here */}
            <TableContainer component={Paper} sx= {{ backgroundColor: 'transparent', marginTop: '10px',overflow: 'hidden',minWidth: '100%',boxShadow: "none",Width: '100%',}}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'lightblue',textOverflow: 'ellipsis', maxWidth: '60px', minWidth: '60px',whiteSpace: 'nowrap', overflow: 'hidden',textAlign:"center" }}>时间</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'lightblue',textOverflow: 'ellipsis', maxWidth: '80px',minWidth: '80px', whiteSpace: 'nowrap', overflow: 'hidden',textAlign:"center" }}>勤务类型</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'lightblue',textOverflow: 'ellipsis', maxWidth: '200px',minWidth: '200px', whiteSpace: 'nowrap', overflow: 'hidden',}}>   勤务内容</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            <TableRow>
                <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '60px', minWidth: '60px',whiteSpace: 'nowrap', overflow: 'hidden',textAlign:"center",fontSize:'0.6rem',paddingY:'6px' }}>2024-01-01</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '80px',minWidth: '80px', whiteSpace: 'nowrap', overflow: 'hidden',textAlign:"center",fontSize:'0.6rem',paddingY:'6px' }}>清查整治</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '200px',minWidth: '200px', whiteSpace: 'nowrap', overflow: 'hidden',fontSize:'0.6rem',paddingY:'6px'}}>这是勤务内容勤务内容勤务内容勤务内容</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '60px', minWidth: '60px',whiteSpace: 'nowrap', overflow: 'hidden',textAlign:"center",fontSize:'0.6rem',paddingY:'6px' }}>2024-01-01</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '80px',minWidth: '80px', whiteSpace: 'nowrap', overflow: 'hidden',textAlign:"center",fontSize:'0.6rem',paddingY:'6px' }}>清查整治</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '200px',minWidth: '200px', whiteSpace: 'nowrap', overflow: 'hidden',fontSize:'0.6rem',paddingY:'6px'}}>这是勤务内容勤务内容勤务内容勤务内容</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '60px', minWidth: '60px',whiteSpace: 'nowrap', overflow: 'hidden',textAlign:"center",fontSize:'0.6rem',paddingY:'6px' }}>2024-01-01</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '80px',minWidth: '80px', whiteSpace: 'nowrap', overflow: 'hidden',textAlign:"center",fontSize:'0.6rem',paddingY:'6px' }}>清查整治</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '200px',minWidth: '200px', whiteSpace: 'nowrap', overflow: 'hidden',fontSize:'0.6rem',paddingY:'6px'}}>这是勤务内容勤务内容勤务内容勤务内容</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '60px', minWidth: '60px',whiteSpace: 'nowrap', overflow: 'hidden',textAlign:"center",fontSize:'0.6rem',paddingY:'6px' }}>2024-01-01</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '80px',minWidth: '80px', whiteSpace: 'nowrap', overflow: 'hidden',textAlign:"center",fontSize:'0.6rem',paddingY:'6px'  }}>清查整治</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '200px',minWidth: '200px', whiteSpace: 'nowrap', overflow: 'hidden',fontSize:'0.6rem',paddingY:'6px'}}>这是勤务内容勤务内容勤务内容勤务内容</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '60px', minWidth: '60px',whiteSpace: 'nowrap', overflow: 'hidden',textAlign:"center",fontSize:'0.6rem',paddingY:'6px' }}>2024-01-01</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '80px',minWidth: '80px', whiteSpace: 'nowrap', overflow: 'hidden',textAlign:"center",fontSize:'0.6rem',paddingY:'6px' }}>清查整治</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '200px',minWidth: '200px', whiteSpace: 'nowrap', overflow: 'hidden',fontSize:'0.6rem',paddingY:'6px'}}>这是勤务内容勤务内容勤务内容勤务内容</TableCell>
              </TableRow>
            </TableBody>
            </TableContainer>
          </Paper>
      </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
