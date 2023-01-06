import { groq } from "next-sanity"
import Image from "next/image"
import { client } from "../../../../lib/sanity.client"
import urlFor from "../../../../lib/urlFor"
import { Post } from "../../../../typing"

type Props = {
    params: {
        slug:string
    }
}

async function Post({ params: { slug } }: Props) {

      const query = groq`
    *[_type=='post' && slug.current==$slug][0]
    {
        ...,
        author->,
        categories[]->
    }
    `
  const post: Post = await client.fetch(query, { slug });
  return (
    <article className="px-10 pb-28">
      <section className="space-y-2 border border-yellow-300 text-white">
        <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
          <div className="absolute top-0 h-full w-full  opacity-10 blur-sm p-10">
          <Image className="object-cover object-left lg:object-center"
                                src={urlFor(post.mainImage).url()}
                                alt={post.author.name}
                                fill
                            />
          </div>
          <section className="p-5 bg-gray-400 w-full">
            <div className="flex flex-col md:flex-row justify-between gap-y-5">
              <div className="">
                <h1 className="text-4xl font-extrabold">{ post?.title}</h1>
                <p>
                                        {new Date(post?._createdAt).toLocaleDateString(
                                            'en-US', {
                                                day: 'numeric',
                                                month: 'long',
                                                year:'numeric'
                                            }
                                        )}
                                    </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </article>
  )
    
}

export default Post;