import { FormTextInput } from './FormTextInput';

export function SubscriptionForm() {

  return (
    <>
      <h1>Get magazine subscription for free</h1>
      <FormTextInput
        label="First Name"
        name="firstName"
        type="text"
        placeholder="Jane"
      />

      <FormTextInput
        label="Last Name"
        name="lastName"
        type="text"
        placeholder="Doe"
      />

      <FormTextInput
        label="Email Address"
        name="email"
        type="email"
        placeholder="jane@formik.com"
      />
      <FormTextInput
        label="Password"
        name="password"
        type="password"
        placeholder="Your password"
      />
    </>
  )
}
