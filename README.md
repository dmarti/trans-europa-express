Be a virtual European.

This is a second level of defense for when a site won't work for whatever reason without a third-party tracker.  If a site gives you grief for running an ad blocker even when you're not, or if they didn't test properly with tracking blocked, then this is a way to let the trackers through, by way of Europe.

Install one of these browser add-ons first.

 * [Disconnect](https://addons.mozilla.org/en-US/firefox/addon/disconnect/)

 * [Privacy Badger](https://www.eff.org/privacybadger)

One of those tools will save you the most bandwidth and give you the best protection. Then if you are willing to turn your primary privacy tool off for some site, you're still making connections to creepy third-party surveillance sites through Europe where they have Internet privacy regulations and stuff.


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

 7. Enjoy your virtual European web experience.


## protip: Act more European to blend in

 * [Listen to Kraftwerk](https://www.youtube.com/watch?v=XMVokT5e0zs).

 * Eat smaller amounts of higher-quality cheese.

 * Support sensible web privacy policy.


## Future

This should really be a WebExtension.

