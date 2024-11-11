import axios from "axios";
import { useRef, useState } from "react";
import WeatherInfo from "./components/WeatherInfo";
import WeatherInfo5days from "./components/WeatherInfo5days";

export default function App() {
  const [weather, setWeather] = useState();
  const [weather5days, setWeather5days] = useState();

  const inputRef = useRef();

  async function searchCity() {
    const CITY = inputRef.current.value;
    const KEY = "255a67dc42074448c98b8ca746423552";
    const LANG = "pt_br";

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&lang=${LANG}&appid=${KEY}`;
    const URL_5_DAYS = `https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&lang=${LANG}&appid=${KEY}`;

    const API_WEATHER = await axios.get(URL);
    const API_WEATHER_5_DAYS = await axios.get(URL_5_DAYS);

    setWeather(API_WEATHER.data);
    setWeather5days(API_WEATHER_5_DAYS.data);
  }

  return (
    <main className="min-h-dvh bg-cyan-600">
      <div className="flex flex-col items-center sm:container sm:mx-auto mx-5 py-10">
        <h1 className="mb-5 text-5xl text-slate-50 text-center">
          Previsão do Tempo
        </h1>
        <div className="mb-5">
          <input
            ref={inputRef}
            className="px-3 py-1 rounded-s-lg"
            type="text"
            placeholder="Digite o nome da cidade"
          />
          <button
            onClick={searchCity}
            className="px-3 py-1 rounded-e-lg text-slate-50 bg-orange-500"
          >
            Buscar
          </button>
        </div>
        {weather && <WeatherInfo weather={weather} />}
        {weather5days && <WeatherInfo5days weather5days={weather5days} />}
      </div>
    </main>
  );
}
