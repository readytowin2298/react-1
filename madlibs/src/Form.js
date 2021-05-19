import React, { useState } from 'react';
import './Form.css'
import genMadLib from './scratch.js';

function Form({setStory}){
    const [formData, setFormData] = useState({
        noun1: "",
        noun2: "",
        noun3: "",
        adj1: "",
        adj2: "",
        adj3: "",
        adv: ""
      });
    
    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
        }
    
    const handleSumbit = evt => {
        evt.preventDefault();
        if(Object.values(formData).includes("")){
            alert("You must fill out all values");
            return;
        }
        const str = genMadLib(formData.adj1, formData.adj2, formData.adj3, formData.noun1, formData.noun2, formData.noun3, formData.adv);
        setStory(str);
    }

    return (
        <form className="Form" onSubmit={handleSumbit}>
            <input onChange={handleChange}
                value={formData.noun1} 
                name="noun1" 
                placeholder="Noun" 
                 /> 
            <br /><br />
            <input onChange={handleChange}
                value={formData.noun2} 
                name="noun2" 
                placeholder="Noun" 
                 />
            <br /><br />
            <input onChange={handleChange}
                value={formData.noun3} 
                name="noun3" 
                placeholder="Noun" 
                 /> 
            <br /><br />
            <input onChange={handleChange}
                value={formData.adj1} 
                name="adj1" 
                placeholder="Adjective" 
                 /> 
            <br /><br />
            <input onChange={handleChange}
                value={formData.adj2} 
                name="adj2" 
                placeholder="Adjective" 
                 /> 
            <br /><br />
            <input onChange={handleChange}
                value={formData.adj3} 
                name="adj3" 
                placeholder="Adjective" 
                 /> 
            <br /><br />
            <input onChange={handleChange}
                value={formData.adv} 
                name="adv" 
                placeholder="Adverb" 
                 /> 
            <br /><br />
            <button type="Submit">Submit!</button>
        </form>
    )
}

export default Form