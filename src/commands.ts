const commands: {
    [key: string]: {
        increaseVolume: string;
        decreaseVolume: string;
        increaseBright: string;
        decreaseBright: string;
        openUrl: (url: string) => string;
        copyData: (data: string) => string;
    };
} = {
    linux: {
        decreaseBright: "echo $(( $(cat /sys/class/backlight/*/brightness) - 20)) > /sys/class/backlight/*/brightness",
        increaseBright: "echo $(( $(cat /sys/class/backlight/*/brightness) + 20)) > /sys/class/backlight/*/brightness",
        increaseVolume: "amixer -D pulse sset Master 5%+",
        decreaseVolume: "amixer -D pulse sset Master 5%-",
        openUrl: (url: string) => `firefox ${url}`,
        copyData: (data: string) => `echo ${data} | xclip -selection clipboard`,
    },
};

export default commands;
