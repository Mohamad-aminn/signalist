"use client"

import {FormEvent, useState} from "react";

const SmsForm = () => {
    const [phone, setPhone] = useState('');
    const [text, setText] = useState('Eternal Love!');

    const submit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = await fetch('http://localhost:3000/api/sms', {
            method: 'POST',
            body: JSON.stringify({phone, text}),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        console.log(data)

    }

    return (
        <form onSubmit={submit}>
            <div>
                <label>phone</label>
                <input type="text" onChange={(e) => setPhone(e.target.value)} value={phone} />
            </div>
            <button type="submit">send</button>
        </form>
    );
};

export default SmsForm