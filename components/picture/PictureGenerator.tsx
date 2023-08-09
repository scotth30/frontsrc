import  { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import VITE_Open_AI_Key from "../../OpenApiKey";
function PictureGenerator() {
  const [prompt, setPrompt] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [placeholder, setPlaceholder] = useState<string>(
    "Search Bears with Paint Brushes the Starry Night, painted by Vincent Van Gogh.."
  );

  const configuration = new Configuration({
    apiKey: VITE_Open_AI_Key,
  });

  const openai = new OpenAIApi(configuration);

  const generateImage = async () => {
    if (!prompt) {
      console.error("Prompt cannot be empty");
      return;
    }

    setPlaceholder(`Search ${prompt}..`);
    setLoading(true);
    try {
      const res = await openai.createImage({
        prompt: prompt,
        n: 1,
        size: "512x512",
      });
      setLoading(false);
      const imageUrl = res?.data?.data?.[0]?.url; // Perform null-check here
      if (imageUrl) {
        setResult(imageUrl);
      } else {
        setResult("");
      }
    } catch (error: any) {
      console.error("Error generating image:", error.message);
      setLoading(false);
      setResult("");
    }
  };

  return (
    <div className="picture-main">
      {loading ? (
        <>
          <h2>Generating..Please Wait..</h2>
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </>
      ) : (
        <>       
          <h2>Generate an Image using Open AI API</h2>
          <textarea
            className="picture-input"
            placeholder={placeholder}
            onChange={(e) => setPrompt(e.target.value)}
            rows={10}
            cols={40}
          />
          <div></div>
          <button onClick={generateImage}>Generate an Image</button>
          <div></div>
          {result.length > 0 ? (
            <img className="result-image" src={result} alt="result" />
          ) : (
            <></>
          )}
        </>
      )}
    </div>
  );
}

export default PictureGenerator;
