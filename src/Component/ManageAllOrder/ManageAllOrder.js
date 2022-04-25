import React from 'react';
import { Table } from 'react-bootstrap';
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Stack } from '@mui/material';
import UpdateIcon from '@mui/icons-material/Update';

const ManageAllOrder = ({manageAllOrders}) => {

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
            <th>Delete & Update</th>
            
          </tr>
        </thead>
        <tbody>
        {
          manageAllOrders.map(manageAllOrder =>  <tr
          key={manageAllOrder?.id}
          
  
          >
                      
            <td>{manageAllOrder?.name}</td>
            <td>{manageAllOrder?.product?.join()}</td>
              <td>{manageAllOrder?.email}</td>
              <td>{manageAllOrder?.phone}</td>
              <td>{manageAllOrder?._id}</td>
              <td>{manageAllOrder?.totalPrice}</td>
              <td>
                {" "}
                <Stack direction="row" spacing={2}>
                  <Button variant="outlined" startIcon={<DeleteIcon />}>
                    Delete
                  </Button>
                  <Button variant="outlined" startIcon={<UpdateIcon />}>
                  Update
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

export default ManageAllOrder;