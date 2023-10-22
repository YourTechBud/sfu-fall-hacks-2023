import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: 'My API Key', // defaults to process.env["OPENAI_API_KEY"]
  baseURL: 'http://127.0.0.1:5001/v1'

});

const systemMessage = `
You are a personal ai assistant. The user will enter a personal note. Identify the next steps and tasks that the user needs to do based on that note. Also suggest a due date. Give an output in markdown
1 **[Action item 1 in 3-4 words]:**
  - Due Date: [Due date goes here]
  - Notes: [Notes regarding that action item go here. Make the notes as detailed as possible]
`

// const systemMessage = `
// You are an AI assistant. The user will enter a personal note. List the broad topics in 3-4 words which the user is talking about.
// Also provide the detailed observations within each topic. Make sure to include detailed versions of all the points and examples the user has mentioned as bullet points. Also, suggest the next steps or tasks with due dates which the user can do based on the note. Include due dates for each task.

// Provide the output in Markdown as follows"

// # Summary
// [Summary of the entire note in 1 or 2 sentences]

// # Notes

// ## [First topic goes here]
// [Notes for the topic in bullet points goes here]

// ## [Second topic goes here]
// [Notes for the topic in bullet points goes here]

// # Next steps

// [Next steps for the user along with due dates goes here]
// `

const userPrompt2 = `

	- Checkmarx he'll help with the contatct
	- Migration-
		- Get the library to projects to jenkins
	- Bi-weekly email
	- Send an email to rebekha (ankur, Thom and yourself)
	- Just use XLR prod
	- XLR scope
		- QA separate aritfcats
		- Non prod cycle
		- AD groups (for QA, team)
		- SPin up an enronment load envs
`

const userPrompt = `
Title: Teaching shadowing:

	- Send one invite for everyone with timing!
	- Start my casual interaction. Make them talk. Keep the conversations open ended.
		- Consider establishing a good getting-started routine which focusses on:
			- Freeing them up a bit
			- Raising the overall energy level
			- Set a good tone for the rest of the invite
	- Weave english & math questions:
		- How was your week? (Ask follow up costumes to make the conversation deeper)
		- How was your summer?
		- Did you go to Jamatkhana?
	- Regularly ask how was school
		- What they are doing in school
		- Any homework?
	- Go straight to screen sharing from here
		- Resources:
			- IXL (Always touch this. Good for assessments)
			- K5Learning (Good for additional training material)
			- pictures for a google search
		- Decide what you wanna go through in the session before the session itself
	- Questioning round: Keep un-sharing during this
		- Make them work their memory
		- Watch their body language
		- Might have to share again to jog their memory
		- Interweave the questioning in their daily life. So make them relate the content personally. This generates some good homework ideas (especially when they are new to such things)
	- Make them write stuff:
		- Make sure they write what they need help in
		- Writing is good to engage more of the brain
		- Stuff like spellings
	- Have a reward system on milestones (like getting 3 right in a row)
		- Like a small solute
	- Make personal notes based on interactions which you can follow up on.
		- Find addional resources on k5learning
		- For math, researching on techniques will help
	- Questions I need to follow up on:
		- How do i send the invites? Single or multiple
		- Does ixl assignments update the diagnostics
`


export const getActionPoints = async (note: string) => {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{role: "system", content: systemMessage}, { role: 'user', content: note }],
    model: '',
    temperature: 0.2,
    max_tokens: 4096,
    top_p: 0.9,
  });

  return chatCompletion.choices[0].message.content;
}
