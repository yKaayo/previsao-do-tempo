import axios from "axios";
import { useRef, useState } from "react";
import WeatherInfo from "./components/WeatherInfo";
import WeatherInfo5days from "./components/WeatherInfo5days";

export default function App() {
  const [weather, setWeather] = useState();
  const [weather5days, setWeather5days] = useState();

  const inputRef = useRef();

  async function searchCity() {
    const city = inputRef.current.value;
    const key = "255a67dc42074448c98b8ca746423552";
    const lang = "pt_br";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${lang}&appid=${key}`;
    const url5days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=${lang}&appid=${key}`

    const apiWeather = await axios.get(url);
    const apiWeather5days = await axios.get(url5days);

    setWeather(apiWeather.data);
    setWeather5days(apiWeather5days.data);
  }

  return (
    <main className="min-h-dvh bg-cyan-600">
      <div className="flex flex-col items-center sm:container sm:mx-auto mx-5 py-10">
        <h1 className="mb-5 text-5xl text-slate-50 text-center">Previsão do Tempo</h1>
        <div className="mb-5">
          <input
            ref={inputRef}
            className="px-3 py-1 rounded-s-lg"
            type="text"
            placeholder="Digite o nome da cidade"
          />
          <button onClick={searchCity} className="px-3 py-1 rounded-e-lg text-slate-50 bg-orange-500">Buscar</button>
        </div>
        {weather && <WeatherInfo weather={weather} />}
        {weather5days && <WeatherInfo5days weather5days={weather5days} />}
      </div>
    </main>
  );
}
