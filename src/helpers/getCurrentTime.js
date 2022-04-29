export const getCurrentTime = () => {
    return new Date().toLocaleTimeString().slice(0, 5);
}