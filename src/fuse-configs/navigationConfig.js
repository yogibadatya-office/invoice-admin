import authRoles from '../auth/authRoles'

const navigationConfig = [
  {
    'id': 'applications',
    'title': 'Applications',
    'type': 'group',
    'icon': 'apps',
    'children': [
      {
        'id': 'app-dashboard',
        'title': 'Dashboard',
        'type': 'item',
        'icon': 'dashboard',
        'url': '/dashboard',
        'auth': authRoles.admin,
      },
      {
        'id': 'app-configuration',
        'title': 'App Configuration',
        'type': 'item',
        'icon': 'settings_applications',
        'url': '/apps/app-configuration/new'
      },
      {
        'id': 'app-versions',
        'title': 'App Versions',
        'type': 'collapse',
        'icon': 'settings',
        'url': '/app-versions',
        'children': [
          {
            'id': 'app-versions-Driver-IOS',
            'title': 'Driver IOS',
            'type': 'item',
            'url': '/apps/app-versions/versions/driver-ios',
            'exact': true,
          },
          {
            'id': 'app-versions-Customer-IOS',
            'title': 'Customer IOS',
            'type': 'item',
            'url': '/apps/app-versions/versions/customer-ios',
            'exact': true,
          },
          {
            'id': 'app-versions-Driver-Android',
            'title': 'Driver Android',
            'type': 'item',
            'url': '/apps/app-versions/versions/driver-android',
            'exact': true,
          },
          {
            'id': 'app-versions-Customer-Android',
            'title': 'Customer Android',
            'type': 'item',
            'url': '/apps/app-versions/versions/customer-android',
            'exact': true,
          }]
      },
      {
        'id': 'app-text-setting',
        'title': 'App Text Setting',
        'type': 'collapse',
        'icon': 'settings_overscan',
        'url': '/app-text-setting',
        'children': [
          {
            'id': 'app-text-setting-language',
            'title': 'Language',
            'type': 'item',
            'url': '/apps/text-settings/languages',
            'exact': true,
          },
          {
            'id': 'app-text-setting-support-text',
            'title': 'Support Text',
            'type': 'collapse',
            'url': '/apps/team/teams/new',
            'children': [
              {
                'id': 'app-text-setting-support-text-customer',
                'title': 'Customer',
                'type': 'item',
                'url': '/apps/text-settings/support-text/customer',
                'exact': true,
              },
              {
                'id': 'app-text-setting-support-text-driver',
                'title': 'Driver',
                'type': 'item',
                'url': '/apps/text-settings/support-text/driver',
                'exact': true,
              }]
          },
          {
            'id': 'app-help-text',
            'title': 'Help Text',
            'type': 'collapse',
            'url': '/apps/team/teams/new',
            'children': [
              {
                'id': 'app-help-text-customer',
                'title': 'Customer',
                'type': 'collapse',
                'url': '/apps/text-settings/helpTextCustomers',
                'children': [
                  {
                    'id': 'app-help-text-customer-cancelled',
                    'title': 'Cancelled',
                    'type': 'item',
                    'url': '/apps/text-settings/help-text/customerCancelled',
                    'exact': true,

                  },
                  {
                    'id': 'app-help-text-customer-completed',
                    'title': 'Completed',
                    'type': 'item',
                    'url': '/apps/text-settings/help-text/customerCompleted',
                    'exact': true
                  }
                ]
              },
              {
                'id': 'app-help-text-driver',
                'title': 'Driver',
                'type': 'collapse',
                'url': '/apps/team/teams',
                'children': [
                  {
                    'id': 'app-help-text-driver-cancelled',
                    'title': 'Cancelled',
                    'type': 'item',
                    'url': '/apps/text-settings/help-text/driverCancelled',
                    'exact': true,

                  },
                  {
                    'id': 'app-help-text-driver-completed',
                    'title': 'Completed',
                    'type': 'item',
                    'url': '/apps/text-settings/help-text/driverCompleted',
                    'exact': true
                  }
                ]
              }]
          },
          {
            'id': 'app-cancellation-reasons',
            'title': 'Cancellation Reasons',
            'type': 'collapse',
            'url': '/apps/team/teams/new',
            'exact': true,
            'children': [
              {
                'id': 'app-cancellation-reasons-ride',
                'title': 'Ride',
                'type': 'collapse',
                'url': '/apps/text-settings/cancellations/ride/Customer',
                'exact': true,
                'children': [
                  {
                    'id': 'app-cancellation-reasons-ride-customer',
                    'title': 'Customer',
                    'type': 'item',
                    'url': '/apps/text-settings/cancellations/ride/Customers',
                    'exact': true,

                  },
                  {
                    'id': 'app-cancellation-reasons-ride-driver',
                    'title': 'Driver',
                    'type': 'item',
                    'url': '/apps/text-settings/cancellations/ride/Drivers',
                    'exact': true
                  },
                  {
                    'id': 'app-cancellation-reasons-ride-dispatchers',
                    'title': 'Dispatcher',
                    'type': 'item',
                    'url': '/apps/text-settings/cancellations/ride/Dispatchers',
                    'exact': true
                  }
                ]
              }]
          }
        ]
      },
      {
        'id': 'app-cities',
        'title': 'Cities',
        'type': 'item',
        'icon': 'location_city',
        'url': '/apps/m-city/cities',
      },
      {
        'id': 'app-zones',
        'title': 'Zones',
        'type': 'collapse',
        'icon': 'device_hub',
        'url': '/app-zones',
        'children': [
          {
            'id': 'app-zones-operation',
            'title': 'Operation',
            'type': 'item',
            'url': '/apps/zones/operations',
            'exact': true,

          },
          {
            'id': 'app-zones-area',
            'title': 'Area',
            'type': 'item',
            'url': '/apps/zones/areas',
            'exact': true
          }
          //{
          //  'id': 'app-zones-surge',
          //  'title': 'Surge',
          //  'type': 'item',
          //  'url': '/apps/team/teams',
          //  'exact': true
          //}
        ]
      },
      {
        'id': 'app-vehicles',
        'title': 'Vehicles',
        'type': 'collapse',
        'icon': 'directions_car',
        'url': '/apps/vehicle',
        'children': [
          {
            'id': 'app-vehicles-vehicle-types',
            'title': 'Vehicle Types',
            'type': 'item',
            'url': '/apps/vehicletypes',
            'exact': true,

          },
          {
            'id': 'app-vehicles-vehicles',
            'title': 'Vehicles',
            'type': 'collapse',
            'children': [
              {
                'id': 'app-vehicles-vehicles-new',
                'title': 'New',
                'type': 'item',
                'url': '/apps/vehicles/new'
              },
              {
                'id': 'app-vehicles-vehicles-approved',
                'title': 'Approved',
                'type': 'item',
                'url': '/apps/vehicles/approved-vehicles'
              },
              {
                'id': 'app-vehicles-vehicles-deactivated',
                'title': 'De-Activated',
                'type': 'item',
                'url': '/apps/vehicles/deactivated-vehicles'

              },
              {
                'id': 'app-vehicles-vehicles-loggedin',
                'title': 'LoggedIn',
                'type': 'item',
                'url': '/apps/vehicles/loggedin-vehicles'

              },
              {
                'id': 'app-vehicles-vehicles-deleted',
                'title': 'Deleted',
                'type': 'item',
                'url': '/apps/vehicles/deleted-vehicles'

              }
            ]
          }
        ]
      },
      {
        'id': 'app-institutes',
        'title': 'Institutes',
        'icon': 'school',
        'url': '/institutes',
        'type': 'collapse',
        'children': [
          {
            'id': 'app-institutes-pending',
            'title': 'Pending Approval',
            'type': 'item',
            'url': '/apps/institutes/pending-approval'
          },
          {
            'id': 'app-institutes-approved',
            'title': 'Approved',
            'type': 'item',
            'url': '/apps/institutes/approved'
          },
          {
            'id': 'app-institutes-rejected',
            'title': 'Rejected',
            'type': 'item',
            'url': '/apps/institutes/rejected'

          },
          {
            'id': 'app-institutes-deleted',
            'title': 'Deleted',
            'type': 'item',
            'url': '/apps/institutes/deleted'

          }]
      },
      {
        'id': 'app-drivers',
        'title': 'Drivers',
        'type': 'collapse',
        'icon': 'settings_input_component',
        'url': '/drivers',
        'children': [
          {
            'id': 'app-drivers-drivers-new',
            'title': 'New',
            'type': 'item',
            'url': '/apps/drivers/new'

          },
          {
            'id': 'app-drivers-drivers-approved',
            'title': 'Approved',
            'type': 'item',
            'url': '/apps/driver/drivers/approved'

          },
          {
            'id': 'app-drivers-drivers-rejected',
            'title': 'Rejected',
            'type': 'item',
            'url': '/apps/driver/drivers/rejected'

          },
          {
            'id': 'app-drivers-drivers-banned',
            'title': 'Banned',
            'type': 'item',
            'url': '/apps/driver/drivers/banned'

          },
          {
            'id': 'app-drivers-drivers-online',
            'title': 'Online',
            'type': 'item',
            'url': '/apps/driver/drivers/online'
          },
          {
            'id': 'app-drivers-drivers-offline',
            'title': 'Offline',
            'type': 'item',
            'url': '/apps/driver/drivers/offline'
          },
          {
            'id': 'app-drivers-drivers-logged-out',
            'title': 'Logged-out',
            'type': 'item',
            'url': '/apps/driver/drivers/logged-out'
          },
          {
            'id': 'app-drivers-drivers-on-trip',
            'title': 'On-trip',
            'type': 'item',
            'url': '/apps/driver/drivers/on-trip'
          }
        ]
      },
      {
        'id': 'app-birds-view',
        'title': 'Birds View',
        'type': 'item',
        'icon': 'map',
        'url': '/institutes',
      },
      {
        'id': 'app-customers',
        'title': 'Customers',
        'type': 'collapse',
        'icon': 'person',
        'children': [
          {
            'id': 'app-addCustomers',
            'title': 'Add Customer',
            'type': 'item',
            'url': '/apps/customers/addCustomer/new'
          },
          {
            'id': 'app-customers-active',
            'title': 'Active',
            'type': 'item',
            'url': '/apps/customers/active'
          },
          {
            'id': 'app-customers-inActive',
            'title': 'InActive',
            'type': 'item',
            'url': '/apps/customers/inActive'
          },
          {
            'id': 'app-customers-unverified',
            'title': 'Unverified',
            'type': 'item',
            'url': '/apps/customers/unverified'
          },
          {
            'id': 'app-customers-banned',
            'title': 'Banned',
            'type': 'item',
            'url': '/apps/customers/banned'
          }]
      },
      {
        'id': 'app-manage-access',
        'title': 'Manage Access',
        'type': 'collapse',
        'icon': 'person',
        'url': '/roles',
        'children': [
          {
            'id': 'app-manage-access-roles',
            'title': 'Roles',
            'type': 'item',
            'url': '/apps/roles/roles',
            'exact': true,

          },
          {
            'id': 'app-manage-access-users',
            'title': 'Users',
            'type': 'item',
            'url': '/apps/users/users',
            'exact': true
          }
        ]
      },
      {
        'id': 'app-logs',
        'title': 'Logs',
        'type': 'collapse',
        'icon': 'list',
        'url': '/logs',
        'children': [
          {
            'id': 'app-logs-Twilio',
            'title': 'Twilio',
            'type': 'item',
            'url': '/apps/logs/twilio',
            'exact': true,

          },
          {
            'id': 'app-logs-Mailgun',
            'title': 'Mailgun',
            'type': 'item',
            'url': '/apps/logs/mailgun',
            'exact': true
          }, {
            'id': 'app-logs-Verification',
            'title': 'Verification',
            'type': 'collapse',
            'url': '/apps/logs',
            'exact': true,
            'children': [
              {
                'id': 'app-logs-Verification-driver',
                'title': 'Driver',
                'type': 'item',
                'url': '/apps/logs/verify/driver',
                'exact': true,

              },
              {
                'id': 'app-logs-Verification-customer',
                'title': 'Customer',
                'type': 'item',
                'url': '/apps/logs/verify/customer',
                'exact': true,

              }]
          }
        ]
      },
      {
        'id': 'app-priorities',
        'title': 'Priorities',
        'type': 'collapse',
        'icon': 'settings',
        'url': '/apps/priorities/priorities',
        'children': [
          {
            'id': 'app-logs-Verification-driver',
            'title': 'Add Priorities',
            'type': 'item',
            'url': '/apps/priorities/priorities/new',
            'exact': true,

          },
          {
            'id': 'app-logs-Verification-customer',
            'title': 'Priorities',
            'type': 'item',
            'url': '/apps/priorities/priorities',
            'exact': true,

          }]
      },
      {
        'id': 'app-packages',
        'title': 'Packages',
        'type': 'item',
        'icon': 'chrome_reader_mode',
        'url': '/apps/packages/packages',
      },
    ]
  }
]

export default navigationConfig
