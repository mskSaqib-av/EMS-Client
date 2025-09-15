import { useEffect, useState } from "react";
import axios from '../api/axios';
import { Grid, Card, CardContent, Typography } from "@mui/material";
import DashboardLayout from "../layout/DashboardLayout";
import UsersTable from "../components/Tables/UsersTable";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("/User/GetUser"); // baseURL auto add
        setUsers(res.data.data);
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    };

    fetchUsers(); // call async fn
  }, []);
  return (
        <DashboardLayout>
        {/* Users Content */}
            
          <Grid container spacing={3}>
            {/* Stats Cards */}
            <Grid item xs={12} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                <CardContent>
                  <Typography variant="h6" color="text.secondary">
                    Total Users
                  </Typography>
                  <Typography variant="h4" color="primary">
                    {users.length}
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
                    {users.filter((u) => u.active).length}
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
                    {users.filter((u) => !u.active).length}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            
          </Grid>
          {/* Users Table */}
        <UsersTable users={users} />
        </DashboardLayout>
      );
}