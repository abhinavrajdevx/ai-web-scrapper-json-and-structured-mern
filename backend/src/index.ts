import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { getHtmlFromUrl } from "./utils/scrapper";
import { scrapperModel } from "./ai/groq/scrappermodel";
import { scrapperModelPlainText } from "./ai/groq/scrappermodel plaintext";
import { models } from "./constants";

config();

const app = express();
const port = process.env.PORT;

// Middleware for parsing JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const delay = (ms: any) => new Promise((resolve) => setTimeout(resolve, ms));

// Simple route
app.get("/ai-web-scrapper/api/", (req: any, res: any) => {
  res.send("Hello World!");
});

app.post("/ai-web-scrapper/api/scrape", async (req: any, res: any) => {
  const json_data: {
    user_prompt: string;
    model_id: string;
    groq_api_key: string;
    webpage_url: string;
    json_format: string;
  } = req.body;

  let model_id = "";
  let max_completion_tokens = 0;
  models.forEach((_model) => {
    if (_model.id == json_data.model_id) {
      model_id = json_data.model_id;
      max_completion_tokens = _model.max_completion_tokens;
    }
  });
  if (model_id.length <= 1)
    return res.status(200).json({
      message: "ERROR",
      description: "Model not found",
    });

  const webpage_data = await getHtmlFromUrl(json_data.webpage_url);

  const no_of_chunks = Math.round(webpage_data.length / 15000);
  const chunk_size = Math.round(webpage_data.length / no_of_chunks);

  let scrapped_chunks = "";

  for (let i = 0; i < webpage_data.length; i = i + chunk_size - 4) {
    console.log("Scrapping chunk", i);
    const chunk_data = webpage_data.slice(i, i + chunk_size);
    console.log(chunk_data.length);
    const scrapped_data_ai_chunks = await scrapperModel(
      json_data.user_prompt,
      chunk_data,
      model_id,
      max_completion_tokens,
      json_data.groq_api_key
    );
    delay(10000);
    console.log("done..");
    scrapped_chunks = scrapped_chunks + JSON.stringify(scrapped_data_ai_chunks);
  }

  let final_scrapped_data: any;
  if (json_data.json_format) {
    final_scrapped_data = await scrapperModel(
      json_data.user_prompt,
      scrapped_chunks,
      model_id,
      max_completion_tokens,
      json_data.groq_api_key
    );
  } else {
    final_scrapped_data = await scrapperModelPlainText(
      json_data.user_prompt,
      scrapped_chunks,
      model_id,
      max_completion_tokens,
      json_data.groq_api_key
    );
  }

  res.status(200).json({
    message: "OK",
    scrapped_data: final_scrapped_data,
    json_format: json_data.json_format,
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
