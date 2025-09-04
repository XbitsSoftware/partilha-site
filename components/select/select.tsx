"use client";

import { Controller } from "react-hook-form";
import type { SelectCustomProps } from "./select.types";
import { type ReactElement, useEffect, useRef, useState } from "react";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  CheckIcon,
} from "../../public/extensions/icons";

const Select = ({
  control,
  name,
  label,
  errors,
  disabled,
  mandatory,
  iconLeft,
  iconRight,
  items,
  placeholder,
  direction = 1,
  id,
}: SelectCustomProps) => {
  const selectContainer = useRef<any>(null);
  const [openList, setOpenList] = useState<boolean>(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const optionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLDivElement>,
    onChange: (value: any) => void
  ) => {
    if (!openList) {
      if (e.key === "Enter" || e.key === " ") {
        setOpenList(true);
        setHighlightedIndex(0);
      }
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev < (items?.length ?? 0) - 1 ? prev + 1 : 0
      );
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev > 0 ? prev - 1 : (items?.length ?? 0) - 1
      );
    }
    if (e.key === "Tab") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev < (items?.length ?? 0) - 1 ? prev + 1 : 0
      );
    }

    if (e.key === "Enter") {
      e.preventDefault();
      if (highlightedIndex >= 0 && items) {
        onChange(items[highlightedIndex].value);
        setOpenList(false);
      }
    }

    if (e.key === "Escape") {
      setOpenList(false);
    }
  };

  const handleErrorName = () => {
    return name.split(".").reduce((acc, key) => acc?.[key], errors);
  };

  const handleOpenList = () => {
    if (!disabled) setOpenList(!openList);
  };

  const handleSelectValue = (
    value: any,
    onChange: (...event: any[]) => void
  ) => {
    onChange(value);
    handleOpenList();
  };

  const handleClickOutside = (event: any) => {
    if (
      selectContainer.current &&
      !selectContainer.current.contains(event.target)
    ) {
      setOpenList(false);
    }
  };

  const renderArrowIcon = (): ReactElement => {
    return (
      <div
        className={`text-2xl absolute right-2 ${
          !!label ? "top-[35px]" : "top-[0.8rem]"
        } rounded-[0.7em] z-10 cursor-pointer`}
        onClick={handleOpenList}
      >
        {openList ? (
          <ArrowUpIcon height={"1rem"} />
        ) : (
          <ArrowDownIcon height={"1rem"} />
        )}
      </div>
    );
  };

  const renderBaseValue = (value: any) => {
    const selected = items?.find((item) => item.value === value)?.label;
    return selected ?? placeholder ?? "Selecione";
  };

  useEffect(() => {
    if (highlightedIndex >= 0 && optionRefs.current[highlightedIndex]) {
      optionRefs.current[highlightedIndex]?.scrollIntoView({
        block: "nearest",
        behavior: "smooth",
      });
    }
  }, [highlightedIndex]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={selectContainer}
      id={id ?? ""}
      className="w-full flex flex-col justify-start items-start gap-2 relative"
    >
      {!!label && (
        <label className="font-normal text-sm h-4">
          {label}
          <strong className="text-red-500 ml-1">{mandatory ? "*" : ""}</strong>
        </label>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <>
            {renderArrowIcon()}
            {!!iconLeft && (
              <div
                className={`text-2xl absolute left-2 top-[2rem] ${
                  !!label ? "top-[2rem]" : "top-[0.8rem]"
                } rounded-[0.7em] z-10`}
              >
                {iconLeft}
              </div>
            )}
            {!!iconRight && (
              <div
                className={`text-2xl absolute right-9 top-[35px] ${
                  !!label ? "top-[2.5rem]" : "top-[0.8rem]"
                } rounded-[0.7em] z-10`}
              >
                {iconRight}
              </div>
            )}
            <div
              className={`w-full rounded border h-[2.25rem] border-gray-300 relative pr-8 
    ${!!iconLeft ? "pl-12" : "pl-4"} 
    ${disabled ? "bg-gray-100" : "bg-white"} 
    cursor-pointer flex items-center text-gray font-light input`}
              onClick={handleOpenList}
              id={`${id}-base`}
              tabIndex={0}
              role="button"
              onKeyDown={(e) => handleKeyDown(e, onChange)} // ✅ usa a função completa
            >
              {renderBaseValue(value)}
            </div>
            {handleErrorName() && (
              <span className="w-full p-0 text-red-500 text-sm">
                {handleErrorName().message}
              </span>
            )}

            {!!items && (
              <div
                className={`absolute w-full h-fit max-h-44 rounded border border-[rgba(16,24,40,0.03)] shadow-[0_4px_15px_0_rgba(0,0,0,0.1)] bg-white cursor-pointer ${
                  openList ? "block" : "hidden"
                } z-[999] overflow-auto text-sm font-light
                  ${
                    direction === 1 ? "top-full left-0" : "bottom-[70%] left-0"
                  }`}
                id={`${id}-list`}
              >
                {items.map((item, index) => (
                  <div
                    key={index}
                    ref={(el) => {
                      optionRefs.current[index] = el;
                    }}
                    onClick={() => handleSelectValue(item.value, onChange)}
                    className={`px-4 h-10 w-full flex items-center justify-between 
                    ${
                      index === highlightedIndex
                        ? "bg-gray-200"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <p className="m-0 w-fit">{item.label}</p>
                    {value === item.value && (
                      <p>
                        <CheckIcon height={"1.5rem"} />
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      />
    </div>
  );
};

export default Select;
