import React, { useState } from "react";

interface InputFieldProps {
  className?: string;
  name?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
  errors?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  className = "",
  name = "",
  placeholder = "",
  type = "text",
  value = "",
  onChange,
  suffix,
  prefix,
  errors,
  ...restProps
}) => {
  const [focused, setFocused] = React.useState(false);

  return (
    <div className="relative w-full">
      <div
        className={`flex items-center border ${
          focused ? "border-gray-800" : "border-gray-300"
        } rounded-md px-3 py-2 ${className}`}
      >
        {!!prefix && <div className="mr-2">{prefix}</div>}
        <input
          className="w-full outline-none bg-transparent"
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...restProps}
        />
        {!!suffix && <div className="ml-2">{suffix}</div>}
      </div>
      {errors && <p className="text-red-500 text-sm mt-1">{errors}</p>}
    </div>
  );
};

export { InputField };