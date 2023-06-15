import { useState, useEffect } from 'react';
import DiaryCard from "@/components/DiaryCard";
import axios from "axios";
import Navigate from '@/components/Navigate';

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

  useEffect(() => {
    getAllMemories();
  }, []);

  return (
    <>
    <Navigate/>
    <div className="grid place-content-center gap-5">
      <h1 className="text-3xl font-bold text-center">Diary History</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 mx-2">
        {memories.map((memory) => (
          <DiaryCard memory={memory} key={memory.id} />
        ))}
      </div>
    </div>
    </>
  );
}

export default Page;