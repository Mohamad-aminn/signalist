
import axios from "axios";

export const sendOpt = async (phoneNumber:string) => {
    try {
        const res = await axios.post("http://127.0.0.1:5000/auth/phone/send-otp", { phoneNumber });
        return res.data;  // Return the data!

    } catch (err) {
        throw err
    }

}

export const signup = async (data: SignupSchema & { otp: string }) => {
    // const cookieStore = await cookies();
    const res = await axios.post("http://127.0.0.1:5000/auth/phone/verify", data);

    return res.data
}