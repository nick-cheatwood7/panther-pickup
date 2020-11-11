# Panther Pickup

Outline the project here. We need to define classes and class methods here.
The REAMDE file should outline the project and each class as thoroughly as possible, for easier support down the road.

For help using Markdown, check out this [Markdown Guide](https://www.markdownguide.org/basic-syntax).

## Models

- MenuItems
  - _MenuItems are individual food items available for ordering._
  - id
  - menuId
  - itemName
  - itemDescription
  - itemCost
  - image
  - nutritionalInformation
- Users
  - _Users have different types, which define privilege sets and who has access to what modules._
  - id
  - firstName
  - lastName
  - email
  - phone
  - password
  - userType
  - studentNumber
- Orders
  - _Orders can have many order items and are linked to a single user._
  - id
  - userId
  - orderNumber
  - timeCreated
  - scheduledTime
  - status
- OrderItems
  - _An order can have multiple menu items, which are called order items._
  - id
  - orderId
  - menuItemId
  - quantity
  - price
- Menus
  - _Each cafeteria can have many menus (perhaps a menu for each weekday or semester)._
  - id
  - name
  - description
  - isActive

## Views

## Controllers

## Helpful Links

- [Javascript Naming Conventions: Best Practices](https://medium.com/javascript-in-plain-english/javascript-naming-convention-best-practices-b2065694b7d)
- [Markdown Guide](https://www.markdownguide.org/basic-syntax).
- [Example MVC Project](https://www.taniarascia.com/javascript-mvc-todo-app/)
