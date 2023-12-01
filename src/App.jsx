import { useEffect, useState } from "react"
import './App.css';

export default function App() {

  // Comprobar tema preferido del navegador y llamar a la funcion que cambia el tema
  //Tiene "setTheme" cambia"handleChangeTheme"
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark"
    }
    return "light"
  });


  // Activas tema oscuro(El tema claro es el base, si activas oscuro activas la alternativa)
  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark")
    } else {
      document.querySelector("html").classList.remove("dark")
    }
  }, [theme])

  //"handleChangeTheme" llama a la funcion "setTheme"
  //"handleChangeTheme" permite al usar el button llamar a "setTheme"
  //"setTheme" es otra funcion que cambia el tema, ademas se le llama desde otros lugares para usarla tambien
  const handleChangeTheme = () => {
    setTheme(prevTheme => prevTheme == "light" ? "dark" : "light")
  }

  return (
    <button className="theme-toggle" onClick={handleChangeTheme}>
      Theme
    </button>
  )
}
