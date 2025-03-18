
[SolidJS](https://www.solidjs.com/) is a popular and open-source declarative JavaScript library that empowers reactive UI interfaces for the web that ensures a performant benchmark, leverages the flexibility of JSX and also provides support for TypeScript, Astro, and Vite.

The SolidJS library is used by many web developers and smaller companies and it was even spotted being used in OpenAI's ChatGPT interface used for artificial intelligence UI/UX interactivity.

By [following the steps from this guide](https://flowbite.com/docs/getting-started/solid-js/) you will learn how to create a new project using SolidJS, install and set up Tailwind CSS to leverage the utility classes and finally install and integrate the free and open-source UI components from Flowbite.

## Requirements

Before getting started make sure that you have [Node.js](https://nodejs.org/en/) installed on your local machine to be able to install both SolidJS, Tailwind CSS and Flowbite.

## Create a SolidJS project

1. Execute the following command in your terminal to create a new SolidJS project using Vite Templates:

```bash
npx degit solidjs/templates/js flowbite-app
cd flowbite-app
```

This command will create a boilerplate project that sets up a basic project structure and dependency files.

2. Install the project dependencies using NPM:

```bash
npm install
```

3. Execute the following command to create a local development server:

```bash
npm run dev
```

The newly created SolidJS project will now be accessible via the browser on `http://localhost:3000`.

4. Create a production build by running the following command in your terminal or deployment pipeline:

```bash
npm run build
```

You now have a working SolidJS project configuration installed and can now proceed with installing Tailwind CSS and Flowbite to build web UI interfaces even faster.

## Install Tailwind CSS

[Tailwind CSS](https://tailwindcss.com/) is the most popular utility-first CSS framework leveraging PostCSS and utility classes inside your templates to speed up UI development.

1. Install Tailwind CSS using NPM and executing the following command in your terminal:

```bash
npm install --save-dev tailwindcss @tailwindcss/postcss postcss
```

2. Create a new `postcss.config.mjs` configuration file and at the following code:
   
```javascript
// postcss.config.mjs
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  }
}
```

3. Import the default Tailwind CSS directive inside the `./src/index.css` default CSS file from SolidJS:

```css
@import "tailwindcss";
```

4. Restart your local development server by running `npm run dev` and you can now use the utility-first classes inside your SolidJS project by testing it out in your `App.jsx` file:

```javascript
function App() {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          class="text-4xl text-blue-600"
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid, Tailwind CSS and Flowbite
        </a>
      </header>
    </div>
  );
}

export default App;
```

You now have both SolidJS and Tailwind CSS successfully installed and configured in your local project and we can now proceed by setting up the UI components from Flowbite.

## Install Flowbite

[Flowbite](https://flowbite.com) is a popular and open-source UI component library built on top of the classes from Tailwind CSS and it can help you kickstart building websites and applications by leveraging interactive UI components such as navbars, modals, dropdowns, datepickers, and more.

1. Install Flowbite as a dependency using NPM by running the following command:

```bash
npm install flowbite --save
```

2. Import the default theme variables from Flowbite inside your main `index.css` CSS file:

```css
@import "flowbite/src/themes/default";
```

3. Import the Flowbite plugin file in your CSS:

```css
@plugin "flowbite/plugin";
```

4. Configure the source files of Flowbite in your CSS:

```css
@source "../../node_modules/flowbite";
```

Now that you have installed Flowbite you can start using the UI components from the documentation inside your SolidJS project.

## Flowbite components

All of the interactive and non-interactive [components from Flowbite](https://flowbite.com/docs/getting-started/solid-js/) can now be used so let's first start by adding the [Modal component](https://flowbite.com/docs/components/modal/) by creating a new `Modal.jsx` component.

The most important part is that you need to import the `initFlowbite()` function from Flowbite and then call this function using the `onMount` hook method from SolidJS so that the interactive data attributes events can be initialized.

```javascript
import logo from './logo.svg';
import styles from './App.module.css';

import { initFlowbite } from 'flowbite';
import { onMount } from 'solid-js';

function Modal() {
  onMount(() => {
    initFlowbite();
  });

  return (
    <div>
      <button data-modal-target="default-modal" data-modal-toggle="default-modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
        Toggle modal
      </button>

      <div id="default-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
          <div class="relative p-4 w-full max-w-2xl max-h-full">
              <div class="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                  <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                          Terms of Service
                      </h3>
                      <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                          <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                          </svg>
                          <span class="sr-only">Close modal</span>
                      </button>
                  </div>
                  <div class="p-4 md:p-5 space-y-4">
                      <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                          With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                      </p>
                      <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                          The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                      </p>
                  </div>
                  <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                      <button data-modal-hide="default-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                      <button data-modal-hide="default-modal" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Decline</button>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}

export default App;
```

This example adds a button which when clicked it will open a modal component with a title, description, and close button.
