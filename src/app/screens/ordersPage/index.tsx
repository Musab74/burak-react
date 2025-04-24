import { useState, SyntheticEvent } from "react";
import { Container, Stack, Box } from "@mui/joy";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext  from "@mui/lab/TabContext";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PausedOrders from "./PausedOrders";
import ProcessOrders from "./ProcessOrders";
import FinishedOrders from "./FinishedOrders";
import "../../../css/orders.css";


export default function OrdersPage() {
    const [value, setValue] = useState("1");

    const handleChange = (e: SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    return (
        <div className="order-page">
            <Container className="order-container">
                <Stack className="order-list">
                    <TabContext value={value}>
                        <Box className="order-nav-frame">
                            <Box sx={{borderBottom:1, borderColor:"divider"}}>
                                <Tabs 
                                value={value}
                                onChange={handleChange}
                                aria-label="basic tabs example"
                                className="table_list"
                                >
                                    <Tab label="Paused orders" value={"1"} />
                                    <Tab label="Process orders" value={"2"} />
                                    <Tab label="Finished orders" value={"3"} />
                                </Tabs>
                            </Box>
                        </Box>
                        <Stack className="order-main-content">
                            <PausedOrders />
                            <ProcessOrders />
                            <FinishedOrders />
                        </Stack>
                    </TabContext>
                </Stack>

                <Stack className="orders-right">
                    <Box className="order-info-box">
                        <Box className="member-box">
                            <div className="order-user-img">
                                <img
                                src="/icons/default-user.svg"
                                className="order-user-avatar"
                                />
                                <div className="order-user-icon-box">
                                    <img
                                    src="/icons/user-badge.svg"
                                    className="order-user-prof-img"
                                    />
                                </div>
                            </div>
                            <span className="order-user-img">Martin</span>
                            <span className="order-user-prof">User</span>
                        </Box>
                        <Box className="liner"></Box>
                        <Box className="order-user-address">
                            <div style={{display: "flex"}}>
                                <LocationOnIcon></LocationOnIcon>
                            </div>
                        </Box>
                    </Box>
                </Stack>

            
            </Container>
        </div>
    )
}