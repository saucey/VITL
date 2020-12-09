import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useDispatch } from 'react-redux'
const useStyles = makeStyles((theme) => ({
	root: {
		width: '300px',
		margin: theme.spacing(2),
	},
	addToBasketBtn: {
		backgroundColor: '#face26',
		color: 'white',
		display: 'flex',
		textAlign: 'center',
		margin: '0 auto',
		marginBottom: '20px',
		fontWeight: 'bold',
		'&:hover': {
			color: '#face26',
			backgroundColor: '#fef6dc'

		},
		'&:disabled': {
			color: '#f0efef',
			backgroundColor: '#e4e0e0',
		},

	},
	cartBtn: {
		fontSize: '2em'
	},
	basketWrapper: {
		border: '1px solid #face26',
		display: 'flex',
		justifyContent: 'center'
	},
	basketItem: {
		backgroundColor: 'white',
		padding: '10px',
		margin: '10px'
	},
	outterBasketWrapper: {
		marginBottom: '100px'
	},
	nutrientsUnitWrapper: {
		padding: '0 16px',
		'& p': {
			margin: 0,
			padding: 0,
			marginBottom: '3px',
			fontStyle: 'italic'
		}
	},
	innerNutrients: {
		marginBottom: '10px'
	}


}));


export const GridData = ({ tunes, config }) => {


	const dispatch = useDispatch();
	const [basketList, setCreateBasketList] = useState([]);

	useEffect(() => {
		dispatch({
			type: 'BASKET_LIST',
			basketList
		})
	}, [basketList]);

	const threashHolds = config?.tolerableUpperLimits?.reduce((prev, curr) => {
		prev[curr.id] = curr.amount;
		return prev;
	}, {}) || {};

	const middlewares = [];
	const canAddToCartMiddleware = (rules) => (productToAdd, basket) => {
		const basketRuleValue = basket.reduce((prev, cartItem) => {
			cartItem?.product?.nutrients?.forEach(nutrient => {
				prev[nutrient.id] = (prev[nutrient.id] || 0) + (nutrient.amount * cartItem.qty)
			});
			return prev;
		}, {});
		return productToAdd.nutrients.every(nutrient => {
			return nutrient.amount + (basketRuleValue[nutrient.id] || 0) <= rules[nutrient.id];
		})
	}

	// function loggerMiddleware(rule) {
	// 	return function (product, cart) {
	// 		console.log(rule, product, cart);
	// 		return true;
	// 	}
	// }

	// middlewares.push(loggerMiddleware(threashHolds))

	middlewares.push(canAddToCartMiddleware(threashHolds));

	const classes = useStyles();

	const callMiddleware = (product) => middlewares.every(middleware => {
		return middleware(product, basketList || [])
	});

	const canIAdd = (product) => callMiddleware(product);

	const addToBasket = (product) => {
		if (canIAdd(product)) {
			const existingItem = basketList.find(item => item.product.name === product.name);
			if (existingItem) {
				setCreateBasketList([
					...basketList.filter(item => item?.product?.name !== product.name),
					{
						...existingItem,
						qty: existingItem.qty + 1
					}
				])
			} else {
				setCreateBasketList([
					...basketList,
					{
						product: { ...product },
						qty: 1
					}
				])
			}
		}
	}

	const removeProduct = (cartItem) => {
		const qty = cartItem.qty - 1;
		if (qty === 0) {
			setCreateBasketList(basketList.filter(item => cartItem.product.name !== item.product.name))
		} else {
			setCreateBasketList([
				...basketList.filter(item => cartItem.product.name !== item.product.name),
				{
					...cartItem,
					qty
				}
			])
		}
	}

	return (
		<div style={{ marginTop: '100px' }}>
			<Grid container className={classes.root2} spacing={2}>
				<Grid item xs={12}>
					<div className={classes.outterBasketWrapper}>
						<span style={{ color: '#face26' }}>Basket Area:</span>
						<div className={classes.basketWrapper}>
							{basketList.length === 0 && <p style={{ color: '#face26' }}>You currently have no items in my basket</p>}
							{basketList.map(val => {
								return (
									<React.Fragment>
										<div className={classes.basketItem}>
											<span>{val?.product?.name}</span>
											<p>qty: {val?.qty}</p>
											<Button className={classes.cartBtn} disabled={!canIAdd(val?.product)} onClick={() => addToBasket(val?.product)}>+</Button>
											<Button className={classes.cartBtn} onClick={() => removeProduct(val)}>-</Button>
										</div>
									</React.Fragment>
								)
							})}
						</div>
					</div>
					<Grid container justify="center" spacing={2}>
						{tunes.map((val, index) => {
							return (
								<Card key={index} className={classes.root}>
									<CardHeader
										action={
											<IconButton aria-label="settings">
												<MoreVertIcon />
											</IconButton>
										}
										title={val.name}
										subheader={
											parseFloat(val.price).toFixed(2) + ' ' + config?.currency
										}
									/>
									<div className={classes.nutrientsUnitWrapper}>
										<h4 style={{ marginBottom: '10px', color: "#face26" }}>Nutrients Info</h4>
										{
											val.nutrients.map((nutrient, i) => {
												return (
													<div key={i} className={classes.innerNutrients}>
														<p>{nutrient.id}</p>
														<p>{nutrient.amount}</p>
													</div>
												)
											})
										}
									</div>
									<Button disabled={!canIAdd(val)} onClick={() => addToBasket(val)} className={classes.addToBasketBtn} aria-label="cart">
										Add to <ShoppingCartIcon style={{ marginLeft: '10px' }} fontSize="medium" />
									</Button>

								</Card>)
						})}
					</Grid>
				</Grid>
			</Grid>
		</div >)
}