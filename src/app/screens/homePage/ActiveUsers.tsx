// import React from "react";
// import { Box, Container, Stack } from "@mui/material";
// import Card from "@mui/joy/Card";
// import { CssVarsProvider, Typography } from "@mui/joy";
// import CardOverflow from "@mui/joy/CardOverflow";
// import AspectRatio from "@mui/joy/AspectRatio";

// const activeUsers = [
//     { memberNick: "Justin", memberImage: "/img/justin.webp" },
//     { memberNick: "Rose", memberImage: "/img/rose.webp" },
//     { memberNick: "Nusret", memberImage: "/img/nusret.webp" },
//     { memberNick: "Martin", memberImage: "/img/martin.webp" },
//   ];
  
//   export default function ActiveUsers() {
//     return (
//       <div className="active-users-frame">
//         <Container>
//           <Stack className="main">
//             <Box className="category-title">Active User</Box>
//             <Stack className="card-framee">
//             <CssVarsProvider>
//                                     <Card className="card">
//                                         <CardCover>
//                                             <img src={ele.imagePath} alt={ele.productName} />
//                                             <CardCover className="card-cover" />
//                                         </CardCover>

//                                         <CardContent sx={{ justifyContent: "flex-end" }}>
//                                             <Stack
//                                                 flexDirection={"row"}
//                                                 justifyContent={"space-between"}
//                                             >
//                                                 <Typography
//                                                     level="h2"
//                                                     fontSize="lg"
//                                                     textColor="#fff"
//                                                     mb={1}
//                                                 >
//                                                     {ele.productName}
//                                                 </Typography>
//                                                 <Typography
//                                                     sx={{
//                                                         fontWeight: "md",
//                                                         color: "neutral.300",
//                                                         alignItems: "center",
//                                                         display: "flex",
//                                                     }}
//                                                 >
//                                                     20
//                                                     <VisibilityIcon
//                                                         sx={{
//                                                             fontSize: 25,
//                                                             marginLeft: "5px"
//                                                         }}
//                                                     />
//                                                 </Typography>
//                                             </Stack>
//                                         </CardContent>

//                                         <CardOverflow
//                                             sx={{
//                                                 display: "flex",
//                                                 gap: 1.5,
//                                                 px: 1.5,
//                                                 py: "var(--Card-padding)",
//                                                 borderTop: "1px solid",
//                                                 height: "60px",
//                                             }}
//                                         >
//                                             <Typography
//                                                 startDecorator={<DescriptionOutlinedIcon />}
//                                                 textColor="neutral.300"
//                                             >
//                                                 This is a delicious meal
//                                             </Typography>
//                                         </CardOverflow>
//                                     </Card>
//                                 </CssVarsProvider>
//             </Stack>