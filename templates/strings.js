(function (FMS, _) {
    _.extend( FMS, {
        validationStrings: {
            update: '[% loc('Please enter a message') %]',
            title: '[% loc('Please enter a subject') %]',
            detail: '[% loc('Please enter some details') %]',
            name: {
                required: '[% loc('Please enter your name') %]',
                validName: '[% loc('Please enter your full name, councils need this information - if you do not wish your name to be shown on the site, untick the box below') %]'
            },
            category: '[% loc('Please choose a category') %]',
            rznvy: {
                required: '[% loc('Please enter your email') %]',
                email: '[% loc('Please enter a valid email') %]'
            },
            email: {
                required: '[% loc('Please enter your email') %]',
                email: '[% loc('Please enter a valid email') %]'
            },
            password: '[% loc('Please enter a password') %]'
        },
        strings: {
            login_error: '[% loc('There was a problem logging you in. Please try again later.') %]',
            logout_error: '[% loc('There was a problem logging you out. Please try again later.') %]',
            login_details_error: '[% loc('There was a problem logging you in. Please check your email and password') %]',
            password_problem: '[% loc('There was a problem with your email/password combination. If you have forgotten your password, or do not have one, you can set one by returning to the email screen and selecting the set password option.') %]',
            location_error: '[% loc('Location error') %]',
            location_problem: '[% loc('There was a problem looking up your location.') %]',
            multiple_locations: '[% loc('More than one location matched that name. Select one below or try entering street name and area, or a postcode.') %]',
            sync_error: '[% loc('An error was encountered when submitting your report: ') %]',
            unknown_sync_error: '[% loc('There was a problem submitting your report. Please try again later.') %]',
            report_send_error: '[% loc('There was a problem submitting your report. Please try again.') %]',
            missing_location: '[% loc('Please enter a location') %]',
            location_check_failed: '[% loc('There was a problem checking we cover this location. Please try again later.') %]',
            category_extra_check_error: '[% loc('There was a problem checking if we have all the details we need. Please try again later.') %]',
            locate_dismissed: '[% loc('Please search for a street name and area, or postcode.') %]',
            geolocation_failed: '[% loc('Could not determine your location, please search for a street name and area, or postcode instead.') %]',
            geolocation_denied: '[% loc('Could not access location services. Please check permissions.') %]',
            select_category: '[% loc('-- Pick a category --') %]',
            required: '[% loc('required') %]',
            invalid_email: '[% loc('Invalid email') %]',
            invalid_report: '[% loc('Invalid report') %]',
            photo_failed: '[% loc('There was a problem taking your photo.') %]',
            photo_loading: '[% loc('Uploading images may take some time, please be patient') %]',
            upload_aborted: '[% loc('There was a problem uploading your report.') %]',
            try_again: '[% loc('Try Again') %]',
            save_for_later: '[% loc('Save for Later') %]',
            no_connection: '[% loc('No network connection available for submitting your report. Please try again later.') %]',
            more_details: '[% loc('More details') %]'
        }
    });
})(FMS, _);
