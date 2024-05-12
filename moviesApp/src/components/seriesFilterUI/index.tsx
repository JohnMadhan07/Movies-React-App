import React, { useState } from "react";
import FilterCard from "../filterMoviesCard";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import { ListedSeries } from "../../types/interfaces";

export const titleFilter = function (series:ListedSeries, value: string) {
  return series.name.toLowerCase().search(value.toLowerCase()) !== -1;
};

export const genreFilter = function (series: ListedSeries, value: string) {
  const genreId = Number(value);
  return genreId > 0 ? series.genre_ids.includes(genreId) : true;
};

const styles = {
  root: {
    backgroundColor: "#bfbfbf",
  },
  fab: {
    marginTop: 8,
    position: "fixed",
    top: 20,
    right: 2,
  },
};

interface SeriesFilterUIProps {
  onFilterValuesChange: (f: string, s: string) => void;
  titleFilter: string;
  genreFilter: string;
}


const SeriesFilterUI: React.FC<SeriesFilterUIProps> = ({ onFilterValuesChange, titleFilter, genreFilter }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        sx={styles.fab}
      >
        Filter
      </Fab>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <FilterCard
          onUserInput={onFilterValuesChange}
          titleFilter={titleFilter}
          genreFilter={genreFilter}
        />
      </Drawer>
    </>
  );
};

export default SeriesFilterUI;