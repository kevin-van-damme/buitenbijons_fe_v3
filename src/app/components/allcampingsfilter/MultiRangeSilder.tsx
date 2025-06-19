"use client";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { useState } from "react";

const MultiRangeSlider = ({ min, max }: { min: string; max: string }) => {
  const [value, setValue] = useState<[number, number]>([parseInt(min), parseInt(max)]);

  const handleInput = (newValue: [number, number]) => {
    setValue(newValue);
  };

  return (
    <div className="w-full p-4 bg-white rounded-2xl shadow-md">
      <label className="block text-lg font-semibold text-gray-800 mb-4">Price Range (€)</label>

      <RangeSlider value={value} onInput={handleInput} min={0} max={150} step={1} className="w-full slider-thumb" />

      <div className="flex justify-between mt-4 text-sm font-medium text-gray-700">
        <span>€{value[0]}</span>
        <span>€{value[1]}</span>
      </div>

      <input type="hidden" name="min" value={value[0]} />
      <input type="hidden" name="max" value={value[1]} />
    </div>
  );
};

export default MultiRangeSlider;
