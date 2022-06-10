# Smart Table

 [Live Site Link](https://smart-table-sakibahamedkhan.netlify.app/)

[https://smart-table-sakibahamedkhan.netlify.app/](https://smart-table-sakibahamedkhan.netlify.app/)

# Instructions
First Clone this repository
```
    $ git clone https://github.com/SakibAhamedKhan/smart-table-client
```
Install the dependencies. Make sure you already have nodejs & npm installed in your system.
```
    $ npm install # or yarn
```
For Run
```
    $ npm start # or yarn start
```

# Technology
* React
* React Router
* Tailwind CSS
* Daisy UI
* React Icons
* Netlify
* JSONPlaceholder

# How this project was implemented
* At first, fetching all data from API.
* Then store this data in ‘post’ and ‘saveForUse’.
* Pagination:
    * Count the data from ‘post’.
    * Then find the number of data shown in each pagination index.
    * Get every paginates index modifying data by the original fetched data ‘post’.
    * Show the ‘paginatedPost’ data on a table.
* Search:
    * Get searchText from the input.
    * Finding the matching title from the ‘saveForUse’ original data.
    * Then set the finding data to ‘post’.
    * Now, go for the pagination part to show all the found in a paginated way.
* Filter:
    * Get the Filtered Option.
    * Get the option matched data from ‘saveForUse’.
    * Now, go for the pagination part to show all the found in a paginated way.

# Strongness part of the project
* Pagination applied.
* Search option applied.
* Filter option applied.

# Weakness part of this project
* I cannot apply filter and search both at the same moment.