import RemoveBackground from "./RemoveBackground";

export default function Example() {
  return (
    <div className="h-full overflow-hidden bg-gray-900 border-b">
      <div className="relative px-6 isolate pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 overflow-hidden -top-40 -z-10 transform-gpu blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#db538c] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="max-w-2xl py-6 mx-auto">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative px-3 py-1 text-sm leading-6 text-purple-200 rounded-full text-bold ring-1 ring-indigo-600 hover:ring-indigo-300">
              Easily remove the background from your photos instantly for free
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-50 sm:text-6xl">
              Background Removal
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              No Boundaries, No Backgrounds: Redefine Your Images with
              Ease.Revolutionize your visuals with our advanced background
              removal tool. Effortlessly create stunning, professional-looking
              images in seconds.
            </p>
            <div className="h-full p-4">
              <RemoveBackground />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
