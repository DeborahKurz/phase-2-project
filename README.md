# Phase 2 Project: Bible Verse Keeper

The purpose of this application is to help users keep tack of Bible verses that are meaningful to them. This app is designed for 1 user. Users can utilize the form on the "home page" to add a new verse their list. Verses are separated between those located in the Old Testament of the Bible and those located in the New Testament of the Bible. A user can view their saved verses in either the "Old Testament" page, or the "New Testament" page.

This project stores verses in a local db.json file, and makes GET and POST requests to this file.

# How To Get This Project Running
Before you do anything with this project (including view it), you will need to start the JSON server on your computer. Here are the steps:
1. Open your terminal
2. Type in your terminal: $ json-server --watch db.json
3. When the server is running you can open the project. To view this project in your browser, type inthe project terminal: $ npm start
4. Make sure you have react router v6 installed: $ npm install  react-router-dom@6

# Features
This project meets several requirements for my Phase-2 Project at Flatiron's School. Some of those requirements included having only 1 index.html file, 5 REACT Components, 3 client-side routes, a Navbar to navigate between the routes, a JSON-server with a RESTful API, and a CSS file.

A POST request was used to add new a new Bible verse to the array of "saved" Bible verses.

My 5 Components Included:
1. App
2. Form
3. OldTestament
4. NewTestament
5. VerseCard

My Routes Included:
1. "/" leads to the App component
2. "/oldtestament" leads to the OldTestament component
3. "/newtestament" leads to the NewTestament component

On the "home" page, a user will see a form that allows them to add their favorite verses. The form asks for: 1. Which testament the verse is located in. 2. The reference. 3. The verse itself. 4. A URL for reference purposes.

![Form Demo](https://github.com/DeborahKurz/phase-2-project/blob/main/READMEGifs/form.gif)


A user can utilize the navigation bar above the form (gray buttons), to navigate between the saved Old Testament and New Testament verses. These pages will display the information on each verse the order that they were added to the Bible Verse Keeper.

![Navigation Bar and Pages Demo](https://github.com/DeborahKurz/phase-2-project/blob/main/READMEGifs/navBar.gif)


# Credits

I based some of my index.css styling off of Flatiron School's React Hooks React Router Routes Lab's CSS styling:
https://github.com/learn-co-curriculum/react-hooks-react-router-routes-lab-v6