import React from 'react';
import { Table } from 'react-bootstrap';

const MyOrder = ({myOrders}) => {
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
                {/* <Stack direction="row" spacing={2}>
                  <Button variant="outlined" startIcon={<DeleteIcon />}>
                    Delete
                  </Button>
                  <Button variant="outlined" startIcon={<UpdateIcon />}>
                  Update
                  </Button>
                </Stack> */}
              
              </td>
            </tr>
          )
        }
        </tbody>
      </Table>
    );
};

export default MyOrder;