import OpenAI from "openai";

const openai = new OpenAI({apiKey: 'sk-proj-xNn_WeB5ZLsuM0Eh01CrgOFzHHgaA0OVYV2eCPT0ujZbbAdg62JvqXrsExCrj9uHuyNIUaBf9TT3BlbkFJJApLfZGIiWwK11l5VFRc1Kk6stvOaVurJPIGobRKd4YpmIyEhrEb7pRNWjCeZVjt-_R8A', dangerouslyAllowBrowser: true});

export async function sendMsgToAI(message) {
    const res = await openai.responses.create({
        model: "gpt-4.1-nano",
        input: message,
        temperature: 0.7,
        top_p:1,
    })    

    return res.output[0].content[0].text;
}