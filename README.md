# Panther Pickup

## Resources

- If you are new to Markdown or simply need a refresher, check out GitHub's [Markdown Guide](https://guides.github.com/features/mastering-markdown/).
- If you are using Visual Studio Code (recommended) as your IDE, here are a few Extensions to check out:
  - [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare): Live Share allows us to collaborate with the codebase in Real time. This is crucial for testing and peer-programming.
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): Although perhaps more trivial than the other extensions listed, Prettier is an industry standard for enforcing clean code. Prettier does menial tasks, such as auto-indenting, adding semicolons, etc. that helps keep your code clean and easily readable.
  - [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag): Auto Close Tag, as the name implies, auto-closes your syntax tags. Like Prettier, this saves you small steps along the way, but helps you focus on what really matters– writing code.

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
