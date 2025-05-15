import { Box, Container, Stack } from "@mui/material";
import Card from "@mui/joy/Card";
import { CssVarsProvider, Typography } from "@mui/joy";
import CardOverflow from "@mui/joy/CardOverflow";
import AspectRatio from "@mui/joy/AspectRatio";

import { createSelector } from "reselect";
import { retrieveTopUsers } from "./selector";
import { useSelector } from "react-redux";
import { Member } from "../../../lib/types/member";
import { serverApi } from "../../../lib/config"; 

/** REDUX SELECTOR */
const topUsersRetriever = createSelector(
  retrieveTopUsers,
  (topUsers) => ({ topUsers })
);

export default function ActiveUsers() {
  const { topUsers } = useSelector(topUsersRetriever);

  return (
    <div className="active-users-frame">
      <Container>
        <Stack className="main" spacing={2}>
          <Box className="category-title">
            <Typography level="h4">Active Users</Typography>
          </Box>
          <Stack direction="row" spacing={2} className="card-frame">
            <CssVarsProvider>
              {topUsers.length !== 0 ? (
                topUsers.map((member: Member) => {
                  const imagePath = `${serverApi}/${member.memberImage}`; 
                  return (
                    <Card key={member._id} variant="outlined" sx={{ width: 160 }}>
                      <CardOverflow>
                        <AspectRatio ratio="1">
                          <img
                            src={imagePath}
                            alt={member.memberNick}
                            loading="lazy"
                            style={{ borderRadius: "12px" }}
                          />
                        </AspectRatio>
                      </CardOverflow>
                      <Typography level="body-md" sx={{ textAlign: "center", mt: -2 }}>
                        {member.memberNick}
                      </Typography>
                    </Card>
                  );
                })
              ) : (
                <Box>No Active Users</Box>
              )}
            </CssVarsProvider>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
