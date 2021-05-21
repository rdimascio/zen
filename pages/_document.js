import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link rel="apple-touch-icon" sizes="76x76" href="/static/favicons/apple-touch-icon.png" />
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="/static/favicons/favicon-32x32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="/static/favicons/favicon-16x16.png"
					/>

					<link rel="manifest" href="/static/favicons/site.webmanifest" />
					<link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#5bbad5" />
					<meta name="msapplication-TileColor" content="#000000" />
					<meta name="theme-color" content="#000000" />

					<meta name="application-name" content="PWA App" />
					<meta name="apple-mobile-web-app-capable" content="yes" />
					<meta name="apple-mobile-web-app-status-bar-style" content="default" />
					<meta name="apple-mobile-web-app-title" content="PWA App" />
					<meta name="description" content="Best PWA App in the world" />
					<meta name="format-detection" content="telephone=no" />
					<meta name="mobile-web-app-capable" content="yes" />
					{/* <meta name="msapplication-config" content="/static/icons/browserconfig.xml" /> */}
					<meta name="msapplication-tap-highlight" content="no" />

					{/* <link rel="apple-touch-icon" href="/static/icons/touch-icon-iphone.png" />
					<link rel="apple-touch-icon" sizes="152x152" href="/static/icons/touch-icon-ipad.png" />
					<link rel="apple-touch-icon" sizes="180x180" href="/static/icons/touch-icon-iphone-retina.png" />
					<link rel="apple-touch-icon" sizes="167x167" href="/static/icons/touch-icon-ipad-retina.png" />
					<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" /> */}
							
					<meta name="twitter:card" content="" />
					<meta name="twitter:url" content="" />
					<meta name="twitter:title" content="PWA App" />
					<meta name="twitter:description" content="" />
					<meta name="twitter:image" content="" />
					<meta name="twitter:creator" content="" />
					<meta property="og:type" content="website" />
					<meta property="og:title" content="" />
					<meta property="og:description" content="" />
					<meta property="og:site_name" content="" />
					<meta property="og:url" content="" />
					<meta property="og:image" content="" />

					{/* apple splash screen images
					<link rel="apple-touch-startup-image" href="/static/images/apple_splash_2048.png" sizes="2048x2732" />
					<link rel="apple-touch-startup-image" href="/static/images/apple_splash_1668.png" sizes="1668x2224" />
					<link rel="apple-touch-startup-image" href="/static/images/apple_splash_1536.png" sizes="1536x2048" />
					<link rel="apple-touch-startup-image" href="/static/images/apple_splash_1125.png" sizes="1125x2436" />
					<link rel="apple-touch-startup-image" href="/static/images/apple_splash_1242.png" sizes="1242x2208" />
					<link rel="apple-touch-startup-image" href="/static/images/apple_splash_750.png" sizes="750x1334" />
					<link rel="apple-touch-startup-image" href="/static/images/apple_splash_640.png" sizes="640x1136" /> */}
					
					<link rel="alternate" type="application/rss+xml" href="/index.xml" />
					{/* <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
					<link
						rel="preload"
						as="style"
						href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
					/>
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
						media="print"
						onLoad="this.media='all'"
					/>
					<noscript>
						<link
							rel="stylesheet"
							href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
						/>
					</noscript> */}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	};
}

export default MyDocument;
