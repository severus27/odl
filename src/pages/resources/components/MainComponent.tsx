import React, { useState } from "react";
import { Grid, Button } from "@mui/material";
import Card from "./Card";
import { guides, books, notes, notebooks, other_resources } from "../data/Data";
import { IoBookOutline } from "react-icons/io5";
import {
  PiNoteBlankDuotone,
  PiFolderLight,
  PiTextAlignCenter,
} from "react-icons/pi";
import { HiMiniCodeBracket } from "react-icons/hi2";
import { GoLightBulb, GoTrash } from "react-icons/go";

const MainComponent = () => {
  const [selectedCategories, setSelectedCategories] = useState({
    guides: false,
    notes: false,
    books: false,
    notebooks: false,
    other_resources: false,
  });

  const handleCategoryToggle = (category) => {
    setSelectedCategories((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  const clearAllCategories = () => {
    setSelectedCategories({
      guides: false,
      books: false,
      notes: false,
      notebooks: false,
      other_resources: false,
    });
  };

  const renderCategory = (category, data) => {
    if (
      !selectedCategories[category] &&
      !Object.values(selectedCategories).every((val) => val === false)
    ) {
      return null;
    }
    return (
      <>
        <h1
          style={{
            paddingTop: "45px",
            paddingBottom: "10px",
            fontSize: "36px",
          }}
        >
          {category === "notes"
            ? "AI Notes"
            : category === "other_resources"
            ? "Other Resources"
            : category.charAt(0).toUpperCase() + category.slice(1)}
        </h1>
        <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
          {data.map((item, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card {...item} />
            </Grid>
          ))}
        </Grid>
      </>
    );
  };

  return (
    <div className="content-container">
      {/* Categories Buttons */}
      <div style={{ textAlign: "center" }}>
        {Object.keys(selectedCategories).map((category) => (
          <Button
            className="select_button"
            key={category}
            variant={selectedCategories[category] ? "contained" : "outlined"}
            // Icons
            startIcon={
              category === "guides" ? (
                <GoLightBulb />
              ) : category === "notebooks" ? (
                <HiMiniCodeBracket />
              ) : category === "books" ? (
                <IoBookOutline />
              ) : category === "notes" ? (
                <PiNoteBlankDuotone />
              ) : category === "other_resources" ? (
                <PiFolderLight />
              ) : null
            }
            onClick={() => handleCategoryToggle(category)}
            style={{
              marginRight: "10px",
              textTransform: "capitalize",
              borderRadius: "6px",
              backgroundColor: selectedCategories[category] ? "#1B7F64" : "",
              color: selectedCategories[category] ? "#ffffff" : "#888888",
              borderColor: selectedCategories[category] ? "#1B7F64" : "#888888",
            }}
          >
            {category === "notes"
              ? "AI Notes"
              : category === "other_resources"
              ? "Other Resources"
              : category.charAt(0).toUpperCase() + category.slice(1)}
          </Button>
        ))}
        {/* Clear All Button */}
        <Button
          variant="outlined"
          startIcon={<GoTrash />}
          onClick={clearAllCategories}
          style={{
            borderRadius: "6px",
            textTransform: "capitalize",
            borderColor: "#1B7F64",
            color: "#0ba37f",
          }}
        >
          Clear All
        </Button>
      </div>

      {/* Guides */}
      {renderCategory("guides", guides)}

      {/* Notes */}
      {renderCategory("notes", notes)}

      {/* Books */}
      {renderCategory("books", books)}

      {/* Notebook */}
      {renderCategory("notebooks", notebooks)}

      {/* Other Resources */}
      {renderCategory("other_resources", other_resources)}
    </div>
  );
};

export default MainComponent;
