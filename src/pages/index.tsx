import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignContent: "center" }}
    >
      <Typography>Welcome Our Weather APP</Typography>
      <Link href={"/weather"}>checking weater</Link>
    </Box>
  );
};

export default Home;
