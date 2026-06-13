import Navbar from "~/components/navbar";
import {useState, useEffect, useRef} from "react";

export default function Weaver() {
    const [prescript, setPrescript] = useState("");


    const enterPrescript = async () => {
        setPrescript("");
        console.log("Enter prescript " + prescript);
    }


    // const prescriptRef = useRef(null);
    // useEffect(() => {
    //     const handleKeyDown = (event: KeyboardEvent) => {
    //         event.preventDefault();
    //         prescriptRef.current?.focus();
    //     };
    //
    //     // 4. Attach the event listener to the document
    //     document.addEventListener('keydown', handleKeyDown);
    //
    //     // 5. Clean up the listener when the component unmounts
    //     return () => {
    //         document.removeEventListener('keydown', handleKeyDown);
    //     };
    // }, []);


    return (
        <div className="flex flex-col h-screen">
            <Navbar/>

            <div className={"flex justify-center items-center w-screen flex-1"}>


                <textarea
                    autoFocus={true}
                    className={" focus:outline-none text-center align-middle w-120 h-80 text-index-blue-dark dark:text-index-blue-light resize-none"}
                    value={prescript}
                    onChange={(e) => setPrescript(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && enterPrescript()}
                />

            </div>
        </div>
    )
}