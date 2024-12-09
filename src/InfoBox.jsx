import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./InfoBox.css"
import { Margin } from '@mui/icons-material';

function InfoBox({ info }) {
    const INTI_URL = "https://images.unsplash.com/photo-1722858344552-7acf888a7046?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    const HOT_URL = "https://images.unsplash.com/photo-1629937914954-0cf9ecdff77d?q=80&w=1947&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1477601263568-180e2c6d046e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "

    return (
        <div className="InfoBox">
            <div className="card-container">

                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}

                        image={
                            info.humidity > 80
                                ? RAIN_URL
                                : info.temp > 15
                                    ? HOT_URL
                                    : COLD_URL
                        }

                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            <b style={{padding:"10px"}}>
                                {info.city}</b>
                            {
                                info.humidity > 80
                                    ? <ThunderstormIcon />
                                    : info.temp > 15
                                        ? <WbSunnyIcon />
                                        : <AcUnitIcon />
                            }

                        </Typography>
                        <Typography variant="body2" color='text.secondary' component={"span"}>
                            <p>Temperature = {info.temp}&deg;C</p>
                            <p>Humidity = {info.humidity} </p>
                            <p>Min Temp  = {info.tempMin} &deg;C </p>

                            <p>Max Temp = {info.tempMax} &deg;C </p>

                            <p>The weather can be described as {info.weather} and feels like {info.feelslike} &deg;C </p>

                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default InfoBox;