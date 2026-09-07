import Counter from "./animations/Counter";

type StatType = {
  number: number;
  label: string;
  suffix?: string;
};

export default function Stat({ number, label, suffix }: StatType) {
  return (
    <div className="flex-col-center gap-1">
      <Counter
        end={number}
        duration={3}
        suffix={suffix ?? ""}
        className="heading-two text-center"
      />
      <span className="base-para text-center">{label}</span>
    </div>
  );
}
