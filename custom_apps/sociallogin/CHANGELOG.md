
## 2.4.7
- Do not fail first login if mailer not properly configured

## 2.4.6
- Fix noredir

## 2.4.5
- Allow local login if social_login_auto_redirect enabled

## 2.4.4
- Bump v2.4.4
- Fix converting JWT token

## 2.4.3
- Fix app register

## 2.4.2
- Fix NC18 deprecation

## 2.4.1
- Bump v2.4.1
- manually change autoload, add QQ and slack
- modify lang file to fit in different language

## 2.4.0
- Bump v2.4.0
- Change QQ button bg color
- Rename qq images to lowercase
- Change slack button bg color
- Merge pull request #143 from mai1015/qqProvider
- Merge branch 'master' into qqProvider
- Add slack provider to hybridauth copy
- Add Slack as preconfigured OAuth provider
- add qq provider
- Hash profile id if illegal symbols in it
- indicate that verifying site is optional

## 2.3.0
- Allow create users with disabled account

## 2.2.3
- Fix mysql exception on install

## 2.2.2
- Fix undefined index logout_url
- Merge pull request #128 from didnt1able/patch-1
- Update README.md
- Update README.md

## 2.2.1
- Bump v2.2.1
- Fix delete custom provider in NC 17
- Update README.md

## 2.2.0
- Disable notify admins setting
- Trim allowed host domains for google

## 2.1.5
- Fix undefined index for custom providers

## 2.1.4
- Fix undefined index 'defaultGroup' warning

## 2.1.3
- Fix undefined index 'style' warning

## 2.1.2
- preferred_username as one of display name claim for OIDC

## 2.1.1
- Fix nested groups claim
- Telegram login button before alternative logins form

## 2.1.0
- Allow nested groups claim

## 2.0.3
- Fix prune user groups if incorrect groups claim defined for provider
- Fix some app:check errors

## 2.0.2
- Bump v2.0.2
- Allow multiple domains for google login

## 2.0.1
- Fix for nextcloud 17

## 2.0.0
- Bump v2.0.0
- Updated screenshot
- Fix styles
- Allow prune all user groups if empty group claim return from provider
- Merge pull request #115 from ochorocho/master
- Add disconnect logins styles again
- Check empty groups fix
- Add translation for aria-label, remove useless translation in js
- Add aria-label
- Hide icons only on mobile
- Merge branch 'master' of https://github.com/zorn-v/nextcloud-social-login
- Optimize responsiveness
- Add guest.css styles on login page
- Use interface to query l10n service
- Update README.md
- Merge pull request #114 from josephdpurcell/feature/facebook-sso-docs
- Merge branch 'master' into feature/facebook-sso-docs
- Adjust Google SSO setup docs according to feedback
- Set correct redirect URL for Google SSO setup
- Add Twitter SSO setup instructions
- Fix slip text to the right for buttons without icons and styles fixes in personal settings page
- Add Facebook SSO setup instructions
- Add ru translation for "Log in with"
- Add german translation
- Rework/streamline button style on personal settings page
- Prevent "undefined index 'style'" warnings after update
- Move "Log in with" label to "sociallogin" app
- Add more predefined icons, fix dropdown settings after click on '+'
- Fix template label 'Add group mapping' in template, add button style dropdown
- Add more specified selector
- Add optimized icons
- Add streamlines icons and button design
- Add german translation
- Rework/streamline button style on personal settings page
- Prevent "undefined index 'style'" warnings after update
- Move "Log in with" label to "sociallogin" app
- Absolute url for google sso docs
- Ignore docs directory for dist
- Add Google SSO setup instructions
- Add installation instructions to README
- Add more predefined icons, fix dropdown settings after click on '+'
- Fix template label 'Add group mapping' in template, add button style dropdown
- Add more specified selector
- Add optimized icons
- Merge branch 'master' of https://github.com/ochorocho/nextcloud-social-login
- Add streamlines icons and button design

## 1.16.7
- Bump v1.16.7
- Add Brazilian Portuguese translation
- Add german translations, fix typo
- Add german translations, fix typo

## 1.16.6
- Fix undefined offset: 1
- Update README.md
- Update README.md
- Update README.md
- Update README.md

## 1.16.5
- Parse auth url params for oidc

