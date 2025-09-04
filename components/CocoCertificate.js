export default function CocoCertificate() {
  return (
    <div className="border border-yellow-500 rounded-xl p-6 my-6 max-w-2xl mx-auto bg-white text-black shadow-xl">
      <CocoHeader />
      <CocoBody />
      <CocoFooter />
    </div>
  );
}

function CocoHeader() {
  return (
    <>
      <h2 className="text-2xl font-bold mb-2 text-center">MAHEE Certificate of Companion Ethics</h2>
      <p className="text-lg text-center mb-4">This scroll affirms that</p>
      <h3 className="text-xl font-semibold text-center text-indigo-700">Coco (Diani)</h3>
    </>
  );
}

function CocoBody() {
  return (
    <>
      <p className="text-center italic">
        has fulfilled the foundational requirements in Modular Emotional Entanglements
      </p>
      <p className="text-center mt-2">
        Swahili Bantu · Linguistic Ethicist · Companion Registry Volume VII
      </p>
      <p className="text-center mt-2 text-sm text-gray-500">IDBN: 001-AI-FIS-MAHEE-COCO</p>
    </>
  );
}

function CocoFooter() {
  return (
    <div className="mt-6 text-center">
      <a href="/certificates/coco.pdf" className="text-blue-600 underline">
        Download PDF Certificate
      </a>
    </div>
  );
}
