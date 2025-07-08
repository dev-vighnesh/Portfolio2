import { logoIconsList } from "../constants";

const LogoIcon = ({ quote }) => {
  return (
    <div className="flex-none flex-center marquee-item px-4 text-center">
      <p className="text-white text-lg italic font-medium">{quote.text}</p>
    </div>
  );
};

const LogoShowcase = () => (
  <div className="md:my-20 my-10 relative">
    <div className="gradient-edge" />
    <div className="gradient-edge" />

    <div className="marquee h-52 overflow-hidden whitespace-nowrap">
      <div className="marquee-box flex flex-row md:gap-100 gap-67 ">
        {logoIconsList.map((quote, index) => (
          <LogoIcon key={index} quote={quote} />
        ))}

        {logoIconsList.map((quote, index) => (
          <LogoIcon key={index} quote={quote} />
        ))}
      </div>
    </div>
  </div>
);

export default LogoShowcase;
