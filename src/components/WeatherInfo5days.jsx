/* eslint-disable react/prop-types */
export default function WeatherInfo5days({ weather5days }) {
  let dates = {};
  for (let weatherDate of weather5days.list) {
    const DATE = new Date(weatherDate.dt * 1000).toLocaleDateString();

    if (!dates[DATE]) {
      dates[DATE] = weatherDate;
    }
  }

  const NEXT_5_DAYS = Object.values(dates).slice(0, 5);

  function KelvinToCelsius(tempK) {
    return `${Math.round(Number(tempK) - 273.15)}°C`;
  }

  function convertDate(date) {
    return new Date(date.dt * 1000).toLocaleDateString("pt-BR", {
      weekday: "long",
      day: "2-digit",
    });
  }

  return (
    <section className="section">
      <h2 className="text-3xl font-bold text-balance text-center">
        Previsão para os próximos 5 dias
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] grid-flow-dense gap-5 w-full">
        {NEXT_5_DAYS.map((forecast) => (
          <div key={forecast.dt} className="section__card">
            <p>{convertDate(forecast)}</p>
            <img
              src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
              className="w-24"
              alt="Ícone de Clima"
            />
            <p>{`${KelvinToCelsius(
              forecast.main.temp_min
            )} mín / ${KelvinToCelsius(forecast.main.temp_max)} máx`}</p>
            <p className="capitalize font-semibold">
              {forecast.weather[0].description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
