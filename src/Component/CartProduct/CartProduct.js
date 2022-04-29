import { Button, Stack } from '@mui/material';
import React from 'react';
import { Table } from 'react-bootstrap';
import "./CartProduct.css"
import CloseIcon from '@mui/icons-material/Close';

const CartProduct = ({carts}) => {
    return (
      
        <Table className='table-container ' responsive striped bordered hover size="sm">
          
        <thead>
          <tr>
            <th>Product</th>
            <th>name</th>
            <th>ID</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {
          carts.map(cart =>  <tr
          key={cart?.id}
          
  
          >
                      
            <td>
                <img className='cart-img' src={cart?.img} alt="" />
            </td>
            <td>{cart?.name}</td>
              <td>{cart?.id}</td>
              <td>{cart?.price}</td>
              
              <td>
                {" "}
                
                <Stack className='p-2' direction="row" spacing={2}>
                  <Button variant="outlined" startIcon={<CloseIcon />}>
                    
                  </Button>
                </Stack>
              </td>
            </tr>
          )
        }
        </tbody>
      </Table>
    );
};

export default CartProduct;