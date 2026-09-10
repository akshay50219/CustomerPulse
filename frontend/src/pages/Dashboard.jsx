import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography
} from "@mui/material";

function Dashboard() {
  return (
    <Container maxWidth="xl">
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          CustomerPulse Dashboard
        </Typography>

        <Typography color="text.secondary" sx={{ mb: 4 }}>
          Your customer intelligence dashboard will appear here.
        </Typography>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Card>
              <CardContent>
                <Typography color="text.secondary">
                  Total Customers
                </Typography>

                <Typography variant="h4">
                  0
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Card>
              <CardContent>
                <Typography color="text.secondary">
                  Total Purchases
                </Typography>

                <Typography variant="h4">
                  0
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Card>
              <CardContent>
                <Typography color="text.secondary">
                  Total Revenue
                </Typography>

                <Typography variant="h4">
                  ₹0
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Card>
              <CardContent>
                <Typography color="text.secondary">
                  RFM Profiles
                </Typography>

                <Typography variant="h4">
                  0
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Dashboard;