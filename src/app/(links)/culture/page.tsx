export default function Culture() {
  return (
    <main className="container mx-auto py-8 px-4">
      <section className="text-center mb-8">
        <h1 className="text-4xl font-semibold text-blue-600 mb-4">
          Culture of Qazaqstan
        </h1>
        <p className="text-lg text-gray-700">
          Qazaqstan’s culture is a vibrant blend of nomadic traditions, music,
          art, and culinary diversity. Immerse yourself in a world of rich
          history and modern celebrations.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Traditions and Customs
        </h2>
        <p className="text-gray-700 mb-4">
          Kazakh traditions are rooted in hospitality, respect, and strong
          family ties. Key customs include:
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Traditional yurt living as a symbol of nomadic heritage.</li>
          <li>Nauryz Meyramy - The Kazakh New Year celebration.</li>
          <li>Besbarmak, the national dish, served to honor guests.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Music and Arts
        </h2>
        <p className="text-gray-700 mb-4">
          Qazaqstan is known for its traditional instruments like the dombra and
          kobyz, which create soulful melodies that tell stories of the steppe.
          Famous forms of art include:
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Aitys - A form of Kazakh oral poetry and song.</li>
          <li>Traditional felt-making and intricate embroidery.</li>
        </ul>
        <div className="my-4">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/azYCSJdY3GM"
            title="Dombra Music of Qazaqstan"
            className="w-full max-w-lg mx-auto"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Kazakh Clothing
        </h2>
        <p className="text-gray-700">
          Traditional Kazakh attire features bright, colorful patterns and
          practical designs reflecting the nomadic lifestyle. Key elements
          include:
        </p>
        <table className="table-auto border-collapse border border-gray-400 mx-auto mt-4">
          <thead>
            <tr>
              <th className="border border-gray-400 px-4 py-2">Clothing</th>
              <th className="border border-gray-400 px-4 py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 px-4 py-2">Shapan</td>
              <td className="border border-gray-400 px-4 py-2">
                A long, embroidered coat worn by men.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2">Saukele</td>
              <td className="border border-gray-400 px-4 py-2">
                A tall, ornate headdress for brides.
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}
