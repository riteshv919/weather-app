import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"

function InfoBox({info}) {
    const INTI_URL = "https://images.unsplash.com/photo-1722858344552-7acf888a7046?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    

    return (
        <div className="InfoBox">
            <div className="card-container">

            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={INTI_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                    </Typography>
                    <Typography variant="body2" color= 'text.secondary' component={"span"}>
                        <p>Temperature = {info.temp}&deg;C</p> 
                        <p>Humidity = {info.humidity} </p>
                        <p>Min Temp  = {info.tempMin} </p>

                        <p>Max Temp = {info.tempMax} </p>

                        <p>The weather can be described as {info.weather} and feels like {info.feelslike} </p>

                    </Typography>
                </CardContent>
            </Card>
            </div>
        </div>
    );
}

export default InfoBox;