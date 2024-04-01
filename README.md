This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Hooks

# useScroll

A custom React hook named `useScroll`, which is designed to monitor the scroll position of a webpage and determine if the user has scrolled past a certain threshold. This hook utilizes several core React features, including state, effects, and callbacks, to achieve its functionality. Let's break down the code piece by piece:

### Importing React Features

First, the code imports `useCallback`, `useEffect`, and `useState` from the 'react' package. These are essential hooks provided by React for managing state and side effects in functional components.

### Defining the `useScroll` Hook

- **useState**: It initializes a state variable named `scrolled` with a default value of `false`. This state will be used to track whether the page has been scrolled past the given threshold or not.

- **useCallback**: This hook is used to create a memoized version of the callback function `onScroll`, which updates the `scrolled` state based on the current scroll position (`window.scrollY`) relative to the `threshold` prop. The callback is memoized to ensure that it doesn't get recreated on every render unless its dependencies (in this case, `threshold`) change. This is particularly important for performance optimization, especially when attaching or detaching event listeners.

- **useEffect (for event listener)**: This effect is responsible for attaching the `onScroll` event listener to the `window` object when the component mounts and for cleaning it up (removing the event listener) when the component unmounts or the `onScroll` function changes. This cleanup is crucial to prevent memory leaks and ensure that the event listener is always correctly synchronized with the latest version of the `onScroll` function.

- **useEffect (for initial check)**: Another `useEffect` call is made to execute `onScroll` once on the initial component mount. This ensures that the scroll position is correctly evaluated when the page loads, addressing cases where the user might have a pre-scrolled position upon the initial load.

### Returning the State

Finally, the hook returns the current value of the `scrolled` state, which indicates whether the page has been scrolled past the defined `threshold` or not. This returned value can be used by components to render conditionally or trigger certain actions based on the user's scroll position.

### Usage

This hook is designed to be used within functional React components. By providing a `threshold` value, components can easily track the scroll position relative to this threshold and react accordingly. For example, a component might use `useScroll(100)` to check if the page has been scrolled more than 100 pixels down from the top.

### Summary

In summary, the `useScroll` hook provides a reusable and efficient way to monitor and react to the user's scroll behavior in React applications. It leverages React's hooks for state management, effect side effects, and memoizing callbacks, ensuring that the functionality is both performant and easy to integrate into other components.

### Sidebar Mobile Navigation

# change MenuItems to include sub-items - DONE

# create a new component to add to my Header called SideBar

# create a the SideBar component to take two other components 1) Logo 2) SideBarRoutes --DONE

# Import MenuItems into SideBarRoutes and use SideBarRoutes to handle all the code needed for the rendering of the menu items. Start by just creating a simple list to see if it works when rendered through MobileSideBar. -- DONE

# create a component called MobileSidebar, this will import the shadcnui sheet component and render SideBarMobile --DONE

# go back to SideBarRoutes and put the full code in, starting with just the parent menu items and then add the child menu items.

# add Zustand to manage the state so that the sidebar closes when the user clicks on a menu item.
