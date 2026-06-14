import Navbar from "~/components/navbar";

export default function Weaver(){
    return(
        <div className={"flex flex-col"}>
            <Navbar/>

            <div className={"flex flex-col items-center justify-center w-screen gap-10 flex-1"}>
                <img
                    src={"/images/indexSymbol.svg"}
                />

                <div className={"text-2xl text-index-blue-dark dark:text-index-blue-light hover:text-index-blue-light hover:dark:text-index-blue-dark hover:cursor-pointer"}>
                    _CLEAR_
                </div>
            </div>

        </div>
    )
}