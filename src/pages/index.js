import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { useDispatch, useSelector } from 'react-redux'
import { GridData } from '../components/gridData'
import { StickyTopBar } from '../components/stickyTopBar'

const Vitl = () => {
    const dispatch = useDispatch();

    const products = useSelector((state) => state.products);
    const config = useSelector((state) => state.config);
    const [productList, setProductList] = useState([]);
    const productsSuccess = useSelector((state) => state.productsSuccess);

    useEffect(() => {
        if (productsSuccess !== true) {
            getProducts();
            setProductList(products)
        }
    }, [products])


    const getProducts = () => {
        dispatch({
            type: 'GET_PRODUCTS',
            fetchingProducts: true
        })
    }

    return (
        <div>
            <StickyTopBar />
            <Container maxWidth="lg">
                <GridData config={config} tunes={productList}></GridData>
            </Container>
        </div>
    )
}

export default Vitl;