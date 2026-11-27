import { Fragment } from "react"

import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { Collection } from "./components/Collection"
import { Footer } from "./components/Footer"

export default function App() {
	return (
		<Fragment>
			<Navbar />
			<Hero />
			<Collection />
			<Footer />
		</Fragment>
	)
}
