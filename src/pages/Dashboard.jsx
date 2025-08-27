import React, { useContext } from 'react';
import { Grid, Card, CardContent, Typography } from "@mui/material";
import DashboardLayout from "../layout/DashboardLayout";
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  
  return (
    <DashboardLayout>
    {/* Dashboard Content */}
        
          <Grid container spacing={3}>
            {/* Stats Cards */}
            <Grid item xs={12} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                <CardContent>
                  <Typography variant="h6" color="text.secondary">
                    Total Employees
                  </Typography>
                  <Typography variant="h4" color="primary">
                    120
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                <CardContent>
                  <Typography variant="h6" color="text.secondary">
                    Active Leaves
                  </Typography>
                  <Typography variant="h4" color="success.main">
                    15
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                <CardContent>
                  <Typography variant="h6" color="text.secondary">
                    Pending OT Requests
                  </Typography>
                  <Typography variant="h4" color="warning.main">
                    8
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                <CardContent>
                  <Typography variant="h6" color="text.secondary">
                    Reports Generated
                  </Typography>
                  <Typography variant="h4" color="error.main">
                    42
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Placeholder for Charts */}
            <Grid item xs={12} md={6}>
              <Card sx={{ borderRadius: 3, boxShadow: 3, height: 300 }}>
                <CardContent>
                  <Typography variant="h6">Attendance Trend</Typography>
                  
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card sx={{ borderRadius: 3, boxShadow: 3, height: 300 }}>
                <CardContent>
                  <Typography variant="h6">Leave Breakdown</Typography>
                  
                </CardContent>
              </Card>
            </Grid>
          </Grid>
    </DashboardLayout>
  );
};

export default Dashboard;
