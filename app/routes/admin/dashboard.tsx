import {Header} from "componets"

const dashboard = () => {
  const user = { name: 'Adrian'}
  return (
    <main className="dashboard wrapper">
      <Header
        title={`welcome ${user?.name ?? 'Guest'}👋🏻`}
        description="Track activity, trends and popular destinations in real time"
      />

      Dashboard Page Content
    </main>
  )
}

export default dashboard