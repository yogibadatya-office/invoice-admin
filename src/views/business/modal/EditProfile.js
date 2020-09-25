import React, { useEffect } from 'react'
import { AppBar, Button, Dialog, DialogContent, TextField, Toolbar, Typography } from '@material-ui/core'
import * as Actions from '../../../auth/store/actions'
import * as action from '../store/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../../@fuse/hooks'
import DialogActions from '@material-ui/core/DialogActions'
import { showMessage } from '../../../store/actions/fuse'
import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'
import Icon from '@material-ui/core/Icon'
import _ from 'lodash'
import { orange } from '@material-ui/core/colors'
import IntlTelInput from 'react-intl-tel-input'
import 'react-intl-tel-input/dist/main.css';
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import $ from 'jquery';


const useStyles = makeStyles(theme => ({
  productImageFeaturedStar: {
    position: 'absolute',
    top: 0,
    right: 0,
    color: orange[400],
    opacity: 0
  },
  productImageUpload: {
    transitionProperty: 'box-shadow',
    // transitionDuration: theme.transitions.duration.short,
    // transitionTimingFunction: theme.transitions.easing.easeInOut,
  },
  productImageItem: {
    transitionProperty: 'box-shadow',
    // transitionDuration: theme.transitions.duration.short,
    // transitionTimingFunction: theme.transitions.easing.easeInOut,
    '&:hover': {
      '& $productImageFeaturedStar': {
        opacity: .8
      }
    },
    '&.featured': {
      pointerEvents: 'none',
      // boxShadow: theme.shadows[3],
      '& $productImageFeaturedStar': {
        opacity: 1
      },
      '&:hover $productImageFeaturedStar': {
        opacity: 1
      }
    }
  }
}))


