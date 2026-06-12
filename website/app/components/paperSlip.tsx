export default function PaperSlip() {
    return (
        <div className={"relative flex items-center justify-center"}>
            {/*<img src={"/paperSlipLight.svg"} alt={"Paper Slip"} className={"w-full h-full object-contain"}/>*/}

            <picture className={"w-full h-full object-contain"}>
                <source srcSet="/paperSlipDark.svg" media="(prefers-color-scheme: dark)"/>
                <img src="/paperSlipLight.svg" alt="Paper Slip"/>
            </picture>


            <div className={"absolute insert-0 flex items-center justify-center"}>
                <p>test</p>
            </div>
        </div>
    )
}