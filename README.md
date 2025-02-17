# react_0_experto_hooks_mern
React: De cero a experto ( Hooks y MERN )

Instalar
    1 Chrome
        1.1 React Developer Tools https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en
        1.2 Redux DevTools  https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en
    2 Visual Studio Code    https://code.visualstudio.com/
        2.1 Activitus Bar   https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.activitusbar
        2.2 Bracket Pair Colorizer 2 https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2
            2.2.1 Preferencias --> Edit Settings.json   
                Agregar
    "bracket-pair-colorizer-2.colors": [
        "#fafafa",
        "#9F51B6",
        "#F7C244",
        "#F07850",
        "#9CDD29",
        "#C497D4"
    ],
        2.3 Monokai Night Theme https://marketplace.visualstudio.com/items?itemName=fabiospampinato.vscode-monokai-night
        2.4 Tokyo Night https://marketplace.visualstudio.com/items?itemName=enkia.tokyo-night
        2.5 Material Icon Theme https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme
        2.6 ES7+ React/Redux/React-Native snippets  https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets
        2.7 Simple React Snippets   https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets
        2.8 Auto Close Tag  https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag
    3 Postman
    4 Mongo Compass https://www.mongodb.com/try/download/compass
    5 Git 
    6 Node v18.20.6


Babel  http://babeljs.io/

Test
        const restApi = {
        personajes: ['Goku',"Vegeta"]
        }

        console.log(restApi.personajes.length);
    Expect
        2
Error
        const restApi = {
        //personajes: ['Goku',"Vegeta"]
        }

        console.log(restApi.personajes?.length);
    Expect
        VM128:5 Uncaught TypeError: Cannot read properties of undefined (reading 'length')
        at <anonymous>:5:32

Fix
        const restApi = {
        //personajes: ['Goku',"Vegeta"]
        }

        console.log(restApi.personajes?.length);
    Expect 
        undefined

Create React App - CRA
    Vite https://vite.dev/guide/
    npx create-react-app my-app

    start application: npm start

JS Documentation Mozilla MDN https://developer.mozilla.org/es/
