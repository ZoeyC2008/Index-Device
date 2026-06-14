import {Link} from "react-router";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 flex items-center justify-center font-bold bg-index-light dark:bg-index-dark">
            <div className={"p-4 text-xl flex opacity-0 hover:opacity-100 items-center justify-center gap-8 text-index-blue-dark dark:text-index-blue-light "}>

                <Link to={"/proxy"} className={"pr-4 border-r-2 border-index-dark dark:border-index-light"} aria-current={"page"}>Proxy</Link>

                <Link to={"/messenger"} className={"pr-4 border-r-2 border-index-dark dark:border-index-light"}>Messenger</Link>

                <Link to={"/weaver"}>Weaver</Link>

            </div>
        </nav>
    )
}