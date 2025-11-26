import Image from "next/image";

export default function MyLogo() {
  return (
    <div
      className="flex items-center"
    >
      <Image
        src="/logo.jpg"
        alt="Logo"
        width={35}
        height={35}
        className="object-cover rounded-full transition-all duration-300"
      />
      <h2 className="ml-3 text-xl font-bold whitespace-nowrap text-event-green">Dev Event</h2>
    </div>
  );
}
