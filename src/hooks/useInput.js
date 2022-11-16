import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const useInput = () => {
    const [value, setValue] = useState('');

    const Input = <Form.Control 
    style={{textAlign: 'center'}}
    placeholder='Enter coin...'
    value={value}
    onChange={e => setValue(e.target.value)}
    />;

    return [value, Input]
}

export default useInput