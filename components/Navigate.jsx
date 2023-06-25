import Link from "next/link";

function Navigate() {
    return (
        <div className="navigate py-5 px-4 mb-8 flex justify-between items-center md:gap-0 md:px-8 bg-zinc-900">
            <div className="logo">
                <Link href="/" className="hover:font-medium">
                    My Diary
                </Link>
            </div>
            <ul className="flex md:justify-end md:gap-5">
                <li>
                    <Link
                        href="/"
                        className="rounded-lg px-3 py-2 white font-medium hover:bg-white hover:text-zinc-900">
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        href="/history"
                        className="rounded-lg px-3 py-2 white font-medium hover:bg-white hover:text-zinc-900">
                        History
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Navigate;
