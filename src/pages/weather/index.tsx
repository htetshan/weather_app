import LayoutApp from "@/components/LayoutApp";
import { config } from "@/config";
import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const index = () => {
  const [cityName, setCityName] = useState<string>("");

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          cityName
        )}&units=metric&appid=${config.weatherApikey}`
      );
      const data = await response.json();
      console.log(data);

      alert(`Current temp in ${cityName}: ${data.main.temp}°C`);
    } catch (err) {
      console.error(err);
      console.log("hello");
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 4,
      }}
    >
      <TextField
        label="Enter city name...."
        variant="outlined"
        onChange={(eve) => setCityName(eve.target.value)}
      />
      <Button
        variant="contained"
        sx={{ bgcolor: "red" }}
        onClick={handleSearch}
      >
        Search
      </Button>
    </Box>
  );
};

export default index;
