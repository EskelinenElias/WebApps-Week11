# Assignment
This week will introduce Material UI, useEffect clean up and custom hook. This week's tasks will create a joke generator application with features such as generating a random joke and saving selected jokes. 

Requirements and Scoring:

**1. Material-UI**
In this task we will use React components from 3rd party provider, Material UI. install Material UI by following their instructions. You should use the latest version of Material-UI, which is currently v6. 

Create an App Bar using Material UI. You should have a component Header.tsx that should contain the App Bar. You can choose whichever App Bar template you like, but it should contain at least <AppBar> component and two Material UI <Button> components. The Buttons should redirect user to home page "/" and to saved page "/saved". Button that goes to index page should have text "home" in it, and the other one should have "saved".

Pro tip: you can use custom Buttons to use react-router-dom Links inside Material-UI buttons to avoid unnecessary full page loads: react-router-dom buttons Also, you should add React Router to the App.tsx to handle routing to "/" and "/saved" similarly as in the previous week's tasks.

Note: Material UI has a lot of pre-styled components and these tasks will cover only a few of them. You should checkout other components too from the MUI docs.

