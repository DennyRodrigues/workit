

interface InfoCardProps {
  step: string;
  title: string;
  description: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ step, title, description }) => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <span className="mb-6 border rounded-full text-center text-xl border-darkPurple px-4 py-1.5 text-darkPurple">
          {step}
        </span>
      </div>
      <h3 className="mb-4 text-xl font-semibold text-darkPurple text-center">
        {title}
      </h3>
      <p className="text-davyGrey text-center">
        {description}
      </p>
    </div>
  );
};

export default InfoCard;
