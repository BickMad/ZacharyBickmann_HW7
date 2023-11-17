import React, {useState, useEffect} from 'react'

const RealInputForm = () => {
    const [formInputs, setFormInputs] = useState({
        name: '',
        username: '',
        email: '',
        address: '',
        phone: ''
    });

    const inputChange = (state) => {
        const {name, value} = state.target
        setFormInputs({
            ...formInputs,
            [name]: value,
        });
    };

    const submitForm = (state) => {
        state.preventDefault();
        console.log(formInputs);
    }

    useEffect(() => {
        console.log('Inputs:', formInputs)
    }, [formInputs]);

  return (
    <div>
        <h1>Form</h1>
        <form onSubmit= {submitForm}>
            <label >Name</label>
            <input type="text" name="name" value={formInputs.name} onChange={inputChange}/>
            <br />
            <label >User Name</label>
            <input type="text" name="username" value={formInputs.username} onChange={inputChange}/>
            <br />
            <label >Email</label>
            <input type="text" name="email" value={formInputs.email} onChange={inputChange}/>
            <br />
            <label >Address</label>
            <input type="text" name="address" value={formInputs.address} onChange={inputChange}/>
            <br />
            <label >Phone</label>
            <input type="text" name="phone" value={formInputs.phone} onChange={inputChange}/>

            <button type='submit'>Submit</button>
        </form>
        
    </div>
  )
}

export default RealInputForm