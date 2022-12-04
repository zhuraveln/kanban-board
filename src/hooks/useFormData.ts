import React from 'react'

/** Custom Hook for collection all values in form fields  */
export const useFormData = (initialValues: any) => {
  const [formValues, setFormValues] = React.useState(initialValues)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues((formValues: any) => ({
      ...formValues,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (onSubmit: any) => {
    return (e: any) => {
      e.preventDefault()
      onSubmit(formValues, e)
    }
  }

  return [formValues, handleChange, handleSubmit]
}
