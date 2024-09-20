import OpenAI from "openai"

export const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
})

/**
 * Goal - build an agent that can get the current weather at my current location
 * and give me some localized ideas of activities I can do.
 */

const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
        {
            role: "user",
            content: "Give me a list of activity ideas based on my current location and weather"
        }
    ]
})

console.log(response.choices[0].message.content)
/**
As an AI, I'm unable to access your current location or weather details. However, I can provide you with activities for various scenarios: 1. If it's sunny and warm: - Visit the beach - Go on a picnic - Try water sports - Hiking or trail running - Visit a farmers market or outdoor festival 2. If it's sunny but cold: - Go skiing or snowboarding - Ice skating - Take scenic photos - Visit a museum or indoor gallery - Try out a local coffee shop or bakery 3. If it's raining: - Visit a local museum or art gallery - Go to a movie theater - Have a cozy day in with your favorite books and movies - Try a new indoor hobby, like painting or baking 4. If it's cloudy or overcast: - Visit a botanical garden or aquarium - Go on a city exploration walk - Try out a cooking class - Visit a historic site or museum. Remember to check local guidelines and restrictions due to Covid-19 before finalizing any plans.


 */
