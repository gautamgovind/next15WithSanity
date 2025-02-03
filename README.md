This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.




1. Architechture - Componenet is categories by client component and server component 
server component is more performance, default next js it make component server-side component until it
is made "use client" client side

2. The way it manage rendering - allowing them to choose exactly when and where you wanna render 
your component, optimizing the performance even further.

Next js does not require any external routing, it provide file based routing.

You can create server less routing

Automatic code spliting - only the one route file loads

script optimizing

it supports latest features of latest tech like react's compiler 


why can't everthing on seerver - browseer interactivity can't be handled by server side component
Server-side component only render on server-side while client component pre-render on server side
to create a static cell and hyderated on the client side. the part of client side component which 
does not require interactivity renders on the server side and the part which require interactivity
are left as place holder during server side pre-rendering when they reach the client browser then   
render the client components and fills up the placeholder left by server side.


Route groups - THey allow to organize route segments without impacting route
wrap within () not includes in url but you can still create layout.tsx

Error handling - error.js/tsx - catches error and show in UI
    you can have root level error file and individual route can have it's one error file
    error boundaries must be client component
    only the closes error files from component takes priority

Loading UI - show loading... like spinner, loader 

Data fetching - useEffect is the traditional way to fetch the data (use async and await to fetch it)
    fetch from server side - faster and smoother
serverComponentsHmrCache - it allows you to cache fetch response in server components across 
    hot module replacement (HMR) refreshes in local development. This resilts in faster responses and 
    reduced costs for billed API calls. 

Static site generation (SSG) - extremly faster, useful for documentation 
    Incremental static generation (ISR) - update static content without rebuilding the entire site
        reduce server load by serving prerendered, static page for most requests
        ensure proper cache-control headers are automatically added to pages
        handle large amount of content pages without long next build times 

on-demand revalidation with revalidatePath - For more precise method of revalidation, invalidate
    pages on-demand with the revalidationPath function. 
on-demand revalidation with revalidateTag - For most cases, prefer revalidating entire paths. If you
    need more granular control, you can use the revalidateTag function. 

Server side rendering - on demand component, good for real time data

partial prerendering (PPR) - New rendering model which combines static and dynamic components together in the same route.  it allows a hybrid approcah within a single page unlike other strategies which work on a page level. During build time next js generates a static cell of the pages. This cell includes the layout and any static part of the page in the form of the components. These static cells includes placeholder for the dynamic content. we do it y wrapping them in <Suspense> tag.

API routes - 


Meta data - Two ways to manage meta data in next js
    1. config based - create js object in layout or any page like export const metadata = {}
        dynamic meta data - export async function generateMetadata({params}) { }
    2. File based meta data - add files inside app such as favicon.ico, icon.svg, twitter-image.png
        and next js will automatically creates meta data with these file names.
        File based meta data has highest priority and will overrite any config based metadata. 

