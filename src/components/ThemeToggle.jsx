import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react"
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
    const [isLightMode, setLightMode] = useState(false);
    // useEffect is used for "Do something after render, and optionally clean it up."
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "light") {
            document.documentElement.classList.add("light");
            setLightMode(true);
        }
        else {
            document.documentElement.classList.remove("light");
            setLightMode(false);
        }
    }, []) //can also add dependencies
    const toggleTheme = () => {
        if (isLightMode) {
            document.documentElement.classList.remove("light");
            localStorage.setItem("theme", "dark");
            setLightMode(false);
        }
        else {
            document.documentElement.classList.add("light");
            localStorage.setItem("theme", "light");
            setLightMode(true);
        }
    }
    return <button onClick={toggleTheme} className={cn(" max-sm:hidden top-5 right-5 z-50",
        "rounded-full transition-colors duration-300 focus:outline-hidden")}>
        {/*only ternary opertor be used because "if" is a "statement", not an "expression", and 
        JSX can only contain "expressions" inside { } like ternary operator. */}
        {isLightMode ?
            (<Sun className="h-6 w-6 text-yellow-400" />
            ) : (
                <Moon className="h-6 w-6 text-blue-900" />)}
    </button>
}