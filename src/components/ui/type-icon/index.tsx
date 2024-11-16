import { typeColors } from "../../../lib/typeColor";
import { typeIcons } from "../../../lib/typeIcons";

interface Props {
  type: string;
}

export function TypeIcon({ type }: Props) {
  return (
    <div
      className={`${typeColors[type]} h-10 w-10 rounded-full flex items-center justify-center`}
    >
      <img src={`/icons/${typeIcons[type]}`} className="h-7 w-7 invert" />
    </div>
  );
}
