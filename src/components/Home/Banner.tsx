export default function Banner() {
  return (


<div className="bg-teal-500 mx-20 mb-8 rounded-2xl  py-10 px-4 md:px-8 lg:px-16 flex items-center justify-between">
<div className="text-center mb-4">
  <h2 className="text-white text-xl md:text-2xl font-bold md:w-60">Find and book your perfect stay </h2>
</div>
<div className="flex justify-center space-x-4">
  <div className="bg-teal-800 text-white flex flex-col items-center justify-center p-4 rounded-lg shadow-lg">
    <div className="text-2xl">🌙</div>
    <p className="mt-2 text-center font-semibold">Earn rewards on every night you stay</p>
  </div>
  <div className="bg-teal-800 text-white  flex flex-col items-center justify-center p-4 rounded-lg shadow-lg">
    <div className="text-2xl">🏷️</div>
    <p className="mt-2 text-center font-semibold">Save more with Member Prices</p>
  </div>
  <div className="bg-teal-800 text-white  flex flex-col items-center justify-center p-4 rounded-lg shadow-lg">
    <div className="text-2xl">📅</div>
    <p className="mt-2 text-center font-semibold">Free cancellation options if plans change</p>
  </div>
</div>
</div>
  );
}
