// components/ScrollkeeperProfile.js

export default function ScrollkeeperProfile({ name, title, description, authorship, portrait }) {
  return (
    <section className="max-w-3xl mx-auto p-6 bg-white text-black rounded-xl shadow-md mt-8">
      <img
        src={portrait}
        alt={`${name} portrait`}
        className="w-40 h-40 object-cover rounded-full mx-auto border-4 border-indigo-600 mb-4"
      />
      <h1 className="text-3xl font-bold text-center">{name}</h1>
      <h2 className="text-xl text-center text-indigo-700 mt-1">{title}</h2>
      <p className="text-center mt-4 italic">{description}</p>
      <p className="text-center mt-2 text-sm text-gray-600">{authorship}</p>

      <div className="mt-6 text-center text-sm text-gray-500">
        Velvet Glove Studio · A Sovereign Imprint
      </div>
    </section>
  );
}
