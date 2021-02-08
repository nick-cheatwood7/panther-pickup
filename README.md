# Panther Pickup

## Resources

- If you are new to Markdown or simply need a refresher, check out GitHub's [Markdown Guide](https://guides.github.com/features/mastering-markdown/).
- If you are using Visual Studio Code (recommended) as your IDE, here are a few Extensions to check out:
  - [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare): Live Share allows us to collaborate with the codebase in Real time. This is crucial for testing and peer-programming.
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): Although perhaps more trivial than the other extensions listed, Prettier is an industry standard for enforcing clean code. Prettier does menial tasks, such as auto-indenting, adding semicolons, etc. that helps keep your code clean and easily readable.
  - [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag): Auto Close Tag, as the name implies, auto-closes your syntax tags. Like Prettier, this saves you small steps along the way, but helps you focus on what really matters– writing code.
- [Node JS](https://nodejs.org/en/) is how we will power our server and build out an API. Visit the link and install this before working on the project.
- If you need a refresher on 'clean code', then check out this [5 Essential Takeways From Clean Code](https://medium.com/better-programming/clean-code-5-essential-takeaways-2a0b17ccd05c).
  - If you want to dive deeper into clean code philosophy, check out this [Clean Code Summary](https://gist.github.com/wojteklu/73c6914cc446146b8b533c0988cf8d29).

## Backend Model

The backend model should follow the MVC (Model View Controller) design philosophy.

### Meals

- id
- name
- pricePerUnit
- entreeIds

### Entrees

- id
- name
- pricePerUnit

### Drinks

- id
- name

### Carts

- id
- userId
- countItems
- totalCost

### Cart Items

- id
- itemId

### Orders

- id
- userId
- timeCreated
- timeScheduled
- status
- isComplete

### Order Items

- id
- orderId
- itemId

### Payments

- id
- cardNumber
- paymentAmount

### Transactions

- id
- metadata
- request
- response
