import { ThemeProvider } from "@/components/theme_switcher/theme-provider.tsx";
import  Search_Input from "./components/search.tsx";
import  SideCard from "./components/card_menu.tsx";
import  CardCurrent from "./components/card_current.tsx";
import  CardTodayForecast from "./components/card_today_forecast.tsx";
import  AirConditions from "./components/air_conditions.tsx";
import  SevenDayForecast from "./components/seven_day_forecast.tsx";


function App() {
  return (
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

              <div className="flex items-center justify-center w-screen h-screen bg-bodybackground font-Rubik">
                <div className="rounded-3xl m-16 bg-mainbackground p-4 w-3/5 h-3/4">
                  <div className="grid grid-cols-[1fr_7fr_4fr] grid-rows-[8%_28%_28%_30%] gap-3 h-full  ">

              <SideCard />

              <Search_Input />

              <CardCurrent />

              <CardTodayForecast />

              <AirConditions />
        
              <SevenDayForecast />


                  </div>
                </div>
              </div> 

          </ThemeProvider>
  );
}

export default App;
