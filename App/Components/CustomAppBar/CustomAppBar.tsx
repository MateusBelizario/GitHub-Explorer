import * as React from 'react'
import { Component, FunctionComponent } from 'react'
import { Container, AppBar, Toolbar, IconButton, Typography, InputBase, Button, Grid } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { useStyles } from '../../Containers/SearchScreen/SearchScreenStyles'
import { observer } from 'mobx-react-lite';
import { userStoreContext } from '../../Store/UserStore';
import clsx from  'clsx';

interface IProps {

}

interface IState {
}

export const CustomAppBar: FunctionComponent = observer((props) => {

    const userStore = React.useContext(userStoreContext)

    const initialState: IState = {
    }

    const onChangeSearch = (event) => {
        userStore.search = event.target.value
    }

    const onSearchSubmit = (event) => {
        event.preventDefault();
        userStore.refreshSearch()
    }

    const styles = useStyles(props)

    return (
        <AppBar className={clsx(styles.appBar, styles.appText)}>
            <Grid justify='center'>
                <Toolbar>
                    <Typography className={styles.title} variant="h6" noWrap>
                        GitHub Users
                    </Typography>
                    <div className={styles.search}>
                        <div className={styles.searchIcon}>
                            <SearchIcon />
                        </div>
                        <form onSubmit={onSearchSubmit} >
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: styles.inputRoot,
                                    input: styles.inputInput,
                                }}
                                onChange={onChangeSearch}
                                inputProps={{ 'aria-label': 'search' }}
                            />

                        </form>
                    </div>
                    <Button className={styles.searchButton} onClick={onSearchSubmit} variant="contained"><SearchIcon className={styles.searchIconButton}/></Button>
                    <div className={styles.grow} />
                </Toolbar>
            </Grid>
        </AppBar>
    )
})

export default CustomAppBar
