export const ProfileFormSubmit = (event) => {
    const { fullname, email, phone } = Object.fromEntries(new FormData(event.target));
    // this.detail.fullname = fullname;
    // this.detail.email = email;
    // this.detail.phone = phone
    console.log(fullname, email, phone)
}