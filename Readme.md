# SFU Fall Hacks 2023

## Project description

We all decide that we want to start afresh and organize our lives. But getting discipled and getting our lives on track can be a super cumbersome affair. Our AI helper is here to help. Its an AI assistant to auto extract action items that need to be performed by auto parsing the transcripts of your meeting notes. You'll never have to manually make your todos ever again.

Let's turn a new leaf and get productive

## File Structure

- `my-react-app`
  - Frontend built in react.
  - Contains 3 components: `App` (root component), `NewNote` (to add a new note), `Notes` (to visualise your notes)
  - All components are placed in the `src/components` directory.
  - Vite is used to build the project
- `nodejs-wrapper-openai`
  - This is the backend app written in typescript
  - It uses the openai wrapper to talk to a local LLM model
  - Local model is hosted using [text-generation-ui](https://github.com/oobabooga/text-generation-webui)
  - We are using in Apache 2.0 licenced model which is a fined tuned version of [Mistral](https://huggingface.co/TheBloke/dolphin-2.1-mistral-7B-GPTQ)
  - You own your data. No one will ever use it to train models
  - All code is in the `src` directory. `index.ts` has the express server. `chat.ts` has the openai library and prompts.

## Reproducing the project

### Prerequisites
- You need a GPU with atleast 8GB VRAM
- Install nvidia cuda drivers
- Install nodejs and pnpm

### Steps
- Run [text-generation-ui](https://github.com/oobabooga/text-generation-webui) with the openai extension. Steps in readme of project. `python server.py --listen --extensions openai`
- Download and load the model mentioned above. Steps in its readme
- Run `pnpm i` in both our root directories
- Run `pnpm run dev` in `nodejs-wrapper-openai` and in `my-react-app` separately

## Participate info
- Karim Khoja - karimkhoja13@yahoo.com
- Noorain Panjwani - noorain.panjwani@gmail.com

## Acknoledgements
- Big thanks to TheBloke for creating the quantized versions of the models we are using
- Thanks to text generation ui framework for running the inference engine
- Openai library is used to interface with the local inference engine

## Github Repo
https://github.com/YourTechBud/sfu-fall-hacks-2023




