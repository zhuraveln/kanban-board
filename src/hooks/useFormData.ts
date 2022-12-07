import React from 'react'

/** Custom Hook for collection all values in form fields  */
export const useFormData = (initialValues: any) => {
  const [values, setValues] = React.useState(initialValues)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((formValues: any) => ({
      ...formValues,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (onSubmit: (data: any) => void) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault()
      onSubmit(values)
    }
  }

  return [values, handleChange, handleSubmit]
}