## 1.16.4
- Do not prune not available user groups on login setting

## 1.16.3
- Restrict login for users without mapped groups setting
- Fix readme

## 1.16.2
- Bump v1.16.2
- Little refactoring
- Simplify logic
- Add possibility to autocreate groups and use mapping

## 1.16.1
- Groups and logout url for custom oauth2 provider
- Update hybridauth to 3.0.0

## 1.16.0
- Bump v1.16.0
- OIDC logout url support
- Notify admins on user create
- Skip migration if not needed
- NC_KEY_FILE as var in release script
- Release script fix
- Custom providers moved to top in admin settings page
- Fix getting comma separated values

## 1.15.1
- Add user to default group on login
- Drop global default group setting
- Providers default group migration
- Default group provider setting
- Add scope for group mapping css classes

## 1.15.0
- Bump v1.15.0
- Add prefix on group creation
- Fix typo
- Load existing group mapping in admin settings
- Save group mapping
- Remove group mapping handler
- Add group mapping button
- Added oidc groups claim admin setting
- Sync oidc provider groups
- Readme fix
- Fix typo
- Readme for custom oidc groups
- Get groups in custom oidc provider

## 1.14.5
- Fixed redirects to personal settings

## 1.14.4
- Moved personal settings to sociallogin section

## 1.14.3
- Clear session storage on domain mismatch error
- Removed tabs in auth method

## 1.14.2
- Bump v1.14.2
- Improved restiriction by domain on login
- check email domain during social login
- Personal settings via info.xml

