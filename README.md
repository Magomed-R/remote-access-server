# Remote Access Server

## Setting

If you use linux, run this commands in terminal:

```
sudo apt install xclip
sudo chmod 777 /sys/class/backlight/*/brightness
```

## Launch

1. Install all dependensies: `npm i` or `pnpm i`
2. Install typescript: `npm i -g typescript`
3. Build dist: `tsc`
4. Run with: `npm run start:prod` or `pnpm start:prod`


## Using
1. Install [mobile app](https://github.com/magomed-r/remote-access-client) on your phone
2. Run mobile app and input ip address in main input
3. Enjoy!