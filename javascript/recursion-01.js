const countdown = (number) => {
    if (number < 0) return;
    console.log(number);
    return countdown(number -1);
}

countdown(15);
