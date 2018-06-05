### webpack-serve 1.0.2 multiple entry point issue example
React hot module reload not working after `webpack-serve` updated from `0.3.2` to `1.0.2` version if there are multiple entry points in project

How to reproduce:
1) install dependencies with `npm install` then launch with `npm run dev`, open site in browser
2) open `src/client/layouts/App/App.jsx`
3) change some text in output
4) go back to browser and see that HMR works fine
5) open `tools/webpack/configs/webpack.config.babel.js` and uncomment `vendors` entry
6) relaunch npm script, open page in browser
7) change text in `App.jsx` once again
8) go back to browser and you'll notice that page content won't be updated anymore
9) now open `package.json`, find `webpack-serve` dependency and change its value from `^1.0.2` to `^0.3.2`
10) update `webpack-serve` package to older version with `npm install` then relaunch npm script again
11) now HMR works even with multiple entry points
