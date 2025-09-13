import { Controller } from "react-hook-form";
import type { InputTypes } from "./input.types.ts";
import { useEffect, useState } from "react";
import { useMask } from "../../public/extensions/mask";

const Input = ({
  control,
  name,
  label,
  errors,
  disabled,
  placeholder,
  type,
  maxLength = 200,
  mandatory,
  iconLeft,
  iconRight,
  iconRightSecondary,
  onBlur,
  mask,
  onChange: onChangeProps,
  id,
  textarea,
  checkbox,
  checkboxCircle,
}: InputTypes) => {
  const [inputType, setInputType] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");

  const handleErrorName = () => {
    return name.split(".").reduce((acc, key) => acc?.[key], errors);
  };

  useEffect(() => {
    setInputType(type ?? "text");
  }, [type]);

  return (
    <div
      id={id}
      className="w-full flex flex-col justify-start items-start gap-2 relative"
    >
      {!!label && !checkbox && !checkboxCircle && (
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
            <div className="w-full relative">
              {!!iconLeft && (
                <div
                  className={`text-2xl absolute left-3 ${
                    !!label ? "top-[0.45rem]" : "top-2"
                  } rounded-[0.7em] z-10`}
                >
                  {iconLeft}
                </div>
              )}
              {!!iconRight && (
                <div
                  className={`text-2xl absolute right-4 ${
                    !!label ? "top-[2rem]" : "top-4"
                  } rounded-[0.7em] z-10`}
                >
                  {iconRight}
                </div>
              )}
              {!!iconRightSecondary && (
                <div
                  className={`text-2xl absolute right-10 ${
                    !!label ? "top-[2.2rem] pr-2" : "top-4"
                  } rounded-[0.7em] z-10 cursor-pointer`}
                  onClick={() =>
                    setInputType(inputType === "password" ? "text" : "password")
                  }
                >
                  {iconRightSecondary}
                </div>
              )}

              {checkbox ? (
                <div className="flex">
                  <input
                    type="checkbox"
                    className="w-4 h-4 accent-red-500"
                    checked={value}
                    onChange={(e) => {
                      onChange(e.target.checked);
                      onChangeProps?.(e.target.checked);
                    }}
                    disabled={disabled}
                    id={`${id}-base`}
                    onBlur={onBlur}
                  />
                  {label && (
                    <label className="text-sm ml-2 mb-2 font-normal">
                      {label}
                      <strong className="text-red-500">
                        {mandatory ? "*" : ""}
                      </strong>
                    </label>
                  )}
                </div>
              ) : checkboxCircle ? (
                <div className="flex items-center">
                  <label className="relative flex items-center justify-center w-4 h-4">
                    <input
                      type="checkbox"
                      className="peer appearance-none w-4 h-4 border border-gray-400 rounded-full focus:outline-none checked:border-purple-500"
                      checked={value}
                      onChange={(e) => {
                        onChange(e.target.checked);
                        onChangeProps?.(e.target.checked);
                      }}
                      disabled={disabled}
                      id={`${id}-base`}
                      onBlur={onBlur}
                    />
                    <div className="absolute w-2 h-2 bg-red-500 rounded-full peer-checked:block hidden" />
                  </label>
                  {label && (
                    <label
                      htmlFor={`${id}-base`}
                      className="text-sm ml-2 font-normal"
                    >
                      {label}
                      <strong className="text-red-500">
                        {mandatory ? "*" : ""}
                      </strong>
                    </label>
                  )}
                </div>
              ) : textarea ? (
                <textarea
                  className={`font-light w-full rounded border border-gray-300 outline-none py-2 px-4 
              ${iconLeft ? "pl-10" : "pl-4"}
              ${iconRightSecondary || iconRight ? "pr-12" : "pr-4"}
              ${
                !disabled &&
                "hover:border-red-200 focus:border-red-500 bg-white"
              }
              ${disabled && "bg-gray-lightest"}
              min-h-[100px] resize-y`}
                  id={`${id}-base`}
                  value={value}
                  onChange={(e) => {
                    const text = mask
                      ? useMask(e.target.value, mask)
                      : e.target.value;
                    onChange(text);
                    onChangeProps?.(text);
                  }}
                  disabled={disabled}
                  placeholder={placeholder}
                  onBlur={onBlur}
                  maxLength={maxLength}
                  rows={4}
                />
              ) : (
                <input
                  className={`font-light w-full h-[2.25rem] rounded border border-gray-300 outline-none py-2 px-4 
              ${iconLeft ? "pl-10" : "pl-4"}
              ${iconRightSecondary || iconRight ? "pr-12" : "pr-4"}
              ${
                !disabled &&
                "hover:border-red-200 focus:border-red-500 bg-white"
              }
              ${disabled && "bg-[#F7F7F7]"}`}
                  id={`${id}-base`}
                  value={value}
                  onChange={(e) => {
                    const rawValue = e.target.value;
                    const maskedValue = mask
                      ? useMask(rawValue, mask)
                      : rawValue;
                    setInputValue(maskedValue);
                    onChange(maskedValue);
                    onChangeProps?.(e);
                  }}
                  disabled={disabled}
                  type={inputType}
                  placeholder={placeholder}
                  onBlur={onBlur}
                  maxLength={maxLength}
                />
              )}
            </div>

            {handleErrorName() && (
              <span
                className="w-full p-0 text-sm text-red-500"
                id={`${id}-error`}
              >
                {handleErrorName().message}
              </span>
            )}
          </>
        )}
      />
    </div>
  );
};

export default Input;
