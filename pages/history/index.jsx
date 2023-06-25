import { useState, useEffect, useContext } from "react";
import DiaryCard from "@/components/DiaryCard";
import axios from "axios";
import Navigate from "@/components/Navigate";
// import { MemoryContext } from '@/context/MemoryContext';

function Page() {
    const [memories, setMemories] = useState([]);

    const getAllMemories = async () => {
        try {
            const res = await axios.get("http://localhost:3000/api/memory");
            setMemories(res.data);
        } catch (error) {
            setMemories([]);
        }
    };

    const handleBtnLeftPagination = () => {
        const btn_left = document.querySelector("#btn-left");

        btn_left.style.display = "block";
        if (memories.length <= 8) {
            const btn_left = document.querySelector("#btn-left");
            btn_left.style.display = "none";
            return;
        }
    };

    useEffect(() => {
        handleBtnLeftPagination();
    }, [memories]);

    // const values = useContext(MemoryContext);
    // console.log(values)

    useEffect(() => {
        getAllMemories();
    }, []);

    return (
        <>
            <Navigate />
            <div className="grid place-content-center gap-6">
                <h1 className="text-3xl font-bold text-center">
                    Diary History
                </h1>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 mx-2">
                    {memories.slice(0, 8).map((memory) => (
                        <DiaryCard
                            memory={memory}
                            key={memory.id}
                            memories={memories}
                            setMemories={setMemories}
                        />
                    ))}
                </div>
                <div className="flex justify-center">
                    <ul className="flex items-center gap-3">
                        <li>
                            <a
                                id="btn-left"
                                href="#"
                                className="block px-3 py-2 text-sm font-medium text-zinc-500 bg-white border border-zinc-300  hover:bg-zinc-100 hover:text-zinc-700 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-white rounded-full"
                            >
                                <svg
                                    aria-hidden="true"
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="px-4 py-2 leading-tight text-zinc-500 bg-white border border-zinc-300 hover:bg-zinc-100 hover:text-zinc-700 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-white rounded-full"
                            >
                                1
                            </a>
                        </li>
                        <li>
                            <a
                                id="btn-right"
                                href="#"
                                className="block px-3 py-2 text-sm font-medium text-zinc-500 bg-white border border-zinc-300  hover:bg-zinc-100 hover:text-zinc-700 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-white rounded-full"
                            >
                                <svg
                                    aria-hidden="true"
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Page;
