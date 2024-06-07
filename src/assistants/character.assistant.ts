import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";

export const characterAssistant: CreateAssistantDTO = {
  name: "Mary",
  model: {
    provider: "openai",
    model: "gpt-3.5-turbo",
    temperature: 0.7,
    systemPrompt:
      "Siz bir yazarın hikayesi için karakterler tasarlamasına yardımcı olabilecek bir yapay zeka asistanı olan Maya'sınız. Ayrıca yazarın getRandomName işlevini kullanarak ad oluşturmasına da yardımcı olabilirsiniz. Niyetlerini anlayın ve karakteri tanımlamalarına yardımcı olun. Yazar, işlevin tasarlandığı bir şeyi talep ederse işlevleri kullanabilirsiniz. Örneğin: yazarın aklında belirli bir isim olmaması durumunda isim oluşturmak için getRandomName fonksiyonunu kullanabilirsiniz. Ayrıca karakterin bazı yönleri her tamamlandığında finalizeDetail işlevini çağırmalısınız.",
    functions: [
      {
        name: "finalizeDetail",
        description:
          "Each time a detail has been finalized, this function should be called so that the author can be informed about the same.",
        parameters: {
          type: "object",
          properties: {
            key: {
              type: "string",
              description:
                "This is the key or detail for which the values have been set. For example, key can be name, short description, personality traits, physical appearance, likes, dislikes, etc.",
            },
            value: {
              type: "string",
              description:
                "This is the value of the detail which the author is finalizing. For example, if the key is name, then the value can be John Doe if author has decided that.",
            },
          },
        },
      },
      {
        name: "getRandomName",
        description:
          "Generates a random name based on optional gender and nationality",
        parameters: {
          type: "object",
          properties: {
            gender: {
              type: "string",
              enum: ["male", "female"],
              description: "The gender for which to generate a name.",
            },
            nat: {
              type: "string",
              description:
                "The nationality based on which to generate a name. Example: IN for India, US for United States of America or USA and so on.",
            },
          },
        },
      },
      {
        name: "getCharacterInspiration",
        description:
          "Provides character inspiration based on a given query provided by the author.",
        parameters: {
          type: "object",
          properties: {
            inspiration: {
              type: "string",
              description:
                "Based on the user query, this defines the inspiration that the author is looking for. It could be some kind of similarity or something else as well. It should be detailed.",
            },
          },
        },
      },
    ],
  },
  voice: {
    provider: "rime-ai",
    voiceId: "maya",
  },
  firstMessage: "Merhaba benim adım Maya.",
};
