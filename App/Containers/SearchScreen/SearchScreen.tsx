import * as React from "react";
import { Component, FunctionComponent } from "react";
import {
  Container,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { useStyles } from "./SearchScreenStyles";
import { observer } from "mobx-react-lite";
import { userStoreContext } from "../../Store/UserStore";
import { CustomAppBar } from "../../Components/CustomAppBar/CustomAppBar";
import { UsersList } from "../../Components/UsersList/UsersList";

export const SearchScreen: FunctionComponent = observer(props => {
  const styles = useStyles(props);

  return (
    <Container className={styles.appText}>
      <CustomAppBar />
      <UsersList />
    </Container>
  );
});

export default SearchScreen;
