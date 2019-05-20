1. Create new React project using 'create-react-app'.

2. Create a basic structure of the files for this project.

3. Add 'reactstrap' component into the project.

4. Create routing system using 'react-router-dom'.

5. Create one main route '/users' with name 'Users' and one page with the same class name.

6. Using the bootstrap library, create the table of the users with columns:

    User Picture | Full Name | E-mail | DOB | Full Address | Phone

7. When App starts, it should make one API request to https://randomuser.me/api/?page=1&results=20&seed=test

    - While you didn't receive the response, you need to show the spinner in the center of the screen (instead of an empty table).

    - When the response has been received, you need to show the list of 20 users from that request.

    - When the user scrolls the page down end getting the end, you need to send another request with parameter page=2 and receive the next portion of the Users.

      The process should repeat forever.

    - Size of the User's page should grow up depending on the amount of the requests has been sent.


* For API calls you can use Axios, Feather, Fetch or what you want.
