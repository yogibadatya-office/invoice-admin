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

function CustomerDetails(props) {
  const dispatch = useDispatch()
  const customerDetailsDialog = useSelector(({BusinessApp}) => BusinessApp.business === undefined ? '' :BusinessApp.business.customerDetailsDialog)

  const [data, setData] = useState([])

  useEffect(() => {
    /**
     * After Dialog Open
     */
    if (customerDetailsDialog.data) {
      console.log("orderDetail",customerDetailsDialog.data);
      setData(customerDetailsDialog.data)
    }

  }, [customerDetailsDialog.props === undefined? '':customerDetailsDialog.props.open, customerDetailsDialog.data])
  

  function closeComposeDialog () {
    dispatch(Actions.closeCustomerDetailsDialog())
  }

  return (

      <Dialog
          classes={{
            paper: 'm-24',
            
          }}
          {...customerDetailsDialog.props}
          onClose={closeComposeDialog}
          fullWidth
          scroll = 'body'
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
                  <TableCell><b>Customer Profile Pic</b></TableCell>
                  <TableCell><b>Customer Name</b></TableCell>
                  <TableCell><b>Dial Code</b></TableCell>
                  <TableCell><b>Mobile Number</b></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data && data.map(row => (
                    <TableRow key={row._id}>
                      {/* <TableCell>Hello</TableCell> */}
                      <TableCell><img src= "https://img.icons8.com/material-sharp/24/000000/user.png" style={{height:'50px' ,width:"50px"}} className="c-avatar-img" alt="" /></TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.dial_code}</TableCell>
                      <TableCell>{row.mobile_no}</TableCell>
                      {/* <TableCell>{moment((row.orderDate)).format('MMMM Do YYYY, h:mm:ss a')}</TableCell>
                      <TableCell>{row.customerId[0].name}</TableCell> */}
                    </TableRow>
                ))}
              </TableBody>
            </Table>
          </DialogContent>
        </form>
      </Dialog>
  )
}

export default CustomerDetails
