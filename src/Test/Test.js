import React, { useState } from 'react';


const Test = () => {
    const [count,setCount] = useState(0)

    const handleBtnClick = ()=>{
        setCount(count+1)
    }
    

    return <div>
    <button onClick={handleBtnClick}> click me </button>
    <h1>{count}</h1>
</div>
};

export default Test;





