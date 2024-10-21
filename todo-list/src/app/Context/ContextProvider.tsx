"use client";

import React, { createContext, useContext, useState } from "react"

 export interface listValue {
    type:string,
    name:string
 }

 export interface defaultValue {
    fruit:listValue[],
    vegetable:listValue[]
 }

 export interface contextValue {
    listFruitTable:listValue[]
    listVegetableTable:listValue[]
    setFruit:(value:listValue)=>void
    setVegetable:(value:listValue)=>void
    removeFruit:(value:listValue)=>void
    removeVegetable:(value:listValue)=>void
 }

 export const  listContext = createContext<contextValue | null>(null)

 export const ContextProvider =({children} : {children: React.ReactNode})=>{


    const [listFruitTable,setListFruitTable] = useState<listValue[]>([])
    const [listVegetableTable,setListVegetableTable] = useState<listValue[]>([])

    const setFruit =(item:listValue)=>{
        setListFruitTable((items) => [...items, { name: item.name, type: item.type }]);
    }
    const setVegetable =(item:listValue)=>{
        setListVegetableTable((items) => [...items, { name: item.name, type: item.type }]);
    }

    const removeFruit =(item:listValue)=>{
          const newValue = listFruitTable.filter(value => value.name !== item.name)
          if(newValue)
            setListFruitTable([...newValue])
    }

    const removeVegetable =(item:listValue)=>{
          const newValue = listVegetableTable.filter(value => value.name !== item.name)
          if(newValue)
            setListVegetableTable([...newValue])
    }

    return(
        <listContext.Provider value={{listFruitTable,listVegetableTable,setFruit,setVegetable,removeFruit,removeVegetable}} >
            {children}
        </listContext.Provider>
    )

}

export const useList = () => {
    const context = useContext(listContext);

    if (!context) {
        throw new Error("useList must be used within a ContextProvider");
    }

    return context;
};