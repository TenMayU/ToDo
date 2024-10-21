import { listValue, useList } from "@/app/Context/ContextProvider"
import React from "react"

interface ListFruitProps {
    setDataList: React.Dispatch<React.SetStateAction<listValue[]>>;
}

const ListVegetable: React.FC<ListFruitProps> =({setDataList})=>{ 
    const {removeVegetable,listVegetableTable} = useList()
    const removeList = (item:listValue)=>{
        setDataList((items)=>[...items,item])
        removeVegetable(item);  
    } 


    return(
        <div className="flex flex-col items-center  w-full h-full gap-2 border border-black">
            <p className=" text-lg w-full h-10 text-center bg-slate-300">Fruit item</p>
            {listVegetableTable?.map((item)=>{
                return(
                  <button type="button" key={item.name} 
                    onClick={() => {
                       removeList(item);                                          
                    }} className=" w-24 h-12 border border-black">{item.name}</button>
                )
               })}
        </div>
    )
}

export default ListVegetable

