# How-To-Setup-Back-End

## Create-Project
  1. Go to https://console.firebase.google.com/
  2. Click Add Project and follow the prompt
 
## Hosting
### Get-CLI (Linux)
#####  Install the CLI in your Linux machine
	 $ curl -sL https://firebase.tools | bash
##### In the firebasae app
	Goto Build->Hosting, click **Get Started**
	Do not install npm, simply hit next.
	Here you will be able to set **Add Custom Domain**
#####  Login with the desired account (Web-Browser will be opened)
	firebase login
##### Begin hosting (Choose desired folder, app and  decide if app is a Single-Page-App)
	firebase init hosting
##### Host locally
	firebase server
##### Host Publicly
	firebase deploy
## Authentication (Sign-up/Log-in)
##### Find all methods
	Goto Build->Authentication
##### Choose decired
	In our case, the simplest would be google#
##### Add appropriate "Public-facing" name
	This name will be seen by user upon login
##### Add appropriate "supporting email"
	Usually same as the current account
#####  Save
	Click **Enable**
## DataBase
### SQL vs noSQL
