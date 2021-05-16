import React, { useState } from "react";

//reviw: add type for defaultValue - ✅
export const useInput = (defaultValue: string) => {
  const [value, setValue] = useState<string>('');
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    if(typeof e.target.value === 'string')
      setValue(e.target.value.toString());
  }
  return {
    value,
    onChange,
  };
}
