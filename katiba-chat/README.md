<!-- prettier-ignore -->
<div align="center">

<img src="./packages/webapp/public/favicon.png" alt="" align="center" height="64" />

# JuaKatiba - Kenyan Constitution AI Assistant

A serverless AI Chat assistant with RAG (Retrieval-Augmented Generation) using LangChain.js, specifically designed to help users understand and interpret the Constitution of Kenya and other Kenyan laws.

:star: If you like this project, star it on GitHub — it helps a lot!

[Problem](#problem) • [Why This Template](#why-this-template) • [Customizations](#customizations) • [Getting Started](#getting-started) • [Features](#features)

![Animation showing JuaKatiba in action](./docs/images/demo.gif)

</div>

## Problem

Kenya is experiencing a significant political awakening, particularly among Gen Z citizens who are actively challenging government actions they perceive as punitive, corrupt, and unaccountable. Current issues include:

- **Youth-Led Protests**: Gen Z Kenyans are rising against government policies, police brutality, and systemic corruption
- **Constitutional Ignorance**: Many protesters and citizens don't fully understand their constitutional rights and how to legally defend them
- **Government Accountability Crisis**: Citizens struggle to hold officials accountable due to lack of legal knowledge
- **Police Brutality**: Young people face harassment but don't know their legal protections and recourse options
- **Complex Legal Language**: Constitutional documents use technical language that's difficult for ordinary citizens and activists to understand
- **Limited Legal Literacy**: Many Kenyans, especially youth, lack resources to interpret legal documents during critical moments
- **Expensive Legal Consultation**: Getting legal guidance during protests or government encounters requires expensive lawyer consultations most cannot afford

**The Need for Constitutional Awareness**: As Kenyans continue to fight for justice, transparency, and accountability, there's an urgent need for citizens—especially young activists—to understand their Constitution, know their rights, and learn how to defend them legally.

**JuaKatiba** addresses this critical need by providing an intelligent, accessible AI assistant that can instantly interpret Kenyan legal documents, explain constitutional rights in simple terms, and help citizens understand how to legally protect themselves while fighting for change. This tool empowers the current generation of Kenyan activists with the legal knowledge they need to challenge injustice effectively and safely.

## Why This Template

I chose the **Azure AI Chat Template** as the foundation for JuaKatiba because it provides:

### Technical Advantages
- **Proven RAG Architecture**: Built-in Retrieval-Augmented Generation ensures responses are grounded in actual legal documents
- **Serverless Scalability**: Azure Functions and Static Web Apps provide cost-effective scaling for varying user loads
- **Enterprise-Ready**: Production-ready authentication, monitoring, and deployment infrastructure
- **LangChain.js Integration**: Powerful document processing and AI orchestration capabilities

### Development Benefits
- **Rapid Prototyping**: Pre-built chat interface and API endpoints accelerated development
- **Best Practices**: Follows Microsoft's recommended patterns for AI applications
- **Comprehensive Documentation**: Extensive guides and examples for customization
- **CI/CD Ready**: Built-in GitHub Actions for automated deployment

### Cost Efficiency
- **Pay-per-Use**: Serverless architecture means costs scale with actual usage
- **No Infrastructure Management**: Focus on legal content rather than server maintenance
- **Azure Credits**: Eligible for Azure for Students and startup programs

## Customizations

I transformed the generic Contoso chat template into a specialized Kenyan legal assistant through extensive customizations:

### 🎨 **Branding & UI**
- **Kenyan Identity**: Replaced all Contoso branding with Kenyan flag colors (black, red, green, white)
- **Visual Elements**: Added Kenyan flag logo and themed background images
- **Typography**: Updated app name to "JuaKatiba" (Swahili for "Know the Constitution")
- **Favicon**: Custom Kenyan flag favicon for browser tabs

### 🧠 **AI Behavior**
- **System Prompt**: Completely rewrote the AI system prompt to focus on Kenyan law interpretation
- **Legal Citations**: Configured the AI to always provide specific article and section references
- **Disclaimers**: Added appropriate legal disclaimers about AI-generated legal information
- **Kenyan Context**: Trained responses to understand Kenyan legal terminology and concepts

### 📚 **Content & Data**
- **Document Focus**: Removed Contoso sample documents and optimized for legal PDFs
- **Default Prompts**: Replaced generic questions with Kenyan constitutional queries like:
  - "What are the fundamental rights in Chapter 4 of the Constitution?"
  - "Explain the process of presidential impeachment in Kenya"
  - "What are the functions of the Judiciary under Article 159?"
- **Legal Document Support**: Added instructions for uploading Constitution, Acts of Parliament, and legal precedents

### 🛠️ **Technical Enhancements**
- **Document Processing**: Optimized chunking and indexing for legal document structure
- **Error Handling**: Added specific error messages for legal document processing
- **Local Development**: Simplified setup to work without Azure dependencies for legal researchers
- **Upload Scripts**: Customized document upload with legal-specific metadata

### 📖 **Documentation**
- **User Guide**: Created comprehensive guide for legal professionals and students
- **Setup Instructions**: Simplified deployment guide focused on legal use cases
- **Data Management**: Detailed instructions for managing legal document collections
- **FAQ**: Added common questions about Kenyan law and constitutional interpretation

### 🔧 **Configuration**
- **Environment Variables**: Streamlined configuration for legal document processing
- **API Endpoints**: Optimized for legal query patterns and citation requirements
- **Deployment**: Configured for Kenyan legal institutions and educational use

These customizations transformed a generic business chat template into a specialized legal assistant that understands Kenyan law, speaks to Kenyan users, and provides authoritative constitutional guidance.

## Architecture

This application uses the same proven architecture as enterprise AI chat applications:

<div align="center">
  <img src="./docs/images/architecture.drawio.png" alt="Application architecture" width="640px" />
</div>

### Components:

- **Web App**: Built with Lit web components and hosted on Azure Static Web Apps
- **API**: Serverless functions using Azure Functions and LangChain.js for document processing and chat responses
- **Database**: Azure Cosmos DB for storing chat sessions and vector embeddings of legal documents
- **File Storage**: Azure Blob Storage for storing source legal documents

### Current Legal Documents

The assistant is designed to work with:

- Constitution of Kenya (2010) - _Upload required_
- Acts of Parliament
- Legal precedents and case law
- Regulatory documents
- Legal templates and forms

_Note: You can easily add more Kenyan legal documents by placing PDF files in the `data/` folder and running the upload script._

## Features

- 🏛️ **Constitutional Rights Education**: Deep knowledge of constitutional protections relevant to current protests
- ⚖️ **Legal Protection Guidance**: Interprets laws protecting citizens from police brutality and government overreach
- 🗣️ **Activist-Friendly Interface**: Natural language queries about legal rights during protests and civil action
- 🔍 **Contextual Legal Advice**: RAG-powered responses with specific constitutional citations for defending rights
- 📱 **Mobile-First Design**: Accessible on phones for real-time legal guidance during protests or encounters
- 🚀 **Instant Access**: Serverless architecture ensures fast responses when legal knowledge is urgently needed
- 📚 **Precise Legal Citations**: Always provides specific article and section references for constitutional protections
- ⚠️ **Responsible Disclaimers**: Clear guidance on when to seek professional legal representation
- 🛡️ **Rights Protection Focus**: Specialized knowledge on fundamental rights, freedoms, and legal recourse options

### What Makes JuaKatiba Different

Unlike generic AI assistants, JuaKatiba is specifically designed for the current Kenyan political context and trained on Kenyan legal documents, making it an essential tool for:

- **Young Activists & Gen Z**: Understanding constitutional rights during protests and government encounters
- **Legal Professionals**: Quick references for defending citizens' rights and challenging government actions
- **Citizens Fighting Injustice**: Clear explanations of legal protections against police brutality and government overreach
- **Students & Researchers**: Analysis of constitutional provisions relevant to current political movements
- **Civil Society Organizations**: Legal guidance for advocacy and accountability efforts
- **Ordinary Kenyans**: Accessible legal knowledge to protect themselves and their communities

**Empowering Kenya's Fight for Justice**: JuaKatiba transforms complex constitutional language into actionable legal knowledge that every Kenyan can understand and use in their fight for a more just and accountable government.

We use the [HTTP protocol for AI chat apps](https://aka.ms/chatprotocol) to communicate between the web app and the API.

## Features

- **Serverless Architecture**: Utilizes Azure Functions and Azure Static Web Apps for a fully serverless deployment.
- **Retrieval-Augmented Generation (RAG)**: Combines the power of Azure Cosmos DB and LangChain.js to provide relevant and accurate responses.
- **Chat Sessions History**: Maintains a personal chat history for each user, allowing them to revisit previous conversations.
- **Scalable and Cost-Effective**: Leverages Azure's serverless offerings to provide a scalable and cost-effective solution.
- **Local Development**: Supports local development using Ollama for testing without any cloud costs.

## Getting started

There are multiple ways to get started with this project.

The quickest way is to use [GitHub Codespaces](#use-github-codespaces) that provides a preconfigured environment for you. Alternatively, you can [set up your local environment](#use-your-local-environment) following the instructions below.

> [!IMPORTANT]
> If you want to run this sample entirely locally using Ollama, you have to follow the instructions in the [local environment](#use-your-local-environment) section.

### Use your local environment

You need to install following tools to work on your local machine:

- [Node.js LTS](https://nodejs.org/download/)
- [Azure Developer CLI](https://aka.ms/azure-dev/install)
- [Git](https://git-scm.com/downloads)
- [PowerShell 7+](https://github.com/powershell/powershell) _(for Windows users only)_
  - **Important**: Ensure you can run `pwsh.exe` from a PowerShell command. If this fails, you likely need to upgrade PowerShell.
  - Instead of Powershell, you can also use Git Bash or WSL to run the Azure Developer CLI commands.
- [Azure Functions Core Tools](https://learn.microsoft.com/azure/azure-functions/functions-run-local?tabs=macos%2Cisolated-process%2Cnode-v4%2Cpython-v2%2Chttp-trigger%2Ccontainer-apps&pivots=programming-language-javascript) _(should be installed automatically with NPM, only install manually if the API fails to start)_

Then you can get the project code:

1. [**Fork**](https://github.com/Azure-Samples/serverless-chat-langchainjs/fork) the project to create your own copy of this repository.
2. On your forked repository, select the **Code** button, then the **Local** tab, and copy the URL of your forked repository.

<div align="center">
  <img src="./docs/images/clone-url.png" alt="Screenshot showing how to copy the repository URL" width="400px" />
</div>
3. Open a terminal and run this command to clone the repo: <code> git clone &lt;your-repo-url&gt; </code>

### Use GitHub Codespaces

You can run this project directly in your browser by using GitHub Codespaces, which will open a web-based VS Code:

[![Open in GitHub Codespaces](https://img.shields.io/static/v1?style=for-the-badge&label=GitHub+Codespaces&message=Open&color=blue&logo=github)](https://codespaces.new/Azure-Samples/serverless-chat-langchainjs?hide_repo_select=true&ref&quickstart=true)

### Use a VSCode dev container

A similar option to Codespaces is VS Code Dev Containers, that will open the project in your local VS Code instance using the [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers).

You will also need to have [Docker](https://www.docker.com/products/docker-desktop) installed on your machine to run the container.

[![Open in Dev Containers](https://img.shields.io/static/v1?style=for-the-badge&label=Dev%20Containers&message=Open&color=blue&logo=visualstudiocode)](https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/Azure-Samples/serverless-chat-langchainjs)

## Run the sample

There are multiple ways to run this sample: locally using Ollama or Azure OpenAI models, or by deploying it to Azure.

### Deploy the sample to Azure

#### Azure prerequisites

- **Azure account**. If you're new to Azure, [get an Azure account for free](https://azure.microsoft.com/free) to get free Azure credits to get started. If you're a student, you can also get free credits with [Azure for Students](https://aka.ms/azureforstudents).
- **Azure subscription with access enabled for the Azure OpenAI service**. You can request access with [this form](https://aka.ms/oaiapply).
- **Azure account permissions**:
  - Your Azure account must have `Microsoft.Authorization/roleAssignments/write` permissions, such as [Role Based Access Control Administrator](https://learn.microsoft.com/azure/role-based-access-control/built-in-roles#role-based-access-control-administrator-preview), [User Access Administrator](https://learn.microsoft.com/azure/role-based-access-control/built-in-roles#user-access-administrator), or [Owner](https://learn.microsoft.com/azure/role-based-access-control/built-in-roles#owner). If you don't have subscription-level permissions, you must be granted [RBAC](https://learn.microsoft.com/azure/role-based-access-control/built-in-roles#role-based-access-control-administrator-preview) for an existing resource group and [deploy to that existing group](docs/deploy_existing.md#resource-group).
  - Your Azure account also needs `Microsoft.Resources/deployments/write` permissions on the subscription level.

#### Cost estimation

See the [cost estimation](./docs/cost.md) details for running this sample on Azure.

#### Deploy the sample

1. Open a terminal and navigate to the root of the project.
2. Authenticate with Azure by running `azd auth login`.
3. Run `azd up` to deploy the application to Azure. This will provision Azure resources, deploy this sample, and build the search index based on the files found in the `./data` folder.
   - You will be prompted to select a base location for the resources. If you're unsure of which location to choose, select `eastus2`.
   - By default, the OpenAI resource will be deployed to `eastus2`. You can set a different location with `azd env set AZURE_OPENAI_RESOURCE_GROUP_LOCATION <location>`. Currently only a short list of locations is accepted. That location list is based on the [OpenAI model availability table](https://learn.microsoft.com/azure/ai-services/openai/concepts/models#standard-deployment-model-availability) and may become outdated as availability changes.

The deployment process will take a few minutes. Once it's done, you'll see the URL of the web app in the terminal.

<div align="center">
  <img src="./docs/images/azd-up.png" alt="Screenshot of the azd up command result" width="600px" />
</div>

You can now open the web app in your browser and start chatting with the bot.

##### Enhance security

When deploying the sample in an enterprise context, you may want to enforce tighter security restrictions to protect your data and resources. See the [enhance security](./docs/enhance-security.md) guide for more information.

#### Enable CI/CD

If you want to enable Continuous Deployment for your forked repository, you need to configure the Azure pipeline first:

1. Open a terminal at the root of your forked project.
2. Authenticate with Azure by running `azd auth login`.
3. Run `azd pipeline config` to configure the required secrets and variables for connecting to Azure from GitHub Actions.
   - This command will set up the necessary Azure service principal and configure GitHub repository secrets.
   - Follow the prompts to complete the configuration.

Once configured, the GitHub Actions workflow will automatically deploy your application to Azure whenever you push changes to the main branch.

#### Clean up

To clean up all the Azure resources created by this sample:

1. Run `azd down --purge`
2. When asked if you are sure you want to continue, enter `y`

The resource group and all the resources will be deleted.

### Run the sample locally with Ollama

If you have a machine with enough resources, you can run this sample entirely locally without using any cloud resources. To do that, you first have to install [Ollama](https://ollama.com) and then run the following commands to download the models on your machine:

```bash
ollama pull llama3.1:latest
ollama pull nomic-embed-text:latest
```

> [!NOTE]
> The `llama3.1` model with download a few gigabytes of data, so it can take some time depending on your internet connection.

After that you have to install the NPM dependencies:

```bash
npm install
```

Then you can start the application by running the following command which will start the web app and the API locally:

```bash
npm start
```

Then, open a new terminal running concurrently and run the following command to upload the PDF documents from the `/data` folder to the API:

```bash
npm run upload:docs
```

This only has to be done once, unless you want to add more documents.

You can now open the URL `http://localhost:8000` in your browser to start chatting with the bot.

> [!NOTE]
> While local models usually works well enough to answer the questions, sometimes they may not be able to follow perfectly the advanced formatting instructions for the citations and follow-up questions. This is expected, and a limitation of using smaller local models.

### Run the sample locally with Azure OpenAI models

First you need to provision the Azure resources needed to run the sample. Follow the instructions in the [Deploy the sample to Azure](#deploy-the-sample-to-azure) section to deploy the sample to Azure, then you'll be able to run the sample locally using the deployed Azure resources.

Once your deployment is complete, you should see a `.env` file in the `packages/api` folder. This file contains the environment variables needed to run the application using Azure resources.

To run the sample, you can then use the same commands as for the Ollama setup. This will start the web app and the API locally:

```bash
npm start
```

Open the URL `http://localhost:8000` in your browser to start chatting with the bot.

Note that the documents are uploaded automatically when deploying the sample to Azure with `azd up`.

> [!TIP]
> You can switch back to using Ollama models by simply deleting the `packages/api/.env` file and starting the application again. To regenerate the `.env` file, you can run `azd env get-values > packages/api/.env`.

## Resources

Here are some resources to learn more about the technologies used in this sample:

- [LangChain.js documentation](https://js.langchain.com)
- [Generative AI with JavaScript](https://github.com/microsoft/generative-ai-with-javascript)
- [Generative AI For Beginners](https://github.com/microsoft/generative-ai-for-beginners)
- [Azure OpenAI Service](https://learn.microsoft.com/azure/ai-services/openai/overview)
- [Azure Cosmos DB for NoSQL](https://learn.microsoft.com/azure/cosmos-db/nosql/)
- [Ask YouTube: LangChain.js + Azure Quickstart sample](https://github.com/Azure-Samples/langchainjs-quickstart-demo)
- [Chat + Enterprise data with Azure OpenAI and Azure AI Search](https://github.com/Azure-Samples/azure-search-openai-javascript)
- [Revolutionize your Enterprise Data with Chat: Next-gen Apps w/ Azure OpenAI and AI Search](https://aka.ms/entgptsearchblog)

You can also find [more Azure AI samples here](https://github.com/Azure-Samples/azureai-samples).

## FAQ

You can find answers to frequently asked questions in the [FAQ](./docs/faq.md).

## Troubleshooting

If you have any issue when running or deploying this sample, please check the [troubleshooting guide](./docs/troubleshooting.md). If you can't find a solution to your problem, please [open an issue](https://github.com/Azure-Samples/serverless-chat-langchainjs/issues) in this repository.

## Guidance

For more detailed guidance on how to use this sample, please refer to the [tutorial](./docs/tutorial/01-introduction.md).

## Contributing

This project welcomes contributions and suggestions. Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.opensource.microsoft.com.

When you submit a pull request, a CLA bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## Trademarks

This project may contain trademarks or logos for projects, products, or services. Authorized use of Microsoft
trademarks or logos is subject to and must follow
[Microsoft's Trademark & Brand Guidelines](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks/usage/general).
Use of Microsoft trademarks or logos in modified versions of this project must not cause confusion or imply Microsoft sponsorship.
Any use of third-party trademarks or logos are subject to those third-party's policies.
