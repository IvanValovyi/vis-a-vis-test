function validEmail(t){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)}function validPhoneNumber(t){return/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(t)}export default function form(){document.querySelector("#form")}