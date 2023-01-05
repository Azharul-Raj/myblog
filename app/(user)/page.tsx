
import { groq } from "next-sanity"

const query = groq`
*[_type=='post']{
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)

`

export default function HomePage() {
  return (
    <div></div>
  )
}
