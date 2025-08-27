import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import DashboardLayout from "../layout/DashboardLayout";


export default function UserPermissions() {
  return (
      <DashboardLayout>
      {/* Permissions Content */}
          
        <Grid container spacing={3}>
          {/* Stats Cards */}
          <Grid item xs={12} md={3}>
            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" color="text.secondary">
                  Total Users
                </Typography>
                <Typography variant="h4" color="primary">
                  100
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={3}>
            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" color="text.secondary">
                  Active Users
                </Typography>
                <Typography variant="h4" color="success.main">
                  85
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={3}>
            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" color="text.secondary">
                  Inactive Users
                </Typography>
                <Typography variant="h4" color="warning.main">
                  8
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
        </Grid>
      </DashboardLayout>
    );


  
}