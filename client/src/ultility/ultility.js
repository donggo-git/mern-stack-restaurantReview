const displayPhoneNumber = (phoneNumber) => {
    const phoneNumberStr = String(phoneNumber)
    const first3Numbers = phoneNumberStr.slice(0, 3)
    const second3Numbers = phoneNumberStr.slice(3, 7)
    const endNumbers = phoneNumberStr.slice(7)
    return `(${first3Numbers}) ${second3Numbers}-${endNumbers}`
}

export { displayPhoneNumber }