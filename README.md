Be a virtual European. Proxy all your third-party web trackers through Europe.

This is a second level of defense for when a site won't work for whatever reason without a third-party resource.

Install one of these browser add-ons first.

 * [Disconnect](https://addons.mozilla.org/en-US/firefox/addon/disconnect/)

 * [Privacy Badger](https://www.eff.org/privacybadger)

Then if you have to turn your primary privacy tool off, you're still making connections to the creepy surveillance sites through Europe where they have Internet privacy regulations and stuff.


## How to use it

 1. Get a VPS in Europe.

 2. Check the IP address and make sure that you can log in as root.

 3. Run "make". `HOST` should be the IP address of your VPS from step 2.

```sh
make HOST=192.168.42.42
```

Remember the URL from this step.  (It ends in `wpad.dat`


 4. Go to your Firefox preferences, select "Advanced" on the left, "Network" on the top.

 5. Click the "Settings" button to the right of "Connection".

 6. Select "Automatic proxy configuration URL" and fill in the URL from step 3.

 7. Enjoy your virtual European web tracking experience.


## protip: Act more European in order to avoid raising suspicion

 * [Listen to Kraftwerk](https://www.youtube.com/watch?v=XMVokT5e0zs).

 * Eat smaller amounts of higher-quality cheese.

