import React from 'react'

export const useFormData = () => {
  const [state, setState] = React.useState({} as any)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((state: any) => ({ ...state, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log(state)
  }

  return [state, handleChange, handleSubmit]
}
