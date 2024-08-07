import React, { useState } from 'react';

function Calculator() {
    const [amount, setAmount] = useState(0);
    const [intrest, setIntrest] = useState(0);
    const [year, setYear] = useState(0);
    const [res, setRes] = useState(0);

    const calculateResult = () => {
        const result = (parseFloat(amount) * parseFloat(intrest) * parseFloat(year)) / 100;
        setRes(result);
    };

    return (
        <>
            <div className="d-flex justify-content-center align-items-center mt-5 text-center">
                <div id='result' className='w-50 shadow' style={{ height: '100px' }}>
                    <h1>Result: {res}</h1>
                </div>
            </div>

            <div className="d-flex justify-content-center align-items-center" style={{ height: '90vh' }}>
                <div className='w-50 shadow p-5 mt-1' style={{ height: 'max-content' }}>
                    <input
                        type="number"
                        onChange={(e) => setAmount(e.target.value)}
                        className='form-control my-3'
                        placeholder='Enter Amount'
                    />
                    <input
                        type="number"
                        onChange={(e) => setIntrest(e.target.value)}
                        className='form-control mb-3'
                        placeholder='Enter Intrest %'
                    />
                    <input
                        type="number"
                        onChange={(e) => setYear(e.target.value)}
                        className='form-control mb-3'
                        placeholder='Enter Year'
                    />
                    <button className='btn btn-success' onClick={calculateResult}>Calculate</button>
                </div>
            </div>
        </>
    );
}

export default Calculator;
