import { useEffect, useState, type JSX } from "react";
import style from "./Anecdotes.module.css";
type Theme = "light" | "dark";

export default function Anecdotes(): JSX.Element {
    const [setup, setSetup] = useState<string>("");
    const [punchline, setPunchline] = useState<string>("");
    const [theme, setTheme] = useState<Theme>("light");

    function toggleTheme(): void {
        setTheme((prev: Theme) => (prev === "light" ? "dark" : "light"));
    }

    const pageStyle: React.CSSProperties =
        theme === "light"
            ? { backgroundColor: "#ffffff", color: "#000000", height: "500px", padding: "20px" }
            : { backgroundColor: "#000000", color: "#ffffff", height: "500px", padding: "20px" };


    async function loadAnecdote(): Promise<void> {
        const res = await fetch(
            "https://official-joke-api.appspot.com/random_joke"
        );
        const obj = await res.json();
        setSetup(obj.setup);
        setPunchline(obj.punchline);
    }
    useEffect(() => {
        loadAnecdote();
    }, []);
    return (
        <div className={style.container} style={pageStyle}>
            <h1 className={style.title}>😂 🤣 Anecdotes 😂 🤣</h1>
            <div className={style.anecdote}>
                <p className={style.setup}>{setup}</p>
                <p className={style.punchline}>{punchline}</p>
                <button onClick={loadAnecdote}>Следующий анекдот</button>
                <button onClick={toggleTheme}>Сменить тему</button>
            </div>
        </div>
    );
}
