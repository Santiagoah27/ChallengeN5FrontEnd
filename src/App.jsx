import { PermissionsProvider } from "./context/PermissionsProvider";
import FormPermissions from "./components/FormPermissions";
import { Container, Grid, Typography } from "@material-ui/core";

function App() {
  return (
    <>
      <PermissionsProvider>
        <Container>
          <header>
            <Typography align="center" marginY={5} component="h1" variant="h3">
              Permisos
            </Typography>
          </header>

          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={10} md={6} lg={4}>
              <FormPermissions />
            </Grid>
          </Grid>
        </Container>
      </PermissionsProvider>
    </>
  );
}

export default App;
