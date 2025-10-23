import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react"
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
    const [isDarkMode, setDarkMode] = useState(true);
    // useEffect is used for "Do something after render, and optionally clean it up."
    useEffect(()=>{
        const storedTheme = localStorage.getItem("theme");
        if(storedTheme=== "dark"){
            document.documentElement.classList.add("dark");
            setDarkMode(true);
        }
        else{
            document.documentElement.classList.remove("dark");
            setDarkMode(false);
        }
    },[]) //can also add dependencies
    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme","light");
            setDarkMode(false);
        }
        else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme","dark");
            setDarkMode(true);
        }
    }
    return <button onClick={toggleTheme} className={cn(" max-sm:hidden top-5 right-5 z-50",
    "rounded-full transition-colors duration-300 focus:outline-hidden")}>
        {/*only ternary opertor be used because "if" is a "statement", not an "expression", and 
        JSX can only contain "expressions" inside { } like ternary operator. */}
        {isDarkMode ?
            (<Sun className="h-6 w-6 text-yellow-400" />
            ) : (
                <Moon className="h-6 w-6 text-blue-900" />)}
    </button>
}