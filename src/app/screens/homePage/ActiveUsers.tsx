import React from "react";
import { Box, Container, Stack } from "@mui/material";
import Card from "@mui/joy/Card";
import { CssVarsProvider, Typography } from "@mui/joy";
import CardOverflow from "@mui/joy/CardOverflow";
import AspectRatio from "@mui/joy/AspectRatio";

const activeUsers = [
    { memberNick: "Justin", memberImage: "/img/justin.webp" },
    { memberNick: "Rose", memberImage: "/img/rose.webp" },
    { memberNick: "Nusret", memberImage: "/img/nusret.webp" },
    { memberNick: "Martin", memberImage: "/img/martin.webp" },
];

export default function ActiveUsers() {
    return (
        <div className="active-users-frame">
            <Container>
                <Stack className="main" spacing={2}>
                    <Box className="category-title">
                        <Typography level="h4">Active User</Typography>
                    </Box>
                    <Stack direction="row" spacing={2} className="card-frame">
                        <CssVarsProvider>
                            {activeUsers.length !== 0 ? (
                                activeUsers.map((user, index) => (
                                    <Card key={index} variant="outlined" sx={{ width: 160 }}>
                                        <CardOverflow>
                                            <AspectRatio ratio="1">
                                                <img
                                                    src={user.memberImage}
                                                    alt={user.memberNick}
                                                    loading="lazy"
                                                    style={{ borderRadius: "12px" }}
                                                />
                                            </AspectRatio>
                                        </CardOverflow>
                                        <Typography level="body-md" sx={{ textAlign: "center", mt: -2 }}>
                                            {user.memberNick}
                                        </Typography>
                                    </Card>
                                ))
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
