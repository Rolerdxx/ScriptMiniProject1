import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ResponsiveAppBar() {
  const [shouldRedirect, setRe] = useState(false);
  const [shouldRedirect2, setRe2] = useState(false);
  const [shouldRedirect3, setRe3] = useState(false);

  const navigate = useNavigate();

  React.useEffect(() => {
    if (shouldRedirect) {
      navigate("/ScriptMiniProject1/items");
    }
    if (shouldRedirect2) {
      navigate("/ScriptMiniProject1");
    }
    if (shouldRedirect3) {
      navigate("/ScriptMiniProject1/pro");
    }
  });

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={() => setRe2(true)}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}>
            BILAL
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              key="about"
              onClick={() => setRe3(true)}
              sx={{ my: 2, color: "white", display: "block" }}>
              main page
            </Button>
            <Button
              key="items"
              onClick={() => setRe(true)}
              sx={{ my: 2, color: "white", display: "block" }}>
              courses
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
