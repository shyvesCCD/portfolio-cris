import Image from "next/image";

type AboutProps = {
  image: any;
  description: string;
  description2: string | null;
  image2: any | null;
};

const AboutPageComponent = ({
  image,
  description,
  description2,
  image2,
}: AboutProps) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-5">
        <Image
          className="invert"
          src={`https://cris-backend-production.up.railway.app${image}`}
          alt=""
          width={400}
          height={300}
        />
        <p
          className="flex flex-col text-2xl text-center"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
      </div>
      <div className="flex items-center justify-center flex-wrap">
        <>
          {description2 ? (
            <p
              className="flex flex-col text-center text-2xl"
              dangerouslySetInnerHTML={{ __html: description2 }}
            ></p>
          ) : (
            image2.data.map((element: any, index: any) => (
              <div key={index} className="mx-10">
                <Image
                  className="invert"
                  key={index}
                  alt=""
                  src={`https://cris-backend-production.up.railway.app${element.attributes.url}`}
                  width={200}
                  height={120}
                />
              </div>
            ))
          )}
        </>
      </div>
    </>
  );
};

export default AboutPageComponent;
