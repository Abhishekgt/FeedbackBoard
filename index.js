const { useState, useEffect } = React;

function App() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    const handleThemeToggle = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    return (
        <div>
            <ThemeToggle theme={theme} toggleTheme={handleThemeToggle} />
            <FeedbackForm />
            <FeedbackList />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));ab 