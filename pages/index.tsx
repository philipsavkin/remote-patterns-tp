import Image from "next/image";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <Image
      src="https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg"
      width={400}
      height={300}
      alt=""
    />
  );
}
