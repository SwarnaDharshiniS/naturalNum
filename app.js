const { useState } = React;

function NaturalNumbers() {
  const [n, setN] = useState("");
  const [nums, setNums] = useState([]);
  const generate = () => {
    const N = parseInt(n);
    if (isNaN(N) || N <= 0) { setNums([]); return; }
    setNums(Array.from({length:N},(_,i)=>i+1));
  };
  return (<div className="card">
    <label>Enter N</label>
    <input type="number" value={n} onChange={e=>setN(e.target.value)} />
    <div className="controls">
      <button className="primary" onClick={generate}>Generate</button>
      <button className="secondary" onClick={()=>{{setN('');setNums([])}}}>Clear</button>
    </div>
    <div className="result">{nums.length?nums.join(", "):"—"}</div>
  </div>);
}
function App(){ return <NaturalNumbers/>; }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
