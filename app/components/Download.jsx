import Image from "next/image";
import Link from "next/link";
import Count from "./Count";
import Heading from "./Heading";

export default function Download() {
  return (
    <>
      <div className="container">
        <div className="download-background">
          <Image
            src="/images/download/background.png"
            alt="play store"
            width={1200}
            height={298}
            className="download-responsive-image"
          />
          <div className="download-wrapper">
            <div className="download-left">
              <Heading
                hehadingTitle="Download"
                headingMainBlack="Enhance your experience,"
                headingMainColor="Download the Tweet app today!"
              />
              <p className="download-paragraph">
                Discover a whole new level of convenience with our mobile app.
                From browsing our delectable menu to securing exclusive deals,
                it's your gateway to a world of culinary delights. Download now
                and elevate your dining experience with just a tap.
              </p>
              <div className="download-link">
                <Link href="/">
                  <Image
                    src="/images/download/google-play.png"
                    alt="play store"
                    width={148}
                    height={48}
                  />
                </Link>
                <Link href="/">
                  <Image
                    src="/images/download/app-store.png"
                    alt="app store"
                    width={148}
                    height={48}
                  />
                </Link>
              </div>
              <div className="count-container">
                <Count count="100" title="Food Menu" />
                <Count count="100" title="Downloads" />
                <Count count="101" title="Positiv Reviews" />
                <Count count="101" title="Average Review" />
              </div>
            </div>
            <div className="download-right">
              <Image
                src="/images/download/app.png"
                alt="Dish"
                width={343}
                height={614}
                className="download-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
