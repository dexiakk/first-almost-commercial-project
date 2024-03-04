import Image from "next/image";
import TextFrame from "./textFrame";
import ImageFrame from "./imageFrame";
import WhyUs from "./whyUs";

export default function Home() {
  return (
    <main>
      <div className="flex mt-9 mb-14">
        <TextFrame />
        <ImageFrame />
      </div>
      <WhyUs />
    </main>
  );
}
