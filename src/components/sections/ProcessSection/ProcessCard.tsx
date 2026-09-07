type ProcessDetails = {
  sl: number;
  title: string;
  text: string;
}


export default function ProcessCard({details}:{details: ProcessDetails}) {
  return (
    <div className="w-full bg-[#1C1C1C] border border-[#3C3C3C] rounded-xl p-8">
      <div>
        <div className="w-12 h-12 rounded-lg black-bg border border-[#3C3C3C] flex-center mb-35 white-text">
          {details.sl}
        </div>
        <h3 className="text-xl heading font-bold leading-none mb-3 white-text">{details.title}</h3>
        <p className="text-sm white-text leading-tight">{details.text}</p>
      </div>
    </div>
  );
}