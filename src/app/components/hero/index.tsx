import Image from "next/image";

export default function Index() {
  return (
    <div className="relative overflow-visible">
      <div className="relative min-h-[486px] lg:min-h-[730px] bg-darkPurple hero-background pb-10">
        <div className="flex items-center justify-center flex-col pt-16">
          <h2 className="text-5xl lg:text-7xl mb-10 text-center">
            Data <span className="border-eucaplyptus border-b-2">tailored</span><br /> to
            your needs.
          </h2>
          <button className="bg-eucaplyptus text-black font-bold py-4 px-6 lg:text-xl" type="button">
            Learn More
          </button>
        </div>
      </div>
      <div className="absolute left-0 top-0">
        <Image
          src="/images/hero-left.png"
          width={270}
          height={215}
          alt="Iphone"
          className="hidden lg:block lg:w-[270px]"
        />
      </div>
      <div className="absolute right-0 top-2/4">
        <Image
          src="/images/hero-right.png"
          width={320}
          height={184}
          alt="Iphone"
          className="hidden lg:block lg:w-[140px]"
        />
      </div>

      <div className="absolute left-1/2 bottom-0 translate-y-1/2 transform -translate-x-1/2 overflow-visible">
        <Image
          src="/images/iphone.png"
          width={320}
          height={184}
          layout="responsive"
          alt="Iphone"
          className="block min-w-[300px]
           md:min-w-[360px]
          lg:min-w-[545px]"
        />
      </div>
    </div>
  );
}
