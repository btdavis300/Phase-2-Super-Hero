import React, { useState } from 'react'

function MakeYourOwn({ onAddHero }) {

    const [heroForm, setHeroForm] = useState({
        name: '',
    })

    function handleSubmitHero(e) {
        e.preventDefault();
        const newHero = {
            name: heroForm.name,

        }
        fetch('http://localhost:3000/superheroes/', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newHero)
        })
            .then(res => res.json())
            .then(onAddHero)
    }

    function handleChange(e) {
        setHeroForm({
            ...heroForm, [e.target.name]: e.target.value,
        })
    }
    return (
        <form onSubmit={handleSubmitHero}>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} />
            <input type="text" name='image' placeholder='image' onChange={handleChange} />
            <input type="text" name='combat' placeholder='combat' onChange={handleChange} />
            <input type="text" name='durability' placeholder='durability' onChange={handleChange} />
            <input type="text" name='intelligence' placeholder='intelligence' onChange={handleChange} />
            <input type="text" name='power' placeholder='power' onChange={handleChange} />
            <input type="text" name='speed' placeholder='speed' onChange={handleChange} />
            <input type="text" name='strength' placeholder='strength' onChange={handleChange} />
            <input id="Add" type="submit" value="Add" />
        </form>
    );
}

export default MakeYourOwn



