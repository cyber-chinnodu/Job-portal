const ThemeContext = React.createContext();

function ThemedComponent() {
  const theme = React.useContext(ThemeContext);
  const inputRef = React.useRef();

  const focusInput = () => inputRef.current.focus();

  return (
    <div style={{ background: theme }}>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus</button>
    </div>
  );
}


function ThemeApp() {
    return (
      <ThemeContext.Provider value="lightblue">
        <ThemedComponent />
      </ThemeContext.Provider>
    );
  }