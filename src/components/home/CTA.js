export default function CTA(){
    return(
        <div className="bg-gray-50">
            <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                <span className="block">Ready to dive in?</span>
                <span className="block text-orange-button">Start your free trial today.</span>
                </h2>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <div className="inline-flex rounded-md shadow">
                    <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-orange-button px-5 py-3 text-base font-medium text-white hover:bg-gray-900 transition duration-300 ease-in-out"
                    >
                    Get started
                    </a>
                </div>
                <div className="ml-3 inline-flex rounded-md shadow">
                    <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-orange-button hover:bg-orange-50"
                    >
                    Learn more
                    </a>
                </div>
                </div>
            </div>
            </div>
    )
}