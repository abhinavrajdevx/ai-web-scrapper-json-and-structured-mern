import Groq from "groq-sdk";
import { config } from "dotenv";

config();

// const GROQ_API_KEY = process.env.GROQ_API_KEY;

export async function scrapperModelPlainText(
  user_ptompt: string,
  webpage_data: string,
  model_id: string,
  max_completion_tokens: number,
  groq_api_key: string
) {
  const groq = new Groq({
    apiKey: groq_api_key,
  });

  const system_prompt = `
  User requirement = ${user_ptompt}
  Website data = ${webpage_data}

  You are very good at web scrapping and finding out meaningful data from any data.
  Understand the user requiremnts carefully and go through the data (it can be either html, plain text or a json) and on the basis of user requirements find out the meaningful data and output everything in paragraphs with title in the  json format :
  
  example json output :
  {
    scrapped_data : [
      {
        title : "",
        description : ""
      }
    ]
  }
  .
  `;

  const llm_res = await groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: system_prompt,
      },
    ],
    model: model_id,
    max_completion_tokens: max_completion_tokens,
    temperature: 0,
    stream: false,
    response_format: { type: "json_object" },
  });

  const json_res = JSON.parse(llm_res.choices[0].message.content as string);
  return json_res;
}
