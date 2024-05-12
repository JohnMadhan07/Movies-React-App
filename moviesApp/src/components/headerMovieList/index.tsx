import React, { useContext } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { MoviesContext } from "../../contexts/moviesContext";

const styles = {
    root: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
        marginBottom: 1.5,
    },
};

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = (props) => {
    const { page, setPage } = useContext(MoviesContext);
    const title = props.title
    const goToPreviousPage = () => {
        console.log("clicked")
        if (page > 1) {
          setPage(page - 1);
        }
      };
    
      const goToNextPage = () => {
        setPage(page + 1);
      };
    
    return (
        <Paper component="div" sx={styles.root}>
            <IconButton
                aria-label="go back"
                onClick={goToPreviousPage}>
                <ArrowBackIcon color="primary" fontSize="large" />
            </IconButton>

            <Typography variant="h4" component="h3">
                {title}
            </Typography>
            <IconButton
                aria-label="go forward"
                onClick={goToNextPage}>
                <ArrowForwardIcon color="primary" fontSize="large" />
            </IconButton>
        </Paper>
    );
};

export default Header;