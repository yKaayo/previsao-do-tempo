/* eslint-disable react/prop-types */
export default function WeatherInfo({ weather }) {
  console.log(weather);

  function KelvinToCelsius(tempK) {
    return `${Math.round(Number(tempK) - 273.15)}°C`;
  }

  return (
    <section className="flex flex-col items-center gap-5 mx-5 p-5 w-full rounded-md bg-slate-50 bg-opacity-50 mb-10">
      <h2 className="text-3xl font-bold">{weather.name}</h2>
      <div className="flex items-center">
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
          className="w-24"
          alt="Ícone de Clima"
        />
        <p className="text-5xl font-bold">
          {KelvinToCelsius(weather.main.temp)}
          
        </p>
      </div>
      <p className="capitalize font-semibold">{weather.weather[0].description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        <p>Sensação Térmica: {KelvinToCelsius(weather.main.feels_like)}</p>
        <p>Umidade: {weather.main.humidity}%</p>
        <p>Vento: {weather.wind.speed}km/h</p>
      </div>
    </section>
  );
}
