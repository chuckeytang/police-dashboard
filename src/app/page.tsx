import * as React from "react";
import { Container, Grid, Paper, Typography, Box, Button, List, ListItem, ListItemText,Table,TableBody,TableHead,TableCell,TableRow, 
  TableContainer,Select,FormControl,InputLabel,MenuItem } from "@mui/material";

const Dashboard = () => {
  return (
    <Container sx={{ width: "100vw", height: "100vh", padding: 0 }}>
    <Grid container spacing={3} alignItems="flex-start" justifyContent="flex-start">
        {/* 左侧面板 */}
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: "30vh",
              backgroundColor: "rgba(255,255,255,0.0)",
              boxShadow: "none",
              border: "2px solid white",
              color: "white",
              overflow: "hidden",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="h6">勤务管理</Typography>
              <Typography sx={{ ml: 2, fontSize: '1rem' }}>今日备勤等级:</Typography>
              <Button variant="contained" color="primary" sx={{ ml: 'auto' }}>
                编辑
              </Button>
            </Box>

              <TableContainer component={Paper} sx= {{ backgroundColor: 'transparent', marginTop: '20px',overflow: 'hidden',minWidth: '100%',boxShadow: "none",}}>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'lightblue',textOverflow: 'ellipsis', maxWidth: '80px', minWidth: '50px',whiteSpace: 'nowrap', overflow: 'hidden', }}>值班领导</TableCell>
                    <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '140px',minWidth: '140px', whiteSpace: 'nowrap', overflow: 'hidden', }}>张三 154344341233</TableCell>
                    <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '140px',minWidth: '140px', whiteSpace: 'nowrap', overflow: 'hidden', }}>李三 15434434123</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                <TableRow>
                    <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'lightblue',textOverflow: 'ellipsis', maxWidth: '80px', minWidth: '50px',whiteSpace: 'nowrap', overflow: 'hidden', }}>值班员</TableCell>
                    <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '140px',minWidth: '140px', whiteSpace: 'nowrap', overflow: 'hidden', }}>张四 154344341233</TableCell>
                    <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '140px',minWidth: '140px', whiteSpace: 'nowrap', overflow: 'hidden', }}>李四 15434434123</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'lightblue',textOverflow: 'ellipsis', maxWidth: '80px', minWidth: '50px',whiteSpace: 'nowrap', overflow: 'hidden', }}>值班员</TableCell>
                    <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '140px',minWidth: '140px', whiteSpace: 'nowrap', overflow: 'hidden', }}>张五 154344341233</TableCell>
                    <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '140px',minWidth: '140px', whiteSpace: 'nowrap', overflow: 'hidden', }}>李五 15434434123</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'lightblue',textOverflow: 'ellipsis', maxWidth: '80px', minWidth: '50px',whiteSpace: 'nowrap', overflow: 'hidden', }}>值班员</TableCell>
                    <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '140px',minWidth: '140px', whiteSpace: 'nowrap', overflow: 'hidden', }}>张六 154344341233</TableCell>
                    <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '140px',minWidth: '140px', whiteSpace: 'nowrap', overflow: 'hidden', }}>李六 15434434123</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'lightblue',textOverflow: 'ellipsis', maxWidth: '80px', minWidth: '50px',whiteSpace: 'nowrap', overflow: 'hidden', }}>值班员</TableCell>
                    <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '140px',minWidth: '140px', whiteSpace: 'nowrap', overflow: 'hidden', }}>张七 154344341233</TableCell>
                    <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '140px',minWidth: '140px', whiteSpace: 'nowrap', overflow: 'hidden', }}>李七 15434434123</TableCell>
                  </TableRow>
                </TableBody>
              </TableContainer>
            {/* Add your content here */}
          </Paper>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column", mt: 2 ,backgroundColor: "rgba(255,255,255,0.0)",
          boxShadow: "none",border: "2px solid white",color: "white", height: "30vh",}}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="h6">街面巡逻</Typography>
              <Typography sx={{ ml: 2, fontSize: '1rem' }}>今日备勤车辆:</Typography>
              <Button variant="contained" color="primary" sx={{ ml: 'auto' }}>
                编辑
              </Button>
            </Box>

            <TableContainer component={Paper} sx= {{ backgroundColor: 'transparent', marginTop: '2px',overflow: 'hidden',minWidth: '100%',boxShadow: "none",}}>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '50px', minWidth: '50px',whiteSpace: 'nowrap', overflow: 'hidden', }}></TableCell>
                  <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '50px',minWidth: '50px', whiteSpace: 'nowrap', overflow: 'hidden', }}></TableCell>
                  <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'lightblue',textOverflow: 'ellipsis', maxWidth: '80px',minWidth: '80px', whiteSpace: 'nowrap', overflow: 'hidden',fontSize: '1.2rem',textAlign:"center" }}>早</TableCell>
                  <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'lightblue',textOverflow: 'ellipsis', maxWidth: '80px',minWidth: '80px', whiteSpace: 'nowrap', overflow: 'hidden',fontSize: '1.2rem',textAlign:"center" }}>中</TableCell>
                  <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'lightblue',textOverflow: 'ellipsis', maxWidth: '80px',minWidth: '80px', whiteSpace: 'nowrap', overflow: 'hidden',fontSize: '1.2rem',textAlign:"center" }}>晚</TableCell>
                </TableRow>
              </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '50px', minWidth: '50px',whiteSpace: 'nowrap', overflow: 'hidden', }}></TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'lightblue',textOverflow: 'ellipsis', maxWidth: '50px',minWidth: '50px', whiteSpace: 'nowrap', overflow: 'hidden', }}>0490</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '80px',minWidth: '80px', whiteSpace: 'nowrap', overflow: 'hidden',fontWeight:"bold",textAlign:"center"}}>张三 李四</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '80px',minWidth: '80px', whiteSpace: 'nowrap', overflow: 'hidden',fontWeight:"bold",textAlign:"center"}}>张三 李四</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '80px',minWidth: '80px', whiteSpace: 'nowrap', overflow: 'hidden',fontWeight:"bold",textAlign:"center"}}>张三 李四</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '50px', minWidth: '50px',whiteSpace: 'nowrap', overflow: 'hidden', }}></TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'lightblue',textOverflow: 'ellipsis', maxWidth: '50px',minWidth: '50px', whiteSpace: 'nowrap', overflow: 'hidden', }}>0490</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '80px',minWidth: '80px', whiteSpace: 'nowrap', overflow: 'hidden',fontWeight:"bold",textAlign:"center"}}>张三 李四</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '80px',minWidth: '80px', whiteSpace: 'nowrap', overflow: 'hidden',fontWeight:"bold",textAlign:"center"}}>张三 李四</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '80px',minWidth: '80px', whiteSpace: 'nowrap', overflow: 'hidden',fontWeight:"bold",textAlign:"center"}}>张三 李四</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '50px', minWidth: '50px',whiteSpace: 'nowrap', overflow: 'hidden', }}></TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'lightblue',textOverflow: 'ellipsis', maxWidth: '50px',minWidth: '50px', whiteSpace: 'nowrap', overflow: 'hidden', }}>0490</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '80px',minWidth: '80px', whiteSpace: 'nowrap', overflow: 'hidden',fontWeight:"bold",textAlign:"center"}}>张三 李四</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '80px',minWidth: '80px', whiteSpace: 'nowrap', overflow: 'hidden',fontWeight:"bold",textAlign:"center"}}>张三 李四</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '80px',minWidth: '80px', whiteSpace: 'nowrap', overflow: 'hidden',fontWeight:"bold",textAlign:"center"}}>张三 李四</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '50px', minWidth: '50px',whiteSpace: 'nowrap', overflow: 'hidden', }}></TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'lightblue',textOverflow: 'ellipsis', maxWidth: '50px',minWidth: '50px', whiteSpace: 'nowrap', overflow: 'hidden', }}>0490</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '80px',minWidth: '80px', whiteSpace: 'nowrap', overflow: 'hidden',fontWeight:"bold",textAlign:"center"}}>张三 李四</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '80px',minWidth: '80px', whiteSpace: 'nowrap', overflow: 'hidden',fontWeight:"bold",textAlign:"center"}}>张三 李四</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '80px',minWidth: '80px', whiteSpace: 'nowrap', overflow: 'hidden',fontWeight:"bold",textAlign:"center"}}>张三 李四</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '50px', minWidth: '50px',whiteSpace: 'nowrap', overflow: 'hidden', }}></TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'lightblue',textOverflow: 'ellipsis', maxWidth: '50px',minWidth: '50px', whiteSpace: 'nowrap', overflow: 'hidden', }}>0490</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '80px',minWidth: '80px', whiteSpace: 'nowrap', overflow: 'hidden',fontWeight:"bold",textAlign:"center"}}>张三 李四</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '80px',minWidth: '80px', whiteSpace: 'nowrap', overflow: 'hidden',fontWeight:"bold",textAlign:"center"}}>张三 李四</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '80px',minWidth: '80px', whiteSpace: 'nowrap', overflow: 'hidden',fontWeight:"bold",textAlign:"center"}}>张三 李四</TableCell>
              </TableRow>
            </TableBody>
            </TableContainer>
            {/* Add your content here */}
          </Paper>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column", mt: 2 ,backgroundColor: "rgba(255,255,255,0.0)",
          boxShadow: "none",border: "2px solid white",color: "white", height: "30vh",}}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="h6">工作重点</Typography>
              <Button variant="contained" color="primary" sx={{ ml: 'auto' }}>
                编辑
              </Button>
            </Box>
            {/* Add your content here */}
            <TableContainer component={Paper} sx= {{ backgroundColor: 'transparent', marginTop: '2px',overflow: 'hidden',minWidth: '100%',boxShadow: "none",}}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'lightblue',textOverflow: 'ellipsis', maxWidth: '40px', minWidth: '40px',whiteSpace: 'nowrap', overflow: 'hidden', }}>序号</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'lightblue',textOverflow: 'ellipsis', maxWidth: '90px',minWidth: '90px', whiteSpace: 'nowrap', overflow: 'hidden',textAlign:"center" }}>时间</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'lightblue',textOverflow: 'ellipsis', maxWidth: '210px',minWidth: '210px', whiteSpace: 'nowrap', overflow: 'hidden',}}>工作内容</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            <TableRow>
                <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '40px', minWidth: '40px',whiteSpace: 'nowrap', overflow: 'hidden', }}>1</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '90px',minWidth: '90px', whiteSpace: 'nowrap', overflow: 'hidden',textAlign:"center" }}>2024-01-01</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '210px',minWidth: '210px', whiteSpace: 'nowrap', overflow: 'hidden',}}>定海社区晚上盗窃多发,需加派人手</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '40px', minWidth: '40px',whiteSpace: 'nowrap', overflow: 'hidden', }}>2</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '90px',minWidth: '90px', whiteSpace: 'nowrap', overflow: 'hidden',textAlign:"center" }}>2024-01-01</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '210px',minWidth: '210px', whiteSpace: 'nowrap', overflow: 'hidden',}}>定海社区晚上盗窃多发,需加派人手</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '40px', minWidth: '40px',whiteSpace: 'nowrap', overflow: 'hidden', }}>3</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '90px',minWidth: '90px', whiteSpace: 'nowrap', overflow: 'hidden',textAlign:"center" }}>2024-01-01</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '210px',minWidth: '210px', whiteSpace: 'nowrap', overflow: 'hidden',}}>定海社区晚上盗窃多发,需加派人手</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '40px', minWidth: '40px',whiteSpace: 'nowrap', overflow: 'hidden', }}>4</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '90px',minWidth: '90px', whiteSpace: 'nowrap', overflow: 'hidden',textAlign:"center" }}>2024-01-01</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '210px',minWidth: '210px', whiteSpace: 'nowrap', overflow: 'hidden',}}>定海社区晚上盗窃多发,需加派人手</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '40px', minWidth: '40px',whiteSpace: 'nowrap', overflow: 'hidden', }}>5</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '90px',minWidth: '90px', whiteSpace: 'nowrap', overflow: 'hidden',textAlign:"center" }}>2024-01-01</TableCell>
                <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '210px',minWidth: '210px', whiteSpace: 'nowrap', overflow: 'hidden',}}>定海社区晚上盗窃多发,需加派人手</TableCell>
              </TableRow>
            </TableBody>
          </TableContainer>
          </Paper>
        </Grid>
        

        {/* 中间地图 */}
        
        <Grid item xs={12} md={4}>
          <Typography variant="h4" align="center" gutterBottom>
            定海派出所
          </Typography>
          <Box
          component="img"
          src="/source/bg.jpg"
          alt="地图"
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: -1,
          }}
          />
        </Grid>

        {/* 右侧面板 */}
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: "30vh",
              backgroundColor: "rgba(255,255,255,0.0)",
              boxShadow: "none",
              border: "2px solid white",
              color: "white",
              
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="h6">警情分析</Typography>
              <FormControl sx={{ minWidth: 120,ml:"center", }} size="small" >
              <InputLabel id="select-label" sx={{ color: 'white' }}>警情类型</InputLabel>
              <Select labelId="select-label" label="选择选项"
              sx={{color: 'white','.MuiOutlinedInput-notchedOutline': { borderColor: 'white' },'.MuiSvgIcon-root': { color: 'white' },}}
              MenuProps={{PaperProps: {sx: {backgroundColor: "rgba(255,255,255,0.8)",color: "black", },},}}>
                <MenuItem value={1}>警情分析</MenuItem>
                <MenuItem value={2}>Every Night</MenuItem>
                <MenuItem value={3}>Weeknights</MenuItem>
                <MenuItem value={4}>Weekends</MenuItem>
                <MenuItem value={5}>Weekly</MenuItem>
              </Select>
              </FormControl>
              <Button variant="contained" color="primary" sx={{ ml: 'auto' }}>
                编辑
              </Button>
            </Box>
            {/* Add your content here */}
            <TableContainer component={Paper} sx= {{ backgroundColor: 'transparent', marginTop: '10px',overflow: 'hidden',minWidth: '100%',boxShadow: "none",}}>
            <TableHead>
                <TableRow>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: '#7DF9FF',textOverflow: 'ellipsis', maxWidth: '55px', minWidth: '55px',whiteSpace: 'nowrap', overflow: 'hidden',fontSize: '0.75rem', }}>报警时间</TableCell>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: '#7DF9FF',textOverflow: 'ellipsis', maxWidth: '55px',minWidth: '55px', whiteSpace: 'nowrap', overflow: 'hidden',fontSize: '0.75rem',}}>警情类型</TableCell>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: '#7DF9FF',textOverflow: 'ellipsis', maxWidth: '80px',minWidth: '80px', whiteSpace: 'nowrap', overflow: 'hidden',fontSize: '0.75rem',textAlign:"auto",}}>案由</TableCell>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: '#7DF9FF',textOverflow: 'ellipsis', maxWidth: '90px',minWidth: '90px', whiteSpace: 'nowrap', overflow: 'hidden',fontSize: '0.75rem',textAlign:"auto",}}>详情</TableCell>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: '#7DF9FF',textOverflow: 'ellipsis', maxWidth: '55px',minWidth: '55px', whiteSpace: 'nowrap', overflow: 'hidden',fontSize: '0.75rem',textAlign:"center",}}>责任民警</TableCell>
                </TableRow>
              </TableHead>
            <TableBody>
            <TableRow>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: 'white',textOverflow: 'ellipsis', maxWidth: '55px', minWidth: '55px',whiteSpace: 'nowrap', overflow: 'hidden',fontSize: '0.6rem',paddingY:'4px' }}>2024-01-01</TableCell>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: 'white',textOverflow: 'ellipsis', maxWidth: '55px',minWidth: '55px', whiteSpace: 'nowrap', overflow: 'hidden',fontSize: '0.6rem',paddingY:'4px'}}>报警类</TableCell>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: 'white',textOverflow: 'ellipsis', maxWidth: '80px',minWidth: '80px', whiteSpace: 'nowrap', overflow: 'hidden',fontSize: '0.6rem',textAlign:"auto",paddingY:'4px' }}>侵犯人身安全</TableCell>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: 'white',textOverflow: 'ellipsis', maxWidth: '90px',minWidth: '90px', whiteSpace: 'nowrap', overflow: 'hidden',fontSize: '0.6rem',textAlign:"auto",paddingY:'4px' }}>A侵犯B人身安全,人身安全</TableCell>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: 'white',textOverflow: 'ellipsis', maxWidth: '55px',minWidth: '55px', whiteSpace: 'nowrap', overflow: 'hidden',fontSize: '0.6rem',textAlign:"center",paddingY:'4px' }}>张三</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: 'white',textOverflow: 'ellipsis', maxWidth: '55px', minWidth: '55px',whiteSpace: 'nowrap', overflow: 'hidden',fontSize: '0.6rem',paddingY:'4px' }}>2024-01-01</TableCell>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: 'white',textOverflow: 'ellipsis', maxWidth: '55px',minWidth: '55px', whiteSpace: 'nowrap', overflow: 'hidden',fontSize: '0.6rem',paddingY:'4px'}}>报警类</TableCell>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: 'white',textOverflow: 'ellipsis', maxWidth: '80px',minWidth: '80px', whiteSpace: 'nowrap', overflow: 'hidden',fontSize: '0.6rem',textAlign:"auto",paddingY:'4px' }}>侵犯人身安全</TableCell>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: 'white',textOverflow: 'ellipsis', maxWidth: '90px',minWidth: '90px', whiteSpace: 'nowrap', overflow: 'hidden',fontSize: '0.6rem',textAlign:"auto",paddingY:'4px' }}>A侵犯B人身安全,人身安全</TableCell>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: 'white',textOverflow: 'ellipsis', maxWidth: '55px',minWidth: '55px', whiteSpace: 'nowrap', overflow: 'hidden',fontSize: '0.6rem',textAlign:"center",paddingY:'4px' }}>张三</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: 'white',textOverflow: 'ellipsis', maxWidth: '55px', minWidth: '55px',whiteSpace: 'nowrap', overflow: 'hidden',fontSize: '0.6rem',paddingY:'4px' }}>2024-01-01</TableCell>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: 'white',textOverflow: 'ellipsis', maxWidth: '55px',minWidth: '55px', whiteSpace: 'nowrap', overflow: 'hidden',fontSize: '0.6rem',paddingY:'4px'}}>报警类</TableCell>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: 'white',textOverflow: 'ellipsis', maxWidth: '80px',minWidth: '80px', whiteSpace: 'nowrap', overflow: 'hidden',fontSize: '0.6rem',textAlign:"auto",paddingY:'4px' }}>侵犯人身安全</TableCell>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: 'white',textOverflow: 'ellipsis', maxWidth: '90px',minWidth: '90px', whiteSpace: 'nowrap', overflow: 'hidden',fontSize: '0.6rem',textAlign:"auto",paddingY:'4px' }}>A侵犯B人身安全,人身安全</TableCell>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: 'white',textOverflow: 'ellipsis', maxWidth: '55px',minWidth: '55px', whiteSpace: 'nowrap', overflow: 'hidden',fontSize: '0.6rem',textAlign:"center",paddingY:'4px' }}>张三</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: 'white',textOverflow: 'ellipsis', maxWidth: '55px', minWidth: '55px',whiteSpace: 'nowrap', overflow: 'hidden',fontSize: '0.6rem',paddingY:'4px' }}>2024-01-01</TableCell>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: 'white',textOverflow: 'ellipsis', maxWidth: '55px',minWidth: '55px', whiteSpace: 'nowrap', overflow: 'hidden',fontSize: '0.6rem',paddingY:'4px'}}>报警类</TableCell>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: 'white',textOverflow: 'ellipsis', maxWidth: '80px',minWidth: '80px', whiteSpace: 'nowrap', overflow: 'hidden',fontSize: '0.6rem',textAlign:"auto",paddingY:'4px' }}>侵犯人身安全</TableCell>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: 'white',textOverflow: 'ellipsis', maxWidth: '90px',minWidth: '90px', whiteSpace: 'nowrap', overflow: 'hidden',fontSize: '0.6rem',textAlign:"auto",paddingY:'4px' }}>A侵犯B人身安全,人身安全</TableCell>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: 'white',textOverflow: 'ellipsis', maxWidth: '55px',minWidth: '55px', whiteSpace: 'nowrap', overflow: 'hidden',fontSize: '0.6rem',textAlign:"center",paddingY:'4px'}}>张三</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: 'white',textOverflow: 'ellipsis', maxWidth: '55px', minWidth: '55px',whiteSpace: 'nowrap', overflow: 'hidden',fontSize: '0.6rem',paddingY:'4px' }}>2024-01-01</TableCell>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: 'white',textOverflow: 'ellipsis', maxWidth: '55px',minWidth: '55px', whiteSpace: 'nowrap', overflow: 'hidden',fontSize: '0.6rem',paddingY:'4px'}}>报警类</TableCell>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: 'white',textOverflow: 'ellipsis', maxWidth: '80px',minWidth: '80px', whiteSpace: 'nowrap', overflow: 'hidden',fontSize: '0.6rem',textAlign:"auto" ,paddingY:'4px'}}>侵犯人身安全</TableCell>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: 'white',textOverflow: 'ellipsis', maxWidth: '90px',minWidth: '90px', whiteSpace: 'nowrap', overflow: 'hidden',fontSize: '0.6rem',textAlign:"auto",paddingY:'4px' }}>A侵犯B人身安全,人身安全</TableCell>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: 'white',textOverflow: 'ellipsis', maxWidth: '55px',minWidth: '55px', whiteSpace: 'nowrap', overflow: 'hidden',fontSize: '0.6rem',textAlign:"center" ,paddingY:'4px'}}>张三</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: 'white',textOverflow: 'ellipsis', maxWidth: '55px', minWidth: '55px',whiteSpace: 'nowrap', overflow: 'hidden',fontSize: '0.6rem',paddingY:'4px' }}>2024-01-01</TableCell>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: 'white',textOverflow: 'ellipsis', maxWidth: '55px',minWidth: '55px', whiteSpace: 'nowrap', overflow: 'hidden',fontSize: '0.6rem',paddingY:'4px'}}>报警类</TableCell>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: 'white',textOverflow: 'ellipsis', maxWidth: '80px',minWidth: '80px', whiteSpace: 'nowrap', overflow: 'hidden',fontSize: '0.6rem',textAlign:"auto",paddingY:'4px' }}>侵犯人身安全</TableCell>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: 'white',textOverflow: 'ellipsis', maxWidth: '90px',minWidth: '90px', whiteSpace: 'nowrap', overflow: 'hidden',fontSize: '0.6rem',textAlign:"auto",paddingY:'4px' }}>A侵犯B人身安全,人身安全</TableCell>
                  <TableCell sx={{ borderBottom: 'none', padding: '2px',color: 'white',textOverflow: 'ellipsis', maxWidth: '55px',minWidth: '55px', whiteSpace: 'nowrap', overflow: 'hidden',fontSize: '0.6rem',textAlign:"center",paddingY:'4px' }}>张三</TableCell>
                </TableRow>
            </TableBody>
            </TableContainer>
          </Paper>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column", mt: 2 ,backgroundColor: "rgba(255,255,255,0.0)",
          boxShadow: "none",border: "2px solid white",color: "white", height: "30vh",}}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="h6">近期勤务</Typography>
              <Button variant="contained" color="primary" sx={{ ml: 'auto' }}>
                编辑
              </Button>
            </Box>
            {/* Add your content here */}
            <TableContainer component={Paper} sx= {{ backgroundColor: 'transparent', marginTop: '10px',overflow: 'hidden',minWidth: '100%',boxShadow: "none",}}>
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
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column", mt: 2 ,backgroundColor: "rgba(255,255,255,0.0)",
          boxShadow: "none",border: "2px solid white",color: "white", height: "30vh",}}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="h6">民警-警情</Typography>
            </Box>
            {/* Add your content here */}
            <TableContainer component={Paper} sx= {{ backgroundColor: 'transparent', marginTop: '10px',overflow: 'hidden',minWidth: '100%',boxShadow: "none",}}>
                <TableHead>
                <TableRow>
                    <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'lightblue',textOverflow: 'ellipsis', maxWidth: '80px', minWidth: '50px',whiteSpace: 'nowrap', overflow: 'hidden',textAlign:"center" }}>序号</TableCell>
                    <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'lightblue',textOverflow: 'ellipsis', maxWidth: '140px',minWidth: '140px', whiteSpace: 'nowrap', overflow: 'hidden',textAlign:"center" }}>民警</TableCell>
                    <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'lightblue',textOverflow: 'ellipsis', maxWidth: '140px',minWidth: '140px', whiteSpace: 'nowrap', overflow: 'hidden',textAlign:"center" }}>警情</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                <TableRow>
                    <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '80px', minWidth: '50px',whiteSpace: 'nowrap', overflow: 'hidden',textAlign:"center" }}>1</TableCell>
                    <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '140px',minWidth: '140px', whiteSpace: 'nowrap', overflow: 'hidden',textAlign:"center" }}>张三</TableCell>
                    <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '140px',minWidth: '140px', whiteSpace: 'nowrap', overflow: 'hidden',textAlign:"center" }}>43</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '80px', minWidth: '50px',whiteSpace: 'nowrap', overflow: 'hidden',textAlign:"center" }}>1</TableCell>
                    <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '140px',minWidth: '140px', whiteSpace: 'nowrap', overflow: 'hidden',textAlign:"center" }}>张三</TableCell>
                    <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '140px',minWidth: '140px', whiteSpace: 'nowrap', overflow: 'hidden',textAlign:"center" }}>43</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '80px', minWidth: '50px',whiteSpace: 'nowrap', overflow: 'hidden',textAlign:"center" }}>1</TableCell>
                    <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '140px',minWidth: '140px', whiteSpace: 'nowrap', overflow: 'hidden',textAlign:"center" }}>张三</TableCell>
                    <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '140px',minWidth: '140px', whiteSpace: 'nowrap', overflow: 'hidden',textAlign:"center" }}>43</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '80px', minWidth: '50px',whiteSpace: 'nowrap', overflow: 'hidden',textAlign:"center" }}>1</TableCell>
                    <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '140px',minWidth: '140px', whiteSpace: 'nowrap', overflow: 'hidden',textAlign:"center" }}>张三</TableCell>
                    <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '140px',minWidth: '140px', whiteSpace: 'nowrap', overflow: 'hidden',textAlign:"center" }}>43</TableCell>
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
