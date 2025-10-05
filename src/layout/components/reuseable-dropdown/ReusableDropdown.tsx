import { useState, memo } from "react";
import { ChevronDown } from "lucide-react";
import { useOutsideClick } from "../../../shared/hooks/useOutSideClick";

export interface Option {
  label: string;
  value: string | number | null;
}

interface Props {
  label: string;
  options: Option[];
  selected: string | number | null;
  onSelect: (value: string | number | null) => void;
  allLabel?: string;
}

const ReusableDropdown = ({
  label,
  options,
  selected,
  onSelect,
  allLabel,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useOutsideClick(() => setIsOpen(false));

  const selectedLabel =
    options.find((opt) => opt.value === selected)?.label ||
    allLabel ||
    `All ${label}`;

  return (
    <div className="relative w-full max-w-[250px]" ref={ref}>
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="border py-3 px-4 cursor-pointer flex justify-between items-center rounded-md bg-white w-full"
      >
        <span className="truncate">{selectedLabel}</span>
        <ChevronDown
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {isOpen && (
        <div className="absolute left-0 top-full mt-2 w-full border bg-white shadow-lg rounded-md z-10 max-h-[200px] overflow-y-auto">
          <div
            className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
            onClick={() => {
              onSelect(null);
              setIsOpen(false);
            }}
          >
            {allLabel || `All ${label}`}
          </div>

          {options.map((opt) => (
            <div
              key={opt.value ?? "all"}
              className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                const parsedValue =
                  typeof opt.value === "string" && !isNaN(Number(opt.value))
                    ? Number(opt.value)
                    : opt.value;

                onSelect(parsedValue);
                setIsOpen(false);
              }}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default memo(ReusableDropdown);
