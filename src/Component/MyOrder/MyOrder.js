import { Button, Stack } from '@mui/material';
import React from 'react';
import { Table } from 'react-bootstrap';
import DeleteIcon from '@mui/icons-material/Delete';

const MyOrder = ({myOrders, handelDeleteOrders}) => {
 



    return (
        <Table responsive striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Product Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Id</th>
            <th>Total Price</th>
            
            
          </tr>
        </thead>
        <tbody>
        {
          myOrders.map(myOrder =>  <tr
          key={myOrder?.id}
          
  
          >
                      
            <td>{myOrder?.name}</td>
            <td>{myOrder?.product?.join()}</td>
              <td>{myOrder?.email}</td>
              <td>{myOrder?.phone}</td>
              <td>{myOrder?._id}</td>
              <td>{myOrder?.totalPrice}</td>
              <td>
                {" "}
                <Stack direction="row" spacing={2}>
                  <Button variant="outlined"
                  className='text-danger'
                  onClick={() => handelDeleteOrders(myOrder?._id)}
                   startIcon={<DeleteIcon />}>
                    Delete
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

export default MyOrder;