export const isError = (value) => {
    if(value === 0) return false;
    const lastChar = value.toString()[value.toString().length - 1];
    const charBeforeLastChar = value.toString()[value.toString().length - 2];

    if(isNaN(Number(lastChar)) && isNaN(Number(charBeforeLastChar))) return true;
    return false;
}