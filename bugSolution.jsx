```jsx
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Updated count:', count); // Logs after the UI update
  }, [count]);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```