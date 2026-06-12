import Navbar from "~/components/navbar";

export default function Weaver() {
    return (
        <div>
            <Navbar/>

            <div className={"flex justify-center items-center w-screen h-screen"}>


                <textarea autoFocus={true}
                          className={"focus:outline-none text-center align-middle w-120 h-80 text-index-blue-dark dark:text-index-blue-light resize-none"}/>

            </div>
        </div>
    )
}