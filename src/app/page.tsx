import * as React from "react";
import { Container, Grid, Paper, Typography, Box, Button, List, ListItem, ListItemText,Table,TableBody,TableHead,TableCell,TableRow, TableContainer,} from "@mui/material";


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
                    <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '80px', minWidth: '50px',whiteSpace: 'nowrap', overflow: 'hidden', }}>154654654</TableCell>
                    <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '120px',minWidth: '120px', whiteSpace: 'nowrap', overflow: 'hidden', }}>454446546545465465464654654654</TableCell>
                    <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '120px',minWidth: '120px', whiteSpace: 'nowrap', overflow: 'hidden', }}>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                <TableRow>
                    <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '80px', minWidth: '50px',whiteSpace: 'nowrap', overflow: 'hidden', }}>154654654</TableCell>
                    <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '120px',minWidth: '120px', whiteSpace: 'nowrap', overflow: 'hidden', }}>454446546545465465464654654654</TableCell>
                    <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '120px',minWidth: '120px', whiteSpace: 'nowrap', overflow: 'hidden', }}>Status</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '80px', minWidth: '50px',whiteSpace: 'nowrap', overflow: 'hidden', }}>154654654</TableCell>
                    <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '120px',minWidth: '120px', whiteSpace: 'nowrap', overflow: 'hidden', }}>454446546545465465464654654654</TableCell>
                    <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '120px',minWidth: '120px', whiteSpace: 'nowrap', overflow: 'hidden', }}>Status</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '80px', minWidth: '50px',whiteSpace: 'nowrap', overflow: 'hidden', }}>154654654</TableCell>
                    <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '120px',minWidth: '120px', whiteSpace: 'nowrap', overflow: 'hidden', }}>454446546545465465464654654654</TableCell>
                    <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '120px',minWidth: '120px', whiteSpace: 'nowrap', overflow: 'hidden', }}>Status</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '80px', minWidth: '50px',whiteSpace: 'nowrap', overflow: 'hidden', }}>154654654</TableCell>
                    <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '120px',minWidth: '120px', whiteSpace: 'nowrap', overflow: 'hidden', }}>454446546545465465464654654654</TableCell>
                    <TableCell sx={{ borderBottom: 'none', padding: '4px',color: 'white',textOverflow: 'ellipsis', maxWidth: '120px',minWidth: '120px', whiteSpace: 'nowrap', overflow: 'hidden', }}>Status</TableCell>
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
            <Box sx={{ mt: 2}}>
              <Grid container spacing={1} >
                  <Grid item xs = {2}>
                    <Typography sx={{lineHeight: '1.2'}} ></Typography>
                  </Grid>
                  <Grid item xs = {2.5}>
                    <Typography sx={{lineHeight: '1.2'}}></Typography>
                  </Grid>
                  <Grid item xs = {2.5}>
                    <Typography sx={{lineHeight: '1.2'}}>早</Typography>
                    </Grid>
                  <Grid item xs = {2.5}>
                    <Typography sx={{lineHeight: '1.2'}}>中</Typography>
                    </Grid>
                  <Grid item xs = {2.5}>
                    <Typography sx={{lineHeight: '1.2'}}>晚</Typography>
                  </Grid>
                  <Grid item xs = {2}>
                    <Typography sx={{lineHeight: '1.2'}} ></Typography>
                  </Grid>
                  <Grid item xs = {2.5}>
                    <Typography sx={{lineHeight: '1.2'}}>4587</Typography>
                  </Grid>
                  <Grid item xs = {2.5}>
                    <Typography sx={{lineHeight: '1.2',overflow: 'hidden',}}>张三 李四</Typography>
                    </Grid>
                  <Grid item xs = {2.5}>
                    <Typography sx={{lineHeight: '1.2'}}>中</Typography>
                    </Grid>
                  <Grid item xs = {2.5}>
                    <Typography sx={{lineHeight: '1.2'}}>晚</Typography>
                  </Grid>
                  <Grid item xs = {2}>
                    <Typography sx={{lineHeight: '1.2'}} ></Typography>
                  </Grid>
                  <Grid item xs = {2.5}>
                    <Typography sx={{lineHeight: '1.2'}}></Typography>
                  </Grid>
                  <Grid item xs = {2.5}>
                    <Typography sx={{lineHeight: '1.2'}}>早</Typography>
                    </Grid>
                  <Grid item xs = {2.5}>
                    <Typography sx={{lineHeight: '1.2'}}>中</Typography>
                    </Grid>
                  <Grid item xs = {2.5}>
                    <Typography sx={{lineHeight: '1.2'}}>晚</Typography>
                  </Grid>
                  <Grid item xs = {2}>
                    <Typography sx={{lineHeight: '1.2'}} ></Typography>
                  </Grid>
                  <Grid item xs = {2.5}>
                    <Typography sx={{lineHeight: '1.2'}}></Typography>
                  </Grid>
                  <Grid item xs = {2.5}>
                    <Typography sx={{lineHeight: '1.2'}}>早</Typography>
                    </Grid>
                  <Grid item xs = {2.5}>
                    <Typography sx={{lineHeight: '1.2'}}>中</Typography>
                    </Grid>
                  <Grid item xs = {2.5}>
                    <Typography sx={{lineHeight: '1.2'}}>晚</Typography>
                  </Grid>
                  <Grid item xs = {2}>
                    <Typography sx={{lineHeight: '1.2'}} ></Typography>
                  </Grid>
                  <Grid item xs = {2.5}>
                    <Typography sx={{lineHeight: '1.2'}}></Typography>
                  </Grid>
                  <Grid item xs = {2.5}>
                    <Typography sx={{lineHeight: '1.2'}}>早</Typography>
                    </Grid>
                  <Grid item xs = {2.5}>
                    <Typography sx={{lineHeight: '1.2'}}>中</Typography>
                    </Grid>
                  <Grid item xs = {2.5}>
                    <Typography sx={{lineHeight: '1.2'}}>晚</Typography>
                  </Grid>
                  <Grid item xs = {2}>
                    <Typography sx={{lineHeight: '1.2'}} ></Typography>
                  </Grid>
                  <Grid item xs = {2.5}>
                    <Typography sx={{lineHeight: '1.2'}}></Typography>
                  </Grid>
                  <Grid item xs = {2.5}>
                    <Typography sx={{lineHeight: '1.2'}}>早</Typography>
                    </Grid>
                  <Grid item xs = {2.5}>
                    <Typography sx={{lineHeight: '1.2'}}>中</Typography>
                    </Grid>
                  <Grid item xs = {2.5}>
                    <Typography sx={{lineHeight: '1.2'}}>晚</Typography>
                  </Grid>
              </Grid>
            </Box>
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
              <Button variant="contained" color="primary" sx={{ ml: 'auto' }}>
                编辑
              </Button>
            </Box>
            {/* Add your content here */}
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
          </Paper>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column", mt: 2 ,backgroundColor: "rgba(255,255,255,0.0)",
          boxShadow: "none",border: "2px solid white",color: "white", height: "30vh",}}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="h6">民警-警情</Typography>
            </Box>
            {/* Add your content here */}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
