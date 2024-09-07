
'use client'

import { fetchAllRecipes } from "@/api/recipe";
import InstructionPopup from "@/components/InstructionPopup/InstructionPopup";
import Navbar from "@/components/Navbar/Navbar";
import CreateRecipe from "@/forms/CreateRecipe";
import { Modal } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function Home() {  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, isLoading, error } = useQuery({
    queryKey: ["recipes"],
    queryFn: fetchAllRecipes,
  })

  return (
    <>
      <Modal
        className='flex flex-col items-center justify-center'
        open={isModalOpen} 
        disableAutoFocus
        onClose={() => setIsModalOpen(false)}
      >
        <div className='bg-primary flex flex-col items-center p-16 w-[550px] h-[600px] overflow-scroll rounded-lg'>
          <CreateRecipe onSuccess={() => setIsModalOpen(false)} />
        </div>
      </Modal>
      <Navbar createRecipe={() => setIsModalOpen(true)} />
      <div className='flex flex-col p-16 items-start gap-6'>
        {/* <InstructionPopup title="Creamy Water Wonder Recipe 2" cook_duration="1h27m0s" instructions="Mix ingredients in a bowl.\nCook on medium heat.\nPreheat the oven.\n" meal="snack"/> */}
        <div className="w-60 rounded-lg bg-black h-60 flex flex-row p-7 gap-4">
            <div className="text-xl text-black">
            Creamy Water Wonder Recipe 2
            </div>
            <div className="uppercase bg-black text-white text-md rounded-xl w-auto p-3">
                snack
            </div>
            <div className="text-md text-grey-500">
                Time To Cook:
            </div>

            <div className="text-md text-black">
              1h27m0s
            </div>

            <div className="text-md text-grey-500">
                Instructions:
            </div>

            <div className="text-md text-black">
              Mix ingredients in a bowl.\nCook on medium heat.\nPreheat the oven.\n
            </div>
        </div>
      </div>
    </>
  );
}