function EditProfileDialog(props) {

  const dispatch = useDispatch()
  const classes = useStyles()
  // const { form, handleChange, setForm, setInForm } = useForm({
  //   name: (props.userData) ? props.userData.name : '',
  //   email: (props.userData) ? props.userData.email : '',
  //   mobile_no:(props.userData) ? props.userData.mobile_no : '',
  //   profile_Pic:(props.userData) ? props.userData.profile_Pic : ''
  // })
  // console.log("props",(props.userData) ? props.userData.id : '');
  const creditSettingDialog = useSelector(({ auth }) => auth.user.editProfileDialog)
  const loginUserData = useSelector(({ auth }) => auth.user)

  // console.log("dialog data", creditSettingDialog);
  // (({auth}) => auth.editProfileDialog)
  // useEffect(() => {
  //     if (creditSettingDialog) {
  //         console.log("setIn form");
  //         setInForm('user_id', creditSettingDialog._id)
  //     }
  // }, [creditSettingDialog.props.open,setInForm])
  const { form, handleChange, setForm, setInForm } = useForm({
    name: loginUserData.name,
    email: loginUserData.email,
    mobile_no: loginUserData.mobile_no,
    profile_Pic:loginUserData.profile_Pic
  })

  function canBeSubmitted() {
    return (
      form.name.length > 0 && form.email.length > 0
    )
  }

  function closeComposeDialog() {
    dispatch(Actions.closeEditProfileDialog())
  }

  function handleSubmit(event) {
    event.preventDefault()
    // if (form.hardLimit >= form.softLimit ) {
    //     dispatch(showMessage({message: 'Hard limit should be less than soft limit'}))
    // } else {
      let data ={
        _id: creditSettingDialog.data.id,
        name: form.name,
        email: form.email,
        dial_code: form.dial_code,
        // mobile_no: form.mobile_no,
        mobile_no: "9874563210",
        // profile_Pic: form.profile_Pic,
      }
        dispatch(action.editProfile({
          _id: creditSettingDialog.data.id,
        name: form.name,
        email: form.email,
        dial_code: form.dial_code,
        // mobile_no: form.mobile_no,
        mobile_no: "9874563210",
        // profile_Pic: form.profile_Pic,
        })).then(res => {
            closeComposeDialog()
        })
    // }

  }
  const handleUploadChange = (e, field) => {
    const file = e.target.files[0]
    console.log("fileee",field);
    if (!file) {
      return
    }
    const reader = new FileReader()
    //  reader.onload = function(e) {
    //   $('#blah').attr('src', e.target.result);
    // }
    //   reader.onload = () => {

    //     $('#blah').attr('src',);
    //   // setForm(_.set({ ...form }, field, file))

    // }
    
    // reader.readAsDataURL(input.files[0]); // convert to base64 string
  // }
    reader.readAsBinaryString(file)

    reader.onload = () => {
      setForm(_.set({ ...form }, field, `data:${file.type};base64,${btoa(reader.result)}`))
      // setForm(_.set({ ...form }, field, file))

    }

    reader.onerror = function () {
      console.log('error on load image')
    }
    // $("#button-file-profile").change(function() {
    //   readURL(this);
    // });
    
  }

  return (

    <Dialog

      classes={{
        paper: 'm-24'
      }}
      {...creditSettingDialog.props}
      onClose={closeComposeDialog}
      fullWidth
      maxWidth="sm"
    >

      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Edit Profile</h5>
          <button type="button" onClick={closeComposeDialog} className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <form noValidate onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="recipient-name" className="col-form-label">Name:</label>
              <input type="text"
                required
                error={form.name === ''}
                name="name"
                onChange={handleChange}
                className="form-control" value={form.name }  />
            </div>
            <div className="form-group">
              <label htmlFor="recipient-name" className="col-form-label">Email:</label>
              <input type="text"
                required
                error={form.email === ''}
                name="email"
                onChange={handleChange}
                className="form-control" value={form.email} />
            </div>
            <div className=" mt-10">
            <label
                  htmlFor="button-file-profile"
                  className="mr-3"
                  // className={
                  //   clsx(
                  //     classes.productImageUpload,
                  //     'rounded-4 mr-2 '
                  //   )}
                >Profile Pic :
                  {/* <span className="text-center">Profile Image<Icon fontSize="large"
                    color="action">cloud_upload</Icon></span> */}
                </label>

              <input
                accept="image/*"
                className="hidden"
                id="button-file-profile"
                type="file"
                onChange={(e) => handleUploadChange(e, 'profile_Pic')}
              />
              <div className="flex justify-center sm:justify-start flex-wrap">
               
                {form.profile_Pic &&
                  <div
                    className={
                      clsx(
                        classes.productImageItem,
                        'flex items-center justify-center relative w-128 h-128 ' +
                        'rounded-4 mr-16 mb-16 overflow-hidden cursor-pointer shadow-1 hover:shadow-5',
                        false)
                    }
                  >
                    <img className="max-w-none w-25 h-25 flex" src={form.profile_Pic}
                      alt="profilePic" />
                      {/* <img id="blah" src="#" alt="your image" /> */}
                  </div>
                }
              </div>
            </div>
            <div className = "form-group">
            <label htmlFor="contactNumber" className="col-form-label mr-8">Contact Number:</label>
            <IntlTelInput
                      // css={['intl-tel-input', 'form-control']} 
                      containerClassName="intl-tel-input mt-3"
                      useMobileFullscreenDropdown
                      required
                      // onChange={handleChange}/

                      // style={{width: '100%'}}
                      inputClassName="mt-8 mr-8"
                      preferredCountries={['in', 'gb']}
                      autoComplete="off"
                      allowDropdown="true"
                      id='mobile_no'
                      name='mobile_no'
                      value={form.mobile_no}
                      onPhoneNumberChange={(status, value, countryData, number, id) => {
                        setInForm(`dial_code`, '+' + countryData.dialCode)
                        setInForm(`mobile_no`, value)
                      }}
                      format
                      formatOnInit={false}
                      separateDialCode
                    />
                    </div>
          </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={closeComposeDialog} data-dismiss="modal">Close</button>
          <button type="button" onClick={handleSubmit} disabled={!canBeSubmitted()} className="btn btn-primary">Save </button>
        </div>
           <pre>
              {JSON.stringify(form, null, ' ')}
                </pre>
      </div>

      {/* <AppBar position="static" elevation={1}>
                <Toolbar className="flex w-full">
                    <Typography variant="subtitle1" color="inherit">
                        <b> EDIT PROFILE </b>
                    </Typography>
                </Toolbar>
            </AppBar> */}
      {/* <form noValidate onSubmit={handleSubmit} className="flex flex-col overflow-hidden">
                <DialogContent >
                    <div className="mb-8">
                        <TextField
                            required
                            error={form.hardLimit === ''}
                            
                            name="hardLimit"
                            onChange={handleChange}
                            label="Hard Limit"
                            type="number"
                            value={form.hardLimit}
                            variant="outlined"
                            fullWidth
                        />
                    </div>
                    <div className="mt-8">
                        <TextField
                            required
                            error={form.softLimit === ''}
                            name="softLimit"
                            
                            onChange={handleChange}
                            label="Soft Limit"
                            type="number"
                            value={form.softLimit}
                            variant="outlined"
                            fullWidth
                        />
                    </div>
 
                </DialogContent>

                <DialogActions>
                    <Button onClick={closeComposeDialog} color="primary">
                        Cancel
                    </Button>
                    <Button type="submit" color="primary" disabled={!canBeSubmitted()}>
                        Update Setting
                    </Button>
                </DialogActions>
            </form> */}
    </Dialog>

  )
}

export default EditProfileDialog
