"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
import ListTable from "./Component/ListTable";
import ListFruit from "./Component/FruitTable";
import ListVegetable from "./Component/VegetableTable";
import { listValue, useList } from "./Context/ContextProvider";
import ListArray from "./Constants/Data";


export default function Home() {  
  const [dataList, setDataList] = useState<listValue[]>(ListArray);
  const {removeFruit,removeVegetable,listFruitTable,listVegetableTable} = useList()
  const timersFruit = useRef<NodeJS.Timeout | null>(null);
  const timersVegetable = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    if (timersFruit.current) {
        clearTimeout(timersFruit.current);
    }

    timersFruit.current = setTimeout(() => {
        if (listFruitTable.length > 0) {
            if(listFruitTable[0]){
                removeFruit(listFruitTable[0]);
                setDataList((item)=>[...item,listFruitTable[0]])
            }          
        }
    }, 5000);

    return () => {
        if (timersFruit.current) {
            clearTimeout(timersFruit.current);
        }
    };
}, [listFruitTable]);

useEffect(() => {
    if (timersVegetable.current) {
        clearTimeout(timersVegetable.current);
    }

    timersVegetable.current = setTimeout(() => {
        if (listVegetableTable.length > 0) {
            if(listVegetableTable[0]){
                removeVegetable(listVegetableTable[0]);
                setDataList((item)=>[...item,listVegetableTable[0]])
            }     
        }
    }, 5000);

    return () => {
        if (timersVegetable.current) {
            clearTimeout(timersVegetable.current);
        }
    };
}, [listVegetableTable]);

  return (
     <React.Fragment>
      <div className="w-full h-fit flex justify-center">  
         <div className=" grid grid-cols-3 w-1/4">
             <ListTable dataList={dataList} setDataList={setDataList}/>
             <ListFruit setDataList={setDataList}/>
             <ListVegetable setDataList={setDataList}/>          
         </div>
        </div>
     </React.Fragment>
  );
}
