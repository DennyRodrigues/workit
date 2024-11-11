import Image from "next/image";
import ButtonLink from "../ButtonLink";

export default function Index() {
  return (
    <section className="px-4 flex justify-center">
      <div className="text-center p-8 lg:text-left relative max-w-[753px] lg:ml-auto xl:ml-40">
        <div className="flex justify-center items-center -mt-24">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-eucaplyptus overflow-visible flex justify-center items-center translate-y-[25%] lg:translate-y-[50%] lg:-translate-x-[100%] z-10 pt-2">
            <Image
              alt="Person smiling"
              src="/images/person.png"
              layout="responsive"
              width={450}
              height={450}
              className="rounded-full "
            />
          </div>
        </div>
        <div className="relative z-20 text-center p-8 lg:text-left  bg-darkPurple max-w-[753px] flex-1">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Be the first to test
          </h2>
          <p className="mt-6 text-lg/8">
            Hi, I&apos;m Louis Graham, the founder of the company. Book a demo call with me to become a beta tester for our app and kickstart your company. Apply for access below and I’ll be in touch to schedule a call.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <ButtonLink text={"Apply For access"} link="#" />
          </div>
          <div className="absolute right-12 bottom-0 translate-y-[40%]">
            <Image
              src="/images/cta-detail.png"
              width={173}
              height={137}
              alt="Iphone"
              className="hidden lg:block lg:w-[173px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
