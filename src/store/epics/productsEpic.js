import { ofType } from 'redux-observable';
import { combineEpics } from 'redux-observable';
import { from, of } from 'rxjs';
import { map, catchError, switchMap, mergeMap } from 'rxjs/operators';
import { getProducts } from '../../services/api/products';

const getProductsEpic = action$ => action$.pipe(
    ofType('GET_PRODUCTS'),
    mergeMap(
        action =>
            from(getProducts()).pipe(
                map(response => {
                    return response.data;
                }),
                switchMap((response) => [
                    {
                        type: 'SET_PRODUCTS',
                        products: response.products
                    },
                    {
                        type: 'SET_CONFIG',
                        config: response.config
                    },
                    {
                        type: 'PRODUCT_SUCCESS',
                        productsSuccess: true
                    }
                ]),
                catchError(error => {
                    return of({ type: 'ERROR', error })
                })
            )
    )
);


export const productsEpic = combineEpics(
    getProductsEpic
);