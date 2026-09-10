import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography
} from "@mui/material";
import { Link } from "react-router-dom";

function Register() {
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
            Create your account
          </Typography>

          <Typography color="text.secondary" sx={{ mb: 3 }}>
            Start understanding your customers with CustomerPulse.
          </Typography>

          <Box component="form" sx={{ display: "grid", gap: 2 }}>
            <TextField label="Name" fullWidth />

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
              Register
            </Button>

            <Button component={Link} to="/login">
              Already have an account?
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}

export default Register;