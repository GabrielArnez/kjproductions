import Image from "next/image";

const SocialIcon = ({ src, alt }) => {
  return (
    <div className="relative w-4 h-4 lg:w-6 lg:h-6">
      <Image
        fill
        sizes="(max-width: 768px) 16px, 16px, (max-width: 1024px) 24px, 24px"
        className="w-4 h-4 lg:w-6 lg:h-6"
        src={src}
        alt={alt}
        priority
      />
    </div>
  );
};

export function Footer() {
  return (
    <footer className="px-12 py-5 bg-cod-gray lg:px-32">
      <nav className="flex flex-col lg:flex-row lg:items-center">
        <div className="w-28 h-7 lg:w-60 lg:h-14 relative">
          <Image fill src="/logo.svg" alt="KJ Logo" />
        </div>
        <div className="flex flex-1 gap-5 items-center list-none mt-4 lg:mt-0 lg:place-content-end">
          {/* <li className="shrink-0">
            <SocialIcon src="/facebook_icon.svg" alt="Icone facebook" />
          </li> */}
          {/* <li className="shrink-0">
            <SocialIcon src="/twitter_icon.svg" alt="Icone Twitter" />
          </li> */}
          <li className="shrink-0">
            <a href="https://www.instagram.com/kj.production_/" target="_blank">
              <SocialIcon src="/insta_icon.svg" alt="Icone Instagram" />
            </a>
          </li>
          {/* <li className="shrink-0">
            <SocialIcon src="/youtube_icon.svg" alt="Icone Youtube" />
          </li> */}
          <li className="shrink-0">
            <a
              href="https://api.whatsapp.com/send/?phone=5511972144773&text&type=phone_number&app_absent=0"
              target="_blank"
            >
              <SocialIcon src="/wpp_icon.svg" alt="Icone whatsapp" />
            </a>
          </li>
        </div>
      </nav>
    </footer>
  );
}
