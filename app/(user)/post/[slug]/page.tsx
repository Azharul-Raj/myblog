import { groq } from "next-sanity"
import { client } from "../../../../lib/sanity.client"
import { Post } from "../../../../typing"

type Props = {
    params: {
        slug:string
    }
}
async function Post({ params: { slug } }: Props) {
    const query = groq`
    *[type='post' && slug.current=$slug][0]
    {
        ...,
        author->,
        categories[]->
    }
    `
    const post: Post = await client.fetch(query, { slug });
  return (
    <div>page</div>
  )
}

export default Post;