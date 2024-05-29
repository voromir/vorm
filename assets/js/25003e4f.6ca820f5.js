"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2838],{4351:e=>{e.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"/2024/05/29/setting-up","metadata":{"permalink":"/blog/2024/05/29/setting-up","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-05-29-setting-up.md","source":"@site/blog/2024-05-29-setting-up.md","title":"Environment setup","description":"Unleash your terminal:","date":"2024-05-29T00:00:00.000Z","tags":[{"label":"Terminal","permalink":"/blog/tags/terminal"},{"label":"MacOS","permalink":"/blog/tags/mac-os"},{"label":"Environment","permalink":"/blog/tags/environment"}],"readingTime":0.935,"hasTruncateMarker":false,"authors":[{"name":"Dani Vorobiev","title":"Front End Engineer","url":"https://sebastienlorber.com","imageURL":"https://i.ibb.co/YTPxvhW/voro-profile.png","key":"dani"}],"frontMatter":{"authors":["dani"],"tags":["Terminal","MacOS","Environment"]},"unlisted":false,"nextItem":{"title":"What is and MDX file?","permalink":"/blog/2024/05/26/mdx-trial"}},"content":"## Unleash your terminal:\\n\\nAs a developer, you gonna spend some time with your terminal. Even if you like GUI. Terminal is one of our main tools and it\'s nice to have a visually pleasant and powerful terminal instead of borring and limited default one. In this post I gonna explain how I like to configure and personalize my Terminal and the main concepts thet we need to know: what is the shell, what is the terminal, what is a CLI, what different kinds of shelld do we have and how to take the better advantage of our terminal and shell configuration.\\n\\n_Unleash your terminal_ is the slogan of Oh My Zsh, an open source community driven Zsh manager. This is one of the quickest an easiest ways to get a powerful yet beautiful terminal in a few steps. They promise you:\\n_Once installed, your terminal shell will become the talk of the town or your money back!_\\n\\n-MY ZSH + Fonts + iTerm\\n-Aliases with custom scripts\\n\\n-Mac plugins: Alfred, Rectangle\\n\\n## Chrome plugins\\n\\n-Chrome plugins: JSON, CSS Outline, DarkMode, ShewTabNumbers, React DeveloprTools, ModHeader, Redux DevTools."},{"id":"/2024/05/26/mdx-trial","metadata":{"permalink":"/blog/2024/05/26/mdx-trial","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-05-26-mdx-trial.mdx","source":"@site/blog/2024-05-26-mdx-trial.mdx","title":"What is and MDX file?","description":"Empowering the text","date":"2024-05-26T00:00:00.000Z","tags":[{"label":"mdx","permalink":"/blog/tags/mdx"},{"label":"markdown","permalink":"/blog/tags/markdown"},{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":1.96,"hasTruncateMarker":false,"authors":[{"name":"Dani Vorobiev","title":"Front End Engineer","url":"https://sebastienlorber.com","imageURL":"https://i.ibb.co/YTPxvhW/voro-profile.png","key":"dani"}],"frontMatter":{"authors":["dani"],"tags":["mdx","markdown","docusaurus"]},"unlisted":false,"prevItem":{"title":"Environment setup","permalink":"/blog/2024/05/29/setting-up"}},"content":"import BouncingBall from \\"../src/components/BouncingBall\\";\\nimport LiveCodeExample from \\"../src/components/LiveCodeExample\\";\\n\\n\\n## Empowering the text\\n\\nMarkdown is a tool that allows you to write using an easy-to-write plain text format, that is converted to structurally valid HTML.\\nMarkdown is great. It\'s very intuitive so you can start using it just after learning the basic syntax.\\nAnd lots of great platforms are powered by markdown syntax: Obsidian, Notion, Stack Overflow, GitHub,\\nJekyll, Docusaurus and much more. So if you\'re getting in the software development world, you will be using\\nmarkdown for sure.\\n\\nWith Markdown youcan write text, lists, tables, code blocks, images, links, and much more. Let\'s put here\\nan example of each one:\\n\\n> Text that is a quote\\n\\n1. First item\\n2. Second item\\n\\n```javascript\\nconsole.log(\\"Hello, world!\\");\\n```\\n\\n[Docusaurus](https://docusaurus.io) is a project for easily building, deploying, and maintaining open source project websites.\\n\\nThese are some of the basic features of markdown. But there\'s much more. You can finde more detailed information\\nin the [Markdown Guide](https://www.markdownguide.org/) and in the [GitHub Markdown Guide](https://guides.github.com/features/mastering-markdown/).\\n\\n## From MD to MDX\\n\\nBut what if you want to add some interactivity to your markdown file? You can use MDX for that. MDX is a markdown\\nfile that can contain JSX code. Isn\'t that great? If you use React, you know that JSX is a syntax extension for JavaScript that allows you to write HTML elements\\ninside your JavaScript code. Once you get used to it, it gets really easy to write pages with this syntax. So with the MDX basically you can write React\\ncomponents inside your markdown file. Here goes an example:\\n\\n<BouncingBall />\\n\\nWhich in the code looks like this:\\n\\n```jsx\\nimport BouncingBall from \\"../src/components/BouncingBall\\";\\n\\n// All the markdown content\\n\\n<BouncingBall />;\\n```\\n\\nBasically, you just import the component and use it as you would use it in a React component. You can also declare variables and pass props to the components.\\nSo you can create a very interactive page with just a markdown file.\\n\\n## More cool stuff!\\n\\nBeing able to use JSX in markdown files gives you a lot of power. You can create almost anything you want. You can create a live code editor, for example. Let\'s have a look:\\n\\n<LiveCodeExample />\\n\\nHow cool is that? You can write code and see the result in real-time. And you can do this in a markdown file."}]}}')}}]);