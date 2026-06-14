import Navbar from "~/components/navbar";
import {useState} from "react";

export default function Weaver() {
    const [prescript, setPrescript] = useState("");

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


    const onPrescriptEnter = (e:any) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();

            const lowerCase = prescript.toLowerCase();
            const root = window.document.documentElement;

            if (lowerCase === "white nights") {
                root.classList.remove("dark");
                //console.log(prescript);
            }

            if (lowerCase === "dark days") {
                root.classList.add("dark");
            }

            console.log("Enter prescript " + prescript);

            setPrescript("");
        }
    }

    return (
        <div className="flex flex-col h-screen">
            <Navbar/>

            <div className={"flex justify-center items-center w-screen flex-1"}>


                <textarea
                    autoFocus={true}
                    className={"text-2xl focus:outline-none text-center align-middle w-120 h-80 text-index-blue-dark dark:text-index-blue-light resize-none"}
                    value={prescript}
                    onChange={(e) => setPrescript(e.target.value)}
                    onKeyDown={onPrescriptEnter}
                />

            </div>
        </div>
    )
}