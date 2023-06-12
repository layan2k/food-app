 "use client"
import Featured from "./components/Featured";
import PizzaList from "./components/PizzaList";



export default function Home() {
  return (
    <main >
      <div>
        <Featured />
        <PizzaList />
      </div>
    </main>
  )
}
