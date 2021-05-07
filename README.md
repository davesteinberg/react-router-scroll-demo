# React Router Scroll Demo

Adds some simple routing to the Create React App template to show how scroll restoration works.

## Quick start

Install dependencies and start the dev server:

```
npm install
npm run start
```

The dev server should open http://localhost:3000 in your browser.

## Build and serve

Build the app and serve it:

```
npm run build
npm run serve
```

Serve should copy http://localhost:5000 to your clipboard.
Open it in your browser.

## What to look for

Scroll through the list of items and click one.
That takes you to an item page.

If you click your browser's back button, your scroll position in the list will be restored.
If you click the **Go back**, that is equivalent to your browser's back button: your scroll position in the list will also be restored.
If you click the **Home** link, that navigates forward to `/` and you return to the top of the list.

This should work the same whether you are using the dev server or building and serving.
