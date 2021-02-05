# Panther Pickup

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
