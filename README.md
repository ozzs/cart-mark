<p align="center">
  <img alt="logo" src="https://github.com/ozzs/ShoppingList/blob/main/CartMarkLogo.png" width="400" />
</p>

<h3 align="center">
  :star: <a href="https://whale-app-7zt7i.ondigitalocean.app/">Visit the live app!</a> :star:
</h3>

<br />

<p align="center">
  <img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
  <img alt="Javascript" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" />
  <img alt="HTML" src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" />
  <img alt="CSS3" src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" />
  <img alt="Node.js" src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" />
  <img alt="Express.js" src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" />
  <img alt="SQLite" src="https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white" />
</p>

## Table of Content
- [Overview](#overview)
- [Key Features](#key-features)
- [Tech](#tech)
- [Usage](#usage)
  - [Creating a Personal Catalog](#creating-a-personal-catalog)
  - [Building a Shopping List](#building-a-shopping-list)
  - [Editing and Removing Items](#editing-and-removing-items)
  - [Go Shopping!](#go-shopping)
  - [View previous shopping lists](#view-previous-shopping-lists)
- [Support](#support)

## Overview

**So what is this and who is it for?** 🤷‍♀️

Have you ever felt tired of making a hasty shopping list? Scribble a few groceries on a note and then lose the note? Or maybe get a shopping list from your wife, but you don't understand what's in it or what you're supposed to bring? Wait, did she want almond milk or soy milk?

**Cart Mark** is designed to make everyone's shopping experience (from making the list to taking the latest product off the shelf) more convenient.

With **Cart Mark**, you can create such a shopping list, which will spare you from dealing with the majority of the problems mentioned earlier. The way the application is set up allows it to be used on both computers and mobile devices.

You can create a shopping list from a product catalog that you create, which you can then edit and annotate. Once the list is created, you can mark precisely what has been taken from the shelf and what has not. At the end of your purchase, the list will be saved so you can revisit it later.

And most importantly, you will no longer be confused with almond milk and soy milk!

## Key Features
* Simple & Easy to use
* An abstract and independent shopping experience
* Make your own grocery catalog
* View previous lists
* Open-Source code
* Mobile friendly

## Tech
### Frontend
* **React** ⚛
  - _JavaScript, HTML, CSS_
  - Code formatted with _Prettier_ :ribbon:
### Backend
* **Node.js** 🕸
  - _Express.js_
* **Database** :page_facing_up:
  - _SQLite_
  
**Uploaded to DigitalOcean using Docker** 🐳

## Usage
Here, I'll go over exactly how to use **Cart Mark**, which is made to be simple to use as you'll see right away!

### Creating a Personal Catalog
Clicking the `Add Item` button on the tab navigator will bring up the following page:

<p align="center">
  <img alt="add-item" src="https://github.com/ozzs/cart-mark/blob/main/media/AddItemGIF.gif" width="500" />
</p>

Enter the product's name, department (so that **Cart Mark** can conveniently arrange the purchase for you), and packaging type to add it to the catalog.

### Building a Shopping List
Clicking the `Create List` button on the tab navigator will bring up the following page:

<p align="center">
  <img alt="create-list" src="https://github.com/ozzs/cart-mark/blob/main/media/CreateListGIF.gif" width="500" />
</p>

Select your items from the catalog you created in the preceding step, enter the amount, and if desired, add a note. <br />

Your items will be added to the list when you click the `Add Product` button (which will appear at the bottom of the page).

### Editing and Removing Items
After you have added all the items to your list on the `Create List` page, you have the option to edit or remove them:

<p align="center">
  <img alt="edit-remove-item" src="https://github.com/ozzs/cart-mark/blob/main/media/EditRemoveItemGIF.gif" width="500" />
</p>

Click `Close List` when you're finished. Now head to the store!

### Go Shopping!
Clicking the `Go Shopping!` button on the tab navigator will bring up the following page:

<p align="center">
  <img alt="go-shopping" src="https://github.com/ozzs/cart-mark/blob/main/media/GoShoppingGIF.gif" width="700" />
</p>

As you can see, for a more convenient shopping experience, the products are separated into the departments to which they are related.

A product taken off the shelf will be marked with a strikethrough with just one click on it.

If you regretted it or made a mistake, you can remove the strikethrough line by double-clicking on the product.

### View previous shopping lists
Clicking the `Show Lists` button on the tab navigator will bring up the following page:

<p align="center">
  <img alt="go-shopping" src="https://github.com/ozzs/cart-mark/blob/main/media/PreviousLists.png" width="500" />
</p>

All of the previous lists that you have closed will be displayed.

## Support
The product is still in its initial stages, so we would really appreciate feedback and donations 😄

And don't forget to star us — it motivates us a lot! ⭐
