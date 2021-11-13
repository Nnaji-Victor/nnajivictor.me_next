type ThrottleType = (T:any) => void;
 
const throttle = (func: (args: any) => void, wait: number = 200) : ThrottleType => {
    let timer: any = null;
    return (...args) => {
        if (timer === null) {
            timer = setTimeout(() => {
              func(args);
              timer = null;
            }, wait);
        }
    }
}

export default throttle;