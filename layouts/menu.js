import React from "react";



export default function Menu ({menuList = [], menu_binding = []}){
    // console.log("menu_list:", menu_list);
    return (
        <div className="text-2xl bg-gray-700 p-4 flex items-center justify-center">
            <ul className="flex space-x-4">
                {menuList.map(function(list, index){
                    return <li className="underline text-white hover:text-gray-300 cursor-pointer">{list}</li>;
                })}
            </ul>
        </div>
    ) 
}