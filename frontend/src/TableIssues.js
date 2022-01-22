import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Tables from "./components/Table";
import Form from "./components/Form";
import { get_all_issues, get_param_issues } from "./api";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function TableIssues() {
  const [issues, SetIssues] = React.useState([
    {
      _id: "61eb92be578bd73b6ead500c",
      title: "AEORA",
      priority: "mid",
      label: ["landscape"],
    },
  ]);

  React.useEffect(() => {
    get_all_issues().then((res) => {
      SetIssues(res);
    });
  }, []);

  const [priority, setPriority] = React.useState("all");
  const [electrical, setElectrical] = React.useState(false);
  const [mechanical, setMechanical] = React.useState(false);
  const [landscape, setLandscape] = React.useState(false);
  const [plumbing, setPlumbing] = React.useState(false);

  const onClickButton = () => {
    let arr = [];
    if (electrical) {
      arr.push("electrical");
    }
    if (mechanical) {
      arr.push("mechanical");
    }
    if (landscape) {
      arr.push("landscape");
    }
    if (plumbing) {
      arr.push("plumbing");
    }

    const req = {
      priority,
      label: arr,
    };
    // console.log(req);
    get_param_issues(req).then((res) => {
      SetIssues(res);
    });
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Voox Issues
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Form
              setPriority={setPriority}
              setElectrical={setElectrical}
              setMechanical={setMechanical}
              setLandscape={setLandscape}
              setPlumbing={setPlumbing}
            />
          </Container>
        </Box>
        <Button variant="contained" onClick={() => onClickButton()}>
          Get Issues
        </Button>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Tables issues={issues} />
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Alrynto
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Test Purpose Only - VooX
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
