import * as React from "react";
import { FunctionComponent } from "react";
import { useStyles } from "./UserListStyles";
import { observer } from "mobx-react-lite";
import { userStoreContext } from "../../Store/UserStore";
import { UserCard } from "./UserCard";
import { Grid, useScrollTrigger, Container } from "@material-ui/core";
import InfiniteScroll from "react-infinite-scroller";
import { UserCardPlaceholder } from "./UserCardPlaceholder";

interface IProps {}

interface IState {
  isExpanded?: string;
}

export const UsersList: FunctionComponent<IProps> = observer(props => {
  const userStore = React.useContext(userStoreContext);

  React.useEffect(() => {}, []);

  const initialState: IState = {};

  const fetchUsers = () => {
    userStore.page += 1;
    userStore.searchUsers();
  };

  const styles = useStyles(props);

  return (
    <Container>
      <InfiniteScroll
        pageStart={0}
        loadMore={fetchUsers}
        hasMore={!userStore.isCompleted}
        loader={
          <Grid
            direction="row"
            justify="center"
            alignItems="center"
            container
            spacing={3}
          >
            <UserCardPlaceholder />
            <UserCardPlaceholder />
            <UserCardPlaceholder />
          </Grid>
        }
      >
        <Grid
          direction="row"
          justify="center"
          alignItems="center"
          className={styles.marginTop}
          container
          spacing={3}
        >
          {Array.from(userStore.users.values()).map((user, index) => {
            return <UserCard user={user} />;
          })}
        </Grid>
      </InfiniteScroll>
    </Container>
  );
});

export default UsersList;
