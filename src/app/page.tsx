import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="w-full">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-24">
        <div className="relative">
          <Image
            alt="Donation Cause"
            className="mx-auto overflow-hidden  object-cover"
            priority
            height="366"
            src="/main.jpeg"
            width="650"
          />
          <span className="absolute opacity-80 px-2 rounded bg-black/60 text-white bottom-1 right-1">
            © Dato Koridze
          </span>
        </div>

        <div className="space-y-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Support Georgia&apos;s Civil Society
          </h1>
          <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed dark:text-gray-400">
            In response to the Georgian government&apos;s persistence in
            advancing &quot;the foreign agent bill&quot; that threatens the
            Georgian civil society and is a direct threat for the tbilisi scene,
            we stand united against its resurgence. The Georgian Dream
            Party&apos;s disregard for public sentiment, evidenced by their
            unwillingness to heed the voices of the people, necessitates our
            collective action. The protests of 2023 demonstrated our capacity
            for mobilization and our commitment to defending our rights. Now,
            faced with renewed challenges, we recognize the importance of
            self-organization and grassroots efforts in advocating for change.{" "}
          </p>
          <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed dark:text-gray-400">
            To address this, we have decided to coordinate with other
            representatives of the Tbilisi electronic music scene to launch a
            fundraiser for funding non-violent, creative protests in Tbilisi. We
            are committed to transparency and will ensure that all funds spent
            are publicly disclosed with corresponding proof.
          </p>
          <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed dark:text-gray-400">
            We appreciate the outpouring of support from friends and we are
            determined to channel this energy into meaningful action. Together,
            we will continue to stand up for our values and fight for democratic
            and european Georgia.
          </p>
          <div className="relative md:hidden">
            <Image
              alt="Donation Cause"
              className="mx-auto overflow-hidden object-cover"
              height="366"
              src="/footer.jpeg"
              width="650"
            />

            <span className="absolute opacity-80 px-2 rounded bg-black/60 text-white bottom-1 right-1">
              © Mariam Giunashvili
            </span>
          </div>
          <form className="w-full space-y-4">
            <Button className="flex items-center justify-center gap-2" asChild>
              <Link href="https://www.paypal.com/donate/?hosted_button_id=LSCX535FJSKYW">
                <CreditCardIcon className="h-6 w-6" />
                Donate with PayPal
              </Link>
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

function CreditCardIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
}
