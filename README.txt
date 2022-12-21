Ali Raza3:38 PM
+923134372075
IMG3:38 PM
Yes I can use skype or zoom
zoom is easier
Ali Raza3:39 PM
skype is like for a quick
+923134372075
this is my skype
Ali Raza3:51 PM
give me a minut
You3:51 PM
okay
You3:56 PM
Do you use the Shopify CLI?
Ali Raza3:57 PM
no , but we can try that
its for the app
https://shopwithme987.myshopify.com/admin/api/2020-01/customers.json
Ali Raza3:58 PM
use this url
You3:58 PM
Yes I can hear you
Ali Raza4:15 PM
https://www.freecodecamp.org/news/how-to-consume-rest-apis-in-react/
Ali Raza4:17 PM
const addPosts = async (title, body) => {
await fetch('https://jsonplaceholder.typicode.com/posts', {
method: 'POST',
body: JSON.stringify({
   title: title,
   body: body,
   userId: Math.random().toString(36).slice(2),
}),
headers: {
   'Content-type': 'application/json; charset=UTF-8',
},
})
.then((response) => response.json())
.then((data) => {
   setPosts((posts) => [data, ...posts]);
   setTitle('');
   setBody('');
})
.catch((err) => {
   console.log(err.message);
});
Ali Raza4:18 PM
import React, { useState, useEffect } from 'react';
const App = () => {
const [title, setTitle] = useState('');
const [body, setBody] = useState('');
// ...
const addPosts = async (title, body) => {
   await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
         title: title,
         body: body,
         userId: Math.random().toString(36).slice(2),
      }),
      headers: {
         'Content-type': 'application/json; charset=UTF-8',
Ali Raza4:27 PM
https://shopwithme987.myshopify.com/admin/api/2020-01/customers.json
GET