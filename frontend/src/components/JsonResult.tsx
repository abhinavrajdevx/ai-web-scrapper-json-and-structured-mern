import { FileJson, FileText } from "lucide-react";
import { useState } from "react";
import JsonView from "./JsonView";

export const JsonResult = ({
  result,
  show_result_json,
  set_show_result_json,
}: {
  result: any;
  show_result_json: boolean;
  set_show_result_json: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  console.log(result);
  const formatResult = (result: any) => {
    if (!result) return "";
    const data = result.scrapped_data?.scrapped_data || result.scrapped_data;
    console.log(data);
    return data;
  };

  return (
    <>
      {show_result_json && (
        <div className="h-screen w-screen fixed top-0 left-0 flex justify-center items-center">
          <div className="rounded-3xl shadow-2xl  animate-slide-up w-full max-w-[900px] h-full max-h-[600px] ">
            <div className="w-full h-full p-8">
              <div className="h-full max-h-[600px]  overflow-y-scroll">
                <JsonView data={formatResult(result)} />
              </div>
              <button
                onClick={() => set_show_result_json(false)}
                className="w-full py-3 bg-green-500 text-xl text-white"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
