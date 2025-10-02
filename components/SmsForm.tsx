"use client"

import {FormEvent, useState} from "react";
import {useMutation} from "@tanstack/react-query";
import axios from "axios";

const SmsForm = () => {
    const [phone, setPhone] = useState('');
    const [text, setText] = useState('سم');

    const {mutate, error, isPending, isError, data, status} = useMutation({
        onError: (error) => {
            console.log(error)
        },
        mutationFn:  async (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();

             const res = await axios.post('http://localhost:3000/api/sms', {phone, text});
            console.log('4444')
            if (res.status === 401) {
                console.log('working')
                throw Error(res.data)
            }
        }
    })

    if(isPending) return <div>Loading...</div>

    if(isError) return (
        <div>
            <p>{error.response.data}</p>

        </div>
    )

    return (
        <form onSubmit={(e) => mutate(e)}>
            <div>
                <label>phone</label>
                <input type="text" onChange={(e) => setPhone(e.target.value)} value={phone} />
            </div>
            <button type="submit">send</button>
        </form>
    );
};

export default SmsForm