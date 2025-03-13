import React, { useState } from "react";
import { Send, Code2, Loader2, Bot, Globe, Key, KeyIcon } from "lucide-react";
import { JsonResult } from "./components/JsonResult";
import Plaintextview from "./components/Plaintextview";

interface ScrapeResponse {
  message: string;
  scrapped_data: any;
  json_format: boolean;
}

const AVAILABLE_MODELS = ["qwen-2.5-coder-32b", "qwen-qwq-32b"] as const;

function App() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [formData, setFormData] = useState({
    user_prompt: "",
    model_id: AVAILABLE_MODELS[0],
    groq_api_key: "",
    webpage_url: "",
    json_format: true,
  });
  const [show_result_json, set_show_result_json] = useState(false);
  const [show_result_plain_text, set_show_result_plain_text] = useState(false);
  const [alert, setAlert] = useState({
    isOpen: false,
    title: "",
    description: "",
    variant: "",
  });

  const showAlert = (
    title: string,
    description: string,
    variant: "info" | "warning" | "error" | "success" = "info"
  ) => {
    setAlert({ isOpen: true, title, description, variant });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        "https://server.abhinavraj.tech/ai-web-scrapper/api/scrape",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data: ScrapeResponse = await response.json();
      if (data.message != "OK") {
        setLoading(false);
        return showAlert(
          "Warning!",
          "Error occured, contact Admin.",
          "warning"
        );
      }
      setResult(data);
      console.log("data.json_format", data.json_format);
      if (data.json_format) set_show_result_json(true);
      if (!data.json_format) set_show_result_plain_text(true);
    } catch (error) {
      showAlert("Warning!", "Servers might be down, contact Admin.", "warning");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checkbox = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: checkbox.checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 animate-gradient">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-float">
            <div className="inline-block p-3 rounded-full bg-white/10 mb-6">
              <Bot className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
              AI-Powered Web Scraper
            </h1>
            <p className="text-xl text-white/80">
              Extract structured data from any webpage using advanced AI
            </p>
          </div>

          <div className="glass-effect rounded-3xl shadow-2xl p-8 mb-8 transform hover:scale-[1.02] transition-transform duration-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div
                className="animate-slide-up"
                style={{ animationDelay: "0.1s" }}
              >
                <label className="block text-lg font-medium text-gray-800 mb-2 flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-indigo-600" />
                  Webpage URL
                </label>
                <div className="relative">
                  <input
                    type="url"
                    name="webpage_url"
                    value={formData.webpage_url}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                    placeholder="https://example.com"
                    required
                  />
                </div>
              </div>

              <div
                className="animate-slide-up"
                style={{ animationDelay: "0.15s" }}
              >
                <label className="block text-lg font-medium text-gray-800 mb-2 flex items-center">
                  <Code2 className="w-5 h-5 mr-2 text-indigo-600" />
                  Select Model
                </label>
                <select
                  name="model_id"
                  value={formData.model_id}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-white"
                >
                  {AVAILABLE_MODELS.map((model) => (
                    <option key={model} value={model}>
                      {model}
                    </option>
                  ))}
                </select>
              </div>

              <div
                className="animate-slide-up"
                style={{ animationDelay: "0.2s" }}
              >
                <label className="block text-lg font-medium text-gray-800 mb-2 flex items-center">
                  <Bot className="w-5 h-5 mr-2 text-indigo-600" />
                  What would you like to extract?
                </label>
                <textarea
                  name="user_prompt"
                  value={formData.user_prompt}
                  onChange={handleChange}
                  rows={3}
                  className="block w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                  placeholder="E.g., Extract all product prices and their names"
                  required
                />
              </div>

              <div
                className="animate-slide-up"
                style={{ animationDelay: "0.3s" }}
              >
                <label className="block text-lg font-medium text-gray-800 mb-2 flex items-center">
                  <Key className="w-5 h-5 mr-2 text-indigo-600" />
                  Groq API Key
                </label>
                <div className="relative">
                  <input
                    type="password"
                    name="groq_api_key"
                    value={formData.groq_api_key}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your Groq API key"
                    required
                  />
                  <a
                    href="https://console.groq.com/keys"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute right-0 pr-4 rounded-r-lg pl-4 top-1/2 -translate-y-1/2 text-white hover:text-indigo-800 text-sm font-medium flex items-center transition-colors duration-200 bg-indigo-600 h-full"
                  >
                    <KeyIcon className="w-4 h-4 mr-1 pr-1" />
                    Get API Key
                  </a>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Don't have a Groq API key?{" "}
                  <a
                    href="https://claude.ai/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:underline"
                  >
                    Sign up for free
                  </a>{" "}
                  and generate one.
                </p>
              </div>

              <div
                className="flex items-center space-x-3 animate-slide-up"
                style={{ animationDelay: "0.4s" }}
              >
                <input
                  type="checkbox"
                  name="json_format"
                  checked={formData.json_format}
                  onChange={handleChange}
                  className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded-lg transition-all duration-200"
                />
                <label className="text-lg font-medium text-gray-800">
                  Return result in JSON format
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center px-6 py-4 border border-transparent text-lg font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] transition-all duration-200 animate-slide-up"
                style={{ animationDelay: "0.5s" }}
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin -ml-1 mr-2 h-6 w-6" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-6 w-6" />
                    Extract Data
                  </>
                )}
              </button>
            </form>
          </div>

          <JsonResult
            result={result}
            show_result_json={show_result_json}
            set_show_result_json={set_show_result_json}
          />
          <Plaintextview
            data={result?.scrapped_data?.scrapped_data}
            set_show_result_plain_text={set_show_result_plain_text}
            show_result_plain_text={show_result_plain_text}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
