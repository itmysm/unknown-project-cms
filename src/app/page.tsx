import Image from "next/image";
import { Colors } from "./_components/colors/colors";
import { Button } from "./_components/button/buttton";

export default function Home() {
  return (
    <>
      <section className="flex bg-hero-pattern mt-5 xl:mt-20 xl:bg-left">
        <div className="container flex flex-col-reverse items-center xl:flex-row">
          <div className="flex flex-col gap-5 mt-12 pb-5 text-center xl:text-right">
            <h3 className="text-xl dark:text-info xl:text-2xl">
              خوش آمدید ...
            </h3>
            <h1 className="text-3xl lg:text-5xl font-black">
              مسیر صعود به قله های برنامه نویسی
            </h1>
            <p>
              هر جای مسیر که برنامه نویسی که باشی، با همراهی استاد های با تجربه
              میتونی بدون محدودیت به قله های بالاتر صعود کنی. ما همیشه هواتو
              داریم.
            </p>

            <Image
              src="/images/frameworks.png"
              className="grayscale mt-4 opacity-70 m-auto xl:m-0"
              width={412}
              height={39}
              alt=""
            />
          </div>

          <Image
            src="/images/programmer-landing.svg"
            width={702}
            height={521}
            alt="classbon"
          />
        </div>
      </section>

      <div className="container">
        <Button variant="info" size="large" shape="wide" animatedIcon={true}>
          ثبت نام
        </Button>
      </div>
    </>
  );
}
