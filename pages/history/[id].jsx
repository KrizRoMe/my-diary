import Navigate from "@/components/Navigate";
import { getFormattedDate } from "@/config/utils";
import axios from "axios";
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

function MemoryDetail() {
  const router = useRouter();
  const {id} = router.query
  const [memory, setMemory] = useState([])

  const getUserById = async () => {
    const res = await axios.get(`/api/memory?id=${id}`)
    setMemory(res.data[0][0])
  } 

  useEffect(() => {
    if(id){
      getUserById();
    }
  }, [id])  

  const date = memory.created_at && getFormattedDate(memory.created_at).date;
  const time = memory.created_at && getFormattedDate(memory.created_at).time;

  return (
    <>
      <Navigate/>
      <div className="flex justify-center">
      <div href="#" className="max-w-sm mx-2 my-2 p-6 sm:mx-6 sm:my-6 sm:max-w-lg bg-white border border-zinc-200 rounded-lg shadow hover:bg-zinc-100 dark:bg-zinc-800 dark:border-zinc-700 dark:hover:bg-zinc-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">{`${time} || ${date}`}</h5>
          <p className="font-normal text-zinc-700 dark:text-zinc-400">{memory.content}</p>
      </div>
    </div>
    </>
   
  )
}

export default MemoryDetail