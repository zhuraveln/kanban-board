import React from 'react'

/** Custom Hook for collection all values from form fields  */
export function useFormData<Type>(initialValues: Type) {
  const [values, setValues] = React.useState(initialValues)

  const handleChange = (e: any) => {
    setValues((formValues: typeof initialValues) => ({
      ...formValues,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (onSubmit: (data: any) => void) => {
    return (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      onSubmit(values)
      setValues(initialValues)
    }
  }

  return { values, handleChange, handleSubmit }
}
