import { Box, Button, Container, Paper, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Login() {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center"
        }}
      >
        <Paper
          elevation={3}
          sx={{
            width: "100%",
            p: 4
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            CustomerPulse
          </Typography>

          <Typography color="text.secondary" sx={{ mb: 3 }}>
            Sign in to your business dashboard.
          </Typography>

          <Box component="form" sx={{ display: "grid", gap: 2 }}>
            <TextField
              label="Email"
              type="email"
              fullWidth
            />

            <TextField
              label="Password"
              type="password"
              fullWidth
            />

            <Button variant="contained" size="large">
              Sign In
            </Button>

            <Button component={Link} to="/register">
              Create an account
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}

export default Login;