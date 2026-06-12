import Navbar from "~/components/navbar";
import PaperSlip from "~/components/paperSlip";

export default function Weaver(){
    return(
        <div>
            <Navbar/>

            <PaperSlip/>

            <div>
                {/*where all the prescripts are*/}
                <div className={"flex flex-col items-center justify-center gap-4"}>
                    <button className={"text-index-blue-dark dark:text-index-blue-light"}>prescript delivered on paper slips</button>
                    <button className={"text-index-coral"}>prescript delivered on a device</button>
                </div>
            </div>
        </div>
    )
}