"use client";
import { IonIcon } from "@ionic/react";
import { chevronDown } from "ionicons/icons";
import React, { useRef, useState, useEffect } from "react";

interface FilterListProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

const FilterList: React.FC<FilterListProps> = ({ activeFilter, setActiveFilter }) => {
  const [selectOpen, setSelectOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement | null>(null);

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    setSelectOpen(false);
  };

  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (!selectRef.current) return;
      if (e.target instanceof Node && !selectRef.current.contains(e.target)) {
        setSelectOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  // Define the available filter categories based on PortfolioType
  const filterCategories = [
    "All",
    "Video Production",
    "Photography",
    "Content Creation",
    "Web Development",
    "UI/UX",
    "Design",
    "Branding"
  ];

  return (
    <>
      <ul className="filter-list">
        {filterCategories.map((filter) => (
          <li className="filter-item" key={filter}>
            <button
              className={activeFilter === filter ? "active" : ""}
              onClick={() => handleFilterClick(filter)}
              data-filter-btn
            >
              {filter}
            </button>
          </li>
        ))}
      </ul>

      <div className="filter-select-box">
        <button className="filter-select" data-select>
          <div className="select-value" data-selecct-value>
            {activeFilter}
          </div>
          <div className="select-icon">
            <IonIcon icon={chevronDown} />
          </div>
        </button>

        <ul className="select-list">
          {filterCategories.map((filter) => (
            <li className="select-item" key={filter}>
              <button onClick={() => handleFilterClick(filter)} data-select-item>
                {filter}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FilterList;
