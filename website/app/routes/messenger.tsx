import Navbar from "~/components/navbar";
import PaperSlip from "~/components/paperSlip";
import EditPrescript from "~/components/editPrescript";

export default function Weaver() {
    return (
        <div>

            <div className={"hidden h-screen w-screen flex flex-items justify-center z-100"}>
                <EditPrescript />
            </div>

            <div>
                <Navbar/>

                <div>
                    <div className={"flex flex-col items-center justify-center gap-5"}>
                        <PaperSlip/>
                        <PaperSlip/>
                        <PaperSlip/>
                        <PaperSlip/>
                        <PaperSlip/>
                        <PaperSlip/>
                        <PaperSlip/>
                        <PaperSlip/>
                        <PaperSlip/>
                        <PaperSlip/>

                    </div>

                    {/*where all the prescripts are*/}
                    <div
                        className={"sticky bottom-0 z-50 text-2xl bg-index-light dark:bg-index-dark p-4 flex items-center justify-center gap-100"}>
                        <button
                            className={"hover:cursor-pointer text-index-blue-dark dark:text-index-blue-light"}>prescript
                            delivered on paper slips
                        </button>
                        <button className={"hover:cursor-pointer text-index-coral"}>prescript delivered on a device
                        </button>
                    </div>

                </div>
            </div>

        </div>

    )
}