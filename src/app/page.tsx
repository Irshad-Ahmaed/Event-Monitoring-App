import { Heading } from "./components/heading"
import { MaxWidthWrapper } from "./components/max-width-wrapper"
import { Check } from "lucide-react"
import { ShinyButton } from "./components/shiny-button"

const offers = [
  "Real-time notifications for SaaS events on Your Discord",
  "Track Sales, new Users, or any other events",
  "Integration with multiple SaaS platforms",
  "User-friendly setup and configuration",
]

const Page = () => {
  return (
    <>
      <section className="relative py-24 sm:py-32 bg-brand-25">
        <MaxWidthWrapper className="text-center">
          <div className="relative mx-auto text-center flex flex-col items-center gap-10">
            <div>
              <Heading>
                <span>Real-Time SaaS Insights,</span>
                <br />
                <span className="relative bg-gradient-to-r from-brand-700 to-brand-800 text-transparent bg-clip-text">
                  Delivered to Your Discord
                </span>
              </Heading>
            </div>

            <p className="text-base/7 max-w-prose text-gray-600 text-center text-pretty">
              StickTracker is the easiest way to get real-time updates on your SaaS
              products directly in your Discord server. Stay informed with
              instant notifications on{" "}
              <span className="font-semibold text-gray-700">
                sales, status changes, incidents, and other events
              </span>{" "}
              from all your favorite services.
            </p>

            <ul className="space-y-2 text-gray-600 text-left flex flex-col items-start">
              {offers.map((offer, index) => (
                <li key={index} className="flex gap-1.5 items-center text-left">
                  <Check className="size-5 shrink-0 text-brand-700" />
                  {offer}
                </li>
              ))}
            </ul>

            {/* Shiny Button  */}
            <div className="w-full max-w-80">
              <ShinyButton href="/sign-up" className="relative z-10 h-12 w-full text-base shadow-lg transition-shadow duration-300 hover:shadow-xl">
                Start Getting Your Updates Now
              </ShinyButton>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section></section>

      <section></section>

      <section></section>
    </>
  )
}

export default Page
