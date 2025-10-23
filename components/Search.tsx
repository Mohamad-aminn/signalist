"use client"
import {useRef} from "react";

const Search = () => {
    const ref = useRef<HTMLDialogElement>(null);
    return (
        <>
            <dialog ref={ref} id="search" className="modal backdrop-blur-sm">
                <div className="modal-box mt-[-60vh]! p-0">
                    <input className={'size-full'}/>
                </div>
            </dialog>
        </>

    )
}

export default Search;