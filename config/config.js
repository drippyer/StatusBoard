/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 12,
	units: "imperial",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar_monthly",
			position: "top_left"
		},
		{
			module: "MMM-MyCalendar",
			header: "Upcoming Events",
			position: "top_left",
			config: {
				colored: true,
				fade: false,
				dateFormat: "dddd, MMMM D",
				hideOngoing: false,
				showLocation: false,
				useRelativeDates: true,
				maximumEntries: 12,
				calendars: [
					{
						symbol: "calendar",
						url: "webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics",
						color: "#f96868"
					},
					{
						url: "CALENDAR_2_URL",
						color: "#a1fc8a"
					},
					{
						url: "CALENDAR_3_URL",
						color: "#bed4f7"
					}
				]
			}
		},
		{
			module: 'MMM-MyWeather',
			position: 'top_right',
			config: {
				apikey: "WUNDERGROUND API KEY", // private; don't share!
				pws: "pws:XXXXXXXNN",
				colorIcon: true,
				fadePoint: ".75",
				fcdaycount: "3",
				fcdaystart: "1",
				hourly: "1",
				hourlyinterval: 3,
				hourlycount: 4,
				alerttime: 10000,
				alerttruncatestring: "english:",
				roundTmpDecs: 1,
				windunits: "mph",
				UseCardinals: 1,
				layout: "vertical",
				iconset: "flat_colourful",
				sysstat: 0
			}
		},
		{
			module: "MMM-MyScoreboard",
			position: "top_right",
			classes: "default everyone",
			header: "Scoreboard",
			config: {
			 	showLeagueSeparators: true,
			 	colored: true,
				rolloverHours: 5,
			 	viewStyle: "mediumLogos",
			 	sports: [
			 	{
			 		league: "NHL"
			 	},
			 	{
			 		league: "MLB"
			 	},
			 	{
			 		league: "NFL"
			 	},
			 	{
			 		league: "NCAAM_MM",
			 		label: "March Madness"
			 	}
			 	]
			 }
		},
		{
			module: "MMM-NowPlayingOnSpotify",
			position: "bottom_left",
			config: {
				clientID: "CLIENTID",
				clientSecret: "CLIENTSECRET",
				accessToken: "ACCESSTOKEN",
				refreshToken: "REFRESHTOKEN",
				updatesEvery: 15
			}
		},
		{
			module: "MMM-SystemStats",
			position: "bottom_center", // This can be any of the regions.
			classes: "small", // Add your own styling. Optional.
			config: {
				updateInterval: 10000,
				animationSpeed: 0,
				align: "right", // align labels
				//header: 'System Stats', // This is optional
			},
		},
		{
			module: "MMM-lyft",
			position: "bottom_right",
			config: {
				ride_types: ["Lyft","Lyft XL"],
				lat: XX.XXXXX,  // use your exact pickup loaction
				lng: YY.YYYYY, // use your exact pickup loaction
				clientId: "CLIENTID",
				clientSecret: "CLIENTSECRET"
			}
		},
		{
			module: "MMM-uber",
			position: "bottom_right",
			config: {
				ride_types: ["UberX","UberXL"],
				lat: XX.XXXXX,  // use your exact pickup loaction
				lng: YY.YYYYY, // use your exact pickup loaction
				uberServerToken: "TOKEN",
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				updateInterval: 45*1000, // 45 seconds
				ignoreOldItems: true,
				wrapTitle: false,
				feeds: [
					{
						title: "CNN",
						url: "http://rss.cnn.com/rss/cnn_topstories.rss"
					},
					{
						title: "/r/Science",
						url: "https://www.reddit.com/r/science/.rss"
					},
					{
						title: "r/Technology",
						url:"https://www.reddit.com/r/technology/.rss"
					},
					{
						title: "r/News",
						url: "https://www.reddit.com/r/news/.rss"
					},
					{
						title: "WIRED Science",
						url: "https://www.wired.com/feed/category/science/latest/rss"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
		{
		  module: "MMM-Wallpaper",
		  position: "fullscreen_below",
		  config: { // See "Configuration options" for more information.
		  	source: "/r/EarthPorn",
		  	slideInterval: 10*60*1000, // Change slides every minute
		  	orientation: "vertical"
		  }
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
