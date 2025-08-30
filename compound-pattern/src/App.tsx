import PostCard from "./components/PostCard";

export default function App() {
  return (
    <div>
      <PostCard post={{
        id: 1,
        title: "Hello Compound Component!",
        content: "This is the first post of the blog",
        user: {
          id: 1,
          name: "Johny Quest"
        }
      }}>
        <PostCard.Title/>
        <PostCard.Content/>
        <PostCard.User/>
        <PostCard.Buttons/>
      </PostCard>
    </div>
  )
}