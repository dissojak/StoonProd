import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-white text-2xl font-semibold gap-4">
      <Image
        src="/assets/images/stoonprod_logo_white_version.png"
        alt="Logo"
        className="relative lg:h-16 xs:h-12"
        layout="intrinsic"
        width={60}
        height={100}
      />
      Stoon Production
    </Link>
  );
};

export default Logo;
