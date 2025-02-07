import React from "react";
import { client } from "@/sanity/lib/client";
import { IDEAS_BY_AUTHOR_QUERY } from "@/sanity/lib/queries";
import StartupCard, { MyideaTypeCard } from "@/components/StartupCard";

const UserIdeas = async ({ id }: { id: string }) => {
  const Posts = await client.fetch(IDEAS_BY_AUTHOR_QUERY, { id });

  return (
    <>
      {Posts.length > 0 ? (
        Posts.map((post: MyideaTypeCard) => (
          <StartupCard key={post._id} post={post} />
        ))
      ) : (
        <p className="no-result">No posts yet</p>
      )}
    </>
  );
};
export default UserIdeas;