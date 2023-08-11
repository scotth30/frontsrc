import React from 'react';
import { Configuration, OpenAIApi } from 'openai';
import VITE_Open_AI_Key from '../../OpenApiKey';
import { PictureMain, PictureInput, ResultImagesContainer, ResultImage, NumberInput } from '../../styles/PictureGenerator.styles';

function PictureGenerator() {
  const [prompt, setPrompt] = React.useState<string>('');
  const [results, setResults] = React.useState<string[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [numberOfPictures, setNumberOfPictures] = React.useState<number>(1);

  const configuration = new Configuration({
    apiKey: VITE_Open_AI_Key,
  });

  const openai = new OpenAIApi(configuration);

  const generateImages = async () => {
    if (!prompt) {
      console.error('Prompt cannot be empty');
      return;
    }

    setLoading(true);
    try {
      const res = await openai.createImage({
        prompt: prompt,
        n: numberOfPictures,
        size: '512x512',
      });
      setLoading(false);
      const imageUrls = (res?.data?.data?.map((image) => image.url) || []).filter(Boolean); // Filter out undefined values
      setResults(imageUrls as string[]); // Cast to string[] after filtering
    } catch (error: any) {
      console.error('Error generating image:', error.message);
      setLoading(false);
      setResults([]);
    }
  };

  return (
    <PictureMain>
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
          <h2>Generate Images using Open AI API</h2>
          <PictureInput
            placeholder={`Search ${prompt}..`}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <NumberInput
            type="number"
            value={numberOfPictures}
            onChange={(e) => setNumberOfPictures(Number(e.target.value))}
            placeholder="Number of Pictures"
          />
          <button onClick={generateImages}>Generate Images</button>
          <ResultImagesContainer>
            {results.map((result, index) => (
              <ResultImage key={index} src={result} alt="result" />
            ))}
          </ResultImagesContainer>
        </>
      )}
    </PictureMain>
  );
}

export default PictureGenerator;
