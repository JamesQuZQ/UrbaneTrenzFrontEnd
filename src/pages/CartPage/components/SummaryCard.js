import { Card, Grid, Typography } from "@mui/material";

export default function SummaryCard() {
  return (
    <div className="CartCard">
      <Card sx={{
        minWidth: 320,
        mt: 3,
        mr: 3,
        p: 1
        }}>
        <Typography
          variant="body1"
        >
          Cart Subtotal:
        </Typography>
      </Card>
    </div>
  );
}