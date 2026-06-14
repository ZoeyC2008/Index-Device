import type {Prescript} from "~/types/prescript";

type paperSlipProps={
    prescript: Prescript
}

export default function PaperSlip() {
    return (
        <div className={"relative flex items-center justify-center"}>
            {/*<img src={"/paperSlipLight.svg"} alt={"Paper Slip"} className={"w-full h-full object-contain"}/>*/}

            {/*<picture className={"w-full h-full object-contain"}>*/}
            {/*    <source srcSet="/paperSlipDark.svg" media="(prefers-color-scheme: dark)"/>*/}
            {/*    <source srcSet="/paperSlipLight.svg" media="(prefers-color-scheme: light)"/>*/}
            {/*    <img src="/paperSlipLight.svg" alt="Paper Slip"/>*/}
            {/*</picture>*/}

            <div className={"w-full h-full object-contain"}>
                <img
                    src="/images/editPrescriptLight.svg"
                    alt="paper slip"
                    className="block dark:hidden"
                />

                <img
                    src="/images/editPrescriptDark.svg"
                    alt="paper slip"
                    className="hidden dark:block"
                />
            </div>

            <div className={"absolute insert-0 flex flex-col"}>
                <div className={"w-full h-full object-contain align-right"}>
                    <img
                        src="/images/editPrescriptLight.svg"
                        alt="paper slip"
                        className="block dark:hidden"
                    />

                    <img
                        src="/images/editPrescriptDark.svg"
                        alt="paper slip"
                        className="hidden dark:block"
                    />
                </div>

                <div>
                    text
                </div>
            </div>

        </div>
    )
}