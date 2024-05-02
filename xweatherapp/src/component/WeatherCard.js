import './WeatherCard.css';

export default function DisplayCard ({title, data}) {
    return (
        <div className="weather-card">
            <h3>{title}</h3>
            <p>{data}</p>
        </div>
    );
};