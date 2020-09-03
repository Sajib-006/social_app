import { Typography, Button, Grid } from "@material-ui/core";

const AssistanceType = ({ setStep, setFormData }) => {
  return (
    <div align="center">
      <Typography variant="h5">What do you seek?</Typography>

      <Grid container spacing={1} style={{ marginTop: 10 }}>
        <Grid item lg={4}>
          <Button
            variant="contained"
            onClick={() => {
              setStep(1);
              setFormData("assistanceType", "counseling");
            }}
          >
            Counseling
          </Button>

          <Typography variant="body1" style={{ marginTop: 5 }}>
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests.
          </Typography>
        </Grid>

        <Grid item lg={4}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setStep(1);
              setFormData("assistanceType", "guidance");
            }}
          >
            Legal Guidance
          </Button>

          <Typography variant="body1" style={{ marginTop: 5 }}>
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests.
          </Typography>
        </Grid>

        <Grid item lg={4}>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              setStep(1);
              setFormData("assistanceType", "action");
            }}
          >
            Legal Action
          </Button>

          <Typography variant="body1" style={{ marginTop: 5 }}>
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default AssistanceType;
