import React, { useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useSelector } from 'react-redux'

const StyledBadge = withStyles((theme) => ({
	badge: {
		right: -3,
		top: 13,
		padding: '0 4px',
		color: 'white',
		backgroundColor: '#face26'
	},
}))(Badge);

const useStyles = makeStyles((theme) => ({
	appBar: {
		background: '#fff'
	},
	favoriteIcon: {
		marginLeft: 'auto'
	},
}))

export const StickyTopBar = ({ favoriteCount }) => {
	const classes = useStyles();
	const basketList = useSelector((state) => state.basketList);

	useEffect(() => {
	}, [basketList]);


	return (
		<AppBar className={classes.appBar}>
			<Toolbar>
				<img src="https://static.vitl.com/images/logo/vitl_logo.svg" style={{ width: '50px' }} />
				<IconButton className={classes.favoriteIcon} aria-label="cart">
					<StyledBadge badgeContent={basketList.length} color="secondary">
						<ShoppingCartIcon fontSize="large" />
					</StyledBadge>
				</IconButton>
			</Toolbar>
		</AppBar>
	)
}