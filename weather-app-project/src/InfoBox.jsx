import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
import "./InfoBox.css";
export default function InfoBox({info}){
    const INIT_URL="https://thumbs.dreamstime.com/b/clean-weather-covid-sun-sit-yalow-glow-wild-flower-inside-wheat-sky-color-full-178616346.jpg"
    const HOT_URL="https://images.unsplash.com/photo-1652442808708-6511a4e51e8e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL="https://media.istockphoto.com/id/498063665/photo/rainy-landscape.webp?a=1&b=1&s=612x612&w=0&k=20&c=hOE6L7f7OoSKUW1Q4tR27GoEkOU_ywKJGCvSO77SeZg=";
    return(
        <>
            <div className="InfoBox">
                <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                   <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity>80?RAIN_URL:info.temp>15?HOT_URL:COLD_URL}
                         title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                           {info.city}{" "}
                            {info.humidity>80
                            ?<ThunderstormIcon/>
                            :info.temp>15
                            ?<SunnyIcon/>
                            :<AcUnitIcon/>}
                        </Typography>
                        <Typography variant="body2" color='text.secondary' component={"span"} >
                        <div>Temperature={info.temp}&deg;C</div>
                        <div>Humidity={info.humidity}</div>
                        <p>Min Temo={info.tempMin}&deg;C</p>
                        <p>Max Temo={info.tempMax}&deg;C</p>
                        <p>The weather can be described as <i>{info.weather}</i> and   feels like {info.feelsLike}&deg;C</p>

                        </Typography>   
                    </CardContent>
               </Card>
               </div>
                
            </div>
        </>
    )

}