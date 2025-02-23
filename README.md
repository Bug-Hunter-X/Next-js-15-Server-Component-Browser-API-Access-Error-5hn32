# Next.js 15 Server Component Browser API Access Error

This repository demonstrates an uncommon error in Next.js 15 related to accessing browser APIs within Server Components. Server Components execute on the server and lack access to the browser environment. Attempting to use browser-specific APIs like `window` or `document` will result in runtime errors.

## Bug

The `serverComponentError.js` file shows an example of this error.  The Server Component tries to access `window.location`, which is not available on the server, causing an error.

## Solution

The `serverComponentSolution.js` file demonstrates the solution. Instead of directly accessing browser APIs in the Server Component, data should be fetched on the server and passed down as props to the Client Component which can then access the browser environment.