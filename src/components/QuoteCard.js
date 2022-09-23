import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

export default function QuoteCard({ quote }) {
  return (
    <Paper elevation={5} style={{ height: 420, padding: 10 }}>
      <Card
        style={{
          height: "400px",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#02315E",
        }}
      >
        <CardContent style={{ padding: 0, width: "100%" }}>
          <Grid container spacing={2} style={{ marginTop: 0, padding: 5 }}>
            <Grid
              item
              xs={6}
              style={{ display: "flex", justifyContent: "center", padding: 0 }}
            >
              <img
                src={process.env.PUBLIC_URL + `/assets/` + quote.image}
                style={{ height: "380px", borderRadius: 10 }}
                alt="Eren Jaegar"
                className="quote-image"
              />
            </Grid>
            <Grid item xs={6} style={{ display: "flex", alignItems: "center" }}>
              <div>
                <Typography
                  variant="h3"
                  style={{ color: "#fff", fontFamily: "IM Fell English" }}
                  className="quote-text"
                >
                  {`"${quote.qoute}"`}
                </Typography>
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  style={{ color: "#fff", marginTop: 15 }}
                >
                  {`- ${quote.author}`}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Paper>
  );
}
