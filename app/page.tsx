export default function Home() {
  return (
    <div className="flex flex-col md:flex-row text-amber-100">
      <div className="md:w-1/2">
        <div>
          <h1 className="font-bold text-6xl pt-20">
            Mempermudah kebutuhan rumah anda!
          </h1>
          <h2 className="font-light text-xl pt-14 text-white">
            Menggabungkan semua jasa, dan mempermudah kehidupan para warga dalam 1 website!
          </h2>
          <div className="flex justify-center pt-14 pr-20">
            <button className="bg-amber-100 hover:bg-amber-200 text-green-950 text-opacity-85 font-bold py-2 px-10 rounded mt-4">
              Hubungi Kami!
            </button>
          </div>
        </div>
      </div>
      <div className="md:w-1/2">
        <div>
          <img className="pt-24" src="asd" height={500} width={500}/>
        </div>
      </div>
    </div>
  );
}
