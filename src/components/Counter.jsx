import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    return(
        <div>
       { count > 0 &&
       <button onClick={() => setCount(count - 1)}>-</button>}
       
        <p>{count}</p>
        
       <button onClick={() => setCount(count + 1)}>+</button>
         
    
        </div>
    )
}

export default Counter