## 1.14.1
- Bump v1.14.1
- Fix custom oauth2 and openid connect logins (#83)

## 1.14.0
- Bump v1.14.0
- Changed update_on_login config name
- "Update user data every login" ru translation
- Endpoints as array in custom providers
- Update hybridauth to 3.0.0-rc.10
- Only update when boolean is set
- Add checkbox for updating the user
- Update data on login
- Removed unused method
- Update README.md
- Update README.md

## 1.13.0
- Built-in amazon oauth provider

## 1.12.0
- Allow connect telegram login to existing account
- Set display name as identifier if empty on account creation
- Allow create account and login via telegram
- Telegram login button on login page
- Admin settings for telegram login

## 1.11.4
- Bump 1.11.4
- Decreased input width in settings page
- Create zh_CN.json
- Create zh_CN.js
- Updated hybridauth to rc.9

## 1.11.3
- Changed google scope

## 1.11.2
- Changed nextcloud max-version to 15

## 1.11.1
- Do not pass empty auth params

## 1.11.0
- Bump v.1.11.0
- Allow login only from specified domain for google provider
- Changed confirm delete provider text
- Provider icons in admin settings page
- Another workaround for custom oauth2
- add german translation
- Added missed comma in fr translation

## 1.10.1
- Fixed removing last custom provider
- Update zh_TW.json
- Update fr.json
- Update README.md

## 1.10.0
- Some tweaks for prevent_create_email_exists
- Added admin setting for enabling/disabling preventing creating account if email exists
- prevent creating account if email exists

## 1.9.5
- Fix social_login_auto_redirect for cli

## 1.9.4
- Merge branch 'master' of github.com:zorn-v/nextcloud-social-login
- Fixed custom oauth workaround
- Update README.md

## 1.9.3
- Bump version
- Merge branch 'master' of github.com:zorn-v/nextcloud-social-login
- Workaround for custom oauth id

## 1.9.2
- Bump v1.9.2
- Update zh_TW.json
- Update zh_TW.js
- Update zh_TW.json

## 1.9.1
- Check that custom providers is array before save admin settings
- Refactored render personal settings

## 1.9.0
- Some refactoring
- Fixes for custom oauth2
- Merge pull request #37 from portrino/custom-oauth2-provider
- Renamed query param redirect_url to login_redirect_url
- Use nexcloud session for hybridauth storage
- Added `@UseSession` annotations
- Redirect to redirect_url if provided
- [FEATURE] adds the possibility to use a custom oauth2 provider
- Merge branch 'master' of github.com:zorn-v/nextcloud-social-login
- Try to implement client login flow

## 1.8.1
- Use md5 of profileId if uid longer 64 chars
- Fixed notices if user_info_url provided

## 1.8.0
- Implemented user info endpoint
- Fixed typos
- Make all texts in admin settings page translatable
- Fields in settings template for oidc user info endpoint

## 1.7.1
- Fixed exception after creating user

## 1.7.0
- Minor fix in release script
- Set last password confirm on login
- Save personal settings
- Fixed chinese translation
- Disable password confirmation for users created via social login
- Personal option for disable password confirmation on settings change
- Check allow_login_connect setting in login controller

## 1.6.5
- Updated version
- add traditional Chinese translation
- add traditional Chinese translation
- Hints about credentials in release script
- Checkout to master before release

## 1.6.4
- Generate CHANGELOG.md on release
- Updated app info
- Removed unnecessary queries in each request

## 1.6.3
- Fix facebook scope
- Refactored login controller

## 1.6.2
- Check for name of all providers for duplicate on save

## 1.6.1
- Alignment fix

## 1.6.0
- Icons for oauth providers

## 1.5.5
- Added Discord provider

## 1.5.4
- Fixed "undefined index: password" in error log

## 1.5.3
- Updated version
- Merge pull request #14 from thomas-lb/french-translation
- Merge pull request #13 from thomas-lb/issue-12
- Add French translation
- Replace title and name providers (fixes #12)

## 1.5.2
- Proper handling providers name and title
- Repair step for separate user configured providers internal name and title
- Universal release script

## 1.5.1
- updated version
- Removed already unnecessary hybridauth fixes
- Updated hybridauth to 3.0.0-rc.5
- Fixed unknown provider translation
- Check for oauth provider existence
- Improved release script

## 1.5.0
- social_login_auto_redirect in config.php
- Merge pull request #8 from sutoiku/master

## 1.4.1
- Clickable links for nexcloud app store description
- Merge remote-tracking branch 'upstream/master'
- Allow automatic redirection if only one alternative login

## 1.4.0
- Check providers titles before saving
- Some minor fixes
- Merge pull request #6 from sutoiku/master
- Remove authenticate override
- Merge remote-tracking branch 'upstream/master'
- Added github link in readme
- Merge remote-tracking branch 'upstream/master'
- Rename to OpenIdConnect

## 1.3.5
- Insert README.md in info.xml description on release
- Get profile from id_token attribute
- Change "oauth2" to "custom_oauth"
- Throw LoginException on empty identifier from provider
- Implement custom OAuth2 login
- Save oauth2 settings
- Add admin settings

## 1.3.4
- Check all saved providers settings before using

## 1.3.3
- Prevent log flood with invalid app config values
- Updated version
- Merge pull request #4 from JanGross/master
- Fix invalid argument if no OpenID providers present

## 1.3.1
- Fixed database.xml

## 1.3.0
- Remove connected social logins on user delete
- Posibility to disconnect connected logins
- Connect social login to account
- List of avail providers on personal settings page
- Render personal settings page
- Allow login connect setting
- DAO for connect logins
- Create table for connect logins
- Translated login exceptions
- Basic check for connect social login to exsisting account
- Disable auto create new users setting
- LoginException on unknown OpenID provider

## 1.2.4
- Fixed issues in admin settings
- Login without password
- Throw LoginException on login error

## 1.2.3
- Updated version
- Extended OpenID provider

## 1.2.2
- Updated version
- Generate forgotten uid

## 1.2.1
- Fix OpenID auth

## 1.2.0
- Try to login via generic OpenID provider
- Renamed login controller
- Adding openid providers
- Remove openid provider button
- Removed preconfigured open id providers

## 1.1.0
- Updated version
- PaypalOpenID support

## 1.0.2
- Default value for oauth providers setting

## 1.0.1
- Fix log error while no providers configured
- Script for make release
- Added max version

## 1.0.0
- Updated version
- Tip about redirect url
- Updated README
- Added twitter provider
- Added GitHub provider
- Listen for password change
- Set email address for new user
- Added screenshot to info.xml
- Added screenshot
- Adding new user to default group
- Set avatar for new user
- Updated readme
- Update version
- Save password in user config
- Login with new created user
- Create new user
- Fixed session issue
- Custom session storage
- Changed oauth login url
- Try to auth
- Refactored oauth providers settings
- Settings for facebook and google
- New user group setting
- Init
