import * as React from "react";
import clsx from "clsx";
import { Component, FunctionComponent } from "react";
import {
  Container,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Button,
  Grid,
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  CircularProgress,
  Divider,
  ListItemText,
  ListItem,
  List,
  Link
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import GitHubIcon from "@material-ui/icons/GitHub";
import CodeIcon from "@material-ui/icons/Code";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStyles } from "./UserCardStyles";
import { observer } from "mobx-react-lite";
import { userStoreContext } from "../../Store/UserStore";
import { User } from "../../Model/User";
import { Repository } from "../../Model/Repository";
import { isFunction } from "util";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";

interface IProps {
  user: User;
}

interface IState {
  isExpanded: boolean;
  repositories: Repository[];
  isLoading: boolean;
}

export const UserCard: FunctionComponent<IProps> = observer(props => {
  const userStore = React.useContext(userStoreContext);

  const initialState: IState = {
    isExpanded: false,
    repositories: [],
    isLoading: false
  };

  const [isExpanded, setIsExpanded] = React.useState(initialState.isExpanded);
  const [repositories, setRepositories] = React.useState(
    initialState.repositories
  );
  const [isLoading, setIsLoading] = React.useState(initialState.isLoading);

  const handleExpandClick = userName => {
    if (repositories.length === 0) {
      setIsLoading(true);
      userStore.userName = userName;
      userStore.searhUserRepository().then(response => {
        setIsLoading(false);
        if (response.ok) {
          setRepositories(response.data);
        }
      });
    }

    setIsExpanded(!isExpanded);
  };

  const styles = useStyles(props);

  return (
    <Card key={props.user.id} className={styles.card}>
      <CardHeader
        title={
          <div>
            <Typography className={styles.loginLabel}>
              {props.user.login}
            </Typography>{" "}
            <Link href={props.user.html_url}>
              {" "}
              <GitHubIcon className={styles.githubIcon} />{" "}
            </Link>{" "}
          </div>
        }
        subheader={"Score: " + props.user.score}
      />
      <CardMedia
        className={styles.media}
        image={props.user.avatar_url}
        title="User avatar"
      />
      <CardActions disableSpacing>
        <IconButton
          className={clsx(styles.expand, {
            [styles.expandOpen]: isExpanded
          })}
          onClick={handleExpandClick.bind(this, props.user.login)}
          aria-expanded={isExpanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse
        in={isExpanded}
        className={styles.collapseContainer}
        timeout="auto"
        unmountOnExit
      >
        {isLoading ? (
          <CircularProgress />
        ) : (
          <Container className={styles.informationContainer}>
            <Typography paragraph className={styles.repositoriesLabel}>
              Repositories Count: {repositories.length}
            </Typography>
            <List className={styles.root}>
              {repositories.map((repository, index) => {
                return (
                  <Container
                    className={styles.informationContainer}
                    key={repository.id}
                  >
                    <ListItem alignItems="flex-start">
                      <ListItemText
                        primary={repository.name}
                        secondary={
                          <React.Fragment>
                            <Typography
                              component="span"
                              variant="body2"
                              className={styles.inline}
                              color="textPrimary"
                            >
                              {repository.description}
                            </Typography>
                            <p>{"ID: " + repository.id}</p>
                            <p>
                              {"Language: " +
                                (repository.language
                                  ? repository.language
                                  : "No language information.")}
                            </p>
                            <Link href={repository.html_url}>
                              {" "}
                              <FolderOpenIcon
                                className={styles.githubIcon}
                              />{" "}
                            </Link>
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                    <Divider component="li" />
                  </Container>
                );
              })}
            </List>
          </Container>
        )}
      </Collapse>
    </Card>
  );
});

export default UserCard;
