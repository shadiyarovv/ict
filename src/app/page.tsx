import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto py-8 px-4">
      <div className="text-center w-2/3 sm:w-full mx-auto">
        <h1 className="text-4xl font-semibold text-blue-600 mb-4">
          Welcome to Qazaqstan
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Experience the beauty of Kazakh traditions, culture, and history. Dive
          into the vibrant spirit of Qazaqstan and explore the wonders of the
          steppe.
        </p>
        <Link
          href={"/culture"}
          className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-800"
        >
          Learn More
        </Link>
      </div>
    </main>
  );
}
