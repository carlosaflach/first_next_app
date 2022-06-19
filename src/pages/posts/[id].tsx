import { useRouter } from "../../../node_modules/next/router"

export default function Post() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <h1>Post {id}</h1>
  )
}
