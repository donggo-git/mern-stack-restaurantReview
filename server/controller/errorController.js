const handleCastErrorDB = (err) => {
    const message = `Invalid ${err.path}: ${err.value}`
    return;
}

