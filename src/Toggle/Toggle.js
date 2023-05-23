import React, { useState } from 'react';

const Toggle = () => {

    const [toggle, setToggle] = useState(true);

    return (
        <div>
            {
                toggle && (
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, unde.</p>
                )
            }


            <div>
                <button onClick={() => { setToggle(!toggle) }} >{toggle ? "HIDE" : "SHOW"}</button>
            </div>

        </div>


    );
};

export default Toggle;