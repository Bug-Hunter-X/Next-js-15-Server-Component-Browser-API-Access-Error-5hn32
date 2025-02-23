In Next.js 15, when using the `app` directory and Server Components, an uncommon error can occur if you attempt to directly access browser-specific APIs (like `window`, `document`, or browser-specific methods) within a Server Component.  Server Components execute on the server, not in the browser, so these APIs are unavailable. This can lead to runtime errors or unexpected behavior. For example:
```javascript
// pages/api/route.js (Server Component)

export default function MyServerComponent() {
  console.log(window.location); // Error: window is not defined
  return <div>Hello</div>;
}
```