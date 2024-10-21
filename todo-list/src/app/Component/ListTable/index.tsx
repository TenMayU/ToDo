import { listValue, useList } from "@/app/Context/ContextProvider"

interface ListFruitProps {
    dataList:listValue[]
    setDataList: React.Dispatch<React.SetStateAction<listValue[]>>;
}

const ListTable: React.FC<ListFruitProps> =({dataList,setDataList})=>{
     const {setFruit,setVegetable} = useList()
    const deleteAndUpdateItem = (name:string) => {
        const updatedList = dataList.filter(item => item.name !== name);
        setDataList(updatedList);
    };

    const addToList = (item:listValue)=>{
        switch(item.type){
              case 'Fruit':
                    setFruit(item)
                    break
              case 'Vegetable':
                    setVegetable(item)
                    break      
        }
        deleteAndUpdateItem(item.name);
    } 



    return(
        <div className=" w-full h-full flex flex-col items-center gap-2 border border-black">
            <p className=" text-lg w-full h-10 text-center bg-slate-300">List item</p>
           {dataList?.map((item,index)=>{
                return(
                    <button type="button" key={item.name} 
                    onClick={() => {
                        addToList(item);                      
                    }} className=" w-24 h-12 border border-black">{item.name}</button>
                )
            })}        
        </div>
    )
}

export default ListTable

