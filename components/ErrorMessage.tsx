import {ReactNode} from "react";

const ErrorMessage = ({children}: Readonly<{children: ReactNode}>) => {
    return (
        <p className={'text-red-500 text-sm'}>{children}</p>
    );
};



export default ErrorMessage;