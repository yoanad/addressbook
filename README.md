# Address book setup
This is a React app that models an address book.
The address book lists organisations and people. It allows the user to see the names and contact details of
people in organisations, and to manage the people who are in an organisation. It stores a name and contact details for
each organisation. It allows organisations and people to be created, edited and deleted.
No authentication and authorization is implemented for now.

## Set up db
    sudo -u postgres -i
    psql
    CREATE ROLE yoana WITH LOGIN PASSWORD 'fI9Qd#@@Y6fe'; # - change password! this is a randomly generated one
    ALTER ROLE yoana CREATEDB;
    \q
    exit
    psql -d postgres -U yoana
    CREATE DATABASE addressbook;
    exit
## Run migrations
    sequelize db:migrate
    sequelize db:seed:all
## Install packages

`npm install`

## Start dev server

`npm run dev`

## Known limitations :)
- people can belong to only one organization_name
- organizations cannot be deleted if there are still people in them
- the order of elements is not guaranteed after modification
- no UI for errors
- modification of the schema relies heavily on selecting by id via input field; for more user-friendliness clicks on elements would be better (e.g. click on person to modify its attributes)
