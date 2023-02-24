import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Whats from '../../assets/whats.png'
import {
  ConteinerScheduling,
  Form,
  Label,
  Input,
  Button,
  Span,
  IconWpp
} from './styled'
import { useNavigate } from 'react-router-dom'

const schema = yup
  .object({
    name: yup
      .string()
      .required('O nome deve ser obrigatório!')
      .min(9, 'O campo deve conter nome e apelido'),
    phone: yup
      .string()
      .required('O número deve ser obrigatório!')
      .min(9, 'O Campo deve conter 9 números'),
    data: yup.string().required('O dia deve ser obrigatório!'),
    hour: yup.string().required('A hora deve ser obrigatória!')
  })
  .required()

function Scheduling() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onShubmit = event => {
    event ? navigate('/obrigado') : null
  }

  return (
    <ConteinerScheduling>
      <Form onSubmit={handleSubmit(onShubmit)}>
        <Label>
          Nome:
          <Input type="text" {...register('name', { required: true })} />
          <Span>{errors.name?.message}</Span>
        </Label>
        <Label>
          Telemóvel:
          <Input
            type="text"
            {...register('phone', {
              required: true
            })}
          />
          <Span>{errors.phone?.message}</Span>
        </Label>
        <Label>
          Escolha um dia:
          <Input type="date" {...register('data', { required: true })} />
          <Span>{errors.data?.message}</Span>
        </Label>
        <Label>
          Escolha um horário:
          <Input type="time" {...register('hour', { required: true })} />
          <Span>{errors.hour?.message}</Span>
        </Label>
        <Button type="submit">Agendar</Button>
      </Form>
      <IconWpp src={Whats}></IconWpp>
    </ConteinerScheduling>
  )
}

export default Scheduling
