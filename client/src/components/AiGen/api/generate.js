import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: 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,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion({
    model: "text-ada-001",
    prompt: generatePrompt(req.body.animal),
    temperature: 0.99,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(animal) {
  const capitalizedAnimal =
    animal[0].toUpperCase() + animal.slice(1).toLowerCase();
  return `Suggest three names for an animal that is a superhero.

Animal: Cat
Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
Animal: Dog
Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
Animal: ${capitalizedAnimal}
Names:`;
}
