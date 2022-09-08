import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { ListGroup } from "react-bootstrap";
import countries from "../../../assets/countries-details.json";

const countryList = countries.map((country) => ({
  ...country,
  isSelected: false,
}));

const SearchCheckList = () => {
  const [isFocus, setIsFocus] = useState(true);
  const [searchStr, setSearchStr] = useState("");
  const [filterList, setFilterList] = useState(countryList);
  const inputRef = useRef(null);
  useEffect(() => {
    const ref = inputRef.current;
    ref.addEventListener("focus", () => setIsFocus(true), true);
    return () => {
      ref.removeEventListener("focus", setIsFocus, true);
    };
  }, []);
  useEffect(() => {
    if (searchStr) {
      const newList = countryList.filter((country) => {
        const name = country.name.toLowerCase();
        const search = searchStr.toLowerCase();
        if (name.includes(search)) return true;
        else return false;
      });
      setFilterList([...newList]);
    } else setFilterList(countryList);
  }, [searchStr]);

  const selectCountry = (countryCode) => {
    setFilterList([
      ...filterList.map((country) => {
        if (country.code === countryCode) {
          country.isSelected = !country.isSelected;
        }
        return country;
      }),
    ]);
  };

  return (
    <div style={{ minHeight: "calc(100vh - 208px)", width: "100%" }}>
      <h2 className="my-4 text-center">Select Countries you want to visit</h2>
      <div className="d-flex align-items-center flex-column">
        <input
          ref={inputRef}
          type="text"
          className="form-control w-50"
          value={searchStr}
          onChange={(e) => setSearchStr(e.target.value)}
          autoFocus
          placeholder="Search Country"
        />
        {isFocus && (
          <div className="w-50" style={{ zIndex: 9 }}>
            <ListGroup className="w-100">
              <ListGroup.Item>
                <div className="d-flex justify-content-center">
                  <div className="w-100 fs-6 d-flex align-items-center">
                    Country Name
                  </div>
                  <button
                    className="btn btn-danger lh-1"
                    onClick={() => setIsFocus(false)}
                  >
                    x
                  </button>
                </div>
              </ListGroup.Item>
            </ListGroup>
            <div className="position-relative w-100">
              <div
                className="w-100 position-absolute"
                style={{
                  overflow: "auto",
                  maxHeight: "40vh",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                }}
              >
                <ListGroup>
                  {filterList.map((country) => (
                    <ListGroup.Item
                      key={country.code}
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        selectCountry(country.code);
                      }}
                    >
                      <div className="d-flex justify-content-between">
                        <div className="mx-2 d-flex justify-content-between">
                          <div className="me-2">{country.emoji}</div>
                          {country.name}
                        </div>
                        <input
                          type="checkbox"
                          className="d-block mx-2"
                          name={country.code}
                          id={country.code}
                          checked={country.isSelected}
                          style={{ cursor: "pointer" }}
                          onChange={() => {}}
                        />
                      </div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </div>
            </div>
          </div>
        )}
        <div className="d-flex justify-content-center align-items-center flex-wrap my-2">
          {countryList
            .filter((country) => country.isSelected)
            .map((country) => (
              <div
                className="d-flex justify-content-between btn btn-outline-success mx-2 mb-2"
                key={country.code}
              >
                <div className="me-2 d-flex justify-content-between">
                  <div className="me-2">{country.emoji}</div>
                  {country.name}
                </div>
                <div
                  className="bg-danger px-2 text-white"
                  style={{ cursore: "pointer" }}
                  onClick={() => selectCountry(country.code)}
                >
                  x
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default SearchCheckList;
