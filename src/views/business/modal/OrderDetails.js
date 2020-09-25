import React, { useEffect, useState } from 'react'
import { AppBar, Dialog, DialogContent, Toolbar, Typography } from '@material-ui/core'
// import * as Actions from '/store/actions'
import * as Actions from '../store/actions'
import { useDispatch, useSelector } from 'react-redux'
import 'react-intl-tel-input/dist/main.css';
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'
import moment from "moment";

function OrderDetails(props) {
  const dispatch = useDispatch()
  const orderDetailsDialog = useSelector(({BusinessApp}) => BusinessApp.business === undefined ? '' :BusinessApp.business.orderDetailsDialog)

  const [data, setData] = useState([])

  useEffect(() => {
    /**
     * After Dialog Open
     */
    if (orderDetailsDialog.data) {
      console.log("orderDetail",orderDetailsDialog.data);
      setData(orderDetailsDialog.data)
    }

  }, [orderDetailsDialog.props === undefined? '':orderDetailsDialog.props.open, orderDetailsDialog.data])
  

  function closeComposeDialog () {
    dispatch(Actions.closeOrderDetailsDialog())
  }

  return (

      <Dialog
          classes={{
            paper: 'm-24'
          }}
          {...orderDetailsDialog.props}
          onClose={closeComposeDialog}
          fullWidth
          maxWidth="md"
      >

        <AppBar position="static" elevation={1}>
          <Toolbar className="flex w-full" >
            <Typography variant="subtitle1" color="inherit">
              Order Details
            </Typography>

          </Toolbar>
        </AppBar>
        <form noValidate className="flex flex-col overflow-hidden">
          <DialogContent classes={{root: 'p-24'}}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><b>Order Status</b></TableCell>
                  <TableCell><b>Payment Status</b></TableCell>
                  <TableCell><b>Order Location</b></TableCell>
                  <TableCell><b>Order Amount</b></TableCell>
                  <TableCell><b>Order Date</b></TableCell>
                  <TableCell><b>Customer Name</b></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data && data.map(row => (
                    <TableRow key={row._id}>
                      <TableCell>{row.orderStatus}</TableCell>
                      <TableCell>{row.paymentStatus}</TableCell>
                      <TableCell>{row.location.name}</TableCell>
                      <TableCell>{row.totalAmount}</TableCell>
                      <TableCell>{moment((row.orderDate)).format('MMMM Do YYYY, h:mm:ss a')}</TableCell>
                      <TableCell>{row.customerId[0].name}</TableCell>
                    </TableRow>
                ))}
              </TableBody>
            </Table>
          </DialogContent>
        </form>
      </Dialog>
  )
}

export default OrderDetails
