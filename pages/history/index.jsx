import { useState, useEffect } from "react";
import DiaryCard from "@/components/DiaryCard";
import axios from "axios";
import Navigate from "@/components/Navigate";

function Page() {
    const [memories, setMemories] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [memoriesToShow, setMemoriesToShow] = useState([]);
    const MEMORIES_PER_PAGE = 8;

    const getAllMemories = async () => {
        try {
            const res = await axios.get("/api/memory");
            setMemories(res.data);
        } catch (error) {
            setMemories([]);
        }
    };

    const calculateMemoriesToShow = () => {
        const startIndex = (currentPage - 1) * MEMORIES_PER_PAGE;
        const endIndex = startIndex + MEMORIES_PER_PAGE;
        setMemoriesToShow(memories.slice(startIndex, endIndex));
    }

    const handleHiddenButtons = () => {
        const btnLeft = document.querySelector("#btn-left");
        const btnRight = document.querySelector("#btn-right");  
        const totalPages = Math.ceil(memories.length / MEMORIES_PER_PAGE)

        if (currentPage === totalPages || memories.length <= MEMORIES_PER_PAGE) {
            btnRight.style.display="none";
        } else {
            btnRight.style.display="block";
        }

        if (currentPage == 1) {
            btnLeft.style.display="none";
        } else {
            btnLeft.style.display="block";
        }
    }
    

    const handleBtnLeftPagination = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    const handleBtnRightPagination = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    useEffect(() => {
        getAllMemories();
    }, [])


    useEffect(() => {
        calculateMemoriesToShow();
        handleHiddenButtons();
    }, [memories, currentPage]);
    
    return (
        <>
            <Navigate />
            <div className="grid place-content-center gap-6">
                <h1 className="text-3xl font-bold text-center">
                    Diary History
                </h1>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 mx-2">
                    {memoriesToShow.map((memory) => (
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
                            <button
                                id="btn-left"
                                className="block px-3 py-2 text-sm font-medium text-zinc-500 bg-white border border-zinc-300  hover:bg-zinc-100 hover:text-zinc-700 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-white rounded-full"
                                onClick={() => handleBtnLeftPagination()}
                            >
                                <svg
                                    aria-hidden="true"
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </button>
                        </li>
                        <li>
                            <button
                                className="px-4 py-2 leading-tight text-zinc-500 bg-white border border-zinc-300 hover:bg-zinc-100 hover:text-zinc-700 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-white rounded-full"
                            >
                                {currentPage}
                            </button>
                        </li>
                        <li>
                            <button
                                id="btn-right"
                                className="block px-3 py-2 text-sm font-medium text-zinc-500 bg-white border border-zinc-300  hover:bg-zinc-100 hover:text-zinc-700 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-white rounded-full"
                                onClick={() => handleBtnRightPagination()}
                            >
                                <svg
                                    aria-hidden="true"
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Page;
