import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

const InfoBox = ({info}) => {
  const imageUrl =
    "https://images.pexels.com/photos/11357123/pexels-photo-11357123.jpeg?auto=compress&cs=tinysrgb&w=600";
  return (
    <div className="InfoBox">
      <h1>Weather Info -{info.weather}</h1>
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={imageUrl}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <div>Temperature ={info.temp}&deg;C</div>
              <div>Humidity ={info.humidity}</div>
              <div>Min Temp ={info.tempMin}</div>
              <div>Max Temp ={info.tempMax}</div>
              <div>Feels Like ={info.feelsLike}&deg;C</div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InfoBox;
