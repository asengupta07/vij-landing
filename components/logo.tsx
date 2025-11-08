import Image from "next/image";

export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <Image src="/logo.png" alt="VIJ Logo" width={100} height={100} />
  );
};
