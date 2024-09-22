import { createContext, useState } from "react";
import { colors } from "../../../Helper/Colors";
import Cookies from "universal-cookie";

export const Themes= createContext({});
const cookie = new Cookies()
export default function ThemeProvider({children}){

  const darkTheme = cookie.get("DARK");

  
  const [theme, setTheme] = useState(darkTheme ? colors.dark : colors.light);

return <Themes.Provider value={{theme,setTheme}} >{children}</Themes.Provider>
} 