import { auth } from "@/auth";
import SerachForm from "@/components/SearchForm";
import StartupCard, { MyideaTypeCard } from "@/components/StartupCard";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { ideas_query } from "@/sanity/lib/queries";

export default async function Home({searchParams}: { searchParams: Promise<{query: string}>}) {
  const query = (await searchParams).query;
  const params = {search: query || null}
  //const posts = await client.fetch(ideas_query); // normal-fetch
  const {data: posts} = await sanityFetch({query: ideas_query, params});

  const session = await auth();
 
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your idea, <br />
          Connect With Entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on ideas, and Get Noticed in Virtual
          Competitions.
        </p>

       
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query? `Search result for ${query}`: "All ideas"}
        </p>
        <SerachForm query={query} />
       
       <ul className="mt-7 card-grid">
       {posts?.length > 0 ? (
            posts.map((post: MyideaTypeCard) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
       </ul>
      </section>

      <SanityLive />
    </>
  );
}
