import { typeColors } from "../../../lib/typeColor";
import { typeIcons } from "../../../lib/typeIcons";

interface Props {
  type: string;
  withName?: boolean;
}

export function TypeIcon({ type, withName = false }: Props) {
  const rounded = withName ? "rounded-lg" : "rounded-full";
  return (
    <div
      className={`${typeColors[type]} p-3 ${rounded} flex items-center gap-2 justify-center`}
    >
      <img src={`/icons/${typeIcons[type]}`} className="h-7 w-7 invert" />
      {withName && (
        <h4 className="text-white font-bold text-2xl capitalize">{type}</h4>
      )}
    </div>
  );
}
