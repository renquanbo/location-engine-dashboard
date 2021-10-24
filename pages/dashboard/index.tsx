import { Button, Typography } from "@mui/material";
import { Paper } from "@mui/material";
import AppLayout from "../../components/layout/AppLayout";

const tempData = {
  title: 'This is dashboard page',
  content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
    tempor incididunt ut labore et dolore magna aliqua.Rhoncus dolor purus non
    enim praesent elementum facilisis leo vel.Risus at ultrices mi tempus
    imperdiet.Semper risus in hendrerit gravida rutrum quisque non tellus.
    Convallis convallis tellus id interdum velit laoreet id donec ultrices.
    Odio morbi quis commodo odio aenean sed adipiscing.Amet nisl suscipit
    adipiscing bibendum est ultricies integer quis.Cursus euismod quis viverra
    nibh cras.Metus vulputate eu scelerisque felis imperdiet proin fermentum
    leo.Mauris commodo quis imperdiet massa tincidunt.Cras tincidunt lobortis
    feugiat vivamus at augue.At augue eget arcu dictum varius duis at
    consectetur lorem.Velit sed ullamcorper morbi tincidunt.Lorem donec massa
    sapien faucibus et molestie ac.`
}

export default function DashboardPage() {
  const arr = Array(10).fill(tempData);
  // const first5 = arr.filter((element, index) => index < 5);
  return (
    <AppLayout>
      <Paper>
        {arr.filter((element, index) => index < 2)
          .map((item, index) => (
          <>
            <Typography variant="h2" key={index}>
              {item.title}
            </Typography>
            <Typography paragraph key={index}>
              {item.content}
            </Typography>
          </>
        ))}
        <Button variant="outlined">Test Button</Button>
        <Button variant="contained">Test Button2</Button>
      </Paper>
    </AppLayout>
  )
}