import React, { useState } from "react";
import { Code2, Layout, BookOpen, FileLineChart } from "lucide-react";
import JsonView from "./JsonView";

// Define the data type
interface Item {
  title: string;
  description: string;
}

function Plaintextview({
  data,
  show_result_plain_text,
  set_show_result_plain_text,
}: {
  data: Item[];
  show_result_plain_text: boolean;
  set_show_result_plain_text: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [showJson, setShowJson] = useState(false);

  return (
    <>
      {show_result_plain_text && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/20 z-50">
          <div className="w-full h-full md:h-auto md:max-h-[90vh] max-w-full md:max-w-[900px] flex flex-col bg-white md:rounded-xl overflow-hidden shadow-xl">
            <div className="flex-1 flex flex-col overflow-hidden">
              <div className="sticky top-0 bg-white shadow-md z-10">
                <div className="px-4 md:px-6 py-3 md:py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 md:gap-3">
                      <FileLineChart className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                      <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        Structured output
                      </h1>
                    </div>
                    <button
                      onClick={() => setShowJson(!showJson)}
                      className="flex items-center gap-1 md:gap-2 px-3 md:px-5 py-1.5 md:py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full hover:shadow-lg transition-all duration-300"
                    >
                      {showJson ? (
                        <Layout className="w-4 h-4 md:w-5 md:h-5" />
                      ) : (
                        <Code2 className="w-4 h-4 md:w-5 md:h-5" />
                      )}
                      <span className="text-sm md:text-base font-medium">
                        {showJson ? "Show Structured" : "Show JSON"}
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto bg-gradient-to-br from-blue-50 to-indigo-50">
                <main className="max-w-3xl mx-auto px-4 md:px-6 py-6 md:py-12">
                  {showJson ? (
                    <JsonView data={data} />
                  ) : (
                    <div className="space-y-4 md:space-y-8">
                      {data.map((item, index) => (
                        <article
                          key={index}
                          className="bg-white/90 backdrop-blur-sm rounded-lg md:rounded-xl shadow p-4 md:p-6 overflow-hidden hover:shadow-lg transition-all duration-300"
                        >
                          <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2 md:mb-4 pb-2 border-b border-gray-200">
                            {item.title}
                          </h2>
                          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                            {item.description}
                          </p>
                        </article>
                      ))}
                    </div>
                  )}
                </main>
              </div>
            </div>

            <button
              onClick={() => set_show_result_plain_text(false)}
              className="w-full py-3 bg-green-500 hover:bg-green-600 text-lg md:text-xl text-white font-medium transition-colors duration-200"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Plaintextview;